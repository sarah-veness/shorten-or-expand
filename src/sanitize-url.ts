export async function sanitizeUrl(url: string) {
  if (!(/^[^:]+(?=:\/\/)/).test(url)) {
    return "https://" + url;
  } else {
    return url;
  }
};

export async function stripUrl(url: string) {
  if ((/^[^:]+(?=:\/\/)/).test(url)) {
    let strippedUrl = url.split('//')
    return strippedUrl[1]
  } else if ((/www./).test(url)) {
    let strippedUrl = url.split('www.')
    return strippedUrl[1]
  } else {
    return url;
  }
};