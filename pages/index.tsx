
import { StarFilled } from '@ant-design/icons'
import Universities from '../components'
import Card from '../components/Cards/card'
import IconWithText from '../components/Cards/card/IconWithText'
import CourseCarousel from '../components/Cards/Courses'
import Profile from '../components/Cards/Courses/Profile'
import UsersCarousel from '../components/Cards/Profile'
import User from '../components/Cards/Profile/User'
import WorkshopCarousel from '../components/Cards/Workshop'
import Footer from '../components/Footer'
import Popup from '../components/popup/Popup'
// import CustomSlider from './CustomSlider'

interface PropsType {
}


const Home: React.FC<PropsType> = () => {

  return (
    <div>
        {/* <Footer/> */}
      {/* <User /> */}
      {/* <UsersCarousel /> */}
      {/* <Universities /> */}
      {/* <CourseCarousel /> */}
      {/* <WorkshopCarousel /> */}
      {/* <Card /> */}
      {/* <IconWithText icon={<StarFilled />} label='8' labelSec='/24' bgcolor='white'/> */}
  <Popup/>
    </div>
  )
}
export default Home


// export const getStatic props