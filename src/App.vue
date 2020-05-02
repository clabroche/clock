<template>
  <div id="app">
    <div class="clock-container">
      <div class="clock-border">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
    <div class="general-infos">
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
        Nous sommes le {{pad(clock.day)}}/{{pad(clock.month)}}/{{clock.year}}.<br>
        Il est {{pad(clock.hours)}}:{{pad(clock.minutes)}}:{{pad(clock.seconds)}}.<br>Et nous ne somme plus qu'à {{clock.universe}} secondes de l'apocalypse.
      </div>
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
  background-size: 200px;
  a {
    color: white;
  }
}
.clock-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  .clock-border {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 14px 8px #2323238f;
    background-color: #1b1b1b45;
    border: 1px solid #797979cf;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
}

.general-infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #21212124;
  box-shadow: 0 0 14px 8px #23232354;
  border: 1px solid #a6a5a563;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
}
.nav {
  margin: 50px;
  margin-top: 0;
  margin-bottom: 20px;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #707070;
  box-shadow: 0 13px 19px -14px #2323238f;
  &,a {
    color: #ffffff91;
    text-shadow: 0px 0px 4px #000000
  }
  a {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100px;
    height: 100%;
    margin: 0 10px;
    padding: 5px 10px;
    box-sizing: border-box;
    overflow: visible;
    transition: 300ms;
    cursor: pointer;
    &.active {
      color: #cfcfcf;
      font-weight: bold;
    }
    &:hover, &.active {
      transform: scale(1.1);
    }
  }
}
.explain {
  margin: 0 50px;
  padding-bottom: 20px;
  color: #ffffff80;
  text-shadow: 0px 0px 4px #000000

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
.fade-enter-active, .fade-leave-active {
  position: absolute !important;
  left: 0;
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  position: absolute !important;
  left: 0;
  opacity: 0;
}
</style>
