<template>
  <div class="w-full">
    <about-food></about-food>
    <main-content :foods="foods"></main-content>
    <footer-content></footer-content>
  </div>
</template>
<script>
import {FoodsApiService} from "./foods/services/foods-api.service.js";
import MainContent from "./foods/components/main-content.component.vue";
import FooterContent from "./foods/components/footer-content.component.vue";
import AboutFood from "./foods/components/about-food-content.component.vue"
export default {
  name: 'App',
  components: {AboutFood, FooterContent, MainContent},
  data() {
    return {
      foods: null,
      foodsApi: new FoodsApiService()
    }
  },
  created() {
    this.getFood();
  },
  methods: {
    getFood(){
      this.foodsApi.getFood().then(response=>{this.foods=response.data.results;}).catch(e=>{this.error.push(e)})
    }
  }
}
</script>
<style scoped>
</style>
