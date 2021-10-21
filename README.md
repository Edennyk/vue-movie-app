
# Vue - Movie app  :movie_camera:
- **[Live Demo](https://vue-omdb-movie.netlify.app)**
- vue3 , Bootstrap5, SCSS, OMDB API, lodash

# What I learned (Summary)
1. VueRouter
- <RouterView> : a page is rendered
- <RouterLink> : link to pages 
- routes folder - index.js - createRouter , createWebHashHistory (/#/)
- '/' , 'Movie', 'About' == components
- app.vue => inseide template "<router-view />"
- [Vue - API Reference](https://next.router.vuejs.org/api/)

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

4. MovieList.vue
- Use MovieItem componenet 
- Movie items are repeatedly output according to the number of movies searched
- Repeatedly output the moving data through v-for
- The attributes are each movie's imdbID
- Store searched movie information in movie array data

5. Vuex(store)
- state management pattern , a centralized store for all the components in an application
- namespaced (module)
- state (data)
- getters (computed)
- mutations(methods) : change state
- actions(methods, async)
- mutations => .commit() / actions => .dispatch() 

6. Lodash - Uniq Movie ID 
- remove duplicate Movie's ID => use Lodash library
- Lodash => uniqBy : returns the new duplicate free array

7. mapState Helper
- helper which generates computed getter functions, saving some keystrokes
- use Object Spread Operator

8. scrollBehavior
- always scroll to top

9. Deploy
- Netlify 
