import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        autocomplete: [],
        search: ""
      },
      mutations: {
        setAutocomplete(state, data) {
          state.autocomplete = data;
        },
        setSearchText(state, text) {
          state.search = text;
        }
      },
      actions: {
          async submit({ state, commit }){
            const options = {
            method: 'GET',
            url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/auto-complete',
            params: {text: state.search},
            headers: {
                'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
                'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                let results = response.data;
                commit('setAutocomplete', results.data.autocomplete);
                //this.autocomplete = results.data.autocomplete;
            } catch (error) {
                console.error(error);
            }
        }

      },
      getters: {
        
      }
  });

  export default store