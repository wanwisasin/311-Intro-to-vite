import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentListView from '@/views/StudentListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView
    },
    {
      path: '/event/5928101',
      name: 'event-detail-view',
      component: EventDetailView
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    },
    {
      path: '/students',
      name: 'student',
      component: StudentListView
    }
  ]
})

export default router
