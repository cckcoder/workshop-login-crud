export const state = () => ({
  drawer: false
});

export const mutations = {
  set_drawer(state, newDrawerState) {
    state.drawer = newDrawerState;
  }
};
