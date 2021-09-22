<template>
    <h1>Evento: {event.title}</h1>
    <p>{event.description}</p>
    <p>
        <span class="badge bg-light text-dark" 
              :key="'t'+idx" 
              v-for="(tag, idx) in event.tags"> {tag} </span>
    </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Event from '@/types/Event'

export default defineComponent({
    name: 'Event',
    props: {
      type: Object as PropType<Event>,
      default: {}
    }
})
</script>