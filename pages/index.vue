<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 w-full text-center	text-white">Task Manager</h1>
    <div class="mx-auto w-full items-center">
    <TaskForm />
    <TaskList />
  </div>
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
import axios from "axios"

export default {
  components: {
    TaskForm,
    TaskList
  },
}
</script>