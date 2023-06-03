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
                    <button class="bg-softBlue" @click="$store.dispatch('submit')"
                    :disabled="$store.state.loading" 
                    >
                        <template v-if="$store.state.loading">
                            <svg aria-hidden="true" role="status" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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