

export const saveState = (state) => {
  try {
    const partialState = {}
    partialState.auth = state.auth
    partialState.auth.error = undefined
    partialState.userBudgets = state.userBudgets
    const stateAsString = JSON.stringify(partialState);
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
