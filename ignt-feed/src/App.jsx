
import './global.css'

import { Header } from './components/Header'
import {  Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


import styles from './App.module.css'



function App() {

return(
    <div>
      <Header/>


      <div className={styles.wrapper}>
   
        <Sidebar/>
        <main>
        <Post/>
        <Post/>
         </main>
      </div>


    </div>
  )
  
}

export default App
