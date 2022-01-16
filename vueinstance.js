new Vue({
  el: "#app",
  data: {
    products: products,
    cart: [],
    order: {
      name: "",
      number: "",
    },
    search: '',
    showActivity: true,
  },
  methods: {
    canAddToCart(activity) {
      return activity.spaces > this.cartCount(activity.id);
    },
    addToCart(activity) {
      console.log(activity.title + " was added to the cart!");
      this.cart.push(activity);
      activity.spaces -= 1;
    },
    removeItem(activity, index) {
      console.log("remove function started index: " + index);
      this.cart.splice(index, 1);
      activity.spaces += 1;
      console.log(activity.title + " was removed from the cart!");
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
    showCheckout() {
      this.showActivity = !this.showActivity;
    },
    checkout() {
      alert("Order Sumbitted!");
      this.cart = [];
      this.order = [];
      for (activity in products) {
          activity.spaces = 5;
      }
      this.showCheckout();
    },
    sortingByAttr() {
      let attribute = document.querySelector('input[name="attribute"]:checked').value;
      let dir = document.querySelector('input[name="direction"]:checked');
      if (attribute != null && dir != null) {
        console.log("The attributed being sorted: " + attribute + " Direction: " + dir.value);
        if (dir.value == 1) {
          this.products.sort((a, b) => (a[attribute] < b[attribute] ? -1 : a[attribute] > b[attribute] ? 1 : 0));
        }
        else if (dir.value == -1) {
          this.products.sort((a, b) => (a[attribute] > b[attribute] ? -1 : a[attribute] < b[attribute] ? 1 : 0));
        }
      }
      else {
        this.products.sort((a, b) => (a[attribute] < b[attribute] ? -1 : a[attribute] > b[attribute] ? 1 : 0));
      }
    }
  },
  computed: {
    cartItemCount() {
      return this.cart.length || "";
    },
    canViewCart() {
      return this.cart.length > 0 ? false : true;
    },
    canCheckout() {
      if (this.order.name != "") {
        if (this.order.number != "" && this.numericName == false) {
          return true;
        }
        else {
          return false;
        }
      }
      else if (this.numericName == true) {
        return false;
      }
    },
    numericName() {
      return /\d/.test(this.order.name);
    },
    filteredSearch() {
        return this.products.filter(product => product.title.toUpperCase().includes(this.search.toUpperCase()))
    }//end filterSearch

    }//end of computed
});