import axios from 'axios';
import _uniqBy from 'lodash/uniqBy'

export default {
  //module
  namespaced: true,
  // data
  state: () => {
    return {
      movies: [],
      message:'Search for the movie title!', // default message
      loading:false,
      theMovie: {}
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
      if(state.loading)  return 
      
      commit('updateState',{
        message:'',
        loading:true
      })

      try{
        const res = await _fetchMovie({
        ...payload,
        page:1
      })
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID')
      })

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      // more requests
      if(pageLength > 1) {
        for(let page = 2; page<= pageLength; page +=1){
          if(page > (payload.number / 10)) break
          
          const res = await _fetchMovie({
            ...payload,
            page
          })
          const { Search } = res.data
          commit('updateState', {
            movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]
          });
        }
      }
    } catch(message){
        commit('updateState', {
          movies :[],
          message
        })
      } finally{
        commit('updateState', {
          loading: false,
        });
      }
    },
    // detail movie info 
    async searchMovieWithId({ state, commit }, payload){
      if(state.loading) return

      commit('updateState', {
        theMovie:{},
        loading: true,
      });

      try{
        const res = await _fetchMovie(payload)
        commit('updateState',{
          theMovie: res.data
        })
      } catch (error) {
        commit('updateState',{
          theMovie:{}
        })
      } finally{
         commit('updateState', {
           loading: false
         });
      }
    }
  }
}


function _fetchMovie(payload){
  const {title, type, year, page, id} = payload
  const apikey = process.env.VUE_APP_OMDB_API_KEY;
  const url = id
    ? `https://www.omdbapi.com/?apikey=${apikey}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${apikey}&s=${title}&type=${type}&y=${year}&page=${page}`;

  return new Promise((resolve, reject)=>{
    axios.get(url)
    .then(res => {
      if(res.data.Error){
        reject(res.data.Error);
      }
      resolve(res)
      console.log(res)
    })
    .catch(err =>{
      reject(err.message)
    })
  })
}
