import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export const PageTitle = ({children}) =>
  <ReactCSSTransitionGroup
    transitionName="title"
    transitionAppear={true}
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}>
    <h2> {children} </h2>
  </ReactCSSTransitionGroup>

export const PageStory = ({children}) =>
  <ReactCSSTransitionGroup
    transitionName="story"
    transitionAppear={true}
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}>
    {children}
  </ReactCSSTransitionGroup>
