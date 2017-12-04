import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'

import Butter from 'buttercms';
const butter = Butter('f35cf36d70ea15e756caab13c7a48650fbd9e630');

const LoadingSpinner = () =>
<div className="spinner" >
  <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="square" cx="33" cy="33" r="30"></circle>
  </svg>
  <div>Loading posts...</div>
</div>

const SvgIcon = ({link}) => {
  return <object data={link} type="image/svg+xml"></object>

  return <object data="https://s.cdpn.io/3/kiwi.svg" type="image/svg+xml"></object>
  return <svg viewBox="0 0 50 50">
    <use width={50} height={50} xlinkHref="https://s.cdpn.io/3/kiwi.svg" />
  </svg>;
}

const getCategoryColor= (category) => {
  let color = ''
  if(category === 'Strategy') color = '#FFAB00'          // yellow
  else if(category === 'Innovation') color = '#E91E63'   // red
  else if(category === 'Development') color = '#00BFA5'  // green
  else throw console.log("ERROR, you need to enter the either Strategy, Innovation or Development as the blog category")
  return color
}

const BlogPost = ({post,i}) => {
  const catColor = getCategoryColor(post.categories[0].name)
  return (
    <div style={{borderLeft: `3px solid ${catColor}`}} className={i === 0? 'blog-post small': i%4 === 0? 'blog-post big': 'blog-post small'}>
      <div className='inner'>
        <SvgIcon link={post.featured_image}/>
        <h2>{post.title}</h2>
        <h3 style={{color:catColor}} >{post.categories[0].name}</h3>
        <h4>{post.summary}</h4>
      </div>
      <Link style={{background: catColor}} className='link' to='post'> </Link>
    </div>
  )

}

export default class Homepage extends Component {

  state = {
    content: null
  }

  componentWillMount() {
    butter.post.list({page: 1, page_size: 8}).then((response) => {
      this.setState({content:response.data})
    })
  }

  render () {
    const {content} = this.state
    // console.log("content",content)
    return [
      <div key='thinking' className='other'>
        <Nav/>
        <PageTitle heading='Thinking' subheading='Some thoughts, some ideas'/>
      </div>,
      <div key='content' className='content'>

        <br/><br/>

        {!!content? content.data.map((post, i) => <BlogPost key={i} post={post} i={i}/>): <LoadingSpinner/> }

        <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
