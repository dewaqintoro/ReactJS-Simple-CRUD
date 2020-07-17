import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Row, Col, Container, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser } from '../actions/userAction';
 
const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  // console.log("user dengan id : "+id)
  swal({
    title: "Apakah anda yakin menghapus ini?",
    text: "Data yang terhapus tidak bisa dikembalikan!!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Data berhasil diHapus!", {
        icon: "success",
      });
    } else {
      swal("Data batal dihapus!");
    }
  });
}



// sebelum tambah fitur delete
// const columns = [{
//   dataField: 'id',
//   text: 'ID',
//   sort: true,
//   headerStyle: () => {
//     return { width: "7%" }
//   }
// },
// {
//   dataField: 'nama',
//   text: 'Nama',
//   sort: true
// },
// {
//   dataField: 'alamat',
//   text: 'Alamat',
//   sort: true
// },
// {
//   dataField: "link",
//   text: "Action",
//   formatter: (rowContext, row) => {
//     return (
//       <div>

//         <Link to={"detail/" + row.id}>
//           <Button color="dark" className="mr-2">
//             <FontAwesomeIcon icon={faInfo} /> Detail
//           </Button>
//         </Link>

//         <Link to={"edit/" + row.id}>
//           <Button color="dark" className="mr-2">
//             <FontAwesomeIcon icon={faEdit} /> Edit
//           </Button>
//         </Link>

//         <Button color="dark" className="mr-2" onClick={()=> handleClick(row.id)}>
//           <FontAwesomeIcon icon={faTrash} /> Hapus
//         </Button>
//       </div>
//     )
//   }
// }
// ];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}]


const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList
  };
};



const TableComp = (props) => {

  // dipindah disini biar mendapatkan props.nya
  const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
      return { width: "7%" }
    }
  },
  {
    dataField: 'nama',
    text: 'Nama',
    sort: true
  },
  {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContext, row) => {
      return (
        <div>
  
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
  
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
  
          <Button color="dark" className="mr-2" onClick={()=> handleClick(props.dispatch, row.id)}>
            <FontAwesomeIcon icon={faTrash} /> Hapus
          </Button>
        </div>
      )
    }
  }
  ];


  return (
    <div>
      {props.getUsersList ?

        <ToolkitProvider
          bootstrap4
          keyField='id'
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {
            props => (
              <div>
                <Row>
                  <Col>
                    <Link to="/add">
                      <Button color="dark" className="mr-2">
                        <FontAwesomeIcon icon={faUserPlus} /> Add User
                  </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-right">
                      <SearchBar {...props.searchProps} placeholder="Search ...." />
                    </div>
                  </Col>
                </Row>

                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )
          }
          {/* tanpa loading spinner */}
          {/* </ToolkitProvider> : null } */}
        </ToolkitProvider> : 
          <div className="text-center">
            {props.errorUsersList ? <h1>{props.errorUsersList}</h1> : <Spinner color="dark" /> }
          </div>
        }

    </div>
  )
}

export default connect(mapStateToProps, null)(TableComp)
