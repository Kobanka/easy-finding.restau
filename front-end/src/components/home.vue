<template>
    <main>
        <HeaderPage />
    <div class="flex justify-center mb-20 flex-col -mt-16 md:mt-24 items-center min-h-screen md:p-5" id="main">
        <div class="hidden md:flex justify-center items-center mb-20 w-full ">
            <div class="flex justify-between border-2 shadow-md active:scale-95 focus:outline-softBlue rounded" >
                <input type="text" 
                placeholder="Search by name, city, country..." 
                class="ml-6 md:w-80 placeholder:font-semiBold focus:outline-none h-12 border-none" 
                v-model="searchText"
                @keyup.enter="$store.dispatch('submit')">
                <button @click="$store.dispatch('submit')">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 text-gray-300 duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </div>
            
        </div>
        <!-- ********************************************************************* -->
        <div v-if="$store.state.autocomplete.length == 0" class="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div v-for="restaurant in restaurants" :key="restaurant.id" class="relative cursor-pointer group">
                <router-link :to="'/detail/' + restaurant.id">   
                    <img :src="restaurant.mainPhotoSrc" alt="" class="w-72">
                    <div v-if="restaurant.aggregateRatings" class="absolute bg-black text-white p-2 px-4 bottom-0 left-0 right-0 duration-500 md:opacity-0 opacity-100 group-hover:opacity-100 bg-opacity-40 ">
                        <div class="flex justify-between w-full">
                            <div class="font-normal">
                                <p class="text-sm">{{ restaurant.name }}</p>
                                <p class="text-xs">{{ restaurant.aggregateRatings.thefork.ratingValue }}/10 with {{ restaurant.aggregateRatings.thefork.reviewCount }} reviews</p>
                            </div>
                            <div class="flex items-center">
                                <img src="../assets/bookmark.svg" class="group-hover:animate-ping duration-500 text-white" alt="bookmark" />
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>        
        </div>
        <!-- Seach content -->
        <div v-else class="flex justify-center items-center flex-col">
            <div v-for="item in $store.state.autocomplete" :key="item.id" class="cursor-pointer group">
                <router-link :to="'/detail/' + item.id">   
                    <div class="flex flex-col justify-between w-full">
                        <div class="font-normal">
                            <p class="text-2xl">{{ item.name.text }}</p>
                        </div>
                        <div class="flex items-center">
                            <img src="../assets/bookmark.svg" class="group-hover:animate-ping duration-500" alt="bookmark" />
                        </div>
                    </div>
                </router-link>
            </div>        
        </div>
    </div>
    </main>
</template>

<script>
import HeaderPage from './header.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    data(){
        return{
            name: "",
            restaurants: [],
        }
    },
    components:{
        HeaderPage,
    },
    computed:{
        searchText:{
            set(text){
                this.$store.commit('setSearchText', text)
            },
            get(){
                return this.$store.state.search
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name: 'Landing'})
        }
        // Fetch data from spoonAndForkApi

        const options = {
        method: 'GET',
        url: 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list',
        params: {
            queryPlaceValueCityId: '348156',
            pageSize: '15',
            pageNumber: '1',
            queryPlaceValueCoordinatesLatitude: '31.7917',
            queryPlaceValueCoordinatesLongitude: '7.0926'
        },
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            let results = response.data;
            this.restaurants = results.data;
            
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style>

</style>