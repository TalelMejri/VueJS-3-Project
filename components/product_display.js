app.component('product_dispaly',{
    template:
    ` <div class="product-display">
        <div :style="{borderColor:color}" class="circle-1"></div>
        <div :style="{borderColor:color}" class="circle-2"></div>
        <div :style="{borderColor:color}" class="circle-3"></div>
        <div class="product-container">
      
      <div class="product-image">
          <img :class="{disabled_image:test_stock==false}" :src="image" alt="product">
          <div :style="{color:test_favorite==true ? 'red' : 'gray'}"  class="favorite" @click="updatefavorite(id)" ><i class="fa-solid fa-heart"></i></div>
          <div class="btn_zone">
            <button type="button" class="button_comment" @click="show_comment()">Add Review <i class="fa-solid fa-comment"></i></button>
          </div>
      </div>
    
      <div style="padding-top:25px;" class="product-info">

        <div class="cart_favorite">
          <button :disabled="nombre_total_cart==0" @click="show_list_magasin=1"  class="cart">
              <i class="fa-solid fa-cart-shopping"></i><span id="contenu_number">{{nombre_total_cart}} </span>
          </button>
          <button :disabled="tab_favorite==''"  @click="show_list_favorite=1" class="cart">
            List Favorite <i :style="tab_favorite!='' ? 'color:red' : ''" class="fa-regular fa-heart"></i>
         </button>
        </div>
        <valider_successfully :show_congrats="show_congrats"></valider_successfully>
          <div  v-if="show_list_magasin"  class="popup-below">
            <div v-if="show_list_magasin" class="popup_magasin">
               <h1 >List Purchases :</h1>
              <div v-for="variant in variants" style="display:block" :key="variant.id">
                <div v-if="variant.cart>0">
                    <div class="contenu_magasin"> 
                      <table>
                        <tr>
                          <td> Article : {{variant.name}}</td>
                          <td style="padding-top:40px;"> 
                            <img :src="variant.image" id="social_favorite" alt="">
                          </td>
                        </tr>
                        <tr>
                          <td> Prix :{{variant.prix}}</td>
                        </tr>
                        <tr>
                          <td> Quantity :{{variant.cart}}</td>
                          <td> Taille   :{{size_select_final.find(x=>x.id==variant.id).size}}</td>
                        </tr>
                        <tr>
                          <td   style="background-color:red;cursor: pointer;text-align:center;padding:10px;color:#fff" @click="delete_article(variant.id,variant.cart)">Delete</td>
                          <td   style="background-color:blue;cursor: pointer;text-align:center;padding:2px;color:#fff"  @click="valider_article(variant.id,variant.cart)">Valider</td>
                        </tr>
                      </table>
                    </div>
                </div>
                <br>
              </div>
                 <span class="prix_total" style="font-weight: 600;"> Prix Total : {{prix_total}} Dt</span>
              <b @click="show_list_magasin=0" id="close">X</b>
            </div>
          </div>
    
        <div  v-if="show_list_favorite"  class="popup-below">
          <div v-if="show_list_favorite" class="popup">
             <h1 style="padding-top:30px;">List Favorite :</h1>
            <div v-for="variant in variants" style="display:block" :key="variant.id">
              <div v-for="tab in tab_favorite">
                <div v-if="tab===variant.id">
                  <div class="contenu_favorite"> 
                    <table>
                      <tr>
                        <td>Article : {{variant.name}}</td>
                        <td style="padding-top:30px;"> 
                          <img :src="variant.image" id="social_favorite" alt="">
                        </td>
                      </tr>
                      <tr>
                        <td>  Prix :{{variant.prix}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <b @click="show_list_favorite=0" id="close">X</b>
          </div>
      </div>

       <h1>{{name}}</h1>
     <!--<p v-if="inventery>10">En stock</p>
      <p v-else-if="inventery>15">presue</p>
      <p v-else="inventery>20">En repture de stock</p>--> 
      <p v-if="!test_stock" style="color:red">
          Out Of Stock
         <!--<img class="image_personel" :src="img_out_of_stock" alt="">-->
      </p>
      <p v-else style="color:green">
          in stock
      </p>
      <p class="description">{{description}}</p>
      <h3>prix : </h3>
           <p class="prix">{{ prix}} dt</p> 
      <h3>Detail</h3>
      <details-part :details="details"></details-part>
      <h3>Color</h3>
      <div style="display: flex;margin-left:25px;">
       <!-- <li v-for="(variant,index) in variants" :key="variant.id">
            <button @mouseover="updatedselect(index)" class="color-circle" :style="{backgroundColor:variant.color}"></button> 
           </li>
        -->
        <button @mouseover="updatedselect(0)" class="btn-hover color-1">VERT</button>
        <button @mouseover="updatedselect(1)" class="btn-hover color-2">BLEU</button>
      </div>

      <size_taille :sizes="sizes" :size_final="size_final" @size_choice="size_choice"></size_taille>
      
      <div style="display: flex;gap:15px;margin-top:55px;">
        <div>
        <button class="button" :class="{disabled_button:test_stock==false}"  @click="add_cart()">Add <i class="fa-solid fa-plus"></i> </button> 
      </div>
      <div  style="margin-top: 52px;" class="nbr_available">
        <small :style="{color:test_stock==true ? '' : 'red' }">Nombre available({{nombre_possible}})</small>
      </div>
      <div>
        <button class="button_moins" :class="{disabled_button:nombre_possible_cart==0}"  @click="delete_cart()">Delete <i class="fa-solid fa-minus"></i> </button>
      </div>
      <div>
      <button style="background-color:blue;width:200px" class="button" :class="{disabled_button:commentaire==''}"  @click="show_comments_click()">Show Comments</button>
     </div>
      </div>
      </div>
    </div>
    <div v-if="show_comments==true">
      <button @click="moins_compteur()" style="margin-top:10%;margin-left:31%;position:absolute;width:80px;height:40px">previous</button>
      <button @click="plus_compteur()" style="margin-top:10%;margin-left:63%;position:absolute;width:80px;height:40px">Next</button>
    </div>
    </div> `,

  props:{
    variants:Array,
    sizes:Array,
    details:Array,
    size_select_final:Array,
    size_select:Array,
    size_select_old:Array,
    color:String,
    select:Number,
    commentaire:Array,
    i:Number,
    show_comments:Boolean
    
  },
  emits:[
    "updatedselect",
    "add_cart",
    "delete_cart",
    "size_choice",
    "show_comments_function",
    "plus",
    "moins"
  ],
    data(){
      return{
       show_list_favorite:0,
       show_list_magasin:0,
       show_congrats:false,
       tab_favorite:[],
       add_size_verfied:0,
       description:"Chaussettes super doux et extensible",
       product:"Chaussette",
       style:[
          {test:"test"},
          {TEST1:"TEST1"},
          {talel:"TALEL"}
       ]
}
    },
    created(){
        console.log(...this.style);
    },
    methods: {
      moins_compteur(){
        this.$emit("moins");
      },
      plus_compteur(){
        this.$emit("plus");
      },
      show_comments_click(){
        this.$emit("show_comments_function");
      },
      delete_article(id_cart,cart){
        let item=this.variants.find(v=>v.id==id_cart);
        if(confirm("do you want delete "+item.name)){
             item.quantity+=cart;
             item.cart=0;
              if(this.prix_total==0){
                this.show_list_magasin=0;
              }else{
                this.show_list_magasin=1;
              }
        }
        //this.variants[id].quantity+=cart;
      },
      valider_article(id_cart,cart){
        let item=this.variants.find(v=>v.id==id_cart);
        if(confirm("do you want valider "+item.name)){
             item.quantity-=cart;
             item.cart=0;
             this.show_congrats=true;
             setTimeout(()=>this.show_congrats=false,2000);
             if(this.prix_total>0){
             setTimeout(()=>this.show_list_magasin=true,2000);
            }else{
              this.show_list_magasin=0;
            }
        }
      },
      show_comment(){
        this.$emit("show_form_function");
      },
        updatedselect(id) {
            this.$emit("updatedselect",id);
        },
        add_cart(){
            this.$emit("add_cart");
        },
        delete_cart(){
            this.$emit("delete_cart");
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
        size_choice(size){
            this.$emit("size_choice",size);
         }
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