import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuoteAysnc() {
    let quote = await _quoteApi.get();
    let Quote = '"' + quote.data.quote.body + '"';
    let Author = quote.data.quote.author;
    console.log(Quote + " - " + Author);
    let formatted = Quote + " - " + Author;
    store.commit("quote", formatted);
    console.log("from store", store.State.quote);
  }
}

const quoteService = new QuoteService();
export default quoteService;
