app.component('photo-items',{
    props: {
        pics: Array,
        searchPic: Array
    },
    
    template:
    /*html*/
    `
    
    <div v-for="pic in searchPic" class="">


    <div class="flex items-center flex-col">

      <img :src="pic.img" v-show="pic.id !== currentImg" @click="bigPic(pic.id)"
        class="h-2/5 w-2/5 rounded flex items-center " />

        <photo-view :pics= "pics" :pic = "pic" :current-img = "currentImg" :close = "close" @big-pic = "bigPic"></photo-view>
      
       <button class="flex flex-rol items-center mt-5 hover:text-blue-600" @click=" heart(pic.id)">
        <p class="text-3xl font-serif">{{pic.named}}</p>
        <i v-show="pic.done" class="material-icons text-red-500 text-5xl">
          favorite
        </i>
      </button>
    </div>

  
  </div>

      ` ,

      data(){
        return {
            currentImg: -1,
            bgBlack: false,
            close: false
            
        }
    },
    methods: {
        
        heart(index){
            this.pics[index].done = !this.pics[index].done
        },
        bigPic(index) {
            this.close = true;
            this.currentImg = index;
        }

    },

    computed:{
       
        
    }


},




)
