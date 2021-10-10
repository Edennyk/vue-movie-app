<template>
  <div>{{ movie.imd }}</div>
</template>

<script>
export default {
  props:{
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>