const app=Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
            itemList:[ ],
        };
    },
    methods:{
        addItem(){
            this.itemList.push(new Date().getTime());  //İTEMLİST İN İÇİNE NEW DATE.GET TİME I EKLE....
        },
    },
    computed:{   //computed geriye bir değer döndürmek zorunda (değişken gibi çalışır)
        //içerisinde vue ile bağlantısı olan bir yapıda değişiklik olursa kendiliğinden çalışır.
        getResult(){
            console.log("C-1 çalıştı.");
            return this.counter>0 ?'pozitif':this.counter<0 ?'negatif':'sıfır..'
        },
        getResult2(){
            console.log("C-2 çalıştı.");
            return this.counter2>0 ?'pozitif':this.counter2<0 ?'negatif':'sıfır..'
        },
    },//computed ve watcher önemli....
    watch:{// BİR VUE DAKİ YAPIYI ANLIK OLARAK İZLEYİP ONA GÖRE ANLIK OLARAK AKSİYON ALMAMIZI SAĞLAR, FONKSİYON GİBİ KULLANILIR.
        counter(newValue,oldValue){
            console.log("counter watcher çalıştı....",newValue,"<=",oldValue);
        },
        getResult(oldValue,newValue){
            console.log(`Watcher:Result${oldValue}=>${newValue}`);

        },
        itemList:{
            deep:true,
            handler(itemList)
        {    //BU YAZDIĞIMIZ VERİ TİPİ PRİMİTİVE BİR VERİ TİPİ OLDUĞUNDAN VUE BAZEN BUNU GÖRMÜYOR
                //BU YÜZDEN BUNU BİR FONKSİYON OLARAK DEĞİL DE OBJE NOTASYONU OLARAK YAZIYORUZ...
            console.log('itemList :>> ', itemList);
        },
        },
        // itemList(itemList){    //BU YAZDIĞIMIZ VERİ TİPİ PRİMİTİVE BİR VERİ TİPİ OLDUĞUNDAN VUE BAZEN BUNU GÖRMÜYOR
        //                         //BU YÜZDEN BUNU BİR FONKSİYON OLARAK DEĞİL DE OBJE NOTASYONU OLARAK YAZIYORUZ...
        //     console.log('itemList :>> ', itemList);
        // },
    },
    }).mount("#app");