import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function create(id) {
  return fetch(`${BASE_URL}products/${id}/reviews`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Login to leave a review something");
  });
}

export function removeReview(id) {
  return fetch(`${BASE_URL}review/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Login to leave a review something");
  });
}