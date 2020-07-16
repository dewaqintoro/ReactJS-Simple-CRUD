import React, { Component } from 'react'
import { BackComp } from '../components/BackComp'
import FormComp from '../components/FormComp'

export default class AddUserCont extends Component {
  render() {
    return (
      <div>
        <BackComp/>
        <h1>Add User</h1>
        <FormComp/>
      </div>
    )
  }
}
