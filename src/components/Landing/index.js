import React, { useState } from 'react'
import { useStyles } from './styles'

import banner from './../../Assets/images/landing/banner.png'
import technology_img from './../../Assets/images/landing/technology.png'
import hoteliers_image from './../../Assets/images/landing/hoteliers.svg'
import trip1_image from './../../Assets/images/landing/trip1.svg'
import trip2_image from './../../Assets/images/landing/trip2.svg'
import stack_image from './../../Assets/images/landing/stack.svg'
import trip_image from './../../Assets/images/landing/trip.svg'
import logo_image from './../../Assets/images/landing/logo.svg'

import Container from '@material-ui/core/Container'
import clsx from 'clsx'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

// import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NftCard from '../NftCard'
// import { sliderSettings } from './sliderSettings'
import LandingTokenCard from '../TokenCard'
import { Link } from 'react-router-dom'

import Countdown from 'react-countdown'
import TokenSaleComingSoon from '../TokenSaleComingSoon'
import { saveSubscriber } from '../../APIs/subscirberService'
import { CircularProgress } from '@material-ui/core'
import { toast } from 'react-toastify'
import { Grid } from '@material-ui/core'

const Landing = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const TripTokenImage = () => (
    <div className={clsx(classes.img_div, classes.trip_sect_img_div)}>
      <img src={trip1_image} alt='trip' />
      <img src={trip2_image} alt='trip' />
      <LandingTokenCard />
    </div>
  )

  // Renderer countdown callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render when timer count down complete
      return <TripTokenImage />
    } else {
      // Render a countdown
      return (
        <TokenSaleComingSoon
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )
    }
  }

  const showNotification = (type, msg) => {
    if (type === 'error') {
      toast.error(msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.success(msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  const validateEmail = email => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return true
    } else {
      return false
    }
  }
  const saveData = async () => {
    setLoading(true)
    if (email !== '') {
      if (validateEmail(email)) {
        const payload = {
          name: '',
          email: email
        }
        await saveSubscriber(payload)
          .then(res => {
            setLoading(false)
            if (res !== null) {
              setLoading(false)
              showNotification(
                'success',
                'You have successfully subscribed to our newsletter'
              )
              setEmail('')
            } else {
              setLoading(false)
              showNotification(
                'error',
                'Something! went wrong. please try again'
              )
            }
          })
          .catch(error => {
            console.log('error', error)
            setLoading(false)
          })
      } else {
        setLoading(false)
        showNotification('error', 'Please enter valid email!')
      }
    } else {
      showNotification('error', 'Please enter email first!')
      setLoading(false)
    }
  }

  return (
    <div className={classes.container}>
      <section className={classes.top_sect}>
        <Container maxWidth={false}>
          <Link to={'/'} className={classes.title_div}>
            <h2 className={classes.title}>
              <img src={logo_image} alt='' />
            </h2>
            <span className={classes.title_powered_by}>
              Powered by Fetch.ai
            </span>
          </Link>
          <div className={classes.border_bottom}></div>
          <h2 className={classes.text}>
            Connecting hoteliers and travellers directly, creating a new
            marketplace with greater rewards and savings.
          </h2>
          <div className={classes.banner_div}>
            <img src={banner} alt='banner' className={classes.banner_image} />
          </div>
        </Container>
      </section>
      <Container maxWidth={false}>
        <section className={classes.technology_sect}>
          <div className={classes.img_div}>
            <img src={technology_img} alt='hotel' />
          </div>
          <div className={classes.content_div}>
            <h2 className={classes.content_title}>Technology</h2>
            <div className={classes.content}>
              <p>
                AI services (agents) represent you, and the hotel. They can
                search and find one another over a decentralised, search layer.
                Similarly to Google, but without one owner.
              </p>
              <p>
                Using agents, we’re able to become a digital twin to your needs.
                Based on parameters you define, your agent can represent and
                search for your requirements, whether that is a room for the
                night, or customers for your vacant rooms.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.hoteliers_sect}>
          <div className={classes.content_div}>
            <h2 className={classes.content_title}>For hoteliers</h2>
            <div className={classes.content}>
              <p>
                Connect with millions of decentralisation enthusiasts. Have
                complete control on your inventory, and what you share from it.
                Leverage fetch.ai technology to optimise and best price you
                inventory. Be part of a fee-less system; with no vendor lock in.
              </p>
            </div>
          </div>
          <div
            className={clsx(classes.img_div, classes.hoteliers_sect_img_div)}
          >
            <img src={hoteliers_image} alt='hotel' />
          </div>
        </section>
        <section className={classes.trip_sect}>
          {/* the month is 0-indexed */}
          <Countdown date={new Date(2021, 9, 10)} renderer={renderer} />
          <div className={classes.content_div}>
            <h2 className={classes.content_title}>TRIP token</h2>
            <div className={classes.content}>
              <p>
                TRIP is the token which powers the network, rewards are in TRIP
                are paid to consumers. In later releases TRIP holders can vote
                for network change.
              </p>
              <p>
                When making a booking on decentralized.travel, a user can expect
                between 0.2 and 3% in TRIP rewards.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.stacking_sect}>
          <div className={classes.content_div}>
            <h2 className={classes.content_title}>Staking</h2>
            <div className={classes.content}>
              <p>
                Further details of the tokenomics will be released with our
                litepaper in Q4 2021.
              </p>
              <button className={classes.staking_button}>
                View past litepapers
              </button>
            </div>
          </div>
          <div className={clsx(classes.img_div, classes.stacking_sect_img_div)}>
            <img src={stack_image} alt='hotel' />
          </div>
        </section>
        <section className={classes.why_trip_sect}>
          <div className={clsx(classes.img_div, classes.why_trip_img_div)}>
            <img src={trip_image} alt='hotel' />
          </div>
          <div className={classes.content_div}>
            <h2
              className={clsx(classes.content_title, classes.why_trip_tittle)}
            >
              Why TRIP
            </h2>
            <div className={classes.content}>
              <p>
                TRIP exists as the travel industry has been decimated by online
                travel agents fees, coupled with a pandemic that has created a
                need for a sustainable, industry focused platform that isn’t
                paying 10%+ in fees to a centralised service.
              </p>
              <p>
                In turn, we can offer the user a great price and direct
                communication with the hotel, meaning a service tailored
                directly to your needs, lead by your agent.
              </p>
              <p>
                Of course, we don’t just support hotels, holiday lets, rooms for
                rent and all those quirky stays can happily be represented on
                decentralized.travel If you’d like to register your hotel to our
                system, or be the first to know about our releases, or have
                general queries, you can contact us:
              </p>
              <button className={classes.why_trip_btn}>
                <MailOutlineIcon className={classes.why_trip_btn_mail_icon} data-testid="mailto-text"/>
                hello@decentralized.travel
              </button>
            </div>
          </div>
        </section>
      </Container>
      <section className={classes.nft_sect}>
        <Container maxWidth={false}>
          <section className={classes.nft_content_sect}>
            <h2
              className={clsx(classes.content_title, classes.nft_content_title)}
            >
              NFTs
            </h2>
            <div className={clsx(classes.nft_content_div, classes.content)}>
              <p>
                Non-fungible tokens are a pivotal change for the travel
                industry; unique stays, events and bookings can be held in an
                NFT, entirely transferable. Decentralized.travel gives the hotel
                industry the ability to mint their own NFTs.
              </p>
              <p>
                NFTs representing rooms allow travellers to sell their booking
                when refunds aren’t possible and they allow hotels to auction
                rooms. Decentralized.travel will be releasing unique NFTs
                throughout the first 3 years as a reward to our community
              </p>
            </div>
          </section>
          <section className={classes.nft_card_sect}>
            <h4
              className={clsx(
                classes.content_title,
                classes.nft_card_sect_title
              )}
            >
              Upcoming NFTS
            </h4>
          </section>

          <div className='sliderSection nft_card_sect'>
            {/* <Slider {...sliderSettings}> */}
            <Grid container spacing={3} data-testid="NFT-Grid">
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                data-testid="NFT-Card"
                  name={'10% off'}
                  src={
                    require('../../Assets/images/landing/upcomingNFT1.png')
                      .default
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                  data-testid="NFT-Card"

                  name='+10 TRIP rewards with every booking'
                  src={
                    require('../../Assets/images/landing/upcomingNFT2.png')
                      .default
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                  data-testid="NFT-Card"

                  name='one free booking, every month'
                  src={
                    require('../../Assets/images/landing/upcomingNFT3.png')
                      .default
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                   data-testid="NFT-Card"

                  name='5% off'
                  src={
                    require('../../Assets/images/landing/upcomingNFT4.png')
                      .default
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                 data-testid="NFT-Card"

                  name='+10 TRIP rewards with every booking'
                  src={
                    require('../../Assets/images/landing/upcomingNFT2.png')
                      .default
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                   data-testid="NFT-Card"

                  name='one free booking, every month'
                  src={
                    require('../../Assets/images/landing/upcomingNFT3.png')
                      .default
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <NftCard
                 data-testid="NFT-Card"

                  name='5% off'
                  src={
                    require('../../Assets/images/landing/upcomingNFT4.png')
                      .default
                  }
                />
              </Grid>
            </Grid>
            {/* </Slider> */}
          </div>
        </Container>
      </section>
      <section className={classes.footer_sect}>
        <Container maxWidth={false}>
          <div className={classes.footer_container}>
            <div className={classes.footer_left}>
              <div className={classes.footer_title_div}>
                <h2 className={classes.footer_title}>TRIP</h2>
                <span className={classes.footer_title_poweredBy}>
                  Utilising
                  <br />
                  Fetch.ai agents
                </span>
              </div>
              <p className={classes.footer_description}>
                Decentralised.travel is a blockchain company, utilising
                decentralised search to directly connect hoteliers and
                travellers.
              </p>
              <p className={classes.footer_description}>London, UK.</p>
            </div>
            <div className={classes.footer_right}>
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
              <div className={classes.flex}>
                <input
                  type='text'
                  placeholder='Enter your email'
                  className={classes.footer_input}
                  value={email}
                  data-testid="email"
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                />
                <button
                  className={classes.footer_email_send_btn}
                  onClick={() => {
                    saveData()
                  }}
                  data-testid="subscribe-btn"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={20} /> : 'Send'}
                </button>
              </div>
            </div>
          </div>
          <p className={classes.footer_text}>&copy; 2021 TRIP, Inc</p>
        </Container>
      </section>
    </div>
  )
}

export default Landing
