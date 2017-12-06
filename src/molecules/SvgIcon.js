import React, {Component} from 'react'
import Icon from '../assets/icons-js/strategy'

export default class SvgIcon extends Component {

  componentDidMount() {
      // console.log("svgObjectWrap MOUNT",  document.querySelector(".svgObjectWrap").getSVGDocument())
  }

  componentWillReceiveProps(newProps){
    // console.log("newProps SVG RECIEVE",newProps.link)
    // console.log("svgObjectWrap",  document.querySelector(".svgObjectWrap").contentDocument)
    // document.querySelector(".svgObjectWrap").getSVGDocument().getElementById("svgInternalID").setAttribute("fill", "red")
  }

  render () {
    // console.log("icon",icon)
    return (
      <object className='svgObjectWrap' data={this.props.link} type="image/svg+xml"></object>
    )
  }
}
