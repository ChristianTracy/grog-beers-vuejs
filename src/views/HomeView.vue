<script>
import BeerList from "@/components/BeerList.vue";
import SearchBar from "@/components/SearchBar.vue";

const API_URL = `https://api.punkapi.com/v2/`;

export default {
  data: () => ({
    beers: [],
    resource: "beers",
    loading: false,
  }),
  created() {
    this.searchClicked(null);
  },
  methods: {
    async searchClicked(value) {
      this.loading = true;
      let url = `${API_URL}${this.resource}`;
      if (value) {
        url = `${url}?beer_name=${value}`;
      }
      this.beers = await (await fetch(url)).json();
      this.loading = false;
    },
    sortByName(asc) {
      if (asc) {
        this.beers = this.beers.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        this.beers = this.beers.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
    },
  },
  components: { BeerList, SearchBar },
};
</script>

<template>
  <div class="loading-wrapper">
    <h1 v-if="loading">⏳ Loading...</h1>
  </div>
  <div v-if="!loading" class="welcome-wrapper">
    <div class="search-bar-wrapper">
      <SearchBar @sortByName="sortByName" @query="searchClicked" />
    </div>
    <div class="beer-list-wrapper">
      <BeerList :list="beers" />
    </div>
  </div>
</template>

<style>
.loading-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.welcome-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-bar-wrapper {
  margin-top: 25px;
}

.beer-list-wrapper {
  margin-top: 25px;
}
</style>
