import React, { Component } from 'react'
import { BackComp } from '../components/BackComp'
import FormComp from '../components/FormComp'

export default class AddUserCont extends Component {

  handleSubmit(data){
    console.log(data)
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
