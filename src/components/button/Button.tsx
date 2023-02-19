import React from 'react'
import styles from "./button.module.scss";

const Button = ({ children, link }: { children: React.ReactNode, link: string }) => {
    return (
        <button className={styles.button} onClick={() => { window.open(link) }}>{children}</button>
    )
}

export default Button