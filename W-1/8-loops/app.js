const app=Vue.createApp({
    data(){
        return{
            todoList:[
                {id:1,Text:"yapılacaklar 1",completed:false},
                {id:2,Text:"yapılacaklar 2",completed:false},
                {id:3,Text:"yapılacaklar 3",completed:false},
                {id:4,Text:"yapılacaklar 4",completed:false},
                {id:5,Text:"yapılacaklar 5",completed:false},
                {id:6,Text:"yapılacaklar 6",completed:false},
                {id:7,Text:"yapılacaklar 7",completed:false},
            ],
        };
    },
    methods:{
        addTodo(event){
            this.todoList.push({
                id:new Date().getTime(),
                Text:event.target.value,
                completed: false,
            });
            event.target.value=" ";
        },
        removeItem(todoItem){
            this.todoList=this.todoList.filter(todo=>todo!=todoItem);
        },
    },
    computed:{
        
        completedItemCount(){
            return this.todoList.filter((todo)=>todo.completed).length
        },
        unCompletedItemCount(){
            return this.todoList.filter((todo)=>!todo.completed).length
        },
    }
}).mount("#app");