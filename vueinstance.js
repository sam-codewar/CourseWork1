var lesson = new Vue({
    el: "#app",

    data: {
        sitename: "Professional Lesson",
        products: products,
        cart: [],
        showProduct: true,
        searchValue: "",
        moreSpaces: null,
        sortBy: 'alphabetically',
        ascending: true,
        order: {
            firstName: "",
            lastName: "",
            address: "",
            City: "",
            Zip: "",
            gift: "",
            state: "",
            method: "",
            sendGift: "Send as Gift",
            dontSendGift: "Do not send as Gift",
          },

          States: {
            AL: "Alabama",
            AK: "Alaska",
            AZ: "Arizona",
            AR: "Arkansas",
            CA: "California",
            CO: "Colorado",
            CT: "Connecticut",
            DE: "Delaware",
            DC: "District of Columbia",
          },

    },

    methods: {
        addToCart(product) {
            this.cart.push(product.id);
          }, //end function

          showCheckout() {
            this.showProduct = this.showProduct ? false : true;
          },

          submitForm() {
            alert("Order Submited");
          },

          canAddToCart(product) {
            return product.space > this.cartCount(product.id);
          },

          cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
              if (this.cart[i] === id) {
                count++;
              }
            }
            return count;
          },


    }, //end of methods

    computed: {

        sortedProducts() {
        let pProduct = this.products;
    
        // Process search input
        if (this.searchValue != '' && this.searchValue) {
            pProduct = pProduct.filter((product) => {
            return product.title
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
           })
         }
      
      // Filter out Spaces
          if (this.moreSpaces)
            pProduct = pProduct.filter((product) => {
                return (product.space <= this.moreSpaces)
            })
           
         // Sort by alphabetical order
           pProduct = pProduct.sort((a, b) => {
            if (this.sortBy == 'alphabetically') {
                let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()
          
                if (fa < fb) {
                     return -1;
                 }
                if (fa > fb) {
                    return 1;
                 }
                return 0;
              
              // Sort by cooking time
            } else if (this.sortBy == 'space') {
              return a.space - b.space;
            }
         })
        
        // Show sorted array in descending or ascending order
        if (!this.ascending) {
        	pProduct.reverse();
        }
        
        return pProduct;
        }
    }

            // let productArray = this.products.slice(0);
            // function compare(a, b) {
            //   if (a.price > b.price) {
            //     return 1;
            //   }

            //   if (a.price < b.price) {
            //     return -1;
            //   }
            //   return 0;
            // }
            // return productArray.sort(compare);
        

        








    
})