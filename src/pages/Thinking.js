import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'

import {loadBlogPosts} from '../store/modules/actions'

import {connect} from 'react-redux'
import Butter from 'buttercms';

const butter = Butter('f35cf36d70ea15e756caab13c7a48650fbd9e630');

export const LoadingSpinner = () =>
<div className="spinner" >
  <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="square" cx="33" cy="33" r="30"></circle>
  </svg>
  <div>Loading posts...</div>
</div>

const SvgIcon = ({link}) => {
  return <object data={link} type="image/svg+xml"></object>
}

const getCategoryColor= (category) => {
  let color = ''
  if(category === 'Strategy') color = '#FFAB00'           // yellow
  else if(category === 'Innovation') color = '#E91E63'    // red
  else if(category === 'Development') color = '#00BFA5'   // green
  else throw console.log("ERROR, you need to enter the either Strategy, Innovation or Development as the blog category")
  return color
}

export const BlogPost = ({post,i}) => {
  const catColor = getCategoryColor(post.categories[0].name)
  return (
    <div style={{borderLeft: `3px solid ${catColor}`}} className={i%4 === 0? 'blog-post big': 'blog-post small'}>
      <div className='inner'>
        <SvgIcon link={post.featured_image}/>
        <h2>{post.title}</h2>
        <h3 style={{color:catColor}} >{post.categories[0].name}</h3>
        <h4>{post.summary.length > 120? post.summary.substring(0,120).concat('...') : post.summary }</h4>
      </div>
      <Link to={`/thinking/${post.slug}`} style={{background: catColor}} className='link'> </Link>
    </div>
  )
}

const FilterButton = ({filterType, state, handleClick}) => {
  const className = filterType === state? 'active' : ''
  return <div className={className} data-value={filterType} onClick={handleClick}>{filterType}</div>
}



class Thinking extends Component {

  state = {
    filter: 'All',
    page: 1
  }

  fetchPosts = (page) =>{
    butter.post.list({page: page, page_size: 8}).then(response => {
      console.log("response",response)
      this.setState({page: response.data.meta.next_page})
      this.props.dispatch(loadBlogPosts(response.data))
    });
  }

  componentWillMount() {
    this.fetchPosts(1)
  }

  selectFilter = (e) => {
    const selected = e.target.dataset.value
    if(selected !== this.state.filter) this.setState({filter: selected })
    else this.setState({filter: 'All' })
  }

  loadMore = () => {
    // const nextPage = this.state.page + 1
    this.fetchPosts(this.state.page)
  }


  render () {
    const {filter, page} = this.state
    const {blogPosts} = this.props
    let posts = null
    if(!!blogPosts && !!blogPosts) posts = blogPosts
    if(!!posts && filter !== 'All') posts = blogPosts.filter(post => post.categories[0].name === filter)
    return [
      <div key='thinking' className='other'>
        <Nav/>
        <PageTitle heading='Thinking' subheading='Some thoughts, some ideas'/>
      </div>,
      <div key='filter-buttons' className='filter-button'>
        {['Strategy','Development','Innovation'].map((filterType, i) =>
          <FilterButton key={i} state={filter} handleClick={this.selectFilter} filterType={filterType}/>
        )}
      </div>,
      <div key='content' className='content'>
        {!!posts? posts.map((post, i) => <BlogPost key={i} post={post} i={i + 1}/>): <LoadingSpinner/> }
      </div>,
      <div key='load-more' className='filter-button load-more'>
        {!!posts && !!page? <div onClick={this.loadMore}> Load More</div> : null}
      </div>,
      <Footer key='footer'/>
    ]
  }
}

export default connect(state => ({
  blogPosts: state.data.posts
}))(Thinking)
