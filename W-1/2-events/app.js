const app=Vue.createApp({
    data(){
        return{
            fullName:"Berkanttttt",
        }
    },
    methods:{
        updateValue(event){
            console.log(event.target.value);
            this.fullName=event.target.value;     //HEM EVENT BİNDİNG HEM DE ATTİRBUTE BANDİNG LE YAPMIŞ OLDUK..
        }
    }
}).mount("#app");