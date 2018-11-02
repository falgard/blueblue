import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Waypoint from 'react-waypoint'
import { Parallax } from 'react-parallax'

import mainStyles from '../App.scss'
import styles from './Ceremony.styles.scss'

export default class Ceremony extends React.Component {
  constructor(props) {
    super(props)    
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)

    this.state = {
      animate: false,
      small: props.size.small
    }
  }

  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  }

  renderBackground(bgClasses) {
    if (this.state.small) {
      return (
        <Parallax bgImage={'../../images/hedvig.jpg'} strength={300} bgHeight={'700px'}>
        <div className={mainStyles.caption}>
            <p>Vigsel</p>
          </div>
        <div style={{ height: '700px' }} />
        </Parallax>)
    }
     return (<div className={bgClasses}>
      <div className={mainStyles.caption}>
      <p>Vigsel</p>
        </div>
    </div>
    )
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_hedvig]: true,
      [mainStyles.small]: this.state.small,
      [styles.small]: this.state.small
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      [mainStyles.small]: this.state.small,
      'animated': animate,
      'fadeInUp': animate
    })

    const infobox = classNames({
      [mainStyles.small]: this.state.small,
      [mainStyles.info]: true
    })
  
    return (
      <section id={this.props.id}>
      <div className={mainStyles.holder}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={infobox}>
          <img className={mainStyles.icon} src="images/icons/heart.svg"/>
          <p><strong>Klädsel</strong><br />Kavaj, lederhosen eller annan högtidsdräkt. 
          <br />Det finns absolut möjlighet till bastu och bad så det är lika bra att ta med baddräkt också. 
          <br /> <br /> 
          <strong>Barn</strong><br />Är såklart inte förbjudna men innebär viss logistik, kontakta oss om ni inte har möjlighet att lösa barnvakt. 
          </p>
          </div>
        </div>
      </div>

      {this.renderBackground(imageClasses)}

      <div className={mainStyles.holder}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={infobox}>
          <img className={mainStyles.icon} src="images/icons/ring.svg"/>
          <p>Sker i <a href="https://goo.gl/maps/2QR8xvJehyt" target="_blank">Hedvig Eleonora kyrka</a> på Storgatan kl 13.00.</p>
          </div>
        </div>
      </div>

      <div>
  </div>
    </section>
    )
  }
}