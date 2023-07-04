const axios = require("axios");
const getNews = async () => {
  try {
    const httpURI = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
    const { data } = await axios.get(httpURI);
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getNews };
