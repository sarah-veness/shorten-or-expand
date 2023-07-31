export default async function sanitizeUrl(url: string) {
  if (!(/^[^:]+(?=:\/\/)/).test(url)) {
    return "https://" + url;
  } else {
    return url;
  }
};