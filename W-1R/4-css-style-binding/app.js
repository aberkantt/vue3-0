const app=Vue.createApp({
    data(){
        return{
            myClass:"text-green bg-orange",
            counter:1,
            // kalan:1,
        };
    },
    created(){
        setInterval(() => {
            this.counter++;
        }, 2000);
    },          //ÖDEV:BU RENKLERİ DÖNGÜYE SOK
    computed:{        //BURADA VERİLEN ÖDEVE GÖRE DÖNGÜYE SOKMAK İÇİN MOD ALMAK İSTEDİM
                        //BUNU let ile yaptım ...
        boxClass(counter){
            let kalan=this.counter%4;  //EĞER BURADA DAHA DİNAMİK BİR YAPI İSTİYORSAK 
                                        //BİR ARRAY DAHA TANIMLAYIP OLUŞTURDUĞUMUZ ARRAYDEKİ SAYIYI BELİRLEYİP ONUN MODUNU ALARAK YAPILABİLİRDİ..
            return{
                'text-green':kalan===1,
                'text-red':kalan===2,
                'text-orange':kalan===3,
                'text-default':kalan===0,
            };
        },
    },
    }).mount("#app");