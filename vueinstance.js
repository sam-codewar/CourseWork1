var lesson = new Vue({
    el: "#app",

    data: {
        sitename: "Professional Lesson",
        products: products,
        cart: [],
        showProduct: true,
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

          searchValue: "",
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


    },

    computed: {

          sortedProducts() {
            let productArray = this.products.slice(0);
            function compare(a, b) {
              if (a.price > b.price) {
                return 1;
              }

              if (a.price < b.price) {
                return -1;
              }
              return 0;
            }
            return productArray.sort(compare);
        },
        
        filterList() {
            return this.products.filter(post => {
                return post.title.toLowerCase().includes(this.searchValue.toLowerCase)
            })
        }




    //       searchValue() {
    //       let productArray = this.products
    //       if (this.searchValue != '' && this.searchValue) {
    //     productArray = productArray.filter((item) => {
    //       return item.title
    //         .toUpperCase()
    //         .includes(this.searchValue.toUpperCase())
    //     })
    //      };
    //    }


       
        },









    
})