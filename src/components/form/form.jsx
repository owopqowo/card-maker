import React, { useRef, useState } from 'react';
import Buttons from '../buttons/buttons';
import styles from './form.module.css';

const Form = ({FileInput, card, onAdd, deleteCard, updateCard}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null});

  const onSubmit = (e) => {
    e.preventDefault();
    if (!card) {
      const card = {
        id: Date.now(),
        name: nameRef.current.value || '',
        company: companyRef.current.value || '',
        theme: themeRef.current.value || '',
        email: emailRef.current.value || '',
        title: titleRef.current.value || '',
        message: messageRef.current.value || '',
        fileName: file.fileName || '',
        fileURL: file.fileURL || '',
      };
      formRef.current.reset();
      setFile({
        fileName: null,
        fileURL: null,
      });
      onAdd(card);
    } else {
      deleteCard(card);
    }
  };

  const onFileChange = file => {
    if (!card) {
      setFile({
        fileName: file.name,
        fileURL: file.url,
      });
    } else {
      updateCard({
        ...card,
        fileName: file.name,
        fileURL: file.url,
      });
    }
  }

  const onChange = (e) => {
    if (e.currentTarget == null) return;
    if (!card) return;
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <li className={styles['form-item']}>
      <form className={styles.form} ref={formRef}>
        <div className={styles['input-name']}>
          <input type='text' name='name' placeholder='Name' value={card && card.name} ref={nameRef} onChange={onChange} />
        </div>
        <div className={styles['input-company']}>
          <input type='text' name='company' placeholder='Company' value={card && card.company} ref={companyRef} onChange={onChange} />
        </div>
        <div className={styles['select-theme']}>
          <select name='theme' value={card && card.theme} ref={themeRef} onChange={onChange}>
            <option value=''>option</option>
            <option value='light'>light</option>
            <option value='blue'>blue</option>
            <option value='gradient'>gradient</option>
          </select>
        </div>
        <div className={styles['input-file']}>
          <FileInput name={card ? card.fileName : file.fileName} onFileChange={onFileChange} />
        </div>
        <div className={styles['input-email']}>
          <input type='email' name='email' value={card && card.email} ref={emailRef} onChange={onChange} />
        </div>
        <div className={styles['input-title']}>
          <input type='text' name='title' placeholder='Title' value={card && card.title} ref={titleRef} onChange={onChange} />
        </div>
        <div className={styles['input-contents']}>
          <textarea name='message' value={card && card.message} ref={messageRef} onChange={onChange}></textarea>
        </div>
        <Buttons card={card} onSubmit={onSubmit} />
      </form>
    </li>
  );
};

export default Form;
