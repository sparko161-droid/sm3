import { loadAuth } from './storage.js';

function req(params) {
  if (!window.n8nDevRequest) throw new Error('n8nDevRequest is not available');
  return window.n8nDevRequest(params);
}

export const getRestaurants = () => {
  const { baseUrl } = loadAuth();
  return req({ method: 'GET', url: `${baseUrl}/restaurants` });
};

export const getMenuComposition = (restaurantId) => {
  const { baseUrl } = loadAuth();
  return req({ method: 'GET', url: `${baseUrl}/menu/${restaurantId}/composition` });
};

export const getAvailability = (restaurantId) => {
  const { baseUrl } = loadAuth();
  return req({ method: 'GET', url: `${baseUrl}/menu/${restaurantId}/availability` });
};

export const createOrder = (payload) => {
  const { baseUrl } = loadAuth();
  return req({
    method: 'POST',
    url: `${baseUrl}/order`,
    headers: { 'Content-Type': 'application/json' },
    body: payload
  });
};

export const getOrder = (orderId) => {
  const { baseUrl } = loadAuth();
  return req({ method: 'GET', url: `${baseUrl}/order/${orderId}` });
};

export const deleteOrder = (orderId, payload) => {
  const { baseUrl } = loadAuth();
  return req({
    method: 'DELETE',
    url: `${baseUrl}/order/${orderId}`,
    headers: { 'Content-Type': 'application/json' },
    body: payload
  });
};

export const updateOrder = (orderId, payload) => {
  const { baseUrl } = loadAuth();
  return req({
    method: 'PUT',
    url: `${baseUrl}/order/${orderId}`,
    headers: { 'Content-Type': 'application/json' },
    body: payload
  });
};

export const getOrderStatus = (orderId) => {
  const { baseUrl } = loadAuth();
  return req({
    method: 'GET',
    url: `${baseUrl}/order/${orderId}/status`,

    headers: { Timeout: 2 }

  });
};
