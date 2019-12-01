import { decorate, observable } from "mobx";
import { instance } from "./instance";

class creaturesStore {
  creatures = [];
  loading = true;

  fetchAllCreatures = async () => {
    try {
      const res = await instance.get("/api/");
      const creatures = res.data;
      this.creatures = creatures;
      this.loading = false;
      console.log("creatures>>", this.creatures);
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(creaturesStore, {
  creatures: observable,
  loading: observable
});

const creaturesStore = new creaturesStore();
creaturesStore.fetchAllCreatures();

export default creaturesStore;
