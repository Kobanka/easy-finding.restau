<template>
    <footer class="mx-auto text-grayishBlue max-h-25 w-full">
        <div class="flex flex-col justify-between items-center mx-auto md:px-4 md:flex-row space-y-4" id="about">
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/logoFooterBlack.png" class="relative w-[95px] h-[95px] cursor-pointer"  alt="Logo image" />
                <p class="max-w-sm text-center">
                    Easy-Finding is a company that, as its name says, helps finding Restaurants registered in the theFork database easily and quickly.
                </p>
            </div>
            <div class="flex flex-col items-center justify-center space-y-4">
                <h3 class="text-2xl font-semibold">Contact</h3>
                <div class="flex items-center space-x-6">
                    <a href=" https://github.com/Kobanka" class="rounded-full hover:cursor-pointer">
                        <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                            <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 
                            3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.104 2.104 
                            0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 
                            0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"/>
                        </svg>
                    </a> 
                    <a href="https://www.linkedin.com/in/anicet-kobanka-49847b21a" class="rounded-full hover:cursor-pointer">
                        <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve">
                            <path d="M23 0H9C4 0 0 4 0 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V9c0-5-4-9-9-9zM12 25c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h4c.6 0 1 .4 1 
                            1v12zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm17 14c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-6.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V25c0 
                            .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h4c.3 0 .5.1.7.3.6-.2 1.2-.3 1.8-.3 3 0 5.5 2.5 5.5 5.5V25z"/>
                        </svg>
                    </a>
                    <a href="mailto:anicetkobanka@email.com" class="rounded-full hover:cursor-pointer">
                        <svg width="31" height="31" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64 128q0-15 9-23 8-9 23-9h320q15 0 24 9 8 8 8 23v16L256 272 64 144v-16Zm192 200 192-128v184q0 32-32 32H96q-32 0-32-32V200l192 128Z"/>
                        </svg>
                    </a>
                    <a href="https://wa.me/212632437481" class="rounded-full hover:cursor-pointer">
                        <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
                            <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 
                            0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 
                            1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 
                            1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/>
                        </svg>
                    </a>
                </div>
                <p class="text-center">
                        Copyright © 2023 KOBANKA Anicet
                </p>
            </div>
            <nav class="menu space-y-4">
                <h3 class="text-2xl font-semibold text-center">Rapid Links</h3>
                <ul class="flex items-center text-lg space-x-8">
                    <li><router-link :to="{name: 'Home'}" class="inline-block">Home</router-link></li>
                    <li><a href="#main" class="inline-block">Restaurants</a></li>
                    <li><a class="inline-block" href="#about">About</a></li>
                </ul>  
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterPage',
}
</script>

<style>

</style>