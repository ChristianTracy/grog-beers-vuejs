<script setup>
defineProps({
  beer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>{{ beer.name }}</h2>
    <img :src="beer.image_url" alt="beer_img" />
    <p>{{ beer.description }}</p>
    <p><strong>IBU:</strong> {{ beer.ibu }}</p>
    <p><strong>ABV:</strong> {{ beer.abv }}</p>
  </div>
</template>

<style scoped>
img {
  max-height: 100px;
}
</style>
