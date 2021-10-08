export default{
  //module
  namespaced: true,
  // data
  state: () => {
    return {
      movies:[]
    }
  },
  //computed
  getters: {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods
  // only mutatation can edit data, easy to manage data
  mutations:{
    resetMovies(state){
      state.movies = []
    }
  },
  // async only
  actions:{
    searchMovies(){
     
    }
  }
}