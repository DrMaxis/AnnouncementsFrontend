export function getStaticPath(url) {
  let baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : '';

  return `${baseUrl}${url}`;
}
