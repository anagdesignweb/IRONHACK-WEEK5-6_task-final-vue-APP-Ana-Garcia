<template>

    <!-- iteracion 3 -->
    <div>
        <p v-if="mostrarTexto"> muestra el texto si es true </p>
    </div>

    <!-- iteracion 4 -->
    <div>
        <ul>
            <li v-for="dato in datos" :key="dato.titulo">
            <h2>{{dato.titulo}}</h2>
            <p>{{dato.descripcion}}</p>
            <p>{{dato.contenido}}</p>
            </li>
        </ul>
    </div>

</template>


<script setup>
    import { ref } from 'vue';
    // iteracion 2

    const texto = () => {
    return ref("texto")
    }

    //  iteracion 3 
    let mostrarTexto = true;

    // iteracion 4
    const datos = ref([
        {titulo: "titulo1", descripcion: "descripcion1", contenido: "contenido1" },
        {titulo: "titulo2", descripcion: "descripcion2", contenido: "contenido2" },
        {titulo: "titulo3", descripcion: "descripcion3", contenido: "contenido3" },
        {titulo: "titulo4", descripcion: "descripcion4", contenido: "contenido4" },
        {titulo: "titulo5", descripcion: "descripcion5", contenido: "contenido5" },
    ]);


</script>


<style scoped>
</style>