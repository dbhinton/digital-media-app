// import tokenService from "./tokenService";

// const BASE_URL = "/api/cart";
// export function create(id) {
//     return fetch(`${BASE_URL}/${id}`, {
//       method: "POST",
//       headers: new Headers({ "Content-Type": "application/json" }), {
//         Authorization: "Bearer " + tokenService.getToken(),
//       },
//     }).then((res) => {
//       if (res.ok) return res.json();
//       throw new Error("Login to add product to cart");
//     });
//   }