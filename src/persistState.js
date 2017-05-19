

export const saveState = (state) => {
  try {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem('state', stateAsString);
  } catch (error) {
    console.log(`saveStateError:`, error);
  }
};

export const loadState = () => {
  try {
    const oldState = localStorage.getItem('state');
    if (oldState === null) {
      return undefined;
    }
    return JSON.parse(oldState);
  } catch (error) {
    return undefined;
  }
}
