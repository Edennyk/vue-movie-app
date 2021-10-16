<template>
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <Loader 
     :size="3"
     :z-index="9" 
     :fixed="true" />
    </template>

     <div v-else 
          class="movie-details">
       <div 
       :style="{ backgroundImage:`url(${ resizingPoster(theMovie.Poster)})`}"
       class="poster">
       <Loader
       v-if="imgLoading"
       absolute />
       </div>
       <div class="specs">
         <div class="title">
           {{ theMovie.Title}}
         </div>
         <div class="labels">
           <span>{{ theMovie.Released }}</span>
           <span>{{ theMovie.Runtime }}</span>
           <span>{{ theMovie.Country }}</span>
         </div>
         <div class="plot">
           {{ theMovie.Plot }}
         </div>
         <div class="ratings">
           <h3>Ratings</h3>
           <div class="rating-wrap">
             <div 
             v-for="{ Source : name, Value: score } in theMovie.Ratings"
             :key="name"
             :title="name"
             class="rating">
             <img 
             :src="`https://raw.githubusercontent.com/Edennyk/vue-movie-app/main/src/assets/${name}.png`" 
             :alt="name"/> 
             <span>{{ score }}</span>
             </div>
           </div>
         </div>
         <div>
           <h3>Actors</h3>
           {{ theMovie.Actors }}
         </div>
         <div>
           <h3>Director</h3>
           {{ theMovie.Director}}
         </div>
          <div>
           <h3>Production</h3>
           {{ theMovie.Production}}
         </div>
          <div>
           <h3>Genre</h3>
           {{ theMovie.Genre}}
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import Loader from '../components/Loader'

export default {
  components: { Loader },

  data(){
    return {
      imgLoading:true
    }
  },

  computed:{
    theMovie() {
      return this.$store.state.movie.theMovie
    },
    loading() {
      return this.$store.state.movie.loading
    }
  },

  created(){
    this.$store.dispatch('movie/searchMovieWithId', {
      id:this.$route.params.id
    })
  },
  methods:{
    resizingPoster(url, size = 700){
      if(!url || url === 'N/A'){
        this.imgLoading = false
        return ''
      }
      const src = url.replace('SX300', `SX${size}`)
      this.$loadImage(src)
        .then(()=>{
          this.imgLoading = false
        })
      return src
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";

.container{
  padding-top: 40px;
}
.skeletons{
  display: flex;
  .poster{
    flex-shrink:0;
    width:500px;
    height: 500px * 3 /2;
    margin-right: 70px;
  }.specs{
    flex-grow:1;
  }
  .skeleton{
    border-radius: 10px;
    background-color:$light-gray;

    &.title{
      width:80%;
      height:70px;
    }

    &.spec{
      width:60%;
      height:30px;
      margin-top: 20px;
    }

    &.plot{
      width:100%;
      height:250px;
      margin-top: 20px;
    }

    &.etc{
      width:50%;
      height:50px;
      margin-top: 20px;
    }
  }
}

.movie-details{
  display: flex;
  
  .poster{
    flex-shrink: 0;
    width:550px;
    height: 550px * 3 / 2;
    margin-right: 90px;
    border-radius: 10px;
    background-color: $light-gray;
    background-size: cover;
    background-position: center;
    position:relative;
  }
  .specs{
    flex-grow: 1;
    .title{
      color:$primary;
      font-family: 'Oswald', sans-serif;
      font-size: 60px;
      line-height: 1;
      margin-bottom: 30px;
    }
    .labels{
      color:$span-color;
      font-size: 18px;
      span{
        &::after{
          content:"\00b7";
          margin: 0 6px;
        }
        &:last-child::after{
          display: none;
        }
      }
    }
    .plot{
      margin-top:20px;
      font-size:15px;
    }
    .ratings{
      .rating-wrap{
        display: flex;
        .rating{
          display: flex;
          align-items: center;
          margin-right: 32px;
          font-size:18px;
          img{
            height: 30px;
            flex-shrink: 0;
            margin-right: 8px;
          }
        }
      }
    }
    h3{
      margin:24px 0 6px;
      font-family: 'Oswald', sans-serif;
      font-size:25px;
      color:$primary;
    }
  }
}
</style>