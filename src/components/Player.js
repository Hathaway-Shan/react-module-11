import React, { useContext } from 'react';
import CardList from './CardList';
import { GameContext } from '../../src/context/CardContext';

export default function Player({ player, hand }) {
  const { to, setTo } = useContext(GameContext);
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList cards={hand} />
    </div>
  );
}
