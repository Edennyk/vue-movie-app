<template>
<div class="container">
  <h1>
    <span>OMDb API </span><br />
    THE OPEN<br />
    MOVIE DATABASE
  </h1> 
  <p>
    The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
  </p>
</div>
</template>

<style lang="scss" scoped>
@import "../scss/main";

.container{
  padding-top: 40px;
}
h1{
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  span{
    color:$primary;
  }
}
p{
  margin: 30px 0;
  color:body-color;
}
</style>