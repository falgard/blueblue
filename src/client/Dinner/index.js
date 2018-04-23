import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
//import styles from './Dinner.styles.scss'

export default class Dinner extends React.Component {
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
      [mainStyles.bg__img_varvet1]: true
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
            <p>Middag</p>
          </div>
        </div>

      <div className={mainStyles.holder}>
      <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={mainStyles.info}>
            <img className={mainStyles.icon} src="images/icons/toast.svg"/>
            <p>Efter vigseln har vi ordnat transport från strandvägen till varvet där middagen kommer att hållas. <a href="mailto:lise">Lise Wetzel</a> och <a href="mailto:chris">Christofer Holmgren</a> är toastmasters, meddela dom i fall ni vill uppträda och eventuella allergier/vegetarianer.</p>
          </div>
        </div>
      </div>
      </section>
    )
  }
}