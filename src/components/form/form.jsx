import React, { useRef } from 'react';
import Upload from '../upload/upload';
import Buttons from '../buttons/buttons';
import styles from './form.module.css';

const Form = (props) => {
  //const { name, company, title, email, message, theme, fileName, fileURL } = card;
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!props.card) {
      const card = {
        id: Date.now(),
        name: nameRef.current.value || '',
        company: companyRef.current.value || '',
        theme: themeRef.current.value || '',
        email: emailRef.current.value || '',
        title: titleRef.current.value || '',
        message: messageRef.current.value || '',
        fileName: '',
        fileURL: '',
      };
      formRef.current.reset();
      props.onAdd(card);
    } else {
      props.deleteCard(props.card);
    }
  };

  const onChange = (e) => {
    if (e.currentTarget == null) return;
    if (!props.card) return;
    e.preventDefault();
    props.updateCard({
      ...props.card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onDelete = () => {
    props.onRemove(props.card);
  };
  return (
    <li>
      <form className={styles.form} ref={formRef} onSubmit={onSubmit}>
        <div className={styles['input-name']}>
          <input type='text' name='name' placeholder='Name' value={props.card && props.card.name} ref={nameRef} onChange={onChange} />
        </div>
        <div className={styles['input-company']}>
          <input type='text' name='company' placeholder='Company' value={props.card && props.card.company} ref={companyRef} onChange={onChange} />
        </div>
        <div className={styles['select-theme']}>
          <select name='theme' value={props.card && props.card.theme} ref={themeRef} onChange={onChange}>
            <option value=''>option</option>
            <option value='light'>light</option>
            <option value='blue'>blue</option>
            <option value='gradient'>gradient</option>
          </select>
        </div>
        <div className={styles['input-file']}>
          <Upload />
        </div>
        <div className={styles['input-email']}>
          <input type='email' name='email' value={props.card && props.card.email} ref={emailRef} onChange={onChange} />
        </div>
        <div className={styles['input-title']}>
          <input type='text' name='title' placeholder='Title' value={props.card && props.card.title} ref={titleRef} onChange={onChange} />
        </div>
        <div className={styles['input-contents']}>
          <textarea name='message' value={props.card && props.card.message} ref={messageRef} onChange={onChange}></textarea>
        </div>
        <Buttons card={props.card} onDelete={onDelete} />
      </form>
    </li>
  );
};

export default Form;
