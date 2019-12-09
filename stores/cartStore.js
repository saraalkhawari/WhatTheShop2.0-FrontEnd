import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";
import { AsyncStorage } from "react-native";

class CartStore {
  items = [];
  history = [];
  loading = true;

  addItemToCart = async item => {
    const itemExist = this.items.find(_item => _item.name === item.name);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  retrieveItems = async () => {
    try {
      const retrievedItems = await AsyncStorage.getItem("cart");
      if (retrievedItems) {
        this.items = JSON.parse(retrievedItems);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  removeItemFromCart = async item => {
    this.items = this.items.filter(_item => _item.name !== item.name);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  // Backend format >>>>>>>>
  //   "cart_items": [
  //     {
  //         "creature": 1,
  //         "quantity": 66
  //     }
  // ]
  //>>>>>>>>>>>>>>>>>>>>>>>>

  checkoutCart = async () => {
    try {
      if (this.items.length > 0) {
        let cart = [];
        this.items.forEach(obj =>
          cart.push({ creature: obj.creature, quantity: obj.quantity })
        );

        let obj = { cart_items: cart };
        console.log("cart >>", obj);
        await instance.post("checkout/", obj);
        this.items = [];
        await AsyncStorage.setItem("cart", JSON.stringify(this.items));
        alert("the cart is in the BackEnd FINALLLLLY !!!!");
      } else alert("There's No ITEMS !!!");
    } catch (err) {
      console.error(err);
      console.log("something went wrong");
    }
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity += item.quantity));
    return quantity;
  }

  retrieveHistory = async () => {
    try {
      const res = await instance.get("history/");
      const history = res.data;
      this.history = history;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CartStore, {
  items: observable,
  history: observable,
  quantity: computed
});

const cartStore = new CartStore();
cartStore.retrieveItems();
export default cartStore;
