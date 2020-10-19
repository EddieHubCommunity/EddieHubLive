import users from '@/users.json'

export default {
  async getUsers ({ commit, state }) {
    const requests = []
    users.forEach(user =>
      requests.push(fetch(`https://api.github.com/users/${user.username}`))
    )
    const data = await Promise.all(requests)
    const payload = await Promise.all(data.map(user => user.json()))
    commit('updateUsers', payload)
  }
}
