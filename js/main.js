var app = new Vue ({
    el: '.general',
    data:{
        products: [{id:1,title:"Red Anjou", short_text:'Juicy with fresh, sweet, and slightly tangy flavor.', image:'pear-red-anjou.jpg', characteristics:"Red Anjous develop a mild, sweet flavor with very smooth texture and abundant juices when ripe.", ripening:["slight change in color as they ripen","ripen when held at room temperature"], fruit:["egg-shaped appearance", "large spherical lower potion that begins a gradual and even taper above the mid-point to a smaller, rounded top"], cycle:["summer","early fall"], color:"dark maroon"},
        {id:2,title:"Bartlett", short_text:'Signature sweet pear flavor and aroma with abundant juice.', image:'pear-bartlett.jpg', characteristics:"Bartlett has a smooth texture with sweeter flavor", ripening:["skin color brightens as it ripens","ripen when held at room temperature"], fruit:["rounded bell on the bottom half of the fruit", "definitive shoulder with a smaller neck or stem end"], cycle:["late summer","early fall"], color:"yellow"},
        {id:3,title:"Bosc", short_text:'Crisp and woodsy with a honey sweetness.', image:'pear-bosc.jpg', characteristics:"The complex flavor, honey-sweetness, and juiciness of Bosc can be enjoyed before their flesh has fully softened", ripening:["a green hue under the russeted skin will turn more yellow as they ripen","ripen when held at room temperature"], fruit:["long, curved stem","elongated neck that widens gradually to a full rounded base"], cycle:["mid fall"], color:"warm cinnamon brown"},
        {id:4,title:"Comice", short_text:'Succulent, buttery, and exceptionally sweet.', image:'pear-comice.jpg', characteristics:"Comice have very fragile skins", ripening:["Any area of green color on the skin of Comice may take on a slight yellow hue as the fruit ripens","ripen when held at room temperature"], fruit:["rotund body","short, well-defined neck"], cycle:["fall","early winter"], color:"green with a red blush"},
        {id:5,title:"Concorde", short_text:'Crunchy and sweet with a distinct vanilla flavor.', image:'pear-concorde.jpg', characteristics:"The Concorde has a dense flesh that is sweet and juicy even when it is still firm", ripening:["As ripen they become slightly softer and more mellow in flavor","ripen when held at room temperature"], fruit:["long neck that tapers to an almost pointed top","long and oftentimes curved stem","round bottom"], cycle:["fall","early winter"], color:"yellow-green"}],
        menu:0,
        product:[],
        btnVisible: 0,
        cart:[],
        contactFields:[],
        order:0
    },
    mounted: function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        openMenu(){
            if(this.menu==0){
                this.menu=1;
            }else{
                this.menu=0;
            }
        },
        getProduct(){
            if (window.location.hash){
                var id = window.location.hash.replace('#','');
                if (this.products && this.products.length>0){
                    for (i in this.products){
                        if (this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart(id){
            var cart = [];
            if (window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join(','));
                this.btnVisible=1;
            }
        },
        checkInCart(){
            if (this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) != -1) this.btnVisible=1;
        },
        getCart(){
            if (window.localStorage.getItem('cart') && this.products && this.products.length>0){
                for (let i in this.products){
                    if (this.products[i] && this.products[i].id && window.localStorage.getItem('cart').split(',').indexOf(String(this.products[i].id))!=-1) this.cart.push(this.products[i]);
                }
            }
        },
        removeFromCart(id){
            var cart = [];
            if (window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id))!=-1){
                cart.splice(cart.indexOf(String(id)),1);
                window.localStorage.setItem('cart', cart.join(','));
                this.cart = [];
                this.checkInCart();
                this.getCart();
            }
        },
        makeOrder(){
            this.cart = [];
            window.localStorage.setItem('cart','');
            this.order = 1;
        }
    }
})