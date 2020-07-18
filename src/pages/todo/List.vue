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
          />
        </template>
      </q-input>
    </div>
    <q-list padding class="q-mt-md">
      <!-- <q-item-label header>General</q-item-label> -->

      <q-item
        v-for="(task, i) in tasks"
        :key="task.name"
        tag="label"
        :class="{'task-done': task.done}"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.done" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="task-text-done">{{task.name}}</q-item-label>
          <q-item-label
            v-if="task.description"
            caption
          >
            {{task.description}}
          </q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-btn
            @click="deleteTask(i)"
            outline
            round
            color="negative"
            icon="delete" />
        </q-item-section>
      </q-item>
      <!-- <q-separator spaced /> -->
    </q-list>

  </q-page>
    
</template>

<script>
export default {
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
        this.tasks.push({
          name: this.taskName,
          description: '',
          done: false,
          separate: false,
        })
        this.taskName = ''
      },
      deleteTask(taskId) {
        this.tasks.pop(taskId)
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