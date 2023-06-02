import HeaderPage from './components/header.vue'
import FooterPage from './components/footer.vue'
import HomePage from './components/home.vue'
import DetailPage from './components/details.vue'
import SignupPage from './components/signup.vue'
import LoginPage from './components/login.vue'
import LandingPage from './components/Landing.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Header',
        component: HeaderPage,
        path: '/header'
    },
    {
        name: 'Footer',
        component: FooterPage,
        path: '/footer'
    },
    {
        name: 'Home',
        component: HomePage,
        path: '/home'
    },
    {
        name: 'Landing',
        component:  LandingPage,
        path: '/'
    },
    {
        name: 'Detail',
        component: DetailPage,
        path: '/detail/:id'
    },
    {
        name: 'SignUp',
        component: SignupPage,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LoginPage,
        path: '/login'
    },
    
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes
    }
)

export default router