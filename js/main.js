
const app =Vue.createApp({
    data(){
        return{
            product:"Chaussette",
            select:0,
            //showpreloader:false,
            selctsize:true,
            show_list_favorite:0,
            facebook:"./assets/images/facebook.svg",
            favorite_icon:"./assets/images/heart.svg",
            github:"./assets/images/github.svg",
            instagram:"./assets/images/instagram.svg",
            img_out_of_stock:"./assets/images/out-of-stock-img.png",
            description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, perferendis.",
            link:"https://github.com/TalelMejri",
            instock:true,
            inventery:100,
            details:['50% COTON','30% laine','20% polyester'],
            variants:[
                {id:2001,name:"Chaussette Green",prix:250,color:"Green",image:"./assets/images/socks_green.jpg"},
                {id:2002,name:"Chaussette Blue",prix:325,color:"Blue",image:"./assets/images/socks_blue.jpg"}
            ],
            sizes:[
                {id:0,taille:'39'},{id:1,taille:'40'},{id:2,taille:'41'},{id:3,taille:'42'},{id:4,taille:'43'},{id:5,taille:'44'}
            ],
            size_select:[],
            tab_favorite:[]
        }
    },
    methods:{
        /*Upadte select to index variant courant*/
        updatedselect(id) {
            this.select=id;
        },
        /*show size*/
        size_choice(size){
           let item = this.size_select.find(x => x.id == this.id);//returne case qui pointe  
          if(item){
              if(item.size==size){
                this.size_select.splice(this.size_select.indexOf(size),1);
              }else{
                 item.size = size;
              }
          }else{
            this.size_select.push({'size':size,'id':this.id});
           }
        },
        show_favorite(){
            this.show_list_favorite=1;
        },
        updatefavorite(id){
             if(this.tab_favorite.includes(id)){
                this.tab_favorite.splice(this.tab_favorite.indexOf(id),1);
             }else{
                this.tab_favorite.push(id);
             }
             //console.log(this.variants.find(v=>v.id=id));
            //this.variants[this.select].favorite= this.variants[this.select].favorite ? 0 : 1;
        },
       /* translate(prop){
           return(this[this.lang][prop]);
        }  */
    },
    computed:{
          /* image for select courant*/
        image(){
            return this.variants[this.select].image;
        },
           /*name for select courant*/
        name(){
            return this.variants[this.select].name;
        },
        /*prix for select courant*/
        prix(){
            return this.variants[this.select].prix;
        },
        /**color for chausset */
        color(){
            return this.variants[this.select].color;
        },
      /**id for chaussete */
        id(){
            return this.variants[this.select].id;
        },
         /**test favorite for chaussette */
        test_favorite(){
            return this.tab_favorite.includes(this.id);
        },
         /**size choisit */
        size_final(){
            return this.size_select.find(x=>x.id==this.id)?.size;
        }
    }
 })

