<template>
    <div class="container-fluid py-5 mt-5 text-center">
        <div class="container bg-gray-custom">
            <h1> <b class="white"> Proyectos destacados </b> </h1>
            <div class="mx-auto border-custom mb-3"></div>
            <p class="text-secondary fs-4">
                Aportamos estrategia e innovación centrada en el usuario y los objetivos
                de negocio de tu proyecto. Cotrabajando mejoraremos tu tasa de conversion, KPI's y los resultados 
                de tu actual publicidad PPC (pay per click). 
            </p>
        </div>
    </div>
    <div class="container-fluid">
        <card-project :key="'p'+idx" v-for="(project, idx) in projects" :project="project" :structure="changeStructure()" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Project from '@/types/Project'

import CardProject from '@/components/Home/CardProject.vue'

export default defineComponent({
    components:{
        CardProject
    },
    name: 'ShowFeaturedProjects',
    data(){
        return {
            structure:0
        }
    },
    props: {
        projects: Object as PropType<Project>
    },
    methods:{
        changeStructure() {
            if (this.structure < 3) {
                this.structure++
            } else {
                this.structure=0
            }
            return this.structure;
        }
    }
})
</script>