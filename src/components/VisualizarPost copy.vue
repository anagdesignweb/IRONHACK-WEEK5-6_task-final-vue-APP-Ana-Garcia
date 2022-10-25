
<template>

    <div class="post" v-for="task in tasksSupabase" :key="task.id">
        <header>
            <div class="has-text-weight-bold">{{task.title}}</div>
            <div>fecha</div>
        </header>
        <div>
            {{task.description}}
        </div>
        <div>
            <button>completada</button>
            <button>modificar</button>
            <button>borrar</button>
        </div>
    </div>

</template>

<script setup>

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
.post {
    margin-top: 10px;
    border: solid 1px rgb(255, 255, 255);
    padding: 1rem;
}

header {
    display: flex;
    justify-content: space-between;
}
</style>