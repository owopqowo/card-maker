import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = (props) => {
  return (
    <ul className={styles.cards}>
      {props.cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default Preview;
