import React from 'react'
import styles from "./SocialIcons.module.scss"

const SocialIcons = () => {
  const Icon = ({ iconPath, linkPath }: { iconPath: string, linkPath: string }) => {
    return (
      <img src={iconPath} alt="" onClick={() => window.open(linkPath)} />
    )
  }

  return (
    <div className={styles.container}>
      <Icon iconPath="icons/github.svg" linkPath="https://github.com/tomarcher101" />
      <Icon iconPath="icons/linkedin.svg" linkPath="https://www.linkedin.com/in/tom-archer-229598a5/" />
      <Icon iconPath="icons/mail.svg" linkPath="mailto:thomastarcher@icloud.com" />
    </div>
  )
}

export default SocialIcons