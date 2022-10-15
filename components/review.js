app.component('review',{
    template:`
    <div class="popup-below">
        <div class="popup_form">
         <div class="image_review">
       <div>
       <p v-if="show_wrong" class="wrong">All field required</p>
        <h1>Your Review :</h1>
            
             <div class="review-container">
                <form @submit.prevent="Onsubmit">
                     <label>Name :</label>
                     <input type="text" v-model="nom">
                     <label>Email :</label>
                     <input type="email" v-model="email">
                     <label>Messages :</label>
                     <textarea name="" id="" cols="30" rows="10"  v-model="message"></textarea>
                     
                     <label for="rating">Evaluation :</label>
                     <select id="rating" v-model.number="rating">
                         <option>5</option>
                         <option>4</option>
                         <option>3</option>
                         <option>2</option>
                         <option>1</option>
                     </select>
                    <br>
                     <label for="recommand">do you want recommande this produit ?</label>
                     <select id="recommand" v-model.number="recomende">
                         <option>Yes</option>
                         <option>No</option>
                     </select>

                     <button style="background-color:yellow;color:orange" class="button">Send </button>
                </form>
             </div>
        </div>
        <div class="color_image">
             <span style="margin-left:95%;margin-top:10px;position:absolute;font-size:20px;color:red;cursor:pointer" @click="close_form()"><i class="fa-solid fa-circle-xmark"></i></span>
            <img :src="comment" >
        </div>
       </div>
            <small>Thanks For Your feedback</small>
        </div>
    </div>
    `,
    data(){
        return{
            nom:'',
            email:'',
            show_wrong:false,
            message:'',
            recomende:'',
            rating:'',
        }
    },
    emits:[
      "add_comment","show_form_function"
    ],
    props:{
        commentaire:Array,
        comment:String,
        show_form:Boolean
    },
    methods: {
        Onsubmit(){
            if(this.nom=="" && this.email=="" && this.message=="" && this.recomende=="" && this.rating==""){
                this.show_wrong=true; 
                setTimeout(()=>this.show_wrong=false,3000);
            }else{
                let produit={
                    nom:this.nom,
                    email:this.email,
                    message:this.message,
                    recomende:this.recomende,
                    rating:this.rating
                };
                this.$emit("add_comment",produit);
                this.$emit("show_form_function");
                this.nom="",
                this.email="";
                this.message="",
                this.recomende=null;
                this.rating=null;
                this.show_form=false;
            }
        },
        close_form(){
            this.$emit("show_form_function");
        }
    },
    
})