import axios from "axios";
import https from "https";

export const fetch_data = async (req, res) => {
  const { term, semanticTag } = req.body;
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });
  try {
    const response = await axios.get(
      `https://snowstorm-test.msal.gob.ar/browser/MAIN/descriptions?term=${term}&active=true&semanticTag=${semanticTag}&groupByConcept=false&searchMode=STANDARD&offset=0&limit=50`,
      {
        httpsAgent,
        headers: {
          "Accept-Language": "es",
          app_id: "",
          app_key: "",
        },
        params: {
          activeFilter: "true",
          limit: 500,
          offset: 0,
          ecl: "(< 71388002 OR < 243796009 OR < 272379006 OR < 404684003) MINUS (<< 49632008 OR 198863002 OR 198756005 OR 785872000 OR 785869007)",
        },
      }
    );
    const mapeo = await response.data.items.map(({ term }) => {
      return {
        termino: term,
      };
    });
    res.json(mapeo);
  } catch (error) {
    console.error(error);
    res.status(500).send("error fetching data");
  }
};
