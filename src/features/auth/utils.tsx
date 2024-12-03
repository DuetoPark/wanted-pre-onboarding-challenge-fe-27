export function noToken() {
  return !window.localStorage.getItem("token");
}
