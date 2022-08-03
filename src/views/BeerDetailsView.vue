<script>
import BeerDetail from "@/components/BeerDetail.vue";

const API_URL = `https://api.punkapi.com/v2/`;

export default {
  data: () => ({
    beer: null,
    loading: false,
  }),
  created() {
    this.searchBeerDetails();
  },
  methods: {
    async searchBeerDetails() {
      this.loading = true;
      const beerId = this.$route.params.id;
      let url = `${API_URL}beers/${beerId}`;
      this.beer = await (await fetch(url)).json();
      this.beer = this.beer[0];
      this.loading = false;
    },
  },
  components: { BeerDetail },
};
</script>

<template>
  <div class="beer-details-wrapper">
    <h1 v-if="loading">⏳ Loading...</h1>
    <div v-if="!loading" class="detail-component-wrapper">
      <BeerDetail :beer="this.beer" />
    </div>
  </div>
</template>

<style>
.beer-details-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.detail-component-wrapper {
  width: 450px;
}
</style>
