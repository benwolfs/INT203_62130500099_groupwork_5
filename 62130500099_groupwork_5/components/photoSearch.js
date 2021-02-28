app.component('search-box',{
    props: {
        pics: Array,
    },
    
    template:
    /*html*/
    `<button v-show="show" @click="showSearchBox" @keyup="search">
        <i class="material-icons text-4xl">
          search
        </i>
    </button>
      <input v-show="!show" v-model="inputSearch" placeholder="Search" @keyup="search"
        class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-solid">
      <button v-show="!show" @click="showSearchBox" class="bg-red-700 rounded-md w-14 h-7 text-white">Cancel</button>
      ` ,

      data(){
        return {
            show: true,
            inputSearch: ''
            
        }
    },
    methods: {
        showSearchBox() {
            this.show = !this.show;
            this.inputSearch= '' ;
        }
    },

    computed:{
        search() {
        searchPic = this.pics.filter(searchShow =>{return searchShow.named.toLowerCase().includes(this.inputSearch.toLowerCase())});
            this.$emit("search-pic", searchPic);
        
    }
}

},




)
