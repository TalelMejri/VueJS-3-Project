app.component('valider_successfully',{
    template:`
     <div class="show" v-if="show_congrats==true">
         hello man
     </div>
    `,
    props:{
        show_congrats:Boolean
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



