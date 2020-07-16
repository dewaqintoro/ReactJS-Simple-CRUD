import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

export const BackComp = () => {
  return (
    <Row className="mb-2">
      <Col>
      <Link to="/"> 
        <Button color="dark" >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Button>
      </Link>
      </Col>
    </Row>
  )
}
