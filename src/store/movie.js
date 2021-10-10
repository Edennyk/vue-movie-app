import axios from 'axios';
import _uniqBy from 'lodash/uniqBy'

export default {
  //module
  namespaced: true,
  // data
  state: () => {
    return {
      movies: [],
      message:'',
      loading:false
    };
  },
  //computed
  getters: {},
  // methods
  // only mutatation can edit data, easy to manage data
  mutations: {
    updateState(state, payload){
      // all of states managing
      //['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]

        // state.movies = payload.movies
       // state.message = payload. message
       // state.loading = payload.loading

        //state['movies'] = payload['movies']
        //state['message'] = payload['message']
        //state[‘loading’] = payload.[‘loading’]
      })
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  // async , methods 
  //context : state, getters, mutations data
  //payload : 
  actions: {
    async searchMovies({ state, commit }, payload) {
      const { title, type , number, year } = payload
      const apikey = process.env.VUE_APP_OMDB_API_KEY
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${apikey}&s=${title}&type=${type}&y=${year}&page=1`
      )
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID')
      })

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      if(pageLength > 1) {
        for(let page = 2; page<= pageLength; page +=1){
          if(page > (number / 10)) break
          
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${title}&type=${type}&y=${year}&page=${page}`);
          const { Search } = res.data
          commit('updateState', {
            movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]
          });
        }
      }
    },
  },
};
