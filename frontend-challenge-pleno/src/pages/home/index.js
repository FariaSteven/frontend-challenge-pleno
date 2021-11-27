import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import Tabs from "../../components/tabs/Tabs"
import TabsContent from '../../components/tabsContent/TabsContent'
import Sac from '../../components/sac/Sac'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const getServicesData = () => {
    axios.get("http://localhost:3333/services")
         .then((res) => {
           console.log("services", res.data)
         })
  }

  const getClientsData = () => {
    axios.get("http://localhost:3333/clients")
         .then((res) => {
           console.log("clientes", res.data)
         })
  }
  useEffect(() => {
    getServicesData()
    getClientsData()
  }, [])

  return (
    <div>
      <Header/>
      <Tabs/>
      <TabsContent/>
      <Sac/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
