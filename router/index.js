import 'https://unpkg.com/vue/dist/vue.js'
import 'https://unpkg.com/vue-router/dist/vue-router.js'

const welcome = Vue.component(`welcome`,  
    {
        template: `<h1>Hello!</h1>`
    }
)

const login = Vue.component('login',
    {
        template: `
            <form>
                <label for='email'>Email:</label>
                <input id='email' type='text'>
                <label for='password'>Password:</label>
                <input id='password' type='text'>
                <input type='button' value='Sign in'>
            </form>
        `
    })

const signup = Vue.component('login',
    {
        template: `
            <form>
                <label for='email'>Email:</label>
                <input id='email' type='text'>
                <label for='password'>Password:</label>
                <input id='password' type='text'>
                <label for='password'>Confirm password:</label>
                <input id='confirm-password' type='text'>
                <input type='button' value='Sign up'>
            </form>
        `
    })

const siteMenu = Vue.component('siteMenu', 
    {
        template: `
        <div>
            <router-link to='/'>Home</router-link>
            <router-link to='/login'>Log In</router-link>
            <router-link to='/signup'>Sign Up</router-link>
        </div>
        `
    })

const notFound = Vue.component('notFound', 
    {
        template: `
        <div>
            <img src="https://i.pinimg.com/originals/c5/21/64/c52164749f7460c1ededf8992cd9a6ec.jpg">
        </div>
        `
    })

const myRouter = new VueRouter({
    routes: [
        { path: '/', component: welcome },
        { path: '/login', component: login },
        { path: '/signup', component: signup },
        { path: '*', component: notFound }
    ]
})

new Vue({
    el: '#app',
    template: `
    
        <div>
            <siteMenu></siteMenu>
            <transition name='route' mode='out-in'>
            <router-view></router-view>
            </transition>
        </div>`,
    router: myRouter
})