import React, { useEffect } from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../styles/Home.module.css'
import FlexWrapper from '../components/FlexWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Main from '../components/Main'
import { useState } from 'react'




const listStudentPage = () => {

  const [allStudents, setStudents] = useState([]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('students')));
    console.log("YEEEE");
  },[])

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </Head>
    <FlexWrapper>
      <Header>
        Sam Hill's Discount Studentt App
      </Header>
      <Nav></Nav>
      <Main>
        
        {
          allStudents.map((s)=>{
            <StudentRow firstName = {s.firstName} lastName = {s.lastName} program = {s.program}>
                          
            </StudentRow>
          })
        }

        {/* <table>
          <tr><td>firstName<td><input type = "text" id='firstName' value='Sam'/></td></td></tr>
          <tr><td>lastName<td><input type = "text" id='lastName' value='Hill'/></td></td></tr>
          <tr><td>Program<td><select id='program'/>

          </td></td></tr>
        </table> */}
      </Main>
      <Footer></Footer>
    </FlexWrapper>
    </>
  )
}

export default listStudentPage