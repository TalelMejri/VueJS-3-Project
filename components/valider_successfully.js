app.component('valider_successfully',{
    template:`
    <div class="popup-below " v-if="show_congrats==true">
     <div class="popup" v-if="show_congrats==true">
           <p style="font-size:25px">  Congrats 🎉 </p>
     </div>
     </div>
    `,
    props:{
        show_congrats:Boolean,
        name_chaussete:String
    },
    data(){
        return{
           
        }
    },
    mounted() {
        /*console.log(show_congrats);
        setTimeout(()=>show_congrats=false,2000);
        console.log(show_congrats);*/
    },
    methods: {
        
    },
    computed:{

    }
    
}

)



