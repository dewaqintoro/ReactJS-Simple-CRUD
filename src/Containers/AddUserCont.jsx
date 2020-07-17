import React, { Component } from 'react'
import { BackComp } from '../components/BackComp'
import FormComp from '../components/FormComp'
import { connect } from "react-redux";
import { postUser } from '../actions/userAction';
import swal from 'sweetalert';


const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser
  };
};

class AddUserCont extends Component {

  handleSubmit(data){
    // console.log(data)
    this.props.dispatch(postUser(data))
  }
  render() {
    if(this.props.getResponDataUser || this.props.errorResponDataUser){
      if(this.props.errorResponDataUser){
        swal("Failed !!!", this.props.errorResponDataUser, "error");
      }else{
        swal("User Created !!!", "Nama : "+this.props.getResponDataUser.nama, "success");
      }
    }
    
    
    // {
    //   swal("User Created !!!", "Nama : "+this.props.getResponDataUser.nama, "success");
    // }else{
    //   swal("Error !!!", this.props.errorResponDataUser, "error");
    // }
    return (
      <div>
        <BackComp/>
        <h1>Add User</h1>
        <FormComp onSubmit={(data) => this.handleSubmit(data)}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(AddUserCont)