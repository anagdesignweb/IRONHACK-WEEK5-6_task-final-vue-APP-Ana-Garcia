<template>
    
    <VisualizarPost v-if="props.tarea.completed" :task="props.tarea"/>


</template>

<script setup>
import VisualizarPost from './VisualizarPost.vue';
import { defineProps } from 'vue';

console.log(props.tarea.completed); 
const props = defineProps({tarea: Object});

</script>

<style scoped>
</style>