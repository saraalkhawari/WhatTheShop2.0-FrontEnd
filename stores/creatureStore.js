import { decorate, observable } from "mobx";
import { instance } from "./instance";
import data from "./data";

class CreaturesStore {
  creatures = [];
  loading = true;
  creatureWigs = [];

  fetchAllCreatures = async () => {
    try {
      const res = await instance.get("");
      const creatures = res.data;
      this.creatures = creatures;
      await this.fetchAllCreatureWigs();
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  fetchAllCreatureWigs = async () => {
    try {
      const res = await instance.get("creaturewigs/");
      const creatureWigs = res.data;
      this.creatureWigs = creatureWigs;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CreaturesStore, {
  creatures: observable,
  loading: observable,
  creatureWigs: observable
});

const creaturesStore = new CreaturesStore();
creaturesStore.fetchAllCreatures();
export default creaturesStore;
