const app=Vue.createApp({
    data(){
        return{
            title:"Test Başlığı",
            itemList:[],
        };
    },
    beforeCreate(){
        console.log("beforeCreate  çalıştı")
    },
    created(){
        console.log("created çalıştı")
        setTimeout(() => {
            this.itemList=[1,2,3,4,5,6,7,8]; 
        }, 2000);

         setTimeout(() => {
        this.title= "Bu title site açıldıktan 4 sn sonra görüntülendi."
        }, 4000);
    },
    beforeMount(){
        console.log(" beforeMount çalıştı")
    },
    mounted(){
        console.log("mounted  çalıştı")         //BAŞLANGIÇ ANINDA BİR ELEMENTE ERİŞMEK İSTİYOSAN BUNU CREATED TA DEĞİL MOUNTEDTAN SONRA GERÇEKLEŞTİRMEN GEREKİR 
    },
    beforeUpdate(){
        console.log("beforeUpdate  çalıştı")
    },
    updated(){
        console.log(" updated çalıştı")
    },
    beforeUnmount(){
        console.log("beforeUnmount  çalıştı")
    },
    unmounted(){
        console.log(" unmounted çalıştı")
    },
}).mount("#app");

setTimeout(() => {   //BURADA BİR PROBLEM VAR UNUTMA SAKIN ÇALIŞMIYOR
    app.unmount();      //TypeError: app.unmount is not a function 
}, 6000);