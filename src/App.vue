<template>
  <div id="app">
    <PhoneMaskedInput />
  </div>
</template>

<script>
import PhoneMaskedInput from './components/PhoneMakedInput.vue'

export default {
  name: 'App',
  components: {
    PhoneMaskedInput
  },
  data: () => ({
    phoneForGlobalUsage: ''
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
