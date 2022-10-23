<template>

  <Navbar />
  <router-view></router-view>

</template>

<script setup>

import Navbar from './components/Navbar.vue';

import { onMounted } from 'vue';
import { registro, newTask } from './api';



onMounted(async () => {

  // esto no iria aqui, es solo una prueba para ver que funciona, 
  //   const id = await registro('anagarciacarrasco@outlook.es', '1234567');
  //   newTask({
  //   user_id: id,
  //   tittle:'titulo',
  //   description: 'Descripcion del task'
  //  })
});


</script>


<style scoped>

</style>