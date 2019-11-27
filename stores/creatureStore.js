import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

class CreaturesStore {
  creatures = [];
  loading = true;

  fetchAllCreatures = async () => {
    try {
      const res = await instance.get("/api/");
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
