import React, { Component } from 'react'
import NavbarComp from './components/NavbarComp'
import JumboComp from './components/JumboComp'
import TableComp from './components/TableComp'
import { Container } from 'reactstrap'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import HomeCont from './Containers/HomeCont'
import AddUserCont from './Containers/AddUserCont'
import EditUserCont from './Containers/EditUserCont'
import DetailUserCont from './Containers/DetailUserCont'

export default class App extends Component{
  
  render(){
    return(
      <div>
        <Container>
          <NavbarComp/>
          <JumboComp/>
          {/* <TableComp users={this.state.users} /> */}

          <BrowserRouter>
            <Route path="/" exact>
              <HomeCont/>
            </Route>
            <Route path="/add" exact>
              <AddUserCont/>
            </Route>
            <Route path="/edit/:id" exact>
              <EditUserCont/>
            </Route>
            <Route path="/detail/:id" exact>
              <DetailUserCont/>
            </Route>
          </BrowserRouter>
        </Container>
      </div>
    )
  }
}