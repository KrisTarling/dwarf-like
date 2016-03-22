import React, { Component } from 'react'

class NewComponent extends Component {

     handleClick() {
        this.props.actions.actionName(this.props.val) // calls our 'actionName' action in actions.js and passes in a prop
    }

  render() {
    return (
        <div>
    	  <h1>dwarf-like</h1>
        </div>
    )
  }
}
export default NewComponent