'use client'
import * as React from "react"
import "./styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 55000, easing: (t: number) => t }

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: () => [
      {
        size: 0.3,
        spacing: 0.15,
      },
      {
        size: 0.3,
        spacing: 0.15,
      },
      {
        size: 0.3,
        spacing: 0.15,
      }],
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <main className='w-full h-screen bg-neutral-950'>
      <header className='bg-neutral-900 border-b border-gray-700'>
          <div className="flex items-center justify-center">
            <div className="w-max pt-2 flex flex-row">
              <img className="flex" src="/images/logo.jpg" alt="Logo" />
              <h1 className="mt-5 h-14 pl-5 flex overflow animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                Eduardo Domingues
                </h1>
            </div>
          </div>
        <div className='flex flex-row justify-center'>
          <p title='design fistáile' className='text-orange-400 text-lg pl-[90px] -mt-4'>
            full stack develope
          </p>
          <a href="https://www.youtube.com/watch?v=C-c4ref0yX8" target="_blank">
            <p title='design fistáile' className='text-orange-400 text-lg -mt-4'>
              r
            </p>
          </a>
        </div>
        <div className='my-3 flex flex-row justify-center gap-8 text-emerald-400 text-sm font-semibold'>
          <a href="#about" className='cursor-pointer hover:text-sky-500 hover:scale-110 duration-500'>
            Quem sou
          </a>
          <div className="mt-[2px] inline-block h-[16px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
          <a href="#skills" className='cursor-pointer hover:text-sky-500 hover:scale-110 duration-500'>
            Skills
          </a>
          <div className="mt-[2px] inline-block h-[16px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
          <a href="#projects" className='cursor-pointer hover:text-sky-500 hover:scale-110 duration-500'>
            Projetos
          </a>
          <div className="mt-[2px] inline-block h-[16px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
          <a href="#socials" className='cursor-pointer hover:text-sky-500 hover:scale-110 duration-500'>
            Socials
          </a>
        </div>
      </header>
      <div>
        <section id='about' className="flex bg-neutral-950 border-b border-gray-700">
          <div className="flex flex-wrap md:flex-row lg:flex-row xl:flex-row">
          {/* Sobre mim */}
            <div className="flex w-full xl:h-[450px] sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[600px] justify-center">
              <img className="
                p-9
                flex
                rounded-full
                hover:scale-105
                duration-500
                max-w-md
                w-4/12
                sm:w-4/12
                md:w-5/12
                lg:w-9/12
                2xl:w-9/12
                "
                src="/images/eu1.jpg"
                alt="Minha Imagem"
              />
            </div>
            <span className="p-3 md:p-7 lg:p-7 xl:p-7 break-words xl:max-w-[1075px] 2xl:max-w-[1300px] flex flex-col">
              <p className="text-orange-300 font-semibold text-3xl">
                Sobre mim
              </p>
              <p className="mt-2 text-orange-500 text-2xl font-semibold">
                Quem sou?
              </p>
              <p className="mt-2 text-white">
              Me chamo Eduardo Domingues, tenho 30 anos, sou natural de Recife-PE e trabalho como desenvolvedor full stack junior.
              </p>
              <p className="mt-9 text-orange-500 text-2xl font-semibold">
                Formação acadêmica
              </p>
              <p className="mt-2 text-white">
              Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
              </p>
              <p className="mt-9 text-orange-500 text-2xl font-semibold">
                Qualidades
              </p>
              <ul className="mt-2 text-white">
                <li className="text-emerald-500">
                  Tópico 1
                </li>
                <p className="text-white">
                  Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum 
                </p>
                <li className="mt-2 text-emerald-500">
                  Tópico 2
                </li>
                <p className="text-white">
                Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum 
                </p>
                <li className="mt-2 text-emerald-500">
                  Tópico 3
                </li>
                <p className="text-white">
                Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum 
                </p>
              </ul>
            </span>
          </div>
        </section>
        <section id='skills' className="w-full h-auto bg-neutral-900 border-b border-gray-700">
          {/* Habilidades */}
          <p className="flex py-5 justify-center text-orange-500 text-3xl font-bold">
            Skills
          </p>
        </section>
        <section id='projects' className="w-full h-auto bg-neutral-950 border-b border-gray-700">
          {/* Projetos */}
          <p className="flex py-5 justify-center text-orange-500 text-3xl font-bold">
            Projetos
          </p>
          <div ref={sliderRef} className="keen-slider ">
            <div className="keen-slider__slide number-slide1 align-middle flex flex-col">
              <p className="text-[25px]">Twitter Clone</p>
              <a href="https://tuliter.vercel.app/">
                <img className="rounded-lg border-2 border-neutral-500 hover:border-sky-500 hover:scale-95 duration-500" src="/images/twitter.jpg" alt="Twitter Clone"/>
              </a>
            </div>
            <div className="keen-slider__slide number-slide2 flex flex-col">
              <p className="text-[25px]">To-do List</p>
              <a href="https://todo-taskss.vercel.app/">
                <img className="rounded-lg border-2 border-neutral-500 hover:border-sky-500 hover:scale-95 duration-500" src="/images/todo.jpg" alt="To-do List"/>
              </a>
            </div>
            <div className="keen-slider__slide number-slide3 flex flex-col">
              <p className="text-[25px]">Flutter App</p>
              <a href="https://github.com/eduardoduud?tab=repositories">
                <img className="rounded-lg border-2 border-neutral-500 hover:border-sky-500 hover:scale-95 duration-500" src="/images/sportstools.jpg" alt="Flutter App"/>
              </a>
            </div>
          </div>
        </section>
        <section id='socials' className="w-full h-auto bg-neutral-900 border-b border-gray-700">
          {/* Contato */}
          <p className="flex py-5 justify-center text-orange-500 text-3xl font-bold">
            Socials
          </p>
        </section>
      </div>
    </main>
  )
}
