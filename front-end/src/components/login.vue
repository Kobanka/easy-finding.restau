<template>
    <main>
		<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div class="relative py-3 sm:max-w-xl sm:mx-auto">
				<div
					class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 min-w-[40vw] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
				</div>
				<div class="relative px-4 py-10 bg-white shadow-lg min-w-[40vw] sm:rounded-3xl sm:p-20">
					<div class="max-w-md mx-auto">
						<div>
							<h1 class="text-2xl font-semibold">Log in to your account</h1>
						</div>
						<div class="divide-y divide-gray-200">
							<div class="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
								<div class="relative">
									<input autocomplete="off" v-model="email" name="email" type="text" class="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
									<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
								</div>
								<div class="relative">
									<input autocomplete="off" 
									v-model="password" 
									name="password" 
									type="password" 
									@keyup.enter="login"
									class="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
									<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
								</div>
								<div class="relative">
									<button @click="login" class="bg-blue-500 text-white rounded-md px-2 py-1 mt-5 active:scale-95">Log In</button>
								</div>
							</div>
						</div>
					</div>
					<router-link to="sign-up" class="text-md text-blue-600 underline text-center">Don't have an account? Sign-up</router-link>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data(){
		return{
			email: '',
			password: ''
		}
	},
	methods:{
        async login(){
			let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
			
			if(result.status == 200 && result.data.length > 0){
				localStorage.setItem("user-info", JSON.stringify(result.data[0]))
				this.$router.push({name: 'Home'})
			}
			else{
				alert("User not found. Please verify your informations")
			}
		}
	},
	mounted(){
		let user = localStorage.getItem('user-info')

		if(user){
			this.$router.push({name:'Home'})
		}
	}
}
</script>
