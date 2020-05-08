<template>
  <div id="app" v-masonry transition-duration="0.9s">
      <md-card md-with-hover   v-for="note in AllNotes" :key="note.id">
      <md-ripple >
        <md-card-header>
          <!-- <div class="md-title"></div> -->
          <div class="md-subhead"></div>
        </md-card-header>

        <md-card-content>
            <div class="wordBreakTitle">{{note.title}}</div>
            <div class="wordBreakDesc">{{note.description}}</div>
                         </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>
<style lang="scss" scoped>
  .md-card {
    width: 320px;
    max-height: 600px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .wordBreakTitle {
  word-break: break-all;
  /* // text-overflow: hide; */
  /* // // width: 250px; */
  /* // white-space: nowrap; */
  /* // // overflow: hidden; */
  /* // text-overflow:ellipsis; */
  /* // max-height: 3.6em; */
  /* // line-height: 1.8em; */
  letter-spacing: 0.00625em;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;

  display: block; /* or inline-block */
  text-overflow: ellipsis;
  /* //  overflow: hidden; */
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
}
  .wordBreakDesc {
  margin-top: 10px;
  word-break: break-all;
  /* // text-overflow: hide; */
  /* // // width: 250px; */
  /* // white-space: nowrap; */
  /* // // overflow: hidden; */
  /* // text-overflow:ellipsis; */
  /* // max-height: 3.6em; */
  /* // line-height: 1.8em; */
  letter-spacing: 0.00625em;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;

  display: block; /* or inline-block */
  text-overflow: ellipsis;
  /* //  overflow: hidden; */
  word-wrap: break-word;
  overflow: hidden;
  max-height: 27.6em;
}
</style>

<script>
export default {
  name: 'DisplayNote',
  data () {
    return {

    }
  },
  props: ['AllNotes']
}
</script>
