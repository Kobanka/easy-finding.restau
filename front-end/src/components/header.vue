<template>
    <div class="flex flex-col md:justify-between md:items-center md:px-4 md:py-2 py-0 w-full mx-auto md:text-grayishBlue text-white max-h-fit md:flex-row">
        <div class="flex justify-between items-center px-4 max-h-[70px] md:h-auto">
            <img src="../assets/logoBlack.png" class="relative  w-[150px] h-[150px] cursor-pointer" id="logo"  alt="Logo image" />
            <!-- Hamberger Menu -->
            <span class="md:hidden" id="menu-btn" @click="Menu">
                <button class="nav-close hidden">
                    <svg class="h-8 w-8 text-gray-700 cursor-pointer hover:text-gray-800 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12"/>
                </svg>
                </button>
                <button class="nav-open">
                    <svg class="block fill-current h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-800 transition-all duration-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </span>
        </div>
        <nav id="menu" class="md:px-0 p-8 bg-veryDarkBlue md:bg-white md:opacity-100 opacity-0 h-full md:z-auto z-10 space-y-4 md:space-y-0 transition-all ease-in duration-500">
            <div class="flex flex-col space-y-6 space-x-0 md:items-center md:justify-between text-lg md:space-x-8 md:space-y-0 md:flex-row">
                <div class="group">
                    <router-link to="Home">Home</router-link>
                    <div class="border-b-2 mx-auto mt-2 opacity-0 group-hover:opacity-100 border-softBlue duration-500"></div>
                </div>
                <div class="group">
                    <a href="#main">Restaurants</a>
                    <div class="border-b-2 mx-auto mt-2 opacity-0 group-hover:opacity-100 border-softBlue duration-500"></div>
                </div>
                <div class="group">
                    <a href="#about">About</a>
                    <div class="border-b-2 mx-auto mt-2 opacity-0 group-hover:opacity-100 border-softBlue duration-500"></div>
                </div>
                <div class="flex justify-between mb-2 border-b-2 border-b-veryDarkBlue md:hidden" >
                    <input type="text" 
                    placeholder="Search by name, city, country..."  
                    v-model="searchText"
                    class="px-4 w-full text-black focus:outline-none border-2 "
                    @keyup.enter="$store.dispatch('submit')">
                    <button class="bg-softBlue" @click="$store.dispatch('submit')">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 text-gray-700 duration-200 "
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
                <div class="flex items-center justify-between space-x-4 text-lg md:hidden">
                    <div class="group">
                        <p class="font-Bold text-xl">{{ name }}</p>
                        <div class="border-b-2 mt-2 opacity-0 group-hover:opacity-100  group-hover:border-softBlue duration-500"></div>
                    </div>
                    <router-link to="/" class="block">
                        <button @click="logout" class="rounded-lg px-4 py-2 border-2 border-softBlue shadow-md bg-softBlue text-white hover:bg-white hover:text-softBlue transition-all duration-500">Log out</button>
                    </router-link> 
                </div>
            </div> 
            
        </nav>
        <div class="hidden md:flex items-center md:justify-between md:space-x-4 text-lg ">
            <div class="group">
                <p class="font-Bold text-xl">{{ name }}</p>
                <div class="border-b-2 mt-2 opacity-0 group-hover:opacity-100  group-hover:border-softBlue duration-500"></div>
            </div>
            <router-link to="/" class="block">
                <button @click="logout" class="rounded-lg px-4 py-2 border-2 border-softBlue shadow-md bg-softBlue text-white hover:bg-white hover:text-softBlue transition-all duration-500">Log out</button>
            </router-link> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    props: ['autocomplete'],
    data(){
        return{
            name: "",
        }
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
    methods:{
        Menu(){
            const btn = document.querySelectorAll('#menu-btn button')
            const menu = document.querySelector('#menu')

            btn.forEach(item => item.classList.toggle("hidden"))
            menu.classList.toggle("opacity-100")
            menu.classList.toggle("h-fit")
        },
        logout(){
            localStorage.clear();
            this.$router.push({name:'Landing'});
        },
        
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(user){
            this.name = JSON.parse(user).name
        }
    }
}
</script>

<style>

</style>