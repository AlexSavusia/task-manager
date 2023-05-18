<template>
  <div class="w-auto mx-auto">
    <form @submit.prevent="addTask" class="mb-4">
    <div class="flex flex-col justify-center">
    <input class="px-4 py-2 border border-gray-300 my-2 mx-auto w-1/3 rounded" type="text" v-model="title" placeholder="Заголовок задачи" />
    <textarea class="px-4 py-2 border border-gray-300 my-2 mx-auto w-1/3 rounded" type="text" v-model="main" placeholder="описание" />
    <button class="px-4 py-2 bg-blue-500 text-white my-2 mx-auto w-1/3 rounded" type="submit">Добавить задачу</button>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      main: ''
    }
  },
  methods: {
    addTask() {
      const task = {
        id: Date.now(),
        title: this.title,
        main: this.main,
        status: false
      }
      this.$store.dispatch('addTask', task)
      this.title = ''
      this.main = ''
    }
  }
}
</script>