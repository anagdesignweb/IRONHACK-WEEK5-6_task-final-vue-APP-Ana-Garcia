<template>

    <div class="post" v-for="task in tasksSupabase" :key="task.id">
        <header>
            <div>{{task.user_id}}</div>
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

    // iteracion 4
    const datos = ref([
        { titulo: "titulo1", descripcion: "descripcion1", contenido: "contenido1" },
        { titulo: "titulo2", descripcion: "descripcion2", contenido: "contenido2" },
        { titulo: "titulo3", descripcion: "descripcion3", contenido: "contenido3" },
        { titulo: "titulo4", descripcion: "descripcion4", contenido: "contenido4" },
        { titulo: "titulo5", descripcion: "descripcion5", contenido: "contenido5" },
    ]);

    const tasksSupabase = ref([]);
    
    onMounted(async () => {

        const response = await getTasks();
        console.log(response)
        console.log(response.data[0])
        tasksSupabase.value = await response.data;
        console.log(tasksSupabase.value)
        console.log(datos)
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