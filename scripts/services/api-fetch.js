import { tokenKey, BASE_URI } from "../config.js";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(tokenKey);

  if (token) {
    headers = {
      Authorization: `Token token=${token}`,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    if (data.errors) throw new Error(JSON.stringify(data.errors));
    throw new Error(JSON.stringify(data))
  };
  // data.errors will be catched and printed on page components

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}

// {
//   name: ["can be blank"],
//   relation: [
//     "relation cant be blank"
//   ]
// }
