import React from 'react'

// components
import Account from'./Account';
//import Sidebar from './Sidebar';
import Container from '../Mycontainer/Container'
function Acc() {
  return (
    <div>
        {/*<Sidebar/>*/ } 
        <Container>
           <Account/>
        </Container>
    </div>
  )
}

export default Acc;