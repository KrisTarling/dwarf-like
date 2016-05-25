import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import GameBox from './GameBox'

class App extends Component {

  render() {
    return (
      <div>
        <h1>dwarf-like</h1>
        <GameBox actions={this.props.actions} />
        <footer>work in progress</footer>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)