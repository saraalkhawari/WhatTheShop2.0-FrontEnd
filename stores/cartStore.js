import { computed, decorate, observable } from "mobx";

import { AsyncStorage } from "react-native";

class CartStore {
  items = [];

  addItemToCart = async item => {
    const itemExist = this.items.find(_item => _item.name === item.name);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
    await AsyncStorage.setItem("cart", JSON.stringify(this.items));
  };

  retrieveItems = async () => {
    try {
      const retrievedItems = await AsyncStorage.getItem("cart");
      this.items = JSON.parse(retrievedItems);
    } catch (error) {
      console.log(error.message);
    }
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(_item => _item !== item);
  };

  checkoutCart = () => {
    this.items = [];
    alert("I'm a cute message");
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity += item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
cartStore.retrieveItems();
export default cartStore;
