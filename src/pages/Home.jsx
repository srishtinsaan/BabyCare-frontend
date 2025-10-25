import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from './About'
import Programs from './Programs'
import Services from './Services'
import Events from './Events'
import Blogs from './Blogs'
import Team from './Team'
import Footer from '../components/Footer'
import Testimonials from './Testimonials'

function Home() {
  return (
    <div className='w-full'>
      <Navbar/>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Programs></Programs>
      <Events></Events>
      <Blogs></Blogs>
      <Team></Team>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default Home
