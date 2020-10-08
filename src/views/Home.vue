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
import UserCard from '@/components/UserCard.vue'
import users from '@/users.json'

export default {
  name: 'Home',
  components: {
    UserCard
  },
  data () {
    return {
      users: users
    }
  },
  async mounted () {
    const requests = []
    this.users.forEach((user) => requests.push(fetch(`https://api.github.com/users/${user.username}`)))
    const data = await Promise.all(requests)
    this.users = await Promise.all(data.map((user) => user.json()))
  }
}
</script>
