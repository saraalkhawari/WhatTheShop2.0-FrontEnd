import { decorate, observable } from "mobx";
import { instance } from "./instance";
import data from "./data";

class CreaturesStore {
  creatures = [];
  loading = true;

  fetchAllCreatures = async () => {
    try {
      const res = await instance.get("");
      const creatures = res.data;
      this.creatures = creatures;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(CreaturesStore, {
  creatures: observable,
  loading: observable
});

const creaturesStore = new CreaturesStore();
creaturesStore.fetchAllCreatures();

export default creaturesStore;
