<template>
  <pv-card>
    <template #content>
      <h1 class="flex justify-content-center">Name: {{food.generic_name}}</h1>
      <h2 class="flex justify-content-center">Categories: {{food.categories}}</h2>
      <h2 class="flex justify-content-center">Stores: {{food.stores}}</h2>
      <div class="flex justify-content-center">
        <img :alt="food.generic_name" :src="food.image_front_url">
      </div>
      <div class="flex justify-content-center">
        <img :alt="food.generic_name" :src="food.image_ingredients_url">
      </div>
      <h3 class="flex justify-content-center">Categories imported: {{food.categories_imported}}</h3>
    </template>
  </pv-card>
</template>


<script>
export default {
  name: "food-information-card",
  props: {
    food: null,
  }
}
</script>
<style scoped>
</style>