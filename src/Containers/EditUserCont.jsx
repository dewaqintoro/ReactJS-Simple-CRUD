import React, { Component } from 'react'
import { BackComp } from '../components/BackComp'
import { connect } from "react-redux";
import FormComp from '../components/FormComp';
import { getUsersDetail, putUser } from '../actions/userAction';
import swal from 'sweetalert';


const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser
  };
};


class EditUserCont extends Component {
  // kalau addUser tidak ada
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id))
  }


  handleSubmit(data) {
    // console.log(data)
    this.props.dispatch(putUser(data, this.props.match.params.id))
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed !!!", this.props.errorResponDataUser, "error");
      } else {
        swal("User Updated !!!", "Nama : " + this.props.getResponDataUser.nama, "success");
      }
    }

    return (
      <div>
        <h1>Edit User</h1>
        <BackComp />
        <FormComp onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(EditUserCont)