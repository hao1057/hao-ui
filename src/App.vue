<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
const confirm = () => {
  console.log('1111')
}
</script>

<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Test>
      <template #default> aaaa </template>
      <template #title><h3>title</h3></template>
    </Test>
  </div>
  <h-button type="secondary" size="small" disabled block>确定</h-button>
  <h-button type="text" size="medium" disabled @click="confirm">确定</h-button>
  <h-button type="primary" size="large" :disabled="true" @click="confirm"
    >确定</h-button
  >
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

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
