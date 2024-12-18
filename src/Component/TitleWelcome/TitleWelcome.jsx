import React from "react"
import Header from "../Header/Header"
import { Button } from "@headlessui/react"
import video from '../../image/video.mp4'

const TitleWelcome =({scrollToRoomSection}) =>{

    return <>
<Header />
<div className="bg-white">
  <div className="relative mt-20">
    {/* Video de fondo */}
    <video
  className="w-full h-screen object-cover"
  autoPlay
  src={video}
  muted
  loop
></video>

    {/* Contenido superpuesto al video */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center font-sans">
            <h1 className="text-balance text-5xl font-semibold tracking-tight  text-white sm:text-7xl">
              WOLC CERRADURAS DIGITALES
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium  text-white sm:text-xl/8">
            Llegaste al lugar donde encuentras soluciones, innovadoras donde se une la Seguridad la Cerrajería y la Tecnología buscando CONTROL Y CONFORT            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={scrollToRoomSection}
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ver productos
              </Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#001f3f] to-[#005f9e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  </div>
</div>


    </>

}

export default TitleWelcome