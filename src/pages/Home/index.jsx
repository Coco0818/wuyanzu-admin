import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

export default class Home extends Component {
  state = {
    username: '',
  }
  componentWillMount() {
    this.getUsername()
  }

  getUsername = () => {
    const username = localStorage.getItem('USERNAME')
    console.log(username)
    this.setState({
      username,
    })
  }

  render() {
    const { username } = this.state
    return username ? <Redirect to="/admin" /> : <Redirect to="/login" />
  }
}
