
import Navbar from '../organism/Navbar';
import Header from '../organism/Header.jsx'
import PackageCard from '../organism/Package';
import Br1 from '../organism/Br1';
import Footer from '../organism/Footer.jsx';
import ReviewSection from '../organism/ReviewSection.jsx';


function HomePage() {
 

  return (
      <>
      
      
      <Navbar/>
      <Header/>
      {/* BREAK SECTION */}
      <Br1/>
      {/* section 1 */}
      <PackageCard/>

      
      <ReviewSection/>

      

      <Footer/>
      
      </>
           
  )
}

export default HomePage
