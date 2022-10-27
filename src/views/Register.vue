<template>

    <h1 class="title is-3">Register</h1>
    <p class="description m-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
    <form @submit.prevent="onSubmit()">
        <div class="field">
            <div class="control">
                <input v-model="form.name.content" class="input is-medium"
                    :class="{ input: true, 'is-danger': form.name.error }" type="text" placeholder="Nombre">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input v-model="form.email.content" class="input is-medium" type="email"
                    placeholder="yourname@gmail.com">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input v-model="form.password1.content" class="input is-medium" type="password" placeholder="******"
                    required>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input v-model="form.password.content" class="input is-medium"
                    :class="{ input: true, 'is-danger': form.password.error }" type="password" placeholder="******"
                    required>
            </div>
        </div>

        <button class="button is-block is-primary is-fullwidth is-medium" type="submit">Register</button>
        <br />
        <p>¿ya estas registrado? <router-link :to="{ name: 'login' }">login</router-link>
        </p>
    </form>


</template>


<script setup>
import { ref } from 'vue';
import { registro } from '../api';


// ref indica que una variable es reactiva
// reactiva quiere decir que cuando cambia el valor el html actualiza su valor
const form = ref({
    name: {
        content: '',
        error: false
    },
    email: {
        content: '',
        error: false
    },
    password1: {
        content: '',
        error: false
    },
    password: {
        content: '',
        error: false
    },
});

const onSubmit = async () => {
    console.log('formulario enviado');


    console.log(form.value)
    console.log(form.value.email.content)
    console.log(form.value.password.content)
    // Controlamos si el input de name tiene texto y cambiamos el valor de la variable nameError
    if (form.value.name.content.length === 0) form.value.name.error = true;
    else form.value.name.error = false;

    const registrarDatos = async () => {

        const id = await registro(form.value.email.content, form.value.password.content);

    };


    if (form.value.password1.content !== form.value.password.content) form.value.password.error = true;
    else registrarDatos();

};



// arreglar para poner un boton que muestre la contraseña
// function mostrarContrasena(){
//       var tipo = document.getElementById("password");
//       if(tipo.type == "password"){
//           tipo.type = "text";
//       }else{
//           tipo.type = "password";
//       }
//   }






</script>


<style scoped>

</style>