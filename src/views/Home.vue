<template>
    <div class="background vh-100">
        <NavBar />
        <div class="d-flex justify-content-center align-items-center flex-column h-100">
            <Header />
        </div>
    </div>
    <div class="container-fluid bg-dark">
        <About />
        <FeaturedProjects :projects="projects" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/views/NavBar.vue';
import Header from '@/components/Home/Header.vue';
import About from '@/components/Home/About.vue';
import FeaturedProjects from '@/components/Home/ShowFeaturedProjects.vue';

import ProjectDataService from '@/services/ProjectDataService';
import ResponseData from '@/types/ResponseData';

export default defineComponent({
    name: 'Home',
    components: {
        NavBar,
        Header,
        About,
        FeaturedProjects
    },
    data() {
        return {
            projects: [
                {
                    title:"Projecto prueba1",
                    image:"https://source.unsplash.com/collection/190728/1600x900",
                    description:"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
                    tags:[
                        {name:"ui"},
                        {name:"ux"},
                        {name:"java"}
                    ]
                },
                {
                    title:"Projecto prueba1",
                    image:"https://source.unsplash.com/collection/190727/1600x900",
                    description:"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
                    tags:[
                        {name:"ui"},
                        {name:"ux"},
                        {name:"java"}
                    ]
                },
                {
                    title:"Projecto prueba1",
                    image:"https://source.unsplash.com/collection/190729/1600x900",
                    description:"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
                    tags:[
                        {name:"ui"},
                        {name:"ux"},
                        {name:"java"}
                    ]
                }
            ]
        }
    },
    methods:{
        loadProjects() {
            ProjectDataService.findByFeatured(1)
            .then( ( response: ResponseData )=> {
                if ( response.status === 200 ) {
                    this.projects = response.data
                }   
            })
            .catch( (error) => {
                console.error(error)
            }) 
        }    
    },
    mounted() {
        this.loadProjects()
    }
})
</script>

<style lang="scss" scoped>
.background {
    background-image:url(../assets/background.jpg);
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
}
</style>