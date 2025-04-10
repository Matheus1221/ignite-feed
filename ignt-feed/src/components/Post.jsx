import styles from './Post.module.css'

import React from 'react'

 export function Post ()  {
  return (
  
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                     src="https://github.com/KYU-Sasaki.png" alt="" />
                     <div className={styles.authorInfo}>
                        <strong>Gustavo Sasaki</strong>
                        <span>Fullstack Developer</span>
                     </div>
                </div>
 

                <time title='07 de abril às 01:04' dateTime="2025-04-11 00:01:04">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href=""> jane.design/doctorcare</a></p>

            <p>
             <a href="">#novoprojeto</a>{" "}
             <a href="">#nlw </a>{" "}
             <a href="">#rocketseat</a>
             </p>
            </div>

        </article>
    
  )
}

 