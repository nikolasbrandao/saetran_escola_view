import Vue from 'vue';

export default {
  state: {
    gestoresList: [],
  },
  mutations: {
    updateGestoresList(state, data) {
      this.state.gestoresList = data;
    },
  },
  actions: {
    getGestores(context) {
      Vue.http.get('api/gestores').then((response) => {
        context.commit('updateGestoresList', response.data.data);
      });
    },
  },
};
