import axios from 'axios';
import { stripUrl } from './sanitize-url';

export default async function expandUrl(url: string) {
  let urlToExpand = await stripUrl(url)

  await axios.get(`https://api-ssl.bitly.com/v4/bitlinks/${urlToExpand} `, {
    headers: {
      'Authorization': `Bearer ${process.env.BITLY_ACCESS_TOKEN} `,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      console.log(`the original url: ${res.data.long_url}`);
    })
    .catch(err => {
      console.error(err);
    })
}