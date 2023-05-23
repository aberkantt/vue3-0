const app=Vue.createApp({
data(){
    return{
        title:"Bu ise vue tarafından gelen bir bilgi..",
        hobbies:[1,2,3,4,5],
        personal:{
            name:"Berkant",
            lname:"Ontemel",
            age:"32",
            phone:"xxxxx",
        },
        details:`<a href="https://github.com/aberkantt">Harika bir github profili için tıkla  </a> `,
        url:"https://github.com/aberkantt",

        coordsX:0,
        coordsY:0,

        fullName:"Berkant aberkantt Öntemel "
    };
},
methods:{
    setTitle(title){
        this.title=title ||"Bu veri az önce geldi";
    },
    updateCoords(e){
        this.coordsX=e.offsetX;
        this.coordsY=e.offsetY;
        this.setTitle(`${this.coordsX},${this.coordsY}`)
    },
    updateValue(e){
        this.fullName=e.target.value;

    },
},
}).mount("#app");