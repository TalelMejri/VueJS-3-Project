app.component('list_review',{
    template:`
    <div v-if="show_comments==true" style="display:flex;gap:25px;justify-content: center;">
       
    <h1 style="position:absolute;margin-top:-30px">Comments :</h1>
    <ul class="review-container">
          <li>name :{{commentaire[i].nom}}</li>
          <li>message :{{commentaire[i].message}}</li>
          <li>email :{{commentaire[i].email}}</li>
          <li>Recomande :{{commentaire[i].recomende==true ? "Oui" : "Non"}}</li>
          <li style="display:flex;justify-content: center;">
           <span v-for="rate in commentaire[i].rating">
               <i style="color:yellow" class="fa-solid fa-star"></i>
           </span> 
          </li>
     </ul>
     <p style="position:absolute;font-size:20px;font-weight:600;color:#000">{{i+1+" From "+commentaire.length}}</p>
  </div>
    `,
    data(){
        return{

        }
    },
    methods: {
        
    },
    props:{
        show_comments:Boolean,
        commentaire:Array,
        i:Number
    }
})