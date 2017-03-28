<template>
  <div id="app">
<<<<<<< HEAD
    <img src="./assets/logo.png">
    <h1>Hello Vue</h1>
    <h2>Essential Links</h2>
=======
    <headers>

    </headers>
>>>>>>> b1f20162b0aed533649249b06419243ea3ff8c38
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
=======
import Headers from './components/Headers.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello Vue :-)'
    }
  },
  components: {
    Headers
  },
  computed: {
    memory() {
      return 10;
>>>>>>> b1f20162b0aed533649249b06419243ea3ff8c38
    }
  }
}
</script>

<<<<<<< HEAD
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
=======
<style lang="sass" scoped>
  .container
    width: 800px
    margin:
      left: auto
      right: auto
>>>>>>> b1f20162b0aed533649249b06419243ea3ff8c38
</style>
