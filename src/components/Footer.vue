<template>
  <footer>
    <Logo />
    (c){{ new Date().getFullYear()}} EDEN
  </footer>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components:{
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer{
  padding: 70px 0;
  text-align: center;
  opacity: .5;
  .logo{
    display: block;
    margin-bottom: 4px;
  }
}
</style>