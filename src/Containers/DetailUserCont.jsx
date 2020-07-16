import React, { Component } from 'react'
import { BackComp } from '../components/BackComp'
import { connect } from "react-redux";
import { getUsersDetail } from '../actions/userAction';
import DetailUserComp from '../components/DetailUserComp';

class DetailUserCont extends Component {
  componentDidMount(){
    this.props.dispatch(getUsersDetail(this.props.match.params.id))
  }
  render() {
    let idQu = this.props.match.params.id
    console.log(idQu)
    return (
      <div>
        <BackComp/>
        <h3>Detail User</h3>
        <DetailUserComp/>
      </div>
    )
  }
}

export default connect()(DetailUserCont)