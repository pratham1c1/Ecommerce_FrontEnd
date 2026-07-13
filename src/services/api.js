import { API_BASES, USE_MOCK } from '../config/config'
import { products } from '../mock/data'

// Fetches products from mock data by default, or the Product service in live mode.
export async function getProducts() {
  if (USE_MOCK) return products
  const response = await fetch(`${API_BASES.products}/product/getAllProducts`)
  if (!response.ok) throw new Error('Could not load products from the Product service.')
  return response.json()
}

export async function getOrders(userName) {
  if (USE_MOCK) return [{ id: 'NC-2048', status: 'PAID', total: 488, userName }]
  const response = await fetch(`${API_BASES.orders}/order/getAllOrderDetails/${encodeURIComponent(userName)}`)
  if (!response.ok) throw new Error('Could not load orders from the Order service.')
  return response.json()
}
