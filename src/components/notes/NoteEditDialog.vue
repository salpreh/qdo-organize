<template>
  <q-dialog persistent v-model="show">
    <q-card class="note-dialog q-pa-sm">

      <q-card-section class="text-h6">
        {{ dialogTitle }}
      </q-card-section>

      <q-card-section class="note-form">
        <div
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="editNote.title"
            label="Title"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Please type something',
              val => titleMaxLen === 0 || val.length < titleMaxLen 
                || `Title max length exceded (${titleMaxLen})`
            ]"
          />

          <q-input
            outlined
            type="textarea"
            rows="14"
            class="note-content-input"
            v-model="editNote.content"
            label="Content"
            lazy-rules
            :rules="[
              // val => val !== null && val !== '' || 'Please type something',
              val => contentMaxLen === 0 || val.length < contentMaxLen 
                || `Content max length exceded (${contentMaxLen})`
            ]"
          />
        </div>
      </q-card-section>
      <q-card-section class="absolute-bottom-left">
          <div>
            <q-btn label="Save" type="submit" @click="onSave" color="primary"/>
            <q-btn label="Cancel" @click="$emit('cancel')" flat class="q-ml-sm" />
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    show: {
      required: true
    },
    dialogTitle: {
      type: String,
      default: 'Edit Note'
    },
    titleMaxLen: {
      type: Number,
      default: 64
    },
    contentMaxLen: {
      type: Number,
      default: 0
    },
    note: {
      type: Object,
      required: true
    },
    noteRef: {
      default: null
    }
  },
  data: () => ({
    editNote : {
      title: '',
      content: ''
    }
  }),
  methods: {
    onSave() {
      this.$emit(
        'save',
        {
          'noteRef': this.noteRef,
          'note': this.editNote
        }
      )
    }
  },
  watch: {
    show(newVal, oldVal) {
      if (newVal === true) {
        this.editNote = Object.assign({}, this.note)
      }
    }
  }
}
</script>

<style lang="sass">
$dialog-height: calc(100vh - 48px)
.q-dialog__inner--minimized > .note-dialog
  max-width: 920px
  width: 100vw
  max-height: 600px
  height: $dialog-height

</style>