
import Universities from '../components'
import CourseCarousel from '../components/Cards/Courses'
import Profile from '../components/Cards/Courses/Profile'
import UsersCarousel from '../components/Cards/Profile'
import User from '../components/Cards/Profile/User'
import WorkshopCarousel from '../components/Cards/Workshop'
import Footer from '../components/Footer'
// import CustomSlider from './CustomSlider'

interface PropsType {
}


const Home: React.FC<PropsType> = () => {

  return (
    <div >
        {/* <Footer/> */}
      {/* <User /> */}
      {/* <UsersCarousel /> */}
      <Universities />
      {/* <CourseCarousel /> */}
      {/* <WorkshopCarousel /> */}
  
    </div>
  )
}

export default Home