import React from 'react';
import Form from '../form/form';
import styles from './editor.module.css';

const Editor = (props) => {
  return (
    <ul className={styles.forms}>
      {props.cards.map((card) => (
        <Form key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default Editor;
