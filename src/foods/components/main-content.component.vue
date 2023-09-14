<template>
  <div v-for="food in foods">
    <food-information-card :user="food"></food-information-card>
  </div>
</template>

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

<style scoped>

</style>