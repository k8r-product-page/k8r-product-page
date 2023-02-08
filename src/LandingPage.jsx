import './stylesheets/landingPage.css'
import logo from '../public/logo.png'

function LandingPage() {

  return (
    <div className="landingPage">
      <div className="logoContainer">
        <img id="k8rLogo" src={logo} alt="K8R Logo - A robot butler holds the K8R logo on a silver platter." />
      </div>
      <div className="verticalLine"></div>
      <div className="rightSideContainer">
        <span className="tagline">A real time Kubernetes visualizer that works for you, and not the other way around.</span>
      </div>
    </div>
  )
}

export default LandingPage;
