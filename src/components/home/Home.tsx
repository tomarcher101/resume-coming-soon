import React, { useState } from 'react'
import Avatar from '../avatar/Avatar'
import Button from '../button/Button'
import SocialIcons from '../social-icons/SocialIcons'
import styles from "./Home.module.scss"

const Home = () => {
  const [isMouseOverAvatar, setIsMouseOverAvatar] = useState(false)
  const className = `${styles.container} ${isMouseOverAvatar ? styles.dark : styles.light}`

  return (
    <div className={className}>
      <Avatar setIsMouseOverAvatar={setIsMouseOverAvatar} />
      <div className={styles.description}>
        <h1>Tom Archer</h1>
        {isMouseOverAvatar ? (
          <>
            <h2>Site is under construction.</h2>
          </>
        ) : (
          <h2>Software Developer</h2>
        )}
      </div>
      <div className={styles.buttons}>
        <Button link={"./TomArcherCV20230216.pdf"}>View Resume</Button>
        <SocialIcons />
      </div>
    </div>
  )
}

export default Home