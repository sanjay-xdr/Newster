import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

   articleNumber=12;

   state={
     progress:0
   }

   setProgress=(progress)=>{
     this.setState({progress:progress})
}
  render() {
    return (
      <div>

<Router>

<LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

        <NavBar/>
        
        <Switch>
          <Route exact path="/"> <News  setProgress={this.setProgress}  pageSize={this.articleNumber} key="general" country="in" category="general"/> </Route>
          <Route exact path="/business"> <News  setProgress={this.setProgress}  key="business" pageSize={this.articleNumber} country="in" category="business"/> </Route>
          <Route exact path="/entertainment"> <News  setProgress={this.setProgress}  key="entertainment" pageSize={this.articleNumber} country="in" category="entertainment"/> </Route>
          <Route exact path="/general"> <News  setProgress={this.setProgress}  key="general" pageSize={this.articleNumber} country="in" category="general"/> </Route>
          <Route exact path="/health"> <News  setProgress={this.setProgress}  key="health" pageSize={this.articleNumber} country="in" category="health"/> </Route>
          <Route exact path="/science"> <News  setProgress={this.setProgress}  key="science" pageSize={this.articleNumber} country="in" category="science"/> </Route>
          <Route exact path="/sports"> <News  setProgress={this.setProgress}  key="sports" pageSize={this.articleNumber} country="in" category="sports"/> </Route>
          <Route exact path="/technology"> <News  setProgress={this.setProgress}  key="technology" pageSize={this.articleNumber} country="in" category="technology"/> </Route>


        
        </Switch>

</Router>


        
      </div>
    )
  }
}





