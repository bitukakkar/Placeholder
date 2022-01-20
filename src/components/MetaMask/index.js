import { ethers } from 'ethers'
import { UI_NOTIFICATIONS_TYPE } from '../../Types/Enums'
import { showNotification } from './../ShowNotification/index'
import { of } from 'await-of'

/**
 * @description make Meta Mask payment
 * @param ether eth amount
 * @param setBtnLoading btn loader hook
 * @returns boolean
 */

export const startPayment = async ({ ether, setBtnLoading }) => {
  if (!ether) {
    setBtnLoading(false)
    showNotification(
      'Something went wrong. Please try again.',
      UI_NOTIFICATIONS_TYPE.error
    )
    return
  }

  const addr = process.env.REACT_APP_METAMASK_ETHER_ADDRESS

  console.log(addr)

  if (!addr) {
    setBtnLoading(false)
    return
  }

  if (!window.ethereum) {
    setBtnLoading(false)
    throw new Error('No crypto wallet found. Please install it.')
  }

  await window.ethereum.send('eth_requestAccounts')
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  ethers.utils.getAddress(addr)
  const [data, error] = await of(
    signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    })
  )
  if (data && data.hash) {
    showNotification('Payment Success!', UI_NOTIFICATIONS_TYPE.success)
    setBtnLoading(false)
    return true
  }

  if (error) {
    setBtnLoading(false)
    console.log(JSON.stringify(error))
    showNotification(error.message, UI_NOTIFICATIONS_TYPE.error)
    return false
  }
}
