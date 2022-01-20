import React, { useState } from 'react';
import { useStyles } from './styles';
import star_coin from './../../Assets/images/landing/star_coin.svg';
import TrvlTokenPaymentModal from './../TrvlTokenPaymentModal';

const LandingTokenCard = () => {
  const classes = useStyles();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={classes.landing_token_card_container}>
      <div className={classes.landing_token_card_icon}>
        <img src={star_coin} alt='star' />
      </div>
      <div>
        <div className={classes.flex}>
          <div className={classes.landing_token}>
            <h2>
              120,000 <span className={classes.landing_token_trvl_ammount}>(1 trvl = 0.1£)</span>
            </h2>
            <p data-testid="token-text">TRVL Tokens</p>
          </div>
          <div className={classes.landing_token_balance}>
            <h2>86,000</h2>
            <p>Your balance</p>
          </div>
        </div>
        <button className={classes.buy_token_button} data-testid="open" onClick={handleModalOpen}>
          Buy tokens
        </button>
      </div>
      <TrvlTokenPaymentModal open={isOpenModal} data-testid="close" handleClose={handleModalClose} />
    </div>
  );
};

export default LandingTokenCard;
