import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ConfigProvider } from 'antd'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { zh, en } from './locales'

import routes from '@config/routes'

const history = createBrowserHistory()

function App({ language }) {
  const messages = language === 'en' ? en : zh // 自定义的方案
  const locale = language === 'en' ? enUS : zhCN // antd的方案
  return (
    <>
      <ConfigProvider locale={locale}>
        <IntlProvider
          locale={language} // 当前语言环境
          messages={messages} // 加载使用的语言包
        >
          <Router history={history}>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {routes.map((route) => {
                  return <Route key={route.path} {...route}></Route>
                })}
              </Switch>
            </Suspense>
          </Router>
        </IntlProvider>
      </ConfigProvider>
    </>
  )
}

export default connect((state) => ({ language: state.language }))(App)
