import React, { Component } from 'react'
import styles from './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import DocumentMeta from 'react-document-meta'

import ScrollToTop from './Utils/ScrollToTop'
import Hero from './Hero'
import WeddingDay from './WeddingDay'
import Ceremony from './Ceremony'
import Dinner from './Dinner'
import Accommodation from './Accommodation'
import Video from './Video'
import Footer from './Footer'
import Gallery from './Gallery'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
    const width = window.innerWidth
    this.state = {
      hasScrolled: false,
      size: {
        small: width <= 576,
        medium: width > 576 && width <= 992,
        large: width > 992 && width <= 1200,
        xlarge: width > 1200
      }
    }

    this.resize = undefined
    // ReactGA.initialize('UA-106217141-1')
    // ReactGA.pageview(window.location.pathname)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize() {
    clearTimeout(this.resize)
    this.resize = setTimeout(() => {
      const width = window.innerWidth
      this.setState({
        size: {
          small: width <= 576,
          medium: width > 576 && width <= 992,
          large: width > 992 && width <= 1200,
          xlarge: width > 1200
        }
      })
    }, 150)
  }

  StartPage(size) {
    const meta = {
      title: 'Blå blå är kärleken - Cissi & Micke',
      description: 'Blå blå är kärleken',
      canonical: 'https://loveis.blue'
    }

    return (
      <DocumentMeta {...meta}>
        <Hero id='hero' size={size} />
        <Gallery id='gallery' size={size} />
        <WeddingDay id='wedding-day' size={size} />
        <Ceremony id='ceremony' size={size} />
        <Dinner id='dinner' size={size} />
        <Accommodation id='accommodation' size={size} />
        <Video id='video'/>
        <Footer id='footer' size={size}/>
      </DocumentMeta>
    )
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route exact path='/' component={() => this.StartPage(this.state.size)} />
        </ScrollToTop>
      </Router>
    )
  }
}