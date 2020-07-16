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
  state={
    title:"wadudu",
    users:[
      {
        id:1,
        nama:"dewa",
        alamat:"Magetan",
        umur:21,
        Hp: "099999999"
      },
      {
        id:2,
        nama:"Ani",
        alamat:"Semarang",
        umur:21,
        Hp: "099999999"
      },
      {
        id:3,
        nama:"Kiki",
        alamat:"Solo",
        umur:21,
        Hp: "099999999"
      }
    ]
  }
  render(){
    return(
      <div>
        <Container>
          <NavbarComp title={this.state.title}/>
          <JumboComp title={this.state.title}/>
          {/* <TableComp users={this.state.users} /> */}

          <BrowserRouter>
            <Route path="/" exact>
              <HomeCont users={this.state.users}/>
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