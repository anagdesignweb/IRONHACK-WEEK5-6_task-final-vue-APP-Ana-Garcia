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
import { onMounted } from 'vue';
import { login, newTask } from './api';



onMounted(async() => {

  // esto no iria aqui, es solo una prueba para ver que funciona, 
  const id = await login('anagarciacarrasco@hotmail.com', '1234567');
  newTask({
  user_id: id,
  tittle:'titulo',
  description: 'Descripcion del task'
 })
});


</script>


<style scoped>
</style>