<template>
  <router-link 
    to="/"
    class="logo">
     <span>OMDbAPI</span>.COM
  </router-link>
</template>

<style lang="scss" scoped>
@import "../scss/main";

.logo {
  font-family: "Oswald", sans-serif;
  font-size:20px;
  color: $white;
  text-decoration: none;
  
  &:hover{
    color:$white;
  }
  span{
    color:$primary;
  }
  }

</style>