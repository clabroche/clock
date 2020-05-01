<template>
  <div id="app">
    <div class="clock-container">
      <router-view/>
    </div>
    <div class="nav">
      <div>Doughnut</div>
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
      return (d < 10) ? '0' + d.toString() : d.toString();
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
