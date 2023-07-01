import React, { useState, useRef } from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({
  setIsMouseOverAvatar,
}: {
  setIsMouseOverAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showSecondaryImage, setShowSecondaryImage] = useState(false);

  const handleMouseOverAvatar = () => {
    setShowSecondaryImage(true);
    setIsMouseOverAvatar(true);
  };

  const handleMouseOutAvatar = () => {
    setShowSecondaryImage(false);
    setIsMouseOverAvatar(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.imageContainer}`}
        onMouseOver={handleMouseOverAvatar}
        onMouseOut={handleMouseOutAvatar}
      >
        <img className={styles.darkImage} src="./avatar2.png" alt="" />
        <img className={styles.lightImage} src="./avatar.png" alt="" />
      </div>
      <div
        className={`${styles.darkText} ${
          showSecondaryImage ? styles.dark : styles.light
        }`}
      >
        <h2>Site is currently undergoing a redesign!</h2>
        <h3>Please come back later</h3>
      </div>
    </div>
  );
};

export default Avatar;
