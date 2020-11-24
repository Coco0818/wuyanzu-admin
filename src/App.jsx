import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./config/routes";
import { createBrowserHistory } from "history";
import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { zh, en } from "./locales";

import Positions from "./pages/Positions";
const history = createBrowserHistory();

function App({ language }) {
  const messages = language === "en" ? en : zh; // 自定义的方案
  const locale = language === "en" ? enUS : zhCN; // antd的方案
  return (
    <>
      {/* <Router history={history}>
        <ConfigProvider locale={locale}>
          <IntlProvider
            locale={language} // 当前语言环境
            messages={messages} // 加载使用的语言包
          >
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {routes.map((route) => {
                  return <Route {...route} key={route.path} />
                })}
              </Switch>
            </Suspense>
          </IntlProvider>
        </ConfigProvider>
      </Router> */}
      <Positions />
    </>
  );
}

export default connect((state) => ({ language: state.language }))(App);
