app.component('details-part',{
    template:`
     <ul>
    <li v-for="detail in details">
        {{detail}}
    </li>
  </ul>`,
  data() {
    return {
        
    }
  },
  props:{
    details:Array
  },
  methods: {
    
  },
})