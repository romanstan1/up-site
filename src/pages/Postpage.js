import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'

import {BlogPost, LoadingSpinner} from './Thinking'
import {loadBlogPosts} from '../store/modules/actions'
import moment from 'moment'
import {connect} from 'react-redux'
import Butter from 'buttercms';

const butter = Butter('f35cf36d70ea15e756caab13c7a48650fbd9e630');






const SinglePost = ({singlePost}) => {
  return (
    <div className='single-post' >
      <h2>{singlePost.title}</h2>
      <h3> By {singlePost.author.first_name} {singlePost.author.last_name} - {moment(singlePost.created).format('Do MMMM YYYY')}</h3>
       <div className='inner' dangerouslySetInnerHTML={{__html: singlePost.body}}/>
    </div>
  )
}
const Author = ({author}) => {
  return (
    <div className='author-postpage' >
      <div className='image'><img src={author.profile_image} alt="Profile Picture"/></div>
      <div className='text'>
        <h3> About {author.first_name} {author.last_name}</h3>
        <h4> {author.bio} </h4>
        <a href={author.linkedin_url}>LinkedIn</a>
      </div>
    </div>
  )
}




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
      this.props.dispatch(loadBlogPosts(response.data))
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
    console.log("singlePost",singlePost)
    if(!!blogPosts && !!blogPosts) posts = blogPosts.filter((post, i) => i < 3)
    // console.log("moment",moment().format('Do MMMM YYYY'))
    return [
      <div key='thinking' className='other postpage'>
        <Nav/>
      </div>,
      <div key='content' className='content'>
        {
          !!singlePost?  <span><SinglePost singlePost={singlePost}/> <Author author={singlePost.author}/></span> : <LoadingSpinner/>
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
