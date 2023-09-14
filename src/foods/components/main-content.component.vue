<script>
import FoodInformationCard from "./food-card.component.vue";
export default {
  name: 'main-content',
  components: {FoodInformationCard},
  props:{
    foods: Array,
  }
}
</script>

<template>
  <div v-for="food in foods">
    <food-information-card :food="food"></food-information-card>
  </div>
</template>

<style scoped>

</style>