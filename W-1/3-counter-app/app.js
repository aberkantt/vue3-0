const app=Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
            sayac:0,
            sayac2:0,
        }
    },
        methods:{//method ta sürekli çalışarak oluşan farklılık sonucu tekrar renderlar ve bu yüzden çalışmayan kısmın fonksiyonu bile çaliışr
            
        },
        computed:{//reactivity nin velinimetlerindendir sadece kendini ilgilendiren kısım çalışır..
            getCounterResult(){      //REACTİVİTİY ile çalışması gereken kısım çalışacak...
                console.log("Counter1 çalıştı.");
                return this.counter > 5 ? "BÜYÜK": "KÜÇÜK";
            },
            getCounter2Result(){
                console.log("Counter2 çalıştı.");
                return this.counter2 > 5 ? "BÜYÜK": "KÜÇÜK";
            }
        },
        watch:{      //computed ta ki veriyi izlememizi sağlar
            counter(newValue,oldValue){
                console.log("counter",oldValue,"=>",newValue);
            },
            getCounterResult(newValue,oldValue){
                console.log("RESULT",oldValue,"=>",newValue); 
            },
        },
    // methods:{
    //     inc(){this.counter++;
    //     },
    //     dec(){this.counter--;
    //     }, 
    // }
}).mount("#app ");