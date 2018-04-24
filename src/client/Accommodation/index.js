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
      animate: false,
      small: props.size.small
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
      <div className={styles.bg__overlay}></div>
      <div className={imageClasses}>
        <div className={mainStyles.caption}>
          <p>Boende</p>
        </div>
      </div>

      <div className={mainStyles.holder}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={infobox}>
          <img className={mainStyles.icon} src="images/icons/placeholder.svg"/>
          <p>Vi har bokat rum på kastellet och lånat några gästhus på ön, så vi hoppas att alla har möjlighet att stanna över natten. Säg till så snart som möjligt i fall ni har andra planer. 
          <br /><br />Båt-taxi efter kalaset från varvet till kastellet är bokad.
          <br />Från Vaxholm tar man sig sedan dagen efter på egen hand mha båt eller buss.
          <br />Betalning sker på plats, ~1600kr/dubbelrum inkl frukost.</p>
          </div>
        </div>
      </div>
    </section>
    )
  }
}