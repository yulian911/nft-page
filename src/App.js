import './App.css';
import  {Button,Download,Features,SectionWrapper} from './components'
import asseats from './assets'
import styles from './styles/Global';

const App =()=> {
  return (
  <>
    <SectionWrapper title="You own of Nifty NFTs.
      Start Seling & Growing
      "
      description='Byy, store,collect NFTS,
      exchange & earn crypto .Join 25+ milion people using ProfNet Market'
      showBtn
      mockupImg={asseats.homeHero}
      banner='banner'
    >

    </SectionWrapper>
    <SectionWrapper 
      title="Smart User Interface Marketplace"
      description='Experience a buttery UI of ProNef NFT Marketplace.Smooth constant color of
      A Fluent UI design'
      mockupImg={asseats.homeCards}
      reverse
    >

    </SectionWrapper>
    <Features/>
    <SectionWrapper title="Deployment
      "
      description="ProfNef is built using Expo which runs natively on all users
      devices. You can easily get your app into people's hands"
      mockupImg={asseats.feature}
      reverse
    >

    </SectionWrapper>
    <SectionWrapper 
      title="Creative way to showcase the store"
      description='The app contains two screens. The first screen lists all NTFs while the second one shows the details of a specific NFT.'
      mockupImg={asseats.mockup}
      banner ="banner02"
    >

    </SectionWrapper>
    <Download/>
    <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
      <p className={ `${styles.pText} ${styles.whiteText}`}>Made with love by {" "}      <span className='bold'>
        J4SK13R{' (YM)'}
      </span></p>
 
    </div>
  </>
  
  );
}

export default App;
