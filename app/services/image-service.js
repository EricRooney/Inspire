import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});
// @ts-ignore
const _unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/photos",
  timeout: 5000
});

let imageBack = "oyhxi8ALjSM";
//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getBackgroundAsync() {
    let background = await _unsplashApi.get(
      imageBack +
        "?client_id=b8eaee7e1f0523a5b9c0264723df9686afc2b8c2640524e3c613765ccb3a169e"
    );
    console.log("from api", background.data.urls.full);
    store.commit("background", background.data.urls.full);
    //console.log("from store", store.State.background);
  }

  setBackground() {
    let bg = store.State.background;
    console.log(bg);
    document.body.style.background = `url('${bg}') `;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
}

const imageService = new ImageService();
export default imageService;
