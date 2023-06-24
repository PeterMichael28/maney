import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import logo from '../assets/logo.svg'
import { data } from '../data';
import { BsTwitter, BsGithub, BsDiscord  } from "react-icons/bs";
import FirstModal from '../components/FirstModal';

const WalletPage = () => {
    const [loading, setloading] = useState(true)
const [isOpen, setIsOpen ] = useState(false)
const [isConnecting, setIsConnecting] = useState(true)
    useEffect( () => {
      const timer = setTimeout( () => {
        setloading(false)
      }, 2000)
  
      return () => clearTimeout(timer)
    }, [])


  return (
      <div className='relative'>
          {
        loading ? (
          <Loader />
        ): (
            <div className=' max-w-[1000px] mx-auto relative pb-10'>
                <header className='w-full justify-between items-center py-2 flex top-0 left-0 z-10  fixed shadow-b header bg-[#020710]'>
                  <div className='w-full justify-between items-center flex max-w-[1000px] mx-auto px-4 md:px-0'>
                    <a className='text-[rgb(100,116,139)] hover:text-[rgb(71,85,105)] transition-all duration-300 cursor-pointer font-semibold lg:text-lg'>Apps</a>
                    <img src={logo} alt='logo' className='w-[4rem] sm:w-[5rem] md:w-[8rem]'/>
                    <a href="" className='text-[rgb(100,116,139)] hover:text-[rgb(71,85,105)] transition-all duration-300 cursor-pointer font-semibold lg:text-lg'>Wallets</a>
                    
                  </div>
                </header>

                <div className='pt-[8rem] text-center'>
                    <h2 className='text-[rgb(100,116,139)] font-bold text-[2.5rem] mb-7'>DebugDappNode</h2>
                    <p className='text-[rgb(55,65,81)] text-lg'> Decentralized Platform Wallet</p>
                </div>

                <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-5 gap-y-10'>
                { data.map( ( a, i ) => (
                  <div className='flex flex-col justify-center items-center cursor-pointer group' key={ i } onClick={ () => {
                    setIsConnecting(true)
                    setIsOpen( true );
                  } }>
                     <img src={a.image} alt="" className='md:w-[9rem] sm:w-[7rem] w-[6rem] rounded-full object-cover mb-3'/>
                     <p className='text-[rgb(95,148,240)] font-semibold transition-all duration-300 group-hover:text-[rgb(16,80,189)]'>{a.name}</p>
                 </div>
                  ))}
                   
                </div>

                  <div className='mt-[6rem]'>
                    <p className='text-center font-semibold text-[rgb(55,65,81)]'>Open an app submission issue on <span className='text-[rgb(63,131,248)]'>GitHub</span> to add your app here.</p>

                    <div className='mt-[5rem] pb-[2rem] flex flex-wrap gap-10 items-center justify-center'>
                      <span className='flex items-center justify-center gap-x-3'>

                        <BsDiscord color='rgb(55,65,81)'/>
                        <span className='text-[rgb(63,131,248)]'>Discord</span>
                  </span>
                  <span className='flex items-center justify-center gap-x-3'>
                        <BsTwitter color='rgb(55,65,81)'/>
                        <span className='text-[rgb(63,131,248)]'>Twitter</span>
                  </span>
                  <span className='flex items-center justify-center gap-x-3'>
                        <BsGithub color='rgb(55,65,81)'/>
                        <span className='text-[rgb(63,131,248)]'>Github</span>
                      </span>
                    </div>
                  </div>
            </div>
        )
        
       
} 
      <FirstModal isOpen={ isOpen } setIsOpen={ setIsOpen } setIsConnecting={ setIsConnecting } isConnecting={ isConnecting } />
    </div>
  )
}

export default WalletPage