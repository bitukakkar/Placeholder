import React from 'react';
import { useStyles } from './styles';
import briefCaseIcon from './../../Assets/images/landing/briefCase.svg';
import equalIcon from './../../Assets/images/landing/equalSymbolIcon.svg';

const TokenSaleComingSoon = ({ days, hours, minutes, seconds }) => {
  const classes = useStyles();
  if (!days || !hours || !minutes) return null;
  return (
    <div className={classes.token_sale_coming_soon_div}>
      <div className={classes.trip_token_info}>
        <div className={classes.brief_case_icon_div}>
          <img src={briefCaseIcon} alt='briefcase' />
        </div>
        <div className={classes.trip_token_details}>
          <div className={classes.one_trip_token_info}>
            <h2>1</h2>
            <p>TRIP Tokens</p>
          </div>
          <img src={equalIcon} alt='equal icon' className={classes.trip_token_details_equal_symbol} />
          <h2 className={classes.trip_token_usd_price}>0.01$</h2>
        </div>
      </div>
      <div className={classes.sales_start_in_info_container}>
        <div className={classes.sales_start_in_info}>
          <h5 className={classes.sales_start_text}>Sales Starts in</h5>
          <h2 className={classes.sales_start_time}>
            <span data-testid="token_days">{days}</span>d : <span data-testid="token_hours">{hours}</span>h : <span data-testid="token_minutes">{minutes}</span>min
          </h2>
        </div>
        <button className={classes.sales_button}>Token sale coming soon</button>
      </div>
    </div>
  );
};

export default TokenSaleComingSoon;
