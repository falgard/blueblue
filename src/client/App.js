import React, { Component } from 'react'
import styles from './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import DocumentMeta from 'react-document-meta'

import ScrollToTop from './Utils/ScrollToTop'
import StartBanner from './StartBanner/StartBanner'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
    const width = window.innerWidth
    console.log('app.js')
    this.state = {
      hasScrolled: false,
      size: {
        small: width <= 576,
        medium: width > 576 && width <= 992,
        large: width > 992 && width <= 1200,
        xlarge: width > 1200
      }
    }
    console.log(this.state)

    this.resize = undefined
    // ReactGA.initialize('UA-106217141-1')
    // ReactGA.pageview(window.location.pathname)
  }

  componentDidMount() {
    console.log('did mount')
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
    console.log('render startpage')
    const meta = {
      title: 'Blå blå är kärleken - Cissi & Micke',
      description: 'Blå blå är kärleken'
    }

    return (
      <DocumentMeta {...meta}>
        <StartBanner id='start' size={size} />
      </DocumentMeta>
    )
  }

  render() {
    console.log('render')
    return (
      <Router>
        <ScrollToTop>
          <Route exact path='/' component={() => this.StartPage(this.state.size)} />
        </ScrollToTop>
      </Router>
    )
  }
}