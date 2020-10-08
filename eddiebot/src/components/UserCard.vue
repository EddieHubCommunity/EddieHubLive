<template>
  <div class="col">
    <div class="card" style="width: 18rem">
      <img :src="user.avatar_url" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.bio }}</p>
        <a :href="user.html_url" class="btn btn-primary">Go somewhere</a>
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
