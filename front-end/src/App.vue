<template>
  <main>
    <router-view></router-view>
    <footerPage />
  </main>
</template>

<script>
import FooterPage from './components/footer.vue'
export default {
  name: 'App',
  components:{
    FooterPage,
  }
}
</script>


