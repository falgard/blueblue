import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './StartBanner.styles.scss'
//import varvet from '../../static/images/varvet.jpg'

  const ImageSection = props => {
    const imageStyles = classNames(styles.Section, {
      [styles.Small]: props.size.small,
      [styles.bgimg]: true,
      [styles.bgimgvarvet2]: true
    })

  console.log(styles)
  return (
    <section id="hero">
      <div className={styles.overlay}></div>
      <div className={imageStyles}>
        <div className={imageStyles}>
          <h1 className={styles.holder}><span>Blå blå är kärleken</span></h1>
          <h2>Cissi &amp; Micke</h2>
          <p>07.28.2018</p>
        </div>
      </div>
     
      <div className="info animate-box">
        <div className="caption animated fadeInUp">
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

export default ImageSection

// <section id="hero">
// <div class="overlay"></div>
// <div class="bgimg bgimg-varvet-2">
//   <div class="caption animated fadeInUp">
//     <h1 class="holder"><span>Blå blå är kärleken</span></h1>
//     <h2>Cissi &amp; Micke</h2>
//     <p>07.28.2018</p>
//   </div>
// </div>

// <div class="info animate-box">
//   <div class="caption animated fadeInUp">
//     <h2>Vi gifter oss!</h2>
//     </div>
//   <p>Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, 
//     blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. 
//     Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. 
//     Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, 
//     in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula 
//     lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam 
//     maecenas, porta porttitor placerat leo.
//   </p>
//   <!-- <img src="/images/cissi2.jpg" class="img-portrait">
//   <img src="/images/micke.jpg" class="img-portrait"> -->
// </div>
// </section>