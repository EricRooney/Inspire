import imageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    this.getBackgroundAysnc();
    this.setBackground();
    store.subscribe("background", this.setBackground);
  }
  async getBackgroundAysnc() {
    try {
      await imageService.getBackgroundAsync();
      console.log("This is out of order");
    } catch (error) {
      debugger;
      console.error(error);
    }
  }
  setBackground() {
    imageService.setBackground();
  }
}
