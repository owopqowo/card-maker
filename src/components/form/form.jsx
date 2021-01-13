import React from 'react';
import styles from './form.module.css';

const Form = (props) => {
  const nameRef = React.createRef();
  const companyRef = React.createRef();
  const themeRef = React.createRef();
  const fileRef = React.createRef();
  const emailRef = React.createRef();
  const titleRef = React.createRef();
  const messageRef = React.createRef();
  const onAdd = (e) => {
    const name = nameRef.current.value;
    const company = companyRef.current.value;
    const theme = themeRef.current.value;
    const fileName = fileRef.current.value;
    const email = emailRef.current.value;
    const title = titleRef.current.value;
    const message = messageRef.current.value;
    props.addCard(name, company, theme, title, email, message);
    nameRef.current.value = '';
    companyRef.current.value = '';
    themeRef.current.value = '';
    fileRef.current.value = '';
    emailRef.current.value = '';
    titleRef.current.value = '';
    messageRef.current.value = '';
  };
  return (
    <li className={styles.form}>
      <div className={styles['input-name']}>
        <input type='text' placeholder='Name' defaultValue={props.card && props.card.name} ref={nameRef} />
      </div>
      <div className={styles['input-company']}>
        <input type='text' placeholder='Company' defaultValue={props.card && props.card.company} ref={companyRef} />
      </div>
      <div className={styles['select-theme']}>
        <select defaultValue={props.card && props.card.theme} ref={themeRef}>
          <option value=''>option</option>
          <option value='light'>light</option>
          <option value='blue'>blue</option>
          <option value='gradient'>gradient</option>
        </select>
      </div>
      <div className={styles['input-file']}>
        <input type='file' id='file' ref={fileRef} />
        <label htmlFor='file'>
          <span className={styles['file-name']}>{props.card && props.card.fileName}</span>
          <span className={styles['button-upload']}>Upload</span>
        </label>
      </div>
      <div className={styles['input-email']}>
        <input type='email' defaultValue={props.card && props.card.email} ref={emailRef} />
      </div>
      <div className={styles['input-title']}>
        <input type='text' placeholder='Title' defaultValue={props.card && props.card.title} ref={titleRef} />
      </div>
      <div className={styles['input-contents']}>
        <textarea defaultValue={props.card && props.card.message} ref={messageRef}></textarea>
      </div>
      <div className={styles['buttons']}>
        {props.card ? (
          <button onClick={props.removeCard} className={styles['button-del']}>
            Delete
          </button>
        ) : (
          <button onClick={onAdd} className={styles['button-add']}>
            Add
          </button>
        )}
      </div>
    </li>
  );
};

export default Form;
