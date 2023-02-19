import React from 'react'
import styles from "./SocialIcons.module.scss"

const SocialIcons = () => {
  return (
    <div className={styles.container}>
      <img src="icons/github.svg" alt="" />
      <img src="icons/linkedin.svg" alt="" />
      <img src="icons/mail.svg" alt="" />
    </div>
  )
}

export default SocialIcons