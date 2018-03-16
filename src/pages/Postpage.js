import React, {Component} from 'react'
import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import {BlogPost, LoadingSpinner, getCategoryColor} from './Thinking'
import {loadBlogPosts} from '../store/modules/actions'
import moment from 'moment'
import {connect} from 'react-redux'
import Butter from 'buttercms';

const butter = Butter('f8b958c5ab5d1021fbf40aa157a04448432d9895');

const SinglePost = ({singlePost}) =>
  <div className='single-post' >
    <h2>{singlePost.title}</h2>
    <h3> By {singlePost.author.first_name} {singlePost.author.last_name} - {moment(singlePost.created).format('Do MMMM YYYY')}</h3>
     <div className='inner' dangerouslySetInnerHTML={{__html: singlePost.body}}/>
  </div>

const Author = ({author}) =>
  <div className='author-postpage' >
    <div className='image'><img src={author.profile_image} alt="Profile Picture"/></div>
    <div className='text'>
      <h3> About {author.first_name} {author.last_name}</h3>
      <h4> {author.bio} </h4>
      <a href={author.linkedin_url} target='_blank'>LinkedIn</a>
    </div>
  </div>


const CatHeading = ({title, color}) =>
  <div style={{color}} className='category-heading'>{title}</div>


class Postpage extends Component {

  state = {
    singlePost: null
  }

  fetchSinglePost = (slug) => {
    butter.post.retrieve(slug).then((resp) => {
      this.setState({ singlePost: resp.data.data })
    })
  }

  fetchSimilarityPosts = () =>{
    butter.post.list({page: 1, page_size: 3}).then(response => {
      this.props.dispatch(loadBlogPosts(response.data, true))
    });
  }

  componentDidMount() {
    const {slug} = this.props.match.params
    this.fetchSinglePost(slug)
    if(!this.props.blogPosts.length) this.fetchSimilarityPosts()
  }

  componentWillReceiveProps(newProps){
    const {slug} = newProps.match.params
    if(slug !== this.props.match.params.slug) {
      this.fetchSinglePost(slug)
    }
  }

  render () {
    const {blogPosts} = this.props
    const {singlePost} = this.state
    let posts = null
    if(!!blogPosts && !!blogPosts) posts = blogPosts.filter((post, i) => i < 3)
    let catColor = null
    if(!!singlePost) catColor = getCategoryColor(singlePost.categories[0].name)
    return [
      <div key='thinking' style={{background: catColor}} className='other postpage'>
        <Nav/>
          {!!singlePost?<CatHeading title={singlePost.categories[0].name} color={catColor}/>: null}
      </div>,
      <div key='content' className='content postpage'>
        {
          !!singlePost?
          <span><SinglePost singlePost={singlePost}/><Author author={singlePost.author}/></span>
           : <LoadingSpinner/>
        }
        {!!posts? posts.map((post, i) => <BlogPost key={i} post={post} i={i + 1}/>): <LoadingSpinner/> }
      </div>,
      <Footer key='footer'/>
    ]
  }
}

export default connect(state => ({
  blogPosts: state.data.posts
}))(Postpage)
