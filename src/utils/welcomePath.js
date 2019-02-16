import getTokenFromLocalStorage from './getTokenFromLocalStorage';

const welcomePath = (mainscreen, loginscreen) => (
  getTokenFromLocalStorage() ? mainscreen : loginscreen
);

export default welcomePath;