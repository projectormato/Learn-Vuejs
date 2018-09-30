var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!!',
    msg: 'text'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    display: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
      // app4.todos.push({text: "btn pushed!"})
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  //コンポーネントを呼び出してるやつにデータを与えてる
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var vm = new Vue({
  el: '#getter',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    }
  }
})

var style = new Vue({
  el: '#stylesample',
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
})

var ifinput = new Vue({
  el: '#ifinput',
  data: {
    loginType: 'username'
  },
  methods: {
    togglelogin: function () {
      if (this.loginType === 'username') {
        return this.loginType = 'email'
      }else{
        return this.loginType = 'username'
      }
    }
  }
})
