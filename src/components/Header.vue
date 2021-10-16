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
 </header>
</template>

<script>
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
  methods:{
    isMatch(path){
      if(!path) return false
      return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  font-size:18px;

  .logo{
    margin-right: 40px;
  }
}
</style>