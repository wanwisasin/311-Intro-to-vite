<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { Event } from '@/types'
import EventService from '@/services/EventService'
const event = ref<Event | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
onMounted(() => {
  EventService.getEvent(parseInt(props.id))
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <rouner-link :to="{ name: 'event-detail-view', params: { id } }"> Details </rouner-link>
      |
      <rouner-link :to="{ name: 'event-register-view', params: { id } }"> Register </rouner-link>
      |
      <rouner-link :to="{ name: 'event-edit-view', params: { id } }"> Edit </rouner-link>
    </nav>
    <p>Edit event here</p>
  </div>
</template>
