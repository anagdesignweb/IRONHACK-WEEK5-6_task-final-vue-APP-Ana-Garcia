<template>

    <section class="hero is-fullheight backg-color-pink">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form class="box" @submit.prevent="onSubmit()">
                            <div class="field has-text-centered">
                                <h1>Register</h1>
                            </div>
                            <div class="field">
                                <label class="label">Name</label>
                                <div class="control">
                                    <input v-model="form.name.content" class="input"
                                        :class="{ input: true, 'is-danger': form.name.error }" type="text"
                                        placeholder="Nombre">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input v-model="form.email.content" class="input" type="email"
                                        placeholder="yourname@gmail.com">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input v-model="form.password1.content" class="input" type="text"
                                        placeholder="******" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Repeat Password</label>
                                <div class="control">
                                    <input v-model="form.password.content" class="input"
                                        :class="{ input: true, 'is-danger': form.password.error }" type="text"
                                        placeholder="******" required>
                                </div>
                            </div>
                            <div class="field">
                                <button class="button is-inline-block is-success" type="submit">Register</button>
                            </div>
                            <div class="field">
                                <p>¿ya estas registrado? <router-link :to="{ name: 'login' }">login</router-link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


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