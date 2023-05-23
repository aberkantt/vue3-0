const app=Vue.createApp({
data(){
    return{
        todoText:null,
        todoList:[ ],
    };
},
methods:{
    addTodo(){
        this.todoList.push(this.todoText);//todotext in içindeki veriyi pushladık, nerer
        this.todoText="  ";
    },
}
}).mount("#app");