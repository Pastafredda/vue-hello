const {createApp} = Vue;

createApp({
    data(){
        return{
            message: 'Hello world',
            image: 'https://picsum.photos/200/300'
        }
    }
}).mount('#app');