app.component('photo-view',{
    props: {
        pics: Array,
        currentImg: Number,
        pic: Array,
        close: Boolean
    },
    
    template:
    /*html*/
    `
    
    <div class="w-full flex justify-end mr-60" v-show ="close">

    <i :src="currentImg !== -1 ? pics[currentImg].img : '' " v-show="pic.id == currentImg" class="fas fa-times text-3xl cursor-pointer text-black"  @click="bigPic(-1)"></i>

  </div>
  <div class="flex bg-black h-4/5 w-4/5 rounded-md ml-10">
    <img :src="currentImg !== -1 ? pics[currentImg].img : '' " v-show="pic.id == currentImg" @click="bigPic(-1)"
      class="h-4/5 w-4/5 m-auto mt-16 mb-16" />
  </div>
  

      ` ,

      data(){
        return {
            
            
        }
    },

    methods: {
        bigPic(index) {
           this.$emit("big-pic", index)
        }
        
    },

    computed:{
       
        
    }


},




)
