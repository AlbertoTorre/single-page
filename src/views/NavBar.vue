<template>
    <nav class="navbar navbar-expand navbar-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand abs" href="#">
                <img alt="Soho logo" src="../assets/logo-soho.png"/>
            </a>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapseNavbar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Casos de éxito</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Únete a nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"NavBar"
})
</script>

<style lang="scss" scoped>
.navbar-dark {
    background-color: #011923c4;
    .navbar-nav {
        .nav-item {
            margin:0 10px;
        }
        a {
            color:#fff;
        }
        a.router-link-active {
            border-bottom: 2px solid #02B300;
        }
    }
}
</style>


