import React from 'react'
import { connect } from 'react-redux'

import { saveBudget } from '../actions'

class SaveBudget extends React.Component {
  submitHandler = evt => {
    evt.preventDefault()
    this.props.dispatch(saveBudget(this.props))
  }

  render () {
    return (
      <div>
        <button type='submit' onClick={(evt) => this.submitHandler(evt)}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    client: state.newClient,
    income: state.income,
    expense: state.expense
  }
}

export default connect(mapStateToProps)(SaveBudget)
