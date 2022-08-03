<script>
export default {
  data: function () {
    return {
      query: null,
      sort_name_asc: true,
      sortButtonLabel: "⬆",
    };
  },
  methods: {
    onClickSearchButton() {
      this.$emit("query", this.query);
    },
    onClickSortBeersByName() {
      this.$emit("sortByName", this.sort_name_asc);
      this.sort_name_asc = !this.sort_name_asc;
      this.sortButtonLabel = this.sort_name_asc ? "⬆" : "⬇";
    },
  },
};
</script>

<template>
  <div>
    <input
      placeholder="Search your favorite beer"
      class="search-input"
      name="query"
      v-model="query"
      type="text"
    />
    <button class="search-button" @click="onClickSearchButton">SEARCH</button>
  </div>
  <button class="sort-button" @click="onClickSortBeersByName">
    SORT BY NAME {{ sortButtonLabel }}
  </button>
</template>

<style scoped>
.search-input {
  width: 450px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.search-button {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.sort-button {
  padding: 4px;
  font-size: 12px;
}
</style>
