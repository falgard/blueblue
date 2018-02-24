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
    console.log('waypoint - hero')
    this.setState({
      animate: true
    })
  }

  render() {
    const heroClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet2]: true,
      [styles.bg__img_varvet2]: true
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
      <div className={mainStyles.bg__overlay}></div>
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
          <p>Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, 
            blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. 
            Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. 
            Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, 
            in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula 
            lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam 
            maecenas, porta porttitor placerat leo.
          </p>
        </div>
      </div>
    </section>
  )
  }
}