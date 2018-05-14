import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Waypoint from 'react-waypoint'
import { Parallax } from 'react-parallax'

import mainStyles from '../App.scss'
import styles from './Hero.styles.scss'

export default class Hero extends React.Component {
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

  renderBackground(bgClasses, animationClasses) {
    if (this.state.small) {
      return (
        <Parallax bgImage={'../../images/varvet2.jpg'} strength={500} bgHeight={'700px'}>
          <div className={styles.bg__overlay}></div>
            <div className={animationClasses}>
              <h1 className={styles.holder}><span>Blå blå är kärleken</span></h1>
              <h2>Cissi &amp; Micke</h2>
              <p>28.07.2018</p>
            </div>
          <div style={{ height: '700px' }} />
        </Parallax>)
    }
     return (<div className={bgClasses}>
        <div className={styles.bg__overlay}></div>
          <div className={animationClasses}>
            <h1 className={styles.holder}><span>Blå blå är kärleken</span></h1>
            <h2>Cissi &amp; Micke</h2>
            <p>28.07.2018</p>
          </div>
      </div>
    )
  }

  render() {
    const heroClasses = classNames({
      [mainStyles.bg__img]: true,
      [styles.bg__img_varvet2]: true,
      [mainStyles.small]: this.state.small,
      [styles.small]: this.state.small
    })

    const animationClasses = classNames({
      [mainStyles.caption]: true,
      [styles.caption]: true,
      [mainStyles.small]: this.state.small,
      [styles.small]: this.state.small,
      'animated': true,
      'fadeInUp': true
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      [styles.small]: this.state.small,
      'animated': animate,
      'fadeInUp': animate
    })

    const infobox = classNames({
      [styles.small]: this.state.small,
      [styles.info]: true
    })

  return (
    <section id={this.props.id}>
      {this.renderBackground(heroClasses, animationClasses)}

      <div className={infobox}>
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
