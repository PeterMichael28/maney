
import logo from '../assets/hero.png'

import { HiMenu } from "react-icons/hi";
import { FaTools } from "react-icons/fa";
import {  homeData } from '../homeData';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import {useNavigate} from 'react-router-dom'
function HomePage() {
  const [loading, setloading] = useState(true)
  const navigate = useNavigate()

  useEffect( () => {
    const timer = setTimeout( () => {
      setloading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    {
        loading ? (
          <Loader />
        ): (
          <div className='px-4 sm:px-3 md:px-2 lg:px-3 max-w-[1140px] mx-auto'>

          {/* header */}
          <header className='w-full pt-5 py-3 flex justify-between items-center'>
            <h2><a href="#" className='text-white font-semibold text-[1.5rem] md:text-[1.8rem]'>Debug<span className='text-[#BC3FEA]'>DappNode</span></a></h2>
            <nav className='hidden lg:block'>
              <ul className='flex space-x-9 text-fill font-semibold '>
                <li><a href="#" className='text-[#BC3FEA]'>Home</a></li>
                <li><a href="#">Connect Dconnect</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </nav>
              <HiMenu size={30} className='text-fill lg:hidden cursor-pointer' />
          </header>
    
          <main >
            {/* hero */}
            <section className='flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row py-8 '>
              {/* text */}
              <div className='flex flex-col items-start text-left lg:-mt-[70px]'>
                <h1 className='text-[2.7rem] md:text-[3.9rem] font-bold'>Decentralized</h1>
                <h3 className='text-[1.8rem] md:text-[2.4rem] font-semibold -mt-2 md:-mt-3'>Platform Wallet</h3>
                <p className='text-[1rem] text-fill my-2 mt-5'>Powerful tool for wallet validation</p>
    
                <button className='py-[10px] md:py-[15px] rounded bg-[#BC3FEA] px-[30px] flex justify-center items-center text-white text-sm mt-10 hover:opacity-80 transition-all duration-300 font-semibold'>
                  Start Here
                </button>
              </div>
    
              {/* image */}
              <div className='relative md:w-1/2 mt-9  md:-mt-6 lg:-mr-[13rem]'>
                <img src="https://www.debugchain.live/0x/wp-content/uploads/2022/09/world.png" alt="" className='w-full h-full md:scale-90' />
                <img src={logo} alt="hero image" className='absolute w-full h-full top-0 left-0 z-10 bottom-0'/>
              </div>
    
              <hr className='text-gray-300 mt-5'/>
            </section>
          
            <div className='mt-7 text-center'>
              <h2 className='text-white font-semibold text-[2rem] mb-3'>Services</h2>
              <p className='mb-5 text-[#848296] text-sm lg:w-[80%] mx-auto'>DebugDappNode is a decentralized protocol. dConnect create an innovative open-source software ecosystem that is both secure and resilient. And it allows developers to create new online tools, many of which have the interest of global business markets. Validation of wallet will be completed below as follows</p>
            </div>

            <div className='mt-[5rem] text-center mb-[10rem]'>
              <h2 className='text-white font-semibold text-[2rem] mb-3'>Multichain Network Launchpads</h2>
              <h4 className='text-white font-semibold lg:w-[80%] mx-auto mb-4'>Do more and be more right out the gate. Ignition and Apollo-X have successfully launched over 70 top-tier, and highly sought after projects since 2021.</h4>
                  <p className='mb-5 text-[#848296] text-sm lg:w-[80%] mx-auto'>{ `Ignition and Apollo-X are the Multichain community's gateways to the best projects in the space. Ignition’s straightforward lottery system provides easy access to top tier project offerings. Ignition vets and selects top-tier cutting-edge projects to launch while supporting their growth along the way. Apollo-X, complements the services of Ignition, widening the service portfolio of the ecosystem and adding value to the Multichain community. Apollo-X creates inclusivity in the ecosystem by increasing the opportunities for participating in upcoming and exciting decentralized projects -- exploring novel ideas from smaller teams that deserve some time in the limelight.` }
                  <br />
                  Multichain Network creates massive opportunities for growth. Capitalizing on Multichain Network’s community strength, along with Master Ventures incubation resources, Multichain Network launchpads provide a one-stop shop of endless opportunity for everyone.
                  </p>
            </div>
            {/* services */}
            <section className='flex flex-wrap w-full justify-center gap-x-2 gap-y-3 md:gap-y-5'>
              {
                homeData.map( data => (
                  <div key={data.id} className='flex flex-col justify-center items-center text-center bg-[#1A1C2C00] border-white/40 rounded-[10px] border-2 transition-all duration-300 py-[30px] px-[20px] w-full flex-wrap sm:w-[49%] md:w-[32%]'>
                    <FaTools color='white' size={ 60} className='mb-[20px]'/>
                    <h3 className='font-bold text-[1.3rem] mt-4'>{ data.title }</h3>
                    <p className='text-[#848296] mt-5 mb-[1.1rem] text-center'>{ data.desc }</p>
    
                    <button className='py-[12px] md:py-[12px] rounded bg-[#BC3FEA] px-[27px] flex justify-center items-center text-white text-sm mt-10 hover:opacity-80 transition-all duration-300 font-semibold' onClick={() => navigate('/wallets')}>
                  Select
                </button>
                  </div>
                ))
              }
    
             
            </section>
          </main>
         
    
          <footer className='w-full mt-20 pb-5 text-center text-sm '>
            <p className='text-[#848296]'>Copyright © 2022 All rights Reserved</p>
          </footer>
        </div>
      )
    }
  
    </>
  )
}

export default HomePage
