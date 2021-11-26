import React from 'react'
import FirstSection from './Component/FirstSection/FirstSection'
import Invest from './Component/otherSections/Invest/Invest'
import Nav from './GeneralComponent/Nav/Nav'
import {BrowserRouter as Router} from "react-router-dom";
import SetGoals from './Component/otherSections/setGoals/setGoal';
import Choose from './Component/otherSections/Choose/choose';
import WeRemember from './Component/otherSections/weRemember/weRemember';
import AssetClass from './Component/assetClasses/assetClass';
import SaveYourFuture from './Component/saveYourFuture/saveYourFuture';
import HowAreWeRegulated from './Component/howAreWeRegulated/howAreWeRegulated';
import RiseUser from './Component/riseUsers/riseUser';
import JoinRise from './Component/joinRise/joinRise';
import DownloadRise from './Component/downloadRise/downloadRise';
import Footer from './GeneralComponent/Footer/footer';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <FirstSection />
        <Invest />
        <Choose/>
        <SetGoals/>
        <WeRemember/>
        <AssetClass/>
        <SaveYourFuture/>
        <HowAreWeRegulated/>
        <RiseUser/>
        <JoinRise/>
        <DownloadRise/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
