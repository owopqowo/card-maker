import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = ({FileInput, authService, cardRepository}) => {
  const histroy = useHistory();
  const historyState = histroy.location.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  

  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  useEffect(() => {
    console.log(userId);
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCard(userId, cards => {
      console.log('test');
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
          <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
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
