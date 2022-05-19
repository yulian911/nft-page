import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Button from './Button'



const SectionWrapper = ({title,description,showBtn,mockupImg,banner}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <div className={`flex items-center  ${styles.boxClass}`}>
          <div className={`${styles.descDiv} fadeLeftMini`}>
            <h1 className={`${styles.h1Text}`}>{title} </h1>
            <p className={`${styles.descriptionText}`}>{description}</p>
            {showBtn&& (
              <Button assetsUrl={assets.expo} link="deploy nft app"/>

            
            )}
          </div>
      </div>
      
    
     
      <img src={mockupImg} alt="mockup"/>
      
    </div>
  )
}

export default SectionWrapper