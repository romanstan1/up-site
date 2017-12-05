
export const selectNav = (selected) => {
  return dispatch => dispatch({
    type: 'SELECT_NAV',
    payload: selected
  })
}

export const loadBlogPosts = (posts) => {
  return dispatch => dispatch({
    type: 'LOAD_BLOG_POSTS',
    payload: posts
  })
}
