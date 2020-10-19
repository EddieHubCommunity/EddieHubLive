<template>
  <div class="home-page">
    <div class="container">
      <div class="row">
        <UserCard
          v-for="user in users"
          :key="user.username"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'Home',
  components: {
    UserCard
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  mounted () {
    this.getUsers()
  }
}
</script>
