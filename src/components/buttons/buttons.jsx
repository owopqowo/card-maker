import React, { memo } from 'react';
import styles from './buttons.module.css';

const Buttons = memo(({card, onSubmit}) => {
  return(
    <div className={styles['buttons']}>
      {card ? <button className={styles['button-del']} onClick={onSubmit}>Delete</button> : <button className={styles['button-add']} onClick={onSubmit}>Add</button>}
    </div>
  )
});

export default Buttons;
