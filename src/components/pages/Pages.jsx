import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import RecentPage from "../home/recent/RecentPage"
import Team from "../home/team/Team"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/recentpage' component={RecentPage} />
          <Route exact path='/team' component={Team} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
