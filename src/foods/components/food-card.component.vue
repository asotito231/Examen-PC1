<template>
  <pv-card>
    <template #content>
      <p class="flex justify-content-center">Name: {{food.generic_name}}</p>
      <p class="flex justify-content-center">Categories: {{food.categories}}</p>
      <p class="flex justify-content-center">Stores: {{food.stores}}</p>
      <div class="flex justify-content-center">
        <img :alt="food.generic_name" :src="food.image_front_url">
      </div>
      <div class="flex justify-content-center">
        <img :alt="food.generic_name" :src="food.image_ingredients_url">
      </div>
      <p class="flex justify-content-center">Categories imported: {{food.categories_imported}}</p>
    </template>
  </pv-card>
</template>


<script>
export default {
  name: "food-card",
  props: {
    food: null,
  }
}
</script>
<style scoped>
</style>