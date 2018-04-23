import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './Hero.styles.scss'

export default class Hero extends React.Component {
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
    const heroClasses = classNames({
      [mainStyles.bg__img]: true,
      [styles.bg__img_varvet2]: true,
    })

    const animationClasses = classNames({
      [mainStyles.caption]: true,
      [styles.caption]: true,
      'animated': true,
      'fadeInUp': true
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      'animated': animate,
      'fadeInUp': animate
    })

  return (
    <section id={this.props.id}>
      <div className={styles.bg__overlay}></div>
      <div className={heroClasses}>
          <div className={animationClasses}>
            <h1 className={styles.holder}><span>Blå blå är kärleken</span></h1>
            <h2>Cissi &amp; Micke</h2>
            <p>07.28.2018</p>
          </div>
      </div>
      <div className={styles.info}>
        <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <h2>Vi gifter oss!</h2>
          <p>Vi är jätte glada att ni vill komma på vårt bröllopskalas och såklart hedra själva vigselakten med er närvaro. Det kommer att bjudas på riktigt fint sommarväder i skärgårdsmiljö.</p><br/>
          <img className={styles.couple} src="images/icons/couple.svg"/><br/>
          <strong>28e Juli 2018 Östermalm/Vaxholm</strong>
          
        </div>
      </div>
    </section>
  )
  }
}