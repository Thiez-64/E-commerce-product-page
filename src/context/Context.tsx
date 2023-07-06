import { ReactNode, useState } from 'react';
import GlobalContext from './GlobalContext';

type ContextProps = {
  children: ReactNode;
};
export const Context = ({ children }: ContextProps) => {
  const [counter, setCounter] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const [isCart, setIsCart] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        counter,
        setCounter,
        isMenu,
        setIsMenu,
        isCart,
        setIsCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
