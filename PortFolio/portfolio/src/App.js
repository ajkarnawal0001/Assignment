import styled from "styled-components";
import { Container, Grid, Typography } from "@material-ui/core";
import { Profile } from "./Components/Profile/Profile";
import { Header } from "./Components/Header/Header";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Resume } from "./Pages/Resume/Resume";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";
function App() {
  return (  
    <Particles
    id="tsparticles"
    url="http://foo.bar/particles.json"
    init={this.particlesInit}
    loaded={this.particlesLoaded}
  />
  );
}
export default App;

{/* <Container>
<Grid container>
  <Grid item xs={12} sm={12} lg={3} md={4}>
    <Profile />
  </Grid>
  <Grid item xs>
    <Header />
    <Router>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Resume />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </Grid>
</Grid>
</Container>
<Particles  */}


// https://codesandbox.io/s/whjt0?file=/src/App.js