





const initialState = {
  selectedNav: '',
  posts: []
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'SELECT_NAV': return {
      ...state,
      selectedNav: action.payload
    }
    case 'LOAD_BLOG_POSTS': return {
      ...state,
      posts: action.replace? action.payload.data : state.posts.concat(action.payload.data)
    }
    default: return state
  }
}
