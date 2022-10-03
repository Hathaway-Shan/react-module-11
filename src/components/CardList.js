import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from './context/CardContext';

export default function CardList({ cards, player }) {
  const { selectedCard, setSelectedCard, setFrom } = useContext(GameContext);
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}
