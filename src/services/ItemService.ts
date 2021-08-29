import Constants from "../Constants";
import HttpHelper from "../helpers/HttpHelper";
import Item from "../models/ItemBean";

class ItemService {
  static async getItemIds(type: string) {
    return await HttpHelper.get(`${Constants.BASE_URL}/${type}stories.json`);
  }

  static async getItemDetails(id: number) {
    const response = await HttpHelper.get(
      `${Constants.BASE_URL}/item/${id}.json`
    );

    if (response) {
      return response as Item;
    }
    return null;
  }

  static async getMultipleItemDetails(ids: number[]) {
    let results = [];
    for (let i = 0; i < ids.length; i++) {
      results.push(ItemService.getItemDetails(ids[i]));
    }
    return Promise.all(results);
  }
}

export default ItemService;
