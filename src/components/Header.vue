<template>
 <header>
  <Logo />
  <div class="nav nav-pills">
    <div 
     v-for="nav in navigations" 
     :key="nav.name"
    class="nav-item">
      <router-link 
        :to="nav.href"
        active-class="active"
        :class="{ active: isMatch(nav.path) }"
        class="nav-link">
        {{ nav.name }}
      </router-link>
    </div>
  </div>
  <div class="user" @click="toAbout">
    <img :src="image" :alt="name">
  </div>
 </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from './Logo'

export default {
  components:{
    Logo
  },

  data(){
    return{
      navigations: [
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie/',
          path:/^\/movie/ //'/movie'
        },
        {
          name:'About',
          href:'/about'
        },
      ]
    }
  },
  computed:{
    ...mapState('about',[
      'image',
      'name'
    ])
  },
  methods:{
    isMatch(path){
      if(!path) return false
      return path.test(this.$route.fullPath)
    },
    toAbout(){
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main";

header{
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  font-size:18px;
  position: relative;


  .logo{
    margin-right: 40px;
  }
  .user{
    width:40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color:$primary;
    cursor:pointer;
    position:absolute;
    top:0;
    bottom:0;
    right:40px;
    margin:auto;
    img{
      width:100%;
    }
  }
  @include media-breakpoint-down(sm){
    .nav{
      display: none;
    }
  }
}
</style>