import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

// 引入公共样式
// 引入antd样式
import 'antd/dist/antd.css'
import './assets/css/reset.css'
// redux
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
