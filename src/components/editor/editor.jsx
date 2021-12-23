import React from 'react';
import Form from '../form/form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <ul className={styles.forms}>
      {Object.keys(cards).map((key) => (
        <Form key={key} FileInput={FileInput} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
      ))}
      <Form onAdd={addCard} FileInput={FileInput} />
    </ul>
  );
};

export default Editor;
