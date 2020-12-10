const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}

const EventHandling = {
    data() {
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
}

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    },
    mounted() {
        setInterval(() => {
            this.seen = !this.seen
        }, 500)
    }
}

const TodoList = {
    data() {
        return {
            groceryList: [
                {id:0, text:'Vegetables'},
                {id:1, text:'Cheese'},
                {id:2, text:'Whatever else humans supposed to eat'}
            ]
        }
    }
}

const app = Vue.createApp(TodoList)
app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{todo.text}}</li>`
})

window.onload = () => {
    Vue.createApp(EventHandling).mount('#event-handling')
    Vue.createApp(TwoWayBinding).mount("#two-way-binding")
    Vue.createApp(ConditionalRendering).mount("#conditional-rendering")
    Vue.createApp(Counter).mount("#counter")
    app.mount("#todo-list-app")
}

