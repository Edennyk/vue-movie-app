<template>
  <div class="container">
    <div
    :class="{ 'no-result': !movies.length}"
     class="inner">
    <Loader  v-if="loading" />
      <div 
      v-if="message"
      class="message">
        {{ message }}
      </div>
      <div 
      v-else
      class="movies">
        <MovieItem 
         v-for="movie in movies"
         :key="movie.imdbID"
         :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'
import Loader from './Loader'
import { mapState } from 'vuex'

export default{
  components:{
    MovieItem,
    Loader
  },
  computed:{
    ...mapState('movie',[
      'movies',
      'message',
      'loading'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";

.container{
  margin-top:30px;
  .inner{
    background-color:$light-gray;
    padding:30px 0;
    border-radius:4px;
    text-align: center;
    &.no-result{
      padding:70px 0;
    }
  }
  .message{
    color:$primary;
    font-size: 20px;
  }
 .movies{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
}
</style>