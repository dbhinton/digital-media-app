import tokenService from "./tokenService";

const BASE_URL = "/api/products";

export function create(product){
	return fetch(BASE_URL, {
		method: 'POST',
		body: product, // <- this has an image so its formData, no need to jsonify
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
        if (res.ok) return res.json();
        console.log(res)
		throw new Error(res.message);
	  })
}

export function deleteProduct(id) {
	return fetch(`${BASE_URL}likes/${id}`, {
	  method: "DELETE",
	  body: product,
	  headers: {
		Authorization: "Bearer " + tokenService.getToken(),
	  },
	}).then((res) => {
	  if (res.ok) return res.json();
	  throw new Error("Login to remove a like");
	});
  }

export function getAll() {
	return fetch(BASE_URL, {
	  method: 'GET',
	  headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		console.log(res, 'response from get all prod')
		throw new Error('getAll function in product api couldnt fetch products');
	  })
  }
