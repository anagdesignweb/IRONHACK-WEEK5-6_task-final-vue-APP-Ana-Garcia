<template>

    <div class="container m-3">
        <nav class=" is-flex is-justify-content-space-between">
            <div>
                <div>
                    <router-link :to="{name: 'login'}" class="button is-secundary mr-2">Login</router-link>
                    <router-link :to="{name: 'register'}" class="button is-secundary mr-2">Register</router-link>
                    <router-link :to="{name: 'home'}" class="button is-secundary mr-2">Home</router-link>
                    <router-link :to="{name: 'user', params:{id:'ana'}}" class="button is-secundary mr-2">variable del user</router-link>
                </div>

            </div>
            <div>
                <div>
                    <div>
                        <div class="buttons">
                            <a class="button is-secundary"><strong>Log Out</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>

</template>
<script setup>

</script>
<style scoped>

</style>