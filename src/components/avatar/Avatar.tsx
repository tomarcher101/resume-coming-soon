import React, { useState, useRef } from 'react'
import styles from "./Avatar.module.scss"

const Avatar = ({ setIsMouseOverAvatar }: { setIsMouseOverAvatar: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [showSecondaryImage, setShowSecondaryImage] = useState(false);

    const handleMouseOverAvatar = () => {
        setShowSecondaryImage(true);
        setIsMouseOverAvatar(true);
    }

    const handleMouseOutAvatar = () => {
        setShowSecondaryImage(false);
        setIsMouseOverAvatar(false);
    }

    return (
        <div className={styles.container} onMouseOver={handleMouseOverAvatar} onMouseOut={handleMouseOutAvatar}>
            {showSecondaryImage ? (
                <img src="./avatar2.jpeg" alt="" />
            ) : (
                <img src="./avatar.png" alt="" />
            )}
        </div>
    )
}

export default Avatar