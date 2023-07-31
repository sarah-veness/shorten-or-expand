import axios from 'axios';

import sanitizeUrl from './sanitize-url';

export default async function shorten(url: string) {
  let urlToShorten = await sanitizeUrl(url)
  const data = {
    "domain": "bit.ly",
    "long_url": urlToShorten
  };
  await axios.post('https://api-ssl.bitly.com/v4/shorten', data, {
    headers: {
      'Authorization': `Bearer ${process.env.BITLY_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.error(`something went wrong: ${err}`)
    });
}