<template>
    <div class="text-center mt-auto">
        <h1>
            <b class="white fs-1"> Nos expecializamos en </b> <br/>
            <b class="green"> intefaces digitales que nuestros usuarios aman. </b>
        </h1>
        <button class="btn btn-lg btn-success fs-6 p-3"> HABLEMOS DE TU PROYECTO </button>
    </div>
    <div class="mt-auto p-4 w-100 text-white bg-black text-center">
        <b>EN DIRECTO</b> - SOHO está presente en el <b>DIGITALBANK MONTEVIDEO</b>. "Experiencia de usuario" por Alvaro Añón (SEO de SOHO).
        <router-link to="/event/1" class="btn btn-md btn-success mx-1">VER EVENTO</router-link>
        <router-link to="/events" class="btn btn-md btn-outline-success mx-1">PRÓXIMOS EVENTOS</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
});
</script>
