import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Hero.styles.scss'

  const HeroSection = props => {
    const heroClasses = classNames(styles.Section, {
      [styles.Small]: props.size.small,
      [styles.bgimg]: true,
      [styles.bgimgvarvet2]: true
    })

    const animationClasses = classNames({
      [styles.caption]: true,
      'animated': true,
      'fadeInUp': true
    })

    var infoClasses = classNames({
      [styles.info]: true,
      'animate-box': true
    })

  return (
    <section id="hero">
      <div className={styles.overlay}></div>
      <div className={heroClasses}>
        <div className={animationClasses}>
          <h1 className={styles.holder}><span>Blå blå är kärleken</span></h1>
          <h2>Cissi &amp; Micke</h2>
          <p>07.28.2018</p>
        </div>
      </div>
     
      <div className={infoClasses}>
        <div className={animationClasses}>
          <h2>Vi gifter oss!</h2>
          </div>
        <p>Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, 
          blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. 
          Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. 
          Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, 
          in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula 
          lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam 
          maecenas, porta porttitor placerat leo.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
