<script setup>
import { RouterLink } from "vue-router";
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper">
    <h2>{{ data.name }}</h2>
    <img :src="data.image_url" alt="beer_img" />
    <RouterLink :to="{ name: 'details', params: { id: data.id } }"
      >details</RouterLink
    >
  </div>
</template>

<style scoped>
div .wrapper {
  width: 200px;
  padding: 20px;
  border: 2px solid #1c1c1c;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 5px 5px 0px 0px #000000;
}
img {
  max-height: 50px;
}
a {
  text-decoration: none;
  color: #42b883;
}
</style>
