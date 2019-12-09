import quoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function _drawQuote() {
  let quote = store.State.quote;
  let template = `<h3>${quote}</h3>`;
  console.log("from controller", quote);
  document.getElementById("quote").innerHTML = template;
}
export default class QuoteController {
  constructor() {
    this.getQuoteAysnc();
    store.subscribe("quote", _drawQuote);
  }
  async getQuoteAysnc() {
    try {
      await quoteService.getQuoteAysnc();
    } catch (error) {
      console.error(error);
    }
  }
}
