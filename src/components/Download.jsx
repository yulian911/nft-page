import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}` }>
      <div className={`
      ${styles.subSection}
      flex-col text-center
      `}>
          <div>
            <h1 className={`
            ${styles.h1Text}
            ${styles.blackText}
            `}>
              Download the source Code
            </h1>
            <p className={`
            ${styles.pText}
            ${styles.blackText}
            `}>
              Download the full source code on Github
            </p>
          </div>
          <button className={styles.btnPrimary} onClick={()=> window.open('https://github.com/yulian911/nft-mobile-app',"_blank")}>Source Code</button>
          <div className={styles.flexCenter}>
            <img src={assets.scene} alt='download_png' className={styles.fullImg}/>
          </div>
      </div>
    </div>
  )
}

export default Download