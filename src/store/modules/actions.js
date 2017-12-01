
export const selectNav = (selected) => {
  console.log("action selected",selected)
  return dispatch => dispatch({
    type: 'SELECT_NAV',
    payload: selected
  })
}
