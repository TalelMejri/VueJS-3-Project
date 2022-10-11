
const app =Vue.createApp({
    data(){
        return{
            product:"Chaussette",
            select:0,
            //showpreloader:false,
            selctsize:true,
            show_list_favorite:0,
            show_list_magasin:0,
            facebook:"./assets/images/facebook.svg",
            favorite_icon:"./assets/images/heart.svg",
            github:"./assets/images/github.svg",
            instagram:"./assets/images/instagram.svg",
            img_out_of_stock:"./assets/images/out-of-stock-img.png",
            description:"Chaussettes super doux et extensible",
            link:"https://github.com/TalelMejri",
            instock:true,
            inventery:100,
            details:['50% COTON','30% laine','20% polyester'],
            variants:[
                {id:2001,name:"Chaussette Green",prix:250,color:"Green",image:"./assets/images/socks_green.jpg",quantity:10,cart:0},
                {id:2002,name:"Chaussette Blue",prix:325,color:"Blue",image:"./assets/images/socks_blue.jpg",quantity:25,cart:0}
            ],
            sizes:[
                {id:0,taille:'39'},
                {id:1,taille:'40'},
                {id:2,taille:'41'},
                {id:3,taille:'42'},
                {id:4,taille:'43'},
                {id:5,taille:'44'}
            ],
            size_select:[],
            size_select_old:[],
            size_select_final:[],
            tab_favorite:[],
            add_size_verfied:0,
            size:39,
        }
    },
    created(){
        /**initialiser size 39 */
        this.size_select_old.push({'size':39,'id':2001});
        this.size_select_old.push({'size':39,'id':2002});
        this.size_select.push({'size':39,'id':2002});
        this.size_select.push({'size':39,'id':2001});
        this.size_select_final.push({'size':39,'id':2001});
        this.size_select_final.push({'size':39,'id':2002});
    },
    methods:{
        /*Upadte select to index variant courant*/
        updatedselect(id) {
            this.select=id;
        },

        add_cart(){
         
           if(this.nombre_possible>0){
                if(this.size_select.find(x => x.id == this.id).size == this.size_select_old.find(x => x.id == this.id).size){
                    this.variants[this.select].cart++;
                    this.variants[this.select].quantity--;
                }else{
                    this.variants[this.select].quantity+=this.variants[this.select].cart-1;
                    this.variants[this.select].cart=1;
                    this.size_select_old.find(x => x.id == this.id).size = this.size_select.find(x => x.id == this.id).size; 
                }
                this.size_select_final.find(x => x.id == this.id).size = this.size_select.find(x => x.id == this.id).size; 
            }
      },

      size_choice(size){
            
        let item = this.size_select.find(x => x.id == this.id);//returne case qui pointe  
        let item_old=this.size_select_old.find(x=>x.id==this.id);//returne case qui pointe  
        if(item ){
            if(item.size==size){
                 this.size_select.splice(this.size_select.indexOf(size),1);
            }else{
                 item_old.size=item.size;
                 item.size = size;
            }
        }else{
              this.size_select.push({'size':size,'id':this.id});
         }
      },

      delete_cart(){
          if(this.nombre_possible_cart>0){
              this.variants[this.select].cart--;
              this.variants[this.select].quantity++;
           }
      },
        /* show size */
      
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
          /* image for select courant */
        image(){
            return this.variants[this.select].image;
        },
           /* name for select courant */
        name(){
            return this.variants[this.select].name;
        },
        /* prix for select courant */
        prix(){
            return this.variants[this.select].prix;
        },
        /* color for chausset */
        color(){
            return this.variants[this.select].color;
        },
         /* id for chaussete */
        id(){
            return this.variants[this.select].id;
        },
         /* test favorite for chaussette */
        test_favorite(){
            return this.tab_favorite.includes(this.id);
        },
         /* size choisit */
        size_final(){
            return this.size_select.find(x=>x.id==this.id)?.size;
        },
        /* nombre quantity possible  */
        nombre_possible(){
            return this.variants[this.select].quantity;
        },
        /* in stock */
        test_stock(){
            return this.variants[this.select].quantity > 0 ?  true : false;
        },
        color_variant(){
            return this.variants[this.select].color;
        },
        /* */
        nombre_possible_cart(){
            return this.variants[this.select].cart;
        },
        nombre_total_cart(){
            let count=0;
            this.variants.forEach(variant=>{
                count+=variant.cart;
            })
            return count;
        },
        prix_total(){
            let count=0;
            this.variants.forEach(variant=>{
                count+=variant.cart*variant.prix;
            })
            return count;
        }
    }
 })

