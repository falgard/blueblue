import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './Footer.styles.scss'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)    
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      animate: false
    }
  }

  handleResize() {
  }
  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet2]: true
    })
    
    return (
      <section id={this.props.id}>    
        <div className={styles.info}>
            <div className={styles.grid}>
              <img className={styles.date} src="images/icons/wedding-day.svg"/> 
              <p>28e Juli 2018 13:00<br />
              Hedvig Eleonora Kyrka</p>
            </div>
            <div className={styles.grid}>
              <img className={styles.couple} src="images/icons/couple.svg"/>
              <p>Cissi (0704673134) <br />
              Micke (0738370005) </p>
            </div>
        </div>
    </section>
    )
  }
}