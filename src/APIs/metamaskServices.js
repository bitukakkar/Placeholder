import APIConfig from './config'
import { post } from './helpers'

/**
 * Get token Price
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const getTokenPrice = async (params) => {
  return await post(`${APIConfig.BASE_URL}/api/v1/get_price`, params)
    .then((response) => response)
    .catch((error) => error)
}
