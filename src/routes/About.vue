<template>
 <div class="about">
   <div class="photo">
     <Loader 
     v-if="imgLoading"
     absolute/>
     <img 
      :src="image" 
      :alt="name" />
   </div>
   <div class="name">
     {{ name }}
   </div>
   <div class="email">
     {{ email }}
   </div>
  <div class="github">
    <a href="https://github.com/Edennyk/vue-movie-app" target="blank">
     {{ github }}
    </a>
  </div>
  <div class="linkedin">
    {{ linkedin }}
  </div>
 </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../components/Loader'


export default {
  components:{
    Loader
  },

  data(){
    return{
      imgLoading: true
    }
  },

  computed:{
    ...mapState('about',[
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ]),
  },

  mounted(){
    this.init()
  },

  methods:{
    async init(){
      await this.$loadImage(this.image)
      this.imgLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";

.about{
  text-align: center;
  .photo{
    width:250px;
    height: 250px;
    margin: 40px auto 20px;
    padding:30px;
    border: 10px solid;
    box-sizing: border-box;
    background-color:$primary;
    position:relative;
    img{
      width:100%
    }
  }
  .name{
    font-size:40px;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 20px;
  }
}
</style>