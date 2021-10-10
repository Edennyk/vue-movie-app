This is a my first Vue.js web application for search movies from OMdb.com

# Vue - Movie app
- vue3 , Bootstrap5, SCSS, OMDB API, lodash

# What I learned (Summary)
1. VueRouter
- routes folder - index.js - createRouter , createWebHashHistory (/#/)
- main.js : import vue router and use(router)
- careted each page path 
- '/' , 'Movie', 'About' == components
- app.vue => inseide template "<router-view />"

2. Header.vue
- placed at app.vue template <Header /> (before router-view)
- data : navigations (include search , movie, about : for navigating header menu )
- nav-item used v-for (display each menu) 
- nav-link used router-link(to create links) => :to="nav.href" and nav.name from data (instead of using <a>)
- when the active navmenu, added class "router-link-active router-link-exact-active" from router-link
- the active navmenu to change class name router-link-active to active / active-class="active"

3. Search.vue
- v-model : directive to create two-way data bindings on input
- select has 3 data (type, number , year) / v-moeld get data from $data[filter.name]
- @keyup.enter="search" (when user enter key press at input filed) and  @click="search" (click btn) : searchmv() 
  methods excute

4. MovieList.vue
- Use MovieItem componenet 
- Movie items are repeatedly output according to the number of movies searched
- Repeatedly output the moving data through v-for
- The attributes are each movie's imdbID
- Store searched movie information in movie array data

# Vuex(store)
- state management pattern , a centralized store for all the components in an application
- store' mutations => .commit() / actions => .dispatch() 

1. movie module
- replaced at methods(searchMovie) from search component searchmv() 
- actions: context(data), payload / dispatch() | this.$store.dispatch('movie/searchMovies')

# Lodash - Uniq Movie ID 
- remove duplicate Movie's ID => use Lodash library
- Lodash => uniqBy : returns the new duplicate free array