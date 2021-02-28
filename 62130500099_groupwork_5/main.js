const app = Vue.createApp({
    data(){
        return{
            pics: [
                {id: 0, img:'./images/Mei.jpg', alt:'Pic1', named:'Mei', done: false},
                {id: 1, img:'./images/rita.png', alt:'Pic2', named:'Rita', done: false},
                {id: 2, img:'./images/fuhua.png', alt:'Pic2', named:'Fuhua', done: false}
            ],

            searchPic:[]
        }
    },

    methods: {
        search(searchedPic) {
            this.searchPic = searchedPic;
            }

    },

    computed: {
        numPic() {
            return this.pics.filter(t => !t.false).length
        },
        
        
    }
    
})