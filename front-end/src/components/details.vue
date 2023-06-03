<template>
  <section class="tabs" v-if="dataLoaded">
    <!-- All Tabs/Panels Container -->
    <div class="container relative">
      <!-- Tabs container -->
      <div class="flex flex-col text-xl justify-center items-center md:items-end w-full h-40 bg-softBlue text-white md:text-lg mb-6 md:space-x-10 md:flex-row" id="title">
        <!-- Tab 1 -->
        <div class="cursor-pointer underline md:no-underline md:rounded-tl-2xl md:rounded-tr-2xl md:bg-white md:text-slate-800 md:p-6 tab transition-all duration-200 ease-linear" data-target="panel-1">
          General Infos
        </div>
        <!-- Tab 2 -->
        <div class="cursor-pointer md:no-underline tab transition-all duration-200 ease-linear" data-target="panel-2">
          Geolocation
        </div>
        <!-- Tab 3 -->
        <div class="cursor-pointer md:no-underline tab transition-all duration-200 ease-linear" data-target="panel-3"> 
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
                >Open on Maps </a>
            </div>
            <div class="border-green-200 bg-green-100 text-green-800 p-2 text-sm rounded-md mx-auto md:mx-0  w-fit">
              Enter in the map search bar <strong> (Longitude, latitude) </strong> 
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

    <div v-else class="w-full h-[80vh] flex justify-center items-center ">
      <button disabled type="button" class="py-2.5 px-5 mr-2 text-lg font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
          <svg aria-hidden="true" role="status" class="inline w-8 h-8 mr-4 text-gray-200 animate-spin dark:text-gray-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
          </svg>
          Please Stand By While Loading...
      </button>
    </div>
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
  methods:{
    
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
      dataLoaded: false,
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

      this.dataLoaded = true;

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
            child.classList.add('underline');
          } else {
            child.classList.remove('md:rounded-tl-2xl');
            child.classList.remove('md:rounded-tr-2xl');
            child.classList.remove('md:bg-white');
            child.classList.remove('md:text-slate-800');
            child.classList.remove('md:p-6');
            child.classList.remove('underline');
          }
        });
      }
    });
      
      // Tabs menu event listener
      tabs.forEach((tab) => tab.addEventListener('click', function onTabClick(e) {
        
        // Hide all panels
        panels.forEach((panel) => panel.classList.add('hidden'));

        const classString = e.target.getAttribute('data-target');
        document
          .getElementById('panels')
          .getElementsByClassName(classString)[0]
          .classList.remove('hidden')
      }));

      
      
    } catch (error) {
      console.error(error);
    }

  }
}
</script>

<style>
.splide__pagination{
margin-bottom: -2em;
}

</style>

