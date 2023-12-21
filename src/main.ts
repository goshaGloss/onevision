import './assets/style/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import CardNumInput from '@/components/CardNumInput.vue'
import CardExpirationInput from '@/components/CardExpirationInput.vue'
import NameInput from '@/components/NameInput.vue'


import CvvInput from '@/components/CvvInput.vue'


const app = createApp(App)

app.use(createPinia())

app.component('CardNumInput', CardNumInput)
app.component('CardExpirationInput', CardExpirationInput)
app.component('NameInput', NameInput)
app.component('cvv', CvvInput)


app.mount('#app')
