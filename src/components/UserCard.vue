<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img :src="user.avatar_url" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.bio }}</p>
        <button
          @click="$router.push(`/${user.login}`)"
          class="btn btn-primary"
        >
          View Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
