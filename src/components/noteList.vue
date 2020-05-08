<template>
    <div>
        <DisplayNote  v-bind:AllNotes="NotesArray"></DisplayNote>
    </div>
</template>
<script>
import DisplayNote from '../components/DisplayNotes'
import { getNotes } from '../servies/noteService.js'
export default {
  name: 'NoteList',
  data () {
    return {
      NotesArray: []
    }
  },
  components: {
    DisplayNote
  },
  methods: {
    getAllNotes () {
      getNotes().then((response) => {
        console.log(response.data.data.data)
        this.NotesArray = response.data.data.data
        console.log(this.NotesArray)
      })
    }
  },
  mounted () {
    this.getAllNotes()
  }
}
</script>
