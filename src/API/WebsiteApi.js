export function WebStats() {
  return fetch("https://z2p.zup.today/users/websiteTotal", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      authorization: "a2c92c0f5f8e7f86797cf35164db653cff33722a3c5c87cc"
    })
  })
    .then(res => res.json())
    .then(res => {
      var result = res;
      return result;
    });
}
