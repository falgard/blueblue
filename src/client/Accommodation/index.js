import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './Accommodation.styles.scss'

export default class Accommodation extends React.Component {
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
      [mainStyles.bg__img_kastellet]: true
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      'animated': animate,
      'fadeInUp': animate
    })
  
    return (
      <section id={this.props.id}>
      <div className={imageClasses}>
        <div className={mainStyles.caption}>
          <p>Boende</p>
        </div>
      </div>

      <div className={mainStyles.holder}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={mainStyles.info}>
          <p>Vi har bokat rum åt alla på kastellet och bokat transport från varvet när festen är slut. Säg till i fall ni inte vill ha ett rum. (Betalning sker på plats 1500kr/dubbelrum).</p>
          </div>
        </div>
      </div>
    </section>
    )
  }
}