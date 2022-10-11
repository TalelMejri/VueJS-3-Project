app.component("size_taille",{
    template:`
    <h3>Size</h3>
    <ul  style="display: flex;gap:15px">
      <li v-for="(size,index) in sizes" :key="size.id" @click="size_choice(size.taille)"> 
         <span id="size" class="color-circle" 
                 :style="
                     size_final==size.taille ?
                        'background-color:#000;padding:10px;color:#fff':
                         'padding:10px'
                    ">
                {{size.taille}}
          </span>
      </li>
    </ul>`,
    props:{
        size_final:Array|String,
        sizes:Array,
    },
    emits:[
        "size_choice"
      ],
    data(){
        return{

        }
    },
    methods: {
        size_choice(size){
            this.$emit("size_choice",size);
        }
    },
})