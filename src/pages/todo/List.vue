<template>
  <q-page>
    <div class="row justify-center bg-primary">
      <q-input
        @keyup.enter.native="createTask"
        v-model="taskName"
        color="accent"
        maxlength="64"
        placeholder="New Task"
        class="q-my-md q-mx-sm q-pb-sm q-px-sm col col-md-10 bg-white"
      >

        <template v-slot:append>
          <q-btn
            @click="createTask"
            round
            dense
            unelevated
            color="accent"
            icon="add"
            :class="{'disabled': !taskName}"
          />
        </template>
      </q-input>
    </div>
    <q-list padding class="q-mt-md">
      <TaskItem v-for="(task, i) in tasks" :task="task" :key="i" :taskId="i" @taskDelete="deleteTask" />
    </q-list>

  </q-page>
    
</template>

<script>
import TaskItem from 'components/todo/TaskItem'
export default {
  components: {
    TaskItem
  },
  data: () => ({
    'taskName': '',
    'tasks': [
      {
        name: 'Work on Quasar',
        description: '',
        done: false,
        separate: false,
      },
      {
        name: 'Clean Teeth',
        description: '',
        done: false,
        separate: true,
      },
      {
        name: 'Get the stuff',
        description: '',
        done: true,
        separate: false,
      },
    ]
  }),
  methods: {
    createTask() {
      if (!this.taskName) return

      this.tasks.push({
        name: this.taskName,
        description: '',
        done: false,
        separate: false,
      })
      this.taskName = ''
    },
    deleteTask(taskId) {
      this.tasks.splice(taskId, 1)
    }
  }
}
</script>

<style lang="sass">
  .task-done
    background-color: $primary-lighter
    .task-text-done
      color: $grey-5
      text-decoration: line-through
</style>