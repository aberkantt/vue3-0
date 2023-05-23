const app=Vue.createApp({
data(){
    return{
        counter:0,
        counter2:0,
    };
},
methods:{
    getResult(){
        console.log("C-1 çalıştı.");
        return this.counter>0 ?'pozitif':this.counter<0 ?'negatif':'sıfır..'
    },
    getResult2(){
        console.log("C-2 çalıştı.");
        return this.counter2>0 ?'pozitif':this.counter2<0 ?'negatif':'sıfır..'
    },
},
beforeCreate(){console.log(" beforeCreate çalıştı")
},
created(){console.log("created çalıştı")
},
beforeUpdate(){console.log("beforeUpdate çalıştı")
},
updated(){console.log("updated çalıştı")
},
beforeUnmount(){console.log("beforeUnmount çalıştı")
},
unmounted(){console.log("unmounted çalıştı")
},
}).mount("#app");