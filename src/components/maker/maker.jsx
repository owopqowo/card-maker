import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = (props) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'NANA',
      company: 'ABC',
      theme: 'blue',
      title: 'Title...',
      email: 'nana@abc.com',
      message: 'Do it now',
      fileName: 'nana',
      fileURL: 'https://placeimg.com/200/300/people',
    },
    {
      id: '2',
      name: 'MMM',
      company: 'ABC',
      theme: 'light',
      title: 'Title?',
      email: 'mmm@abc.com',
      message: 'Do it now',
      fileName: 'mmm',
      fileURL: 'https://placeimg.com/300/200/people',
    },
    {
      id: '3',
      name: 'AAAAA',
      company: 'ABC',
      theme: 'gradient',
      title: 'Title!',
      email: 'aaaaa@abc.com',
      message: 'Do it now',
      fileName: 'aaaaa',
      fileURL: 'https://placeimg.com/150/150/people',
    },
  ]);
  const histroy = useHistory();

  const onLogout = () => {
    props.authService.logout();
  };

  useEffect(() => {
    props.authService.onAuthChange((user) => {
      if (!user) {
        histroy.push('/');
      }
    });
  });

  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.title}>Card Maker</h2>
          <Editor cards={cards} />
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Card Preview</h2>
          <Preview cards={cards} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Maker;
