import React from 'react'
import styles from '../styles/Global'


const Button = ({assetUrl,link}) => {
  return (
    <div className={`${styles.btnBlack}`} onClick={()=> window.open(link,"_blank")}>
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon}/>
    </div>
  )
}

export default Button