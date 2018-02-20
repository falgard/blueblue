import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './StartBanner.styles.scss'
// import varvet from '../../static/images/varvet.jpg'


const ImageSection = props => {
  const sectionStyles = classNames(styles.Section, {
    [styles.Small]: props.size.small
  })

  return (
    <section className={sectionStyles} id={props.id}>
      // <img className={styles.Image} srcSet={varvet.srcSet} src={varvet.src}></img>
      <div className={styles.Titles}>
        <h1 className={styles.Title}>Blå blå är kärleken</h1>
        <p className={styles.SubTitle}>Cissi & Micke</p>
      </div>
    </section>
  )
}

export default ImageSection