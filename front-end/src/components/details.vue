<template>
  <section class="tabs">
    <!-- All Tabs/Panels Container -->
    <div class="container relative">
      <!-- Tabs container -->
      <div class="flex flex-col text-xl justify-center items-center md:items-end w-full h-40 bg-softBlue text-white md:text-lg mb-6 md:space-x-10 md:flex-row" id="title">
        <!-- Tab 1 -->
        <div class="cursor-pointer active:border-b-2 md:rounded-tl-2xl md:rounded-tr-2xl md:bg-white md:text-slate-800 md:p-6 tab transition-all duration-200 ease-linear" data-target="panel-1">
          General Infos
        </div>
        <!-- Tab 2 -->
        <div class="cursor-pointer active:border-b-2 tab transition-all duration-200 ease-linear" data-target="panel-2">
          Geolocation
        </div>
        <!-- Tab 3 -->
        <div class="cursor-pointer active:border-b-2 tab transition-all duration-200 ease-linear" data-target="panel-3"> 
          Photos caroussel
        </div>
      </div>
      <!-- Tabs Panels -->
      <div id="panels" class="container  mx-auto">
        <!-- Panel 1 -->
        <div class="flex flex-col justify-center my-20  md:flex-row md:space-x-7 py-5 panel panel-1">
          <!-- Panel Image -->
          <div class="flex justify-center md:w-1/2">
            <img :src="image" alt="" class="relative z-10 md:max-w-[95%] md:object-contain">
          </div>
          <!-- Panel content -->
          <div class="flex flex-col px-2 md:px-0 space-y-8 text-center md:text-left md:w-1/2">
            <h3 class="text-3xl mt-12 font-semibold md:mt-0">{{ restau.name }}</h3>
            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Types of cuisine :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ restau.servesCuisine }}
              </p>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Currencies accepted :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ restau.acceptedCurrency }}
              </p>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Address :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ locality }}, {{ country }} {{ street }}
              </p>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Phone contact :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ restau.phone }}
              </p>
            </div>

            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Ratings From The Fork :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ ratings }}/10 with {{ reviews }} reviews
              </p>
            </div>
            <div class="mx-auto md:mx-0">
              <a :href="url"
                class="px-6 py-3 mt-4 font-semibold text-white border-2 rounded-lg md:inline-flex border-white bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue "
                >Visit Home Page </a>
            </div>
          </div>
        </div>
        <!-- Panel 2 -->
        <div class="flex flex-col hidden my-20 justify-center py-5 md:flex-row md:space-x-7 panel panel-2">
          <!-- Panel Image -->
          <div class="flex justify-center md:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2992.651047141978!2d2.171455075578876!3d41.40338399500356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1685630736765!5m2!1sfr!2sma" 
            class="relative z-10 md:max-w-[95%]" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <!-- Panel content -->
          <div class="flex flex-col space-y-8 text-center  md:text-left md:w-1/2">
            <h3 class="text-3xl mt-12 font-semibold md:mt-0">Restaurant GPS coordinates</h3>
            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Longitude :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ longitude }}
              </p>
            </div>
            <div class="flex flex-col md:flex-row md:space-x-6 items-center">
              <h4 class="text-xl font-semibold md:hover:underline md:mt-0">Latitude :</h4>
              <p class="max-w-md text-xl text-grayishBlue">
                {{ latitude }}
              </p>
            </div>
            <div class="mx-auto md:mx-0">
              <a
                href="https://www.google.com/maps/@41.4010197,2.1736079,15.14z?entry=ttu"
                class="px-6 py-3 mt-4 font-semibold text-white border-2 rounded-lg md:inline-flex border-white bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue"
                >Open on Maps 
                ( enter in the map search bar <strong>Longitude, latitude</strong> )</a
              >
            </div>
          </div>
        </div>
        <!-- Panel 3 -->
        <div class="flex flex-row hidden my-20 justify-center  md:flex-row panel panel-3">
          <!-- Panel Image -->
          <Splide :options="{ rewind: false, rewindSpeed: 3000, pagination: true }" aria-label="My Favorite Images" class="w-full md:max-w-[60vw]">
            <SplideSlide v-for="(photo,id) in photos" :key="id" class="flex justify-center items-center">
              <img :src="photo.src" alt="Sample 1" >
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css/skyblue'
import axios from 'axios'

export default {
  name: 'DetailPage',
  components:{
    Splide,
    SplideSlide,
  },
  data(){
    return{
      restau: {},
      photos: [],
      street: '',
      country: '',
      locality: '',
      longitude: '',
      latitude: '',
      ratings: '',
      reviews: '',
      url: '',
      image: '',
    }
  },
  async mounted(){
    
    const options = {
      method: 'GET',
      url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/get-info',
      params: {
        restaurantId: this.$route.params.id
      },
      headers: {
        'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
        'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      let results = response.data
      this.restau = results.data.restaurant

      this.street = this.restau.address.street
      this.locality = this.restau.address.locality
      this.country = this.restau.address.country
      this.latitude = this.restau.geolocation.latitude
      this.longitude = this.restau.geolocation.longitude
      this.ratings = this.restau.aggregateRatings.thefork.ratingValue
      this.reviews = this.restau.aggregateRatings.thefork.reviewCount
      this.url = this.restau.url
      this.photos = this.restau.photos
      this.image = this.photos[0].src
      
    } catch (error) {
      console.error(error);
    }

    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');
    
    const titleLink = document.querySelector('#title');

    titleLink.addEventListener('click', function(event) {
      if (event.target.tagName === 'DIV') {
      const divChildren = event.currentTarget.querySelectorAll('div');
      divChildren.forEach(function(child) {
        if (child === event.target) {
          child.classList.add('md:rounded-tl-2xl');
          child.classList.add('md:rounded-tr-2xl');
          child.classList.add('md:bg-white');
          child.classList.add('md:text-slate-800');
          child.classList.add('md:p-6');
        } else {
          child.classList.remove('md:rounded-tl-2xl');
          child.classList.remove('md:rounded-tr-2xl');
          child.classList.remove('md:bg-white');
          child.classList.remove('md:text-slate-800');
          child.classList.remove('md:p-6');
        }
      });
    }
  });



    
    // Tabs menu event listener
    tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

    function onTabClick(e) {
      

      // Hide all panels
      panels.forEach((panel) => panel.classList.add('hidden'));

      const classString = e.target.getAttribute('data-target');
      document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
  }

}
}
</script>

<style>
.splide__pagination{
margin-bottom: -2em;
}

</style>

