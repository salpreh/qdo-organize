<template>
  <q-page>
    <div 
      class="q-pa-md row items-start q-gutter-md q-pr-xs-none"
      :class="$q.screen.lt.sm ? 'justify-center' : ''"
    >
      <NoteCard
        v-for="(note, idx) in notes"
        :key="note.name"
        :noteId="idx"
        :note="note"
        @edit="editNote"
        @delete="onDeleteDialog"
      />
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
import NoteCard from 'components/notes/NoteCard'

export default {
  components: {
    NoteEditDialog,
    NoteCard
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
    onDeleteDialog(noteId) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Do you want to delete the note?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        this.deleteNote(noteId)
      })
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