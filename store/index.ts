export interface State {}

export const state: State = () => ({
  counter: 0
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
