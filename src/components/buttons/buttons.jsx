import React from 'react';
import styles from './buttons.module.css';

const Buttons = (props) => <div className={styles['buttons']}>{props.card ? <button className={styles['button-del']}>Delete</button> : <button className={styles['button-add']}>Add</button>}</div>;

export default Buttons;
