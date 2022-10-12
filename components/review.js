app.component('review',{
    template:`
    <div class="popup-below">
        <div class="popup_form">
        <div class="image_review">
       <div>
        <h1>Your Review :</h1>
             <div class="review-container">
                <form @submit.prevent="Onsubmit">
                     <label>Name :</label>
                     <input type="text" v-model="nom">
                     <label>Email :</label>
                     <input type="email" v-model="email">
                     <label>Messages :</label>
                     <textarea name="" id="" cols="30" rows="10"  v-model="message"></textarea>
                     <button class="button">Send </buuton>
                </form>
             </div>
        </div>
        <div class="color_image">
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
            message:''
        }
    },
    props:{
        commentaire:Array,
        comment:String
    },
    methods: {
        
    },
    
})