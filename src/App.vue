<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <h1>GROG 🍻 BEER DIRECTORY</h1>
    </div>
    <img alt="Beers" class="logo" src="@/assets/monkey_island.gif" />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

header img {
  width: 450px;
}
</style>
