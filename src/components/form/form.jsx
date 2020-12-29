import React from 'react';
import styles from './form.module.css';

const Form = (props) => (
  <li className={styles.form}>
    <div className={styles['input-name']}>
      <input type='text' placeholder='Name' value={props.card.name} />
    </div>
    <div className={styles['input-company']}>
      <input type='text' placeholder='Company' value={props.card.company} />
    </div>
    <div className={styles['select-theme']}>
      <select value={props.card.theme}>
        <option value=''>option</option>
        <option value='light'>light</option>
        <option value='blue'>blue</option>
        <option value='gradient'>gradient</option>
      </select>
    </div>
    <div className={styles['input-file']}>
      <input type='file' id='file' />
      <label htmlFor='file'>
        <span className={styles['file-name']}>{props.card.fileName}</span>
        <span className={styles['button-upload']}>Upload</span>
      </label>
    </div>
    <div className={styles['input-email']}>
      <input type='email' value={props.card.email} />
    </div>
    <div className={styles['input-title']}>
      <input type='text' placeholder='Title' value={props.card.title} />
    </div>
    <div className={styles['input-contents']}>
      <textarea value={props.card.message}></textarea>
    </div>
    <div className={styles['buttons']}>{props.card ? <button className={styles['button-del']}>Delete</button> : <button className={styles['button-add']}>Add</button>}</div>
  </li>
);

export default Form;
