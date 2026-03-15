
import Navbar from '../organism/Navbar.jsx';
import Header from '../organism/Header.jsx'
import PackageCard from '../organism/Package.jsx';
import Br1 from '../organism/Br1.jsx';
import Footer from '../organism/Footer.jsx';
import ReviewSection from '../organism/ReviewSection.jsx';
import LastSection from '../organism/LastSection.jsx';


function HomePage() {
 

  return (
      <>
      
      
      <Navbar/>
      <Header/>

      <div className='bg-[#F3E8D7]'>
   {/* BREAK SECTION */}
      <Br1/>
      {/* section 1 */}
      <PackageCard/>
      </div>
   

      
      <ReviewSection/>

      <LastSection/>

      <Footer/>
      
      </>
           
  )
}

export default HomePage
