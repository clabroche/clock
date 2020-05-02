<template>
  <div id="app">
    <div class="clock-container">
      <router-view/>
    </div>
    <div class="nav">
      <a @click="$router.push({name: 'dial'})" :class="{
        active: $route.name === 'dial'
      }">Cadran</a>
      |
      <a @click="$router.push({name: 'doughnut'})" :class="{
        active: $route.name === 'doughnut'
      }">Cercle</a>
      |
      <a @click="$router.push({name: 'digital'})" :class="{
        active: $route.name === 'digital'
      }">Numérique</a>
    </div>
    <div class="explain">
      Nous sommes le {{pad(clock.day)}}/{{pad(clock.month)}}/{{clock.year}}. Il est {{pad(clock.hours)}}:{{pad(clock.minutes)}}:{{pad(clock.seconds)}} et nous ne somme plus qu'à {{clock.universe}} secondes de l'apocalypse.
    </div>
  </div>
</template>
<script>
import clock from './services/clock'
export default {
  data() {
    return {
      clock
    }
  },
  methods: {
    pad(d) {
      return (d < 10) ? '0' + Math.floor(d).toFixed() : Math.floor(d).toFixed();
    }
  },
}
</script>
<style lang="scss">
body {
  color: white;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-image: url('/background.jpg');
  a {
    color: white;
  }
}
.clock-container {
  flex-grow: 1;
}
.nav {
  margin: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff08;
  box-shadow: 1px 1px 8px 4px #00000020;
  border: 1px solid #34343463;
  border-radius: 4px;
  &,a {
    color: #d6d6d6;
  }
  a {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100px;
    height: 100%;
    margin: 0 10px;
    padding: 10px;
    box-sizing: border-box;
    overflow: visible;
    transition: 300ms;
    cursor: pointer;
    &.active {
      color: white;
      font-weight: bold;
    }
    &:hover, &.active {
      transform: scale(1.1);
    }
  }
}
.explain {
  margin: 20px;
  font-weight: bold;
  color: rgba(255,255,255,0.3);
  font-size: 1.2em;
}
#app {
  height: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
