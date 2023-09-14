<template>
  <div v-for="user in users">
    <food-information-card :user="user"></food-information-card>
  </div>
</template>

<script>
import FoodInformationCard from "./food-card.component.vue";
export default {
  name: 'main-content',
  components: {FoodInformationCard},
  props:{
    users: Array,
  }
}
</script>

<style scoped>

</style>