import { createContext, useState } from 'react';

const CardContext = createContext();

const UserProvider = ({ children }) => {
  const [player, setPlayer] = useState(player);
  const [card, setCard] = useState(card);
  const [from, setFrom] = useState(from);
  const [selectedCard, setSelectedCard] = useState(selectedCard);

  return (
    <CardContext.Provider
      value={{ card, setCard, player, setPlayer, from, setFrom, selectedCard, setSelectedCard }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { UserProvider, CardContext };
