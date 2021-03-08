import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = (props) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'NANA',
      company: 'ABC',
      theme: 'blue',
      title: 'Title...',
      email: 'nana@abc.com',
      message: 'Do it now',
      fileName: 'nana',
      fileURL: null,
    },
    2: {
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
    3: {
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
  });
  const histroy = useHistory();

  const onLogout = () => {
    props.authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
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
          <Editor FileInput={props.FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
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
