<template>
  <pv-card>
    <template #content>
      <p>Name: {{ food.generic_name }}</p>
      <p>Categories: {{ food.categories }}</p>
      <p>Stores: {{ food.stores }}</p>
      <div>
        <img :alt="food.generic_name" :src="food.image_front_url">
      </div>
      <div>
        <img :alt="food.generic_name" :src="food.image_ingredients_url">
      </div>
      <p>Categories imported: {{ food.categories_imported }}</p>
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