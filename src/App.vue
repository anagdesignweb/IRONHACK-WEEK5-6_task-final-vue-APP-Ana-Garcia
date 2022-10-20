<template>


  <h1>Task APP Ana Garcia</h1>

  <ul>
    <li><router-link :to="{name: 'home'}">home</router-link></li>
    <li><router-link :to="{name: 'login'}">login</router-link></li>
    <li><router-link :to="{name: 'register'}">register</router-link></li>
  </ul>


  <router-view></router-view>


</template>

<script setup>
</script>


<style scoped>
</style>