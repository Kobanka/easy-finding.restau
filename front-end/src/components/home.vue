<template>
    <main >
        <HeaderPage />
        <div v-if="dataLoaded" class="flex justify-center mb-20 flex-col -mt-16 md:mt-24 items-center min-h-screen md:p-5" id="main">
            <div class="hidden md:flex justify-center items-center mb-20 w-full ">
                <div class="flex justify-between border-2 shadow-md active:scale-95 focus:outline-softBlue rounded" >
                    <input type="text" 
                    placeholder="Search by name, city, country..." 
                    class="ml-6 md:w-80 placeholder:font-semiBold focus:outline-none h-12 border-none" 
                    v-model="searchText"
                    @keyup.enter="$store.dispatch('submit')">
                    <button @click="$store.dispatch('submit')"
                    :disabled="$store.state.loading" 
                    >   
                        <template v-if="$store.state.loading">
                            <svg aria-hidden="true" role="status" class="inline w-8 h-8 mr-4 text-gray-200 animate-spin dark:text-gray-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                        </template>
                        <template v-else>
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
                        </template>
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

        <div v-else class="w-full h-[80vh] flex justify-center items-center ">
            <button disabled type="button" class="py-2.5 px-5 mr-2 text-lg font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                <svg aria-hidden="true" role="status" class="inline w-8 h-8 mr-4 text-gray-200 animate-spin dark:text-gray-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Please Stand By While Loading...
            </button>
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
            dataLoaded: false,
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
            this.dataLoaded = true;
            
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style>

</style>