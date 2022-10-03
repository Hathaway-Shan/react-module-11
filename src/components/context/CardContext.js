import { createContext, useState } from 'react';
import initialCards from './cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };
