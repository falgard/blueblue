import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './Ceremony.styles.scss'

export default class Ceremony extends React.Component {
  constructor(props) {
    super(props)    
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)

    this.state = {
      animate: false
    }
  }

  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_hedvig]: true
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      'animated': animate,
      'fadeInUp': animate
    })
  
    return (
      <section id={this.props.id}>
      <div className={mainStyles.holder}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={mainStyles.info}>
          <img className={mainStyles.icon} src="images/icons/heart.svg"/>
          <p><strong>Klädsel </strong>Kavaj, lederhosen eller annan högtidsdräkt. 
          <br />Det finns absolut möjlighet till bastu och bad så det är lika bra att ta med baddräkt också. 
          <br /> <br /> Barn är såklart inte förbjudna men innebär viss logistik, kontakta oss om ni inte har möjlighet att lösa barnvakt. 
          </p>
          </div>
        </div>
      </div>

      <div className={imageClasses}>
        <div className={mainStyles.caption}>
          <p>Vigsel</p>
        </div>
      </div>

      <div className={mainStyles.holder}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={mainStyles.info}>
          <img className={mainStyles.icon} src="images/icons/ring.svg"/>
          <p>Sker i <a href="https://goo.gl/maps/2QR8xvJehyt" target="_blank">Hedvig Eleonora kyrka</a> kl 13.00 på Storgatan.</p>
          </div>
        </div>
      </div>
    </section>
    )
  }
}