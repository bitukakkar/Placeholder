import React from 'react'
import { useStyles } from './styles'

const NftCard = ({ name, src }) => {
  const classes = useStyles()
  return (
    <div className={classes.nft_card}>
      <img data-testid="nft_image" src={src} alt='nft_1' />
      <h4 data-testid="nft_name"> {name}</h4>
    </div>
  )
}
export default NftCard