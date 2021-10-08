# Vue - Movie app
- vue3 , Bootstrap5, SCSS, OMDB API

# What I learned (Summary)
1. VueRouter
- routes folder - index.js - createRouter , createWebHashHistory (/#/)
- main.js : import vue router and use(router)
- careted each page path 
- '/' , 'Movie', 'About' == components
- app.vue => inseide template "<router-view />"

2. Header.vue
- Header component 
- placed at app.vue template <Header /> (before router-view)
- data : navigations (include search , movie, about : for navigating header  
  menu )
- nav-item used v-for (display each menu) 
- nav-link used router-link(to create links) => :to="nav.href" and nav.name from data (instead of using <a>)
- when the active navmenu, added class "router-link-active router-link-exact-active" from router-link
- the active navmenu to change class name router-link-active to active / active-class="active"

3. Headline.vue
- inside Home.vue

4. Search.vue
- v-model : directive to create two-way data bindings on input
- inside Home.vue
- The years in the filter use const this Year = new Date().getFullYear() to output the current year.
- select has 3 data (type, number , year) / v-moeld get data from $data[filter.name]
- @keyup.enter="search" (when user enter key press at input filed) and  @click="search" (click btn) : search() methods  
  excute

5. MovieList.vue
- Use MovieItem componenet 
- Movie items are repeatedly output according to the number of movies searched
- Repeatedly output the moving data through v-for
- The attributes are each movie's imdbID
- Store searched movie information in movie array data

6. MovieItem.vue
- inside MovieList.vue

# Vuex(store)
- state management pattern , a centralized store for all the components in an application
