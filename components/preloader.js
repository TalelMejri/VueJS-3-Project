app.component('preloader',{
    props:{
      /*  showpreloader:{
            type:Boolean
        },*/
    },
    data(){
        return{
            showpreloader:false
        }
    },
    template:
    `
    <div id="pre" v-if="!showpreloader">
      <span class="cube" id="cube1"></span>
      <span class="cube" id="cube2"></span>
      <span class="cube" id="cube3"></span>
      <span class="cube" id="cube4"></span>
   </div>

    `,
    methods: {
        
    },
    mounted() {
        setTimeout(()=>this.showpreloader=true,2000);
    },
 })