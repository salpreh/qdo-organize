<template>
  <q-page>
    <div 
      class="q-pa-md row items-start q-gutter-md q-pr-xs-none"
      :class="$q.screen.lt.sm ? 'justify-center' : ''"
    >
      <q-card
        v-for="(note, idx) in notes"
        :key="note.title"
        flat
        bordered
        class="note-card col-12 col-sm-5 col-md-3 col-lg-3 q-mx-xs-xs q-mx-md-lg">
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
            @click="editNote(idx)"
          ></q-btn>
          <q-btn
            icon="delete"
            color="negative"
            flat
            label="delete"
            @click="deleteNote(idx)"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <NoteEditDialog
      :show="editDialog"
      :note="editedNote"
      :noteRef="noteRef"
      @cancel="editDialog = false"
      @save="saveEditedNote"
    />
  </q-page>
</template>

<script>
import NoteEditDialog from 'components/notes/NoteEditDialog'

export default {
  components: {
    NoteEditDialog
  },
  props: {
    contentMaxLen: {
      default: 180
    },
    titleMaxLen: {
      default: 28
    }
  },
  data: () =>({
    editDialog: false,
    editedNote: {
      title: '',
      content: ''
    },
    noteRef: null,
    notes: [
      {
        title: "My project",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla eu urna vehicula tempus. Donec interdum et libero id pharetra. In hac habitasse platea dictumst. Quisque aliquam ipsum at cursus tincidunt. Phasellus ex lectus, tempus non ipsum eu, finibus elementum lorem. Nullam dictum consectetur ultrices. Ut porttitor nunc vitae quam maximus accumsan. In eu enim ipsum. Vivamus semper sit amet risus ac ultricies. Morbi vel posuere sapien, sed pretium nisi. Pellentesque convallis enim a nibh cursus lobortis. \nSed efficitur orci sit amet bibendum vestibulum. Quisque tempus maximus ligula ac auctor. Sed suscipit libero lorem, eget aliquam ligula ornare et. Nunc ac sapien sem. Nullam eget neque vulputate, venenatis purus varius, lobortis neque. Suspendisse euismod est ut nibh cursus porta. Quisque elementum lorem ipsum, eget eleifend tellus efficitur ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac ipsum laoreet, pharetra metus eget, iaculis felis. Cras commodo ac nisl a varius. Nulla rutrum aliquet vehicula. Nunc et quam sed ligula euismod eleifend."
      },
      {
        title: "Research",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla eu urna vehicula tempus. Donec interdum et libero id pharetra. In hac habitasse platea dictumst. Quisque aliquam ipsum at cursus tincidunt. Phasellus ex lectus, tempus non ipsum eu, finibus elementum lorem. Nullam dictum consectetur ultrices. Ut porttitor nunc vitae quam maximus accumsan. In eu enim ipsum. Vivamus semper sit amet risus ac ultricies. Morbi vel posuere sapien, sed pretium nisi. Pellentesque convallis enim a nibh cursus lobortis. \nSed efficitur orci sit amet bibendum vestibulum. Quisque tempus maximus ligula ac auctor. Sed suscipit libero lorem, eget aliquam ligula ornare et. Nunc ac sapien sem. Nullam eget neque vulputate, venenatis purus varius, lobortis neque. Suspendisse euismod est ut nibh cursus porta. Quisque elementum lorem ipsum, eget eleifend tellus efficitur ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac ipsum laoreet, pharetra metus eget, iaculis felis. Cras commodo ac nisl a varius. Nulla rutrum aliquet vehicula. Nunc et quam sed ligula euismod eleifend."
      },
      {
        title: "Code recipes",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla eu urna vehicula tempus. Donec interdum et libero id pharetra. In hac habitasse platea dictumst. Quisque aliquam ipsum at cursus tincidunt. Phasellus ex lectus, tempus non ipsum eu, finibus elementum lorem. Nullam dictum consectetur ultrices. Ut porttitor nunc vitae quam maximus accumsan. In eu enim ipsum. Vivamus semper sit amet risus ac ultricies. Morbi vel posuere sapien, sed pretium nisi. Pellentesque convallis enim a nibh cursus lobortis. \nSed efficitur orci sit amet bibendum vestibulum. Quisque tempus maximus ligula ac auctor. Sed suscipit libero lorem, eget aliquam ligula ornare et. Nunc ac sapien sem. Nullam eget neque vulputate, venenatis purus varius, lobortis neque. Suspendisse euismod est ut nibh cursus porta. Quisque elementum lorem ipsum, eget eleifend tellus efficitur ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac ipsum laoreet, pharetra metus eget, iaculis felis. Cras commodo ac nisl a varius. Nulla rutrum aliquet vehicula. Nunc et quam sed ligula euismod eleifend."
      },
      {
        title: "Set up notes",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in nulla eu urna vehicula tempus. Donec interdum et libero id pharetra. In hac habitasse platea dictumst. Quisque aliquam ipsum at cursus tincidunt. Phasellus ex lectus, tempus non ipsum eu, finibus elementum lorem. Nullam dictum consectetur ultrices. Ut porttitor nunc vitae quam maximus accumsan. In eu enim ipsum. Vivamus semper sit amet risus ac ultricies. Morbi vel posuere sapien, sed pretium nisi. Pellentesque convallis enim a nibh cursus lobortis. \nSed efficitur orci sit amet bibendum vestibulum. Quisque tempus maximus ligula ac auctor. Sed suscipit libero lorem, eget aliquam ligula ornare et. Nunc ac sapien sem. Nullam eget neque vulputate, venenatis purus varius, lobortis neque. Suspendisse euismod est ut nibh cursus porta. Quisque elementum lorem ipsum, eget eleifend tellus efficitur ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac ipsum laoreet, pharetra metus eget, iaculis felis. Cras commodo ac nisl a varius. Nulla rutrum aliquet vehicula. Nunc et quam sed ligula euismod eleifend."
      }
    ]
  }),
  methods: {
    editNote(noteId) {
      this.noteRef = noteId
      this.editedNote = this.notes[noteId]
      this.editDialog = true
    },
    saveEditedNote(editedNote) {
      const noteId = editedNote['noteRef']
      if (!(noteId === null)) {
        this.notes[noteId] = editedNote['note']
      }

      this.editDialog = false
    },
    deleteNote(noteId) {
      this.notes.splice(noteId, 1)
    }
  }
}
</script>

<style lang="sass">
  .note-card
    background-color: $primary-lighter
</style>