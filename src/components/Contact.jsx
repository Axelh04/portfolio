import React, { useRef, useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Container } from 'postcss'
import emailjs from '@emailjs/browser'
import { motion, useAnimation } from 'framer-motion';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {


  // const [agreed, setAgreed] = useState(false)
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [formData, setFormData] = useState({
    user_first_name: '',
    user_last_name: '',
    user_company: '',
    user_email: '',
    user_number: '',
    user_country: 'US', // Initialize with a default country
    message: '',
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cppd4o9', 'template_j0a90jx', form.current, 'pUBdVrQsoJ-yOZWVm')
      .then((result) => {


          console.log(result.text);
          console.log("message sent")

          // Show confirmation message
        setConfirmationMessage('Thank you for your message! I will reach out ASAP.');

        // Reset the form using its reset method
        form.current.reset();

        // Reset the formData state
        setFormData({
          user_first_name: '',
          user_last_name: '',
          user_company: '',
          user_email: '',
          user_number: '',
          user_country: 'US', // Reset the country to the default
          message: '',
        });


      }, 
      
      (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='py-32 bg-gray-100'>
    <div id='contact' className="relative w-full sm:rounded-3xl mx-auto overflow-hidden py-32 mt-0">

        <video
          src="space.mp4"
          alt="space"
          className="absolute inset-0 h-full z-1 lg:w-9/12 w-full mx-auto object-cover object-center md:object-center lg:rounded-3xl "
          autoPlay
          muted
          loop
        />
    <section className=" backdrop-blur-md backdrop-brightness-[.5] rounded-3xl mx-auto sm:w-max w-11/12 px-10 py-10">
      <div className="mx-auto max-w-2xl text-center ">
        <h1 className="text-5xl font-bold tracking-tight text-white ">Contact Me</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5 relative">
            <input
                type="text"
                name="user_first-name"
                id="user_first-name"
                autoComplete="given-name"
                className="block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
            </div>


          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_last-name"
                id="user_last-name"
                autoComplete="family-name"
                className="block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
      
          <div className="">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="user_email"
                id="user_email"
                autoComplete="email"
                className="block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
  id="country"
  name="user_country"
  value={formData.user_country}
  onChange={(e) => {
    setFormData({ ...formData, user_country: e.target.value });
  }}
  className="h-full border-0 bg-white py-0 pl-4 pr-9 text-black ring-gray-100 ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm"
>
  <option>US</option>
  <option>CA</option>
  <option>EU</option>
</select>
               
              </div>
              <input
                type="tel"
                name="user_number"
                id="user_number"
                autoComplete="tel"
                className="block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_company"
                id="user_company"
                autoComplete="organization"
                className="block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full bg-transparent rounded-3xl border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-white/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-white/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-300">
              Random option for respone idk{' '}
              <a href="#" className="font-semibold text-indigo-300">
                Hello&nbsp;world
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">
          <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:.95}}
            type="submit"
             value="Send"
            className="block w-full shadow-3xl bg-orange-500 text-white rounded-3xl px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:focus:ring-orange-500"
          >
       
            Let's talk
         
          </motion.button>
        </div>

        {confirmationMessage && (
        <div className=" rounded-3xl w-full mx-auto text-3xl p-5 mt-4 text-orange-300 font-base">{confirmationMessage}</div>
      )}
      </form>
      </section>

    
    </div>
    </div>
  )
}
