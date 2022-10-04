import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from '../../src/context/CardContext';

export default function ExecutePassButton({ passCard }) {
  const { from, setFrom, to, selectedCard, setSelectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
