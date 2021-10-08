<template>
  <div class="continer">
    <div class="inner">
      <MovieItem 
         v-for="movie in movies" 
         :key="movie.imdbID"/>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'

export default{
  components:{
    MovieItem
  },
  data() {
    return{
      movies:[]
    }
  },
}
</script>
