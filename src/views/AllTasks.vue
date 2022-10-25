<template>
    <H1>TODAS</H1>

    
    <VisualizarPost v-for="task in tasksSupabase" :key="task.id" :title="task.title" :description="task.description"/>
    
    <div >

    </div>
</template>


<script setup>
    import VisualizarPost from '../components/VisualizarPost.vue';
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import { useAuthStore } from '../store/auth'
    import { getTasks } from '../api'

    const authStore = useAuthStore();
    const tasksSupabase = ref([]);

    

    onMounted(async () => {
        const response = await getTasks();
        console.log(response)
        // console.log(response.data[0])
        tasksSupabase.value = await response.data;
        // console.log(tasksSupabase.value)
    });


</script>


<style scoped>
</style>