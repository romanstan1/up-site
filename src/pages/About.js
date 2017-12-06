import React, {Component} from 'react'
import {connect} from 'react-redux'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'
import {init,stopAnimation} from '../background/background.js'
import {selectNav} from '../store/modules/actions'
import { Carousel } from 'react-responsive-carousel';
import {BlogPost, LoadingSpinner, getCategoryColor} from './Thinking'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import {loadBlogPosts} from '../store/modules/actions'
import StrategyIcon from '../assets/icons-js/strategy'
import MarketResIcon from '../assets/icons-js/market_research'
import Butter from 'buttercms';

const butter = Butter('f35cf36d70ea15e756caab13c7a48650fbd9e630');

const slideContent =  [
  {
    text: '"Working with Unipro was a terrific experience. It was high fives and smiles all round."',
    by: 'Patt Mowell'
  },
  {
    text: '"I only came in for a hair cut, but I ended up buying a website for £2 million."',
    by: 'Matty P Dogg'
  },
  {
    text: `"Who says you can't provide digital solutions whilst drunk."`,
    by: 'The Big Poweller'
  }
]

const logoUrls = (ctx => {
  const keys = ctx.keys();
  return keys.map(ctx)
  })(require.context('../assets/partners', true, /.*/));

const svgIcons = (ctx => {
  const keys = ctx.keys();
  return keys.map(ctx)
})(require.context('../assets/icons', true, /.*/));


const SlideShow = ({content}) =>
  <div className='slideshow'>
    <div className='text'>{content.text}</div>
    <div className='by'>{content.by}</div>
  </div>

const Service = ({children}) =>
  <div className='service'>{children}</div>

class Background extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    return <canvas className="scene scene--full" id="scene"></canvas>
  }
}

class About extends Component {
  componentDidMount() {
    init()
    if(this.props.data.selectedNav === ''){
      this.props.dispatch(selectNav('about'))
    }
    if(!this.props.blogPosts.length) this.fetchSimilarityPosts()
  }
  componentWillUnmount() {
    stopAnimation()
  }

  fetchSimilarityPosts = () =>{
    butter.post.list({page: 1, page_size: 3}).then(response => {
      this.props.dispatch(loadBlogPosts(response.data, true))
    });
  }

  render () {
    const {blogPosts} = this.props
    let posts = null
    if(!!blogPosts && !!blogPosts) posts = blogPosts.filter((post, i) => i < 3)
    return [
      <div key='heading' className='about'>
        <Nav/>
        <Background />,
        <PageTitle heading='Digital Growth Agency' subheading='We deliver digital solutions that help our clients increase their business agility'/>
      </div>,
      <div key='about-content' className='about-content'>
        <div className='headings'>
          <p>Independant. Global. Two decades of digital solutions.</p>
          <p>These guys like us.</p>
        </div>
        <div className='partners'>
          {logoUrls.map((logo, i) => <div key={i}><img src={logo} alt="partner-logo"/></div>)}
        </div>
        <div className='slideshow-wrapper'>
          <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} emulateTouch={true} transitionTime={600} interval={5000} stopOnHover={false} showArrows={false}>
            {slideContent.map((content,i) => <SlideShow key={i} content={content}/>)}
          </Carousel>
        </div>
        <div className='about-services'>
          <h2>Services</h2>
          <Service>
            <MarketResIcon/><h2>Digital Development</h2>
          </Service>
          <Service>
            <StrategyIcon/><h2>Digital Strategy</h2>
          </Service>
        </div>
        <div className='three-posts'>{!!posts? posts.map((post, i) => <BlogPost key={i} post={post} i={i + 1}/>): <LoadingSpinner/> }</div>
      </div>,
      <Footer key='footer'/>,
    ]
  }
}

export default connect(state => ({
  data: state.data,
  blogPosts: state.data.posts
}))(About)
