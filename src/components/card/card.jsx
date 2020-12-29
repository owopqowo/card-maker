import React from 'react';
import styles from './card.module.css';

const Card = (props) => (
  <li className={styles.card} data-type={props.card.theme}>
    <dl className={styles.info}>
      <dt className={styles['info-name']}>{props.card.name}</dt>
      <dt className={styles['info-company']}>{props.card.company}</dt>
      <dd className={styles['info-job']}>
        <i className='icon suitcase'></i>
        {props.card.title}
      </dd>
      <dd className={styles['info-email']}>
        <i className='icon mail'></i>
        {props.card.email}
      </dd>
      <dd className={styles['info-message']}>
        <i className='icon chat'></i>
        {props.card.message}
      </dd>
    </dl>
    <div className={styles['box-img']}>
      <img src={props.card.fileURL} alt={props.card.fileName} className={styles.img} />
    </div>
  </li>
);

export default Card;
