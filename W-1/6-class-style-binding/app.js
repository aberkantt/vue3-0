const app=Vue.createApp({
    data(){
        return{
            redBG:false,
            showBorder:false,
            boxClass:"border", 
            bgColor:"cyan",
        };
    },
    computed:{
        boxClasses(){
            return {border:this.showBorder,red:this.redBG}   // BİZ BURADAKİ YAPIYI {}{}ŞEKLİNDE KULLANINCA SADECE RED ÇALIŞIYOR BORDER ÇALIŞMIYOR NEDEN
        },
    },
}).mount("#app");