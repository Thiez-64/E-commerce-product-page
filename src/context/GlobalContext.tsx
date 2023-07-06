import { createContext } from 'react';

type GlobalContextProps = {
  counter: number;
  setCounter: (v: number) => void;
  isMenu: boolean;
  setIsMenu: (v: boolean) => void;
  isCart: boolean;
  setIsCart: (v: boolean) => void;
};

const GlobalContext = createContext<GlobalContextProps>({
  counter: 0,
  setCounter: () => null,
  isMenu: false,
  setIsMenu: () => null,
  isCart: false,
  setIsCart: () => null,
});

export default GlobalContext;
