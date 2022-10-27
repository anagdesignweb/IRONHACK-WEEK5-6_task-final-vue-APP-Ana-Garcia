<template>

    <section class="boxi">
        <div class="columns is-multiline is-flex is-justify-content-center is-align-items-center">
            <div class="column is-10 register">
                <div class="columns">
                    <div class="column left is-flex-direction-column is-justify-content-center is-align-items-center">
                        <h1 class="title is-1">To-Do Website</h1>
                        <h2 class="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam.</p>
                    </div>
                    <div class="column right has-text-centered">

                        <section>
                            <router-view></router-view>
                        </section>

                    </div>
                </div>
            </div>

        </div>
    </section>


</template>


<script setup>
</script>


<style scoped>

</style>