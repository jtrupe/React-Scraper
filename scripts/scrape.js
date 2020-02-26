const cheerio = require("cheerio");
const axios = require("axios");

const scrape = new Promise((resolve, reject) => {
    return axios.get("https://www.usatoday.com/tech/").then(response => {
        const $ = cheerio.load(response.data);

        const articleSection = $('div.gnt_m:nth-child(2)');

        const articlesArr = [];

        articleSection.find('.gnt_m_flm_a').each((i, currentArticle) => {
            const articleObj = {};

            articleObj.heading = $(currentArticle).text().trim();
            articleObj.info = $(currentArticle).attr('data-c-br');
            articleObj.link = 'https://www.usatoday.com' + $(currentArticle).attr('href');

            if (articleObj.heading && articleObj.info && articleObj.link) {
                articlesArr.push(articleObj);
            }
        });
        console.log(articlesArr);
        resolve(articlesArr);
    });
});

module.exports = scrape ;