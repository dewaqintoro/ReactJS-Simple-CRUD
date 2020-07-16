import React from 'react'
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import { getUsersDetail } from '../actions/userAction';

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail
  };
};


const DetailUserComp = (props) => {
  // console.log(props.getUsersDetail)
  return (
    <Table striped>
      {/* <thead>
        <tr>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Umur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.getUsersDetail.nama}</td>
          <td>{props.getUsersDetail.alamat}</td>
          <td>{props.getUsersDetail.umur}</td>
        </tr>
        
      </tbody> */}
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.nama}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.alamat}</td>
        </tr>
        <tr>
          <td width="200">Umur</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.umur}</td>
        </tr>
        <tr>
          <td width="200">No Hp</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.Hp}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default connect(mapStateToProps,null)(DetailUserComp)
