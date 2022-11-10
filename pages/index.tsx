
import Universities from '../components'
import UsersCarousel from '../components/Cards/Profile'
import User from '../components/Cards/Profile/User'
import Footer from '../components/Footer'
// import CustomSlider from './CustomSlider'

interface PropsType {
}


const Home: React.FC<PropsType> = () => {

  return (
    <div >
        {/* <Footer/> */}
      {/* <User /> */}
      <UsersCarousel />
      {/* <Universities /> */}
  
    </div>
  )
}

export default Home