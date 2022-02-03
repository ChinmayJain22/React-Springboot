import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import img from './stock.png';



export default function Header() {



    return (
     
      <Navbar bg="dark" variant="dark" >
      <Container fluid>

        <Navbar.Brand href="/home">
          <img
            alt=""
            src={img}
            width="50"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        STOCK MARKET
        </Navbar.Brand>

    <h6><a variant="outline-success" style={{color:'blue',fontStyle:'italic'}} href="https://www.nseindia.com/">HOME</a></h6>
    {/* <h6><a variant="outline-success" style={{color:'white',fontStyle:'italic'}} href="https://zerodha.com/">Signup</a></h6> */}
      </Container>
    </Navbar> 
      
    )
}
