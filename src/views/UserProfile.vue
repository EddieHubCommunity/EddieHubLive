<template>
  <div>
    User Profile Page
    {{ user.name }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserProfile',
  data () {
    return {
      user: {}
    }
  },
  computed: {
    ...mapGetters(['getUserByName'])
  },
  mounted () {
    const username = this.$route.params.name
    this.user = this.getUserByName(username)
  }
}
</script>
