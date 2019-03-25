<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #f4f3f1;
}

.blue {
  color: #221C35;
}

/* .black {
  color: #363838;
} */

#nav {
  padding: 30px;
  /* color: rgb(255, 0, 0); */
}

#nav a {
  padding: 10px;
  font-weight: bold;
  color: #221C35;
}

#nav a.router-link-exact-active {
  color: #dbbd4e;
}
</style>
