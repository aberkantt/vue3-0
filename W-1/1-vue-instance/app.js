const app= Vue.createApp({
data(){
    return{//burada aslında değişkenleri tanımlıyoruz
        title : "Vue.js Bootcamp 1. gün",
        content:"Lorem ipsum dolar net.",
        github:{//github diye bir obje oluşturup içerisine kullanmak istediğimiz bileşenlerşi tanımladık.
            title:"Harika bir github hesabı için tıkla",
            target:"_blank",
            url:"https://github.com/aberkantt",
            alt:"birtakım-profil"
        },
        coords:{
            x:0,
            y:0,
        },
        
    };
},
methods:{
changeTitle(pTitle){
    //alert();
    this.title=pTitle;//title a erişmek için....
},
updateCoords(message,event){
  //  console.log(message,event.x,event.y);
    this.changeTitle(`${event.x},${event.y}`);   //ilginç bir yapı !!!!
    this.coords={
        x:event.x,
        y:event.y,
    }
},
},
}).mount("#app");//id si app olan kısım ile matchle memize yarıyormuş çünkü burada vue app i oluşturduk ama html de bunun hangi kısma denk geldiğini bilmiyoruz
//kısaca bu vue komutu ıd si app olan için çalışacak
//burada yaptığımız vue instance üzerinden templatei (html) yönetmeyi, manipüle etmeyi sağlamak.