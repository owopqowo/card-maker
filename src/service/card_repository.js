
import {database} from "./firebase";

class CardRepository {
  syncCard(userId, onUpdate) {
    const ref = database.ref(`${userId}/cards/`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card){
    database.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card){
    database.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;