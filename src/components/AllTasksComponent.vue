<template>
    <h1>COMPONENTE ALL TASK</h1>

    <VisualizarPost :task="props.tarea" />

</template>


<script setup>
import VisualizarPost from './VisualizarPost.vue';
import { defineProps } from 'vue';

const props = defineProps({tarea: Object});

</script>


<style scoped>
</style>