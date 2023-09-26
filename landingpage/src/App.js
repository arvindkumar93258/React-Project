import './App.css';
import { HomeScreen } from './component/HomeScreen/HomeScreen';
import { Navbar } from './component/Navbar/Navbar';
import { FeatureScreen } from './component/FeatureScreen/FeaturesScreen';
import { StyleSection } from './component/StyleSection/StyleSections';
import { ReviewScreen } from './component/ReviewScreen/ReviewScreen';
import { InfoSection } from './component/InfoScreen/InfoScreen';

function App() {
  return (
    <>
      <div >
        <Navbar />

      </div>
      <div id="homeScreen" className='eachSection'>
        <HomeScreen />
      </div>
      <div id="featuresScreen" className='eachSection'>
        < FeatureScreen />
      </div>
      <div id="styleSec" className='eachSection'>
        <StyleSection />
      </div>
      <div id="infoScreen" className='eachSection'>
        <InfoSection />
      </div>
      <div id="servicesScreen" className='eachSection'>

      </div>
      <div id="reviewScreen" className='eachSection'>
        <ReviewScreen />
      </div>

      <div id="footerScreen" className='eachSection'>

      </div>
    </>
  );
}

export default App;
