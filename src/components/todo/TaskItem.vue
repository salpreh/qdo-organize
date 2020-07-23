<template>
  <!-- <q-item-label header>General</q-item-label> -->
  <q-item
    tag="label"
    :class="{'task-done': task.done}"
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="task.done" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="task-text-done">{{task.name}}</q-item-label>
      <q-item-label v-if="task.description" caption>{{task.description}}</q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-btn
        v-if="task.done"
        @click="$emit('taskDelete', taskId)"
        flat
        round
        color="negative"
        icon="delete" />
    </q-item-section>
  </q-item>
  <!-- <q-separator spaced /> -->
</template>

<script>
export default {
  props: {
    task: Object,
    taskId: [String, Number],
  },
}
</script>
