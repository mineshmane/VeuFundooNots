<template>
  <div class="hello">
    <login></login>
  </div>
</template>

<script>
import login from '@/components/login.vue'
export default {
  components: {
    login: login
  },
  name: 'hello',
  data () {
    return {}
  }
}
</script>

<style>
</style>
