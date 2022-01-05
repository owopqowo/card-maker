import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = process.env.PUBLIC_URL + '/images/profile_default.jpg';

const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={styles.card} data-type={theme}>
      <dl className={styles.info}>
        <dt className={styles['info-name']}>{name}</dt>
        <dt className={styles['info-company']}>{company}</dt>
        <dd className={styles['info-job']}>
          <i className='icon suitcase'></i>
          {title}
        </dd>
        <dd className={styles['info-email']}>
          <i className='icon mail'></i>
          {email}
        </dd>
        <dd className={styles['info-message']}>
          <i className='icon chat'></i>
          {message}
        </dd>
      </dl>
      <div className={styles['box-img']}>
        <img src={url} alt={fileName} className={styles.img} />
      </div>
    </li>
  );
});

export default Card;
