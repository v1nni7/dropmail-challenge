import axios from "axios";

(function () {
  var cors_api_host = "cors-anywhere.herokuapp.com";
  var cors_api_url = "https://" + cors_api_host + "/";
  var slice = [].slice;
  var origin = window.location.protocol + "//" + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args: any = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (
      targetOrigin &&
      targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host
    ) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
})();

const api = axios.create({
  baseURL: `https://dropmail.me/api/graphql/12345678`,
  headers: {
    "access-control-allow-origin": "*",
    "Content-Type": "application/json",
  },
});

async function getEmail() {
  return await api.post("/", {
    query: `
      mutation {
        introduceSession {
          id,
          expiresAt,
          addresses {
            address
          }
        }
      }
    `,
  });
}

export { getEmail };
