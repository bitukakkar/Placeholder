import APIConfig from './config'
import { post } from './helpers'

/**
 * Save Subscriber's
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const saveSubscriber = async params => {
  return await post(`${APIConfig.SUBSCRIBER_BASE_URL}/api/v1/subscribe`, params)
    .then(response => response)
    .catch(error => error)
}
