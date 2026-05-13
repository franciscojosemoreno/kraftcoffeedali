import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import PetFriendly from '@/components/PetFriendly'
import JoyaBrunch from '@/components/JoyaBrunch'
import Reviews from '@/components/Reviews'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <PetFriendly />
        <JoyaBrunch />
        <Reviews />
        <Locations />
      </main>
      <Footer />
    </>
  )
}
