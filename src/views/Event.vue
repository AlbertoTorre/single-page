<template>
    <h1> Event </h1>
    <ShowEvent :event="event" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ShowEvent from '@/components/Event/ShowEvent.vue';
import EventDataService from '@/services/EventDataService';
import ResponseData from '@/types/ResponseData';
import Event from '@/types/Event'

export default defineComponent({
    components:{
        ShowEvent
    },
    name: 'Event',
    data() {
        return {
            event: {} as Event
        }
    },
    methods:{
        loadEvents() {
            EventDataService.get(1)
            .then( ( response: ResponseData )=> {
                if ( response.status === 200 ) {
                    this.event = response.data
                }
            })
            .catch( (err) => {
                console.error(err)
            }) 
        }
    },
    mounted() {
        this.loadEvents()
    }
})
</script>
