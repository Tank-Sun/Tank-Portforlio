import Navbar from '@/components/Navbar'
import Main from '@/components/Main';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <main className='mx-auto px-4'>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
