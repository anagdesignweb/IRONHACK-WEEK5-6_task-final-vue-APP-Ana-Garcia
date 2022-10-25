<template>

    <div class="section container backg-color-blue">
        <EscribirPost />
    </div>

    <div class="tabs">
        <ul>
            <li class="is-active"><a>Todas</a></li>
            <li><a>Completas</a></li>
            <li><a>Incompletas</a></li>
        </ul>
    </div>

    <div class="section container backg-color-yellow">
        <VisualizarPost/>

    </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import EscribirPost from '../components/EscribirPost.vue';
import VisualizarPost from '../components/VisualizarPost.vue';
import Section from '../components/Section.vue';
import { useAuthStore } from '../store/auth';

const route = useRoute();
const authStore = useAuthStore();


</script>


<style scoped>

</style>