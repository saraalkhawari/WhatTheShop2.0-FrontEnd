import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CreaturesStore {
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
decorate(CreaturesStore, {
  creatures: observable,
  loading: observable
});

const creaturesStore = new CreaturesStore();
creaturesStore.fetchAllCreatures();

export default creaturesStore;
