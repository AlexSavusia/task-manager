<template>
  <div class="w-auto mx-auto flex flex-col justify-center">
    <input type="text" v-model="searchTerm" placeholder="Поиск по названию"  class="mr-2 px-4 py-2 border border-gray-300 rounded"/>
    <ul role="list">
    <li v-for="task in filteredTasks" :key="task.id" :class="[task.status ? 'bg-teal-700' : 'bg-slate-900']" class=" flex justify-between gap-x-6 py-5 px-5 my-5 border-2 rounded-xl border-gray-400">
      <div class="flex w-full gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-xl font-semibold leading-6 text-gray-400 m-2">{{ task.title }}</p>
          <p class="text-sm font-semibold leading-6 text-gray-400 m-2">{{ task.main }}</p>
          <button @click="removeTask(task.id)" class="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-red-600/10">Удалить</button>
          <transition name="checkmark">
            <button v-if="!task.status" @click="updateTaskStatus(task.id, task.title, task.main, true)" class="inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-green-600/20">Завершить</button>
            <button v-if="task.status" @click="updateTaskStatus(task.id, task.title, task.main, false )" class="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-green-600/20">Не завершено</button>
          </transition>
        </div>
        <div class="flex items-center ">
            <div class="w-16 h-16 mr-2 relative">
              <transition name="checkmark">
                <div v-if="task.status" class="absolute inset-0 m-auto w-full h-full">
                  <svg class="fill-current text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/>
                  </svg>
                </div>
              </transition>
            </div>
          </div>
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  created() {
    this.$store.dispatch('fetchTasks')
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    },
    filteredTasks() {
      if (!this.searchTerm) {
        return this.tasks
      }
      const searchTerm = this.searchTerm.toLowerCase()
      return this.tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm)
      )
    }
  },
  methods: {
    removeTask(taskId) {
      this.$store.dispatch('removeTask', taskId)
    },
    updateTaskStatus(taskId, title, main, status) {
      this.$store.dispatch('updateTaskStatus', { taskId, title, main, status })
    }
  }
}
</script>

<style>
.checkmark-enter-active, .checkmark-leave-active {
  transition: all 0.3s ease;
}

.checkmark-enter, .checkmark-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>