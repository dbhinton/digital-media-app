import tokenService from "./tokenService";

const BASE_URL = "/api/cart";
export function create(id) {
    return fetch(`${BASE_URL}posts/${id}/cart`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(),
      },
    }).then((res) => {
      if (res.ok) return res.json();
      throw new Error("Login to add product to cart");
    });
  }