import React, { useState } from "react";
import { useStyles, AmountSlider } from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { startPayment } from "../MetaMask";
import closeIcon from "./../../Assets/images/landing/close.svg";
import briefCaseIcon from "./../../Assets/images/landing/modalBriefCaseIcon.svg";
import graphImg from "./../../Assets/images/landing/graphLine.png";
import clsx from "clsx";
import { CircularProgress } from "@material-ui/core";
import { getTokenPrice } from "../../APIs";

const TrvlTokenPaymentModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [inputRangeAmount, setInputRangeAmount] = useState(40);
  const {
    register,
    handleSubmit,
    formState,
    reset: hookFormReset,
  } = useForm({
    mode: "onChange",
  });

  const [btnLoading, setBtnLoading] = useState(false);

  const handleAmountChange = (event, newValue) => {
    setInputRangeAmount(newValue);
  };

  const getMoneyToETH = async (total_price, currency = "USD") => {
    try {
      const payload = {
        token: "ETH",
        currency: currency,
      };
      const res = await getTokenPrice(payload);
      const token_price = res.token_price;
      const token_to_send = parseFloat(total_price) / token_price;
      return token_to_send.toFixed(8);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    console.log(inputRangeAmount);
    if (!inputRangeAmount) return;
    const eth = await getMoneyToETH(inputRangeAmount);
    setBtnLoading(true);
    await startPayment({ ether: `${eth}`, setBtnLoading }).then((result) => {
      if (result) {
        hookFormReset();
        setTimeout(() => {
          handleClose();
        }, 1000);
      } else {
        hookFormReset();
        setTimeout(() => {
          handleClose();
        }, 300);
      }
    });
  };
  return (
    <>
      
      <Modal
        open={open}
        onClose={(handleClose, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-labelledby="Trvl Token payment modal"
        aria-describedby="Trvl Token payment modal"
        >
          
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <img
              src={closeIcon} 
              alt="close"
              className={classes.closeIcon}
              onClick={() => {
                // hookFormReset();
                handleClose();
              }}
            />
            <section className={classes.form_section}>
              <h1 className={classes.title}>Buy Trip Tokens</h1>
              <form  onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.form_block}>
                  <label htmlFor="name" className={classes.inputLabel}>
                    Your Name
                  </label>
                  <input type="text" name="name" placeholder="Name" value={classes.cardInput} {...register("name", { required: true })} 
                          data-testid="username"/>
                </div>
                <div className={classes.form_block}>
                  <label htmlFor="email" className={classes.inputLabel}>
                    Your Email
                  </label>
                  <input type="email" id="email" placeholder="Email" value={classes.cardInput} {...register("email", { required: true })} 
                          data-testid="useremail"/>
                </div>
                <div className={classes.form_block}>
                  <label htmlFor="amount" className={classes.inputLabel} style={{ display: "flex", justifyContent: "space-between" }}>
                    Amount Staked
                    <h4 className={classes.input_range_amount}>&#36;{inputRangeAmount}</h4>
                  </label>
                  <div className={classes.input_range_amount_input_div}>
                    <AmountSlider
                      value={inputRangeAmount}
                      onChange={handleAmountChange}
                      valueLabelDisplay="off"
                      aria-label="amount slider"
                      min={0}
                      data-testid="amount-slider"
                      max={100}
                    />
                  </div>
                </div>
                <div className={classes.horizontal_line}></div>
                <button
                  type="submit"
                  data-testid="submit-btn"
                  className={clsx(classes.submitBtn, classes.noSelect)}
                  disabled={!formState.isValid || inputRangeAmount === 0 || btnLoading}>
                  {btnLoading ? <CircularProgress size={20} /> : "Buy Now"}
                </button>
              </form>
            </section>
            <section>
              <div className={classes.trvl_token_info_block}>
                <img src={briefCaseIcon} alt="briefcase" />
                <h2 className={classes.trvl_token}>120,000</h2>
                <p className={classes.trvl_token_sold_text}>TRVL TOKENS SOLD</p>
              </div>
              <img src={graphImg} alt="chart" className={classes.trvl_token_graph_img} />
            </section>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default TrvlTokenPaymentModal;
