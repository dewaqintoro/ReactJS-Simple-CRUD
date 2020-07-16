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
            <Route path="/" exact component={HomeCont}/>
            <Route path="/add" exact component={AddUserCont}/>
            <Route path="/edit/:id" exact component={EditUserCont} />
            <Route path="/detail/:id" exact component={DetailUserCont}/>
          </BrowserRouter>
        </Container>
      </div>
    )
  }
}