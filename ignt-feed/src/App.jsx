
import './global.css'

import { Header } from './components/Header'
import {  Post } from './Post'
import { Sidebar } from './components/Sidebar'


import styles from './App.module.css'



function App() {

return(
    <div>
      <Header/>


      <div className={styles.wrapper}>
   
        <Sidebar/>
        <main>
        <Post
         author="Matheus Felix"
         content="Olá, Meu nome é matheus e eu sou programador"/>
            <Post
         author="Matheus Felix"
         content="Olá, Meu nome é matheus e eu sou programador mais especializado com front-end porém me considero fullstack pois sei desenvolver um sistema completo"/>
         </main>
      </div>


    </div>
  )
  
}

export default App
