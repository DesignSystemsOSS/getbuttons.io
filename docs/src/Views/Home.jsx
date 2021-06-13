
import ThreeDimensionalButtonContainer from "../Components/3DButtonContainer/3DButtonContainer";
import "../Styles/main.css"

const Home = () => {
  return (
    <div className="Home">
      <div className="introduction-container">
        
        <div className="introduction-description-section">
          <h1 className="massive-headline">
            Love <button className="sample-button-primary">Buttons</button>? Get so many <button className="sample-button-raised">button</button> designs. Click Click!!
          </h1>
          <span className="links-layer">
            <ul className="links-list">
              <li className="link-item">
                <a href="https://www.github.com/DesignSystemsOSS/getbuttons.io">
                  GitHub
                </a>
              </li>
              •
              <li className="link-item">
                <a href="https://www.github.com/DesignSystemsOSS">
                  DesignSystemsOSS
                </a>
              </li>
              •
              <li className="link-item">
                <a href="https://github.com/DesignSystemsOSS/getbuttons.io/blob/master/CONTRIBUTING.md">
                  Contribute
                </a>
              </li>
              •
              <li className="link-item">
                <a href="https://github.com/DesignSystemsOSS/getbuttons.io/issues">
                  Issues
                </a>
              </li>
            </ul>
          </span>
        </div>
        <div className="3d-button-container">
          <ThreeDimensionalButtonContainer />
        </div>
      </div>
    </div>
  )
}

export default Home;