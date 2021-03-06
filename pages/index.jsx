import { Button } from '@vechaiui/button'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import programmer from '../public/lottie/programmer.json'
import email from '../public/lottie/email-verification.json'
import location from '../public/lottie/location-pin.json'
import phone from '../public/lottie/phone-icon-animation.json'
import { SiInstagram, SiTwitter } from 'react-icons/si'
export default function Home() {
  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h2 className="items-start text-center text-sm lg:text-left font-bold mt-5">
            Bakare Abiola alias!
            <span className="text-left text-6xl text-orange-400">Starcode</span>

          </h2>
          <h2 className="text-center lg:text-left text-xl font-bold leading-8 mt-5">
            Developer by day work with Batman by night.
          </h2>
          <h2 className="text-center lg:text-left text-xl font-bold leading-8">
            In love with both the frontend and the backend of things{' '}
          </h2>
          <Button
            variant="solid"
            size="lg"
            color="primary"
            className="flex w-full max-w-md mx-auto lg:flex-none lg:mx-0 lg:w-auto mt-8 px-12 text-bold cursor-pointer  shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
          >
            Hire me
          </Button>

          <div className="flex flex-col w-96 mx-auto lg:flex-none lg:mx-0">
            <div className="max-w-sm mt-5 bg-white dark:text-slate-500 dark:hover:shadow-orange-400 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="px-4 inline-flex items-center">
                <Player
                  autoplay
                  loop
                  src={email}
                  style={{ height: '64px', width: '64px' }}
                />
                <h2 className="ml-4">iamstarcode@gmail.com</h2>
              </div>
            </div>
            <div className="max-w-sm mt-5 bg-white dark:text-slate-500 dark:hover:shadow-orange-400 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="px-4 inline-flex items-center">
                <Player
                  autoplay
                  loop
                  src={phone}
                  style={{ height: '64px', width: '64px' }}
                />
                <h2 className="ml-4">+2348184991004</h2>
              </div>
            </div>
            <div className="max-w-sm mt-5 bg-white dark:text-slate-500 dark:hover:shadow-orange-400 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
              <div className="px-4 inline-flex items-center">
                <Player
                  autoplay
                  loop
                  src={location}
                  style={{ height: '64px', width: '64px' }}
                />
                <h2 className="ml-4">Gotham city</h2>
              </div>
            </div>

          </div>

          <div className="flex w-full justify-center gap-3 lg:justify-start lg:max-w-[25rem] mt-5">
            <button
              id="facebook"
              className="bg-white p-2 duration-500 border-2 border-blue-600 w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 "
            >
              <a href="https://twitter.com/i_am_starcode" target="_blank">
                {' '}
                <SiTwitter className="w-full" />
              </a>
            </button>

            <button
              id="instagram"
              className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 "
            >
              <a href="https://twitter.com/i_am_starcode" target="_blank">
                {' '}
                <SiInstagram className="w-full" />
              </a>
            </button>

            <button
              id="whatsapp"
              className="bg-white duration-500    w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
            >
              <i className="fab fa-whatsapp"></i>
            </button>

            <button
              id="youtube"
              className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
            >
              <i className="fab fa-youtube"></i>
            </button>
            <button
              id="linkedin"
              className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>

            <button
              id="discord"
              className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl"
            >
              <i className="fab fa-discord"></i>
            </button>

          </div>
        </div>
        <div className="hidden lg:flex">
          <Player
            autoplay
            loop
            src={programmer}
            className="h-[400px] lg:h-[550px]"
          >
            <Controls
              visible={false}
              buttons={['play', 'repeat', 'frame', 'debug']}
            />
          </Player>
        </div>
        <div className="lg:col-span-2 flex flex-col  py-6">
          {/* Featured Header */}
          <div className="flex justify-between items-center bg-white dark:bg-slate-700 px-3 py-4 border-l-4 border-amber-500">
            <h2 className="text-lg lg:text-3xl text-slate-500 dark:text-slate-400 uppercase ">Featured Projects</h2>
            <h2 className="hover:bg-primary-700  bg-primary-500 rounded-full py-2 px-5 font-semibold hover:text-white text-gray-100 cursor-pointer">View all</h2>
          </div>

         {/*  Card container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <img src="https://picsum.photos/id/29/2106/1404" alt="" className="overflow-hidden" />
              <div className="p-4">
                <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">Climb the Mountains</h3>
                <p className="text-justify text-slate-500 dark:text-slate-400">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                <div className="mt-5">
                  <a href="" className="hover:bg-primary-700  bg-primary-500 rounded-full py-2 px-3 font-semibold hover:text-white text-gray-100">Read More</a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              <img src="https://picsum.photos/id/29/2106/1404" alt="" className="overflow-hidden" />
              <div className="p-4">
                <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">Climb the Mountains</h3>
                <p className="text-justify">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                <div className="mt-5">
                  <a href="" className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
