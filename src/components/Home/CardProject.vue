<template>
        <div class="row bg-blue-custom" v-if="structure==0" >
            <div class="col text-left bg-black-1 p-0 pt-4">
                <img :src="project.image" class="img-fluid float-start" alt="">
            </div>
            <div class="col bg-black-2">
                <div class="d-flex justify-content-center align-items-center flex-column h-100">
                    <div class="text-left m-auto mx-5 px-4">
                        <h2> <b class="white"> {{ project.title }} </b> </h2>
                        <p class="fs-5"> {{ project.description }} </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row bg-red-custom" v-else-if="structure==1">
            <div class="col bg-black-2">
                <div class="d-flex justify-content-center align-items-center flex-column h-100">
                    <div class="text-left m-auto mx-5 px-4">
                        <h2> <b class="white"> {{ project.title }}</b> </h2>
                        <p class="fs-5">{{ project.description }}</p>
                    </div>
                </div>
            </div>
            <div class="col text-left bg-black-1 p-0 pt-4">
                <img :src="project.image" class="img-fluid float-start" alt="">
            </div>
        </div>
        <div class="row bg-white-custom" v-else-if="structure==2">
            <div class="col text-left bg-black-1 p-0 pt-4">
                <img :src="project.image" class="img-fluid float-start" alt="">
            </div>
            <div class="col bg-black-2">
                <div class="d-flex justify-content-center align-items-center flex-column h-100">
                    <div class="text-left m-auto mx-5 px-4">
                        <h2> <b>  {{ project.title }} </b> </h2>
                        <p class="fs-5"> {{ project.description }} </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Project from '@/types/Project'

export default defineComponent({
    props: {
        project: Object as PropType<Project>,
        structure: Number
    }
})
</script>

<style lang="scss" scoped>

@mixin p-custom {
    p {
        color: #ccc;
    }
}

.container-fluid {
    .bg-blue-custom {
        color:#fff;
        background-color:#223B82;
        @include p-custom;
    }
    .bg-red-custom {
        color:#fff;
        background-color:#C92C3A;
        @include p-custom;
    }
    .bg-white-custom {
        color:#444;
        background-color:#fff;
    }
}
</style>
