<template>
  <q-card
    flat
    bordered
    class="note-card col-12 col-sm-5 col-md-3 col-lg-3 q-mx-xs-xs q-mx-sm-lg">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6"> {{note.title | strMaxLen(titleMaxLen)}}</div>
        </div>
      </div> 
    </q-card-section>

    <q-card-section class="q-pt-none"> {{note.content | strMaxLen(contentMaxLen)}} </q-card-section>

    <q-separator />

    <q-card-actions class="bg-grey-1">
      <q-btn
        icon="edit"
        color="primary"
        flat
        label="edit"
        @click="$emit('edit', noteId)"
      ></q-btn>
      <q-btn
        icon="delete"
        color="negative"
        flat
        label="delete"
        @click="$emit('delete', noteId)"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    note: {
      required: true,
      type: Object
    },
    noteId: {
      required: true
    },
    contentMaxLen: {
      default: 180
    },
    titleMaxLen: {
      default: 28
    }
  }
}
</script>