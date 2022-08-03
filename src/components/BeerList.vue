<script setup>
import BeerItem from "@/components/BeerItem.vue";
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="beers-grid">
    <li :key="beer.id" v-for="beer in list">
      <BeerItem :data="beer" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.beers-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0px;
}
</style>
