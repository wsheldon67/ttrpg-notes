export function cookie(request) {
  return parse(request.headers.get('cookie'))
}
export function parse(cookieString) {
  let result = {};
  let cookies = cookieString ? cookieString.split('; ') : [];

  for (let cookie of cookies) {
      let parts = cookie.split('=');
      let value = parts.slice(1).join('=');
      let name = readValue(parts[0]).replace(/%3D/g, '=');
      result[name] = readValue(value);
  }

  return result;
}
function readValue(value) {
  return value.replace(/%3B/g, ';');
}