import React from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../styles/Home.module.css'
import FlexWrapper from '../components/FlexWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Main from '../components/Main'


const listStudentPage = () => {
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
        Content Goes here
      </Main>
      <Footer></Footer>
    </FlexWrapper>
    </>
  )
}

export default listStudentPage