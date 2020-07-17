import React, { Component } from 'react'
import { BackComp } from '../components/BackComp'
import FormComp from '../components/FormComp'
import { connect } from "react-redux";
import { postUser } from '../actions/userAction';

class AddUserCont extends Component {

  handleSubmit(data){
    // console.log(data)
    this.props.dispatch(postUser(data))
  }
  render() {
    return (
      <div>
        <BackComp/>
        <h1>Add User</h1>
        <FormComp onSubmit={(data) => this.handleSubmit(data)}/>
      </div>
    )
  }
}

export default connect()(AddUserCont)