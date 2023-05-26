"use client";
import * as React from "react";
import "./styles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const animation = { duration: 25000, easing: (t: number) => t };

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: () => [
      {
        size: 0.4,
        spacing: 0.14,
      },
      {
        size: 0.4,
        spacing: 0.14,
      },
      {
        size: 0.4,
        spacing: 0.14,
      },
    ],
    drag: true,
    created(s) {
      s.moveToIdx(3, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  });

  return (
    <main>
      <header className="border-b border-gray-700 bg-neutral-900 p-3 ">
        <div className="flex items-center justify-center">
          <div className="flex w-max flex-row pt-2">
            <img
              className="hidden md:-ml-20 md:block "
              src="/images/logo.jpg"
              alt="Logo"
            />
            <h1 className="overflow mt-5 h-14 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white px-5 text-3xl font-bold text-white sm:text-5xl">
              Eduardo Domingues
            </h1>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -155 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -155 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-row justify-center">
              <p
                title="design fistáile"
                className="-mt-2 text-lg font-semibold text-orange-400"
              >
                full stack develope
              </p>
              <a
                href="https://www.youtube.com/watch?v=C-c4ref0yX8"
                target="_blank"
              >
                <p
                  title="design fistáile"
                  className="-mt-2 text-lg font-semibold text-orange-400"
                >
                  r
                </p>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 155 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 155 }}
            transition={{ delay: 0.1 }}
          >
            <div className="my-3 flex flex-row justify-center gap-4 text-sm font-semibold text-emerald-400 sm:gap-8">
              <a
                href="#about"
                className="cursor-pointer duration-500 hover:scale-105 hover:text-sky-500"
              >
                Quem sou
              </a>
              <div className="mt-[2px] inline-block h-[16px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <a
                href="#skills"
                className="cursor-pointer duration-500 hover:scale-105 hover:text-sky-500"
              >
                Skills
              </a>
              <div className="mt-[2px] inline-block h-[16px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <a
                href="#projects"
                className="cursor-pointer duration-500 hover:scale-105 hover:text-sky-500"
              >
                Projetos
              </a>
              <div className="mt-[2px] inline-block h-[16px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <a
                href="#socials"
                className="cursor-pointer duration-500 hover:scale-105 hover:text-sky-500"
              >
                Contato
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </header>
      <div className="bg-neutral-950">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 95 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 90 }}
            transition={{ delay: 0.1 }}
          >
            <div
              id="about"
              className="flex justify-center bg-neutral-950 pt-10 text-3xl font-semibold text-orange-500"
            >
              Sobre mim
            </div>
          </motion.div>
        </AnimatePresence>
        <section className="flex border-b border-gray-700 bg-neutral-950 p-9 pt-5">
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full justify-center sm:w-full  lg:h-[450px] 2xl:w-[600px]">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: -85 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -85 }}
                  transition={{ delay: 0.1 }}
                >
                  <img
                    className="
                  flex
                  w-4/12
                  max-w-md
                  rounded-full
                  duration-500
                  hover:scale-105
                  sm:w-4/12
                  md:w-6/12
                  lg:w-9/12
                  2xl:w-11/12
                  "
                    src="/images/eu1.jpg"
                    alt="Minha Imagem"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <span className="flex flex-col break-words p-3 md:p-7 lg:max-w-[750px] lg:p-7 xl:max-w-[800px] xl:p-7 2xl:max-w-[1300px]">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 95 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 95 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="mt-2 text-2xl font-semibold text-orange-300">
                    Quem sou?
                  </p>
                  <p className="mt-2 text-white">
                    Me chamo Eduardo Domingues, tenho 30 anos, sou natural de
                    Recife-PE e trabalho como desenvolvedor full stack junior.
                  </p>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 95 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 95 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="mt-9 text-2xl font-semibold text-orange-300">
                    Formação acadêmica
                  </p>
                  <p className="mt-2 text-white">
                    Sou formado em Redes de Computadores pelo SENAI e atualmente
                    estou cursando Desenvolvimento Full Stack na Estácio.
                    Anteriormente cursei quatro períodos de Ciência da
                    Computação na UFRPE
                  </p>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 95 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 95 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="mt-9 text-2xl font-semibold text-orange-300">
                    Soft Skills
                  </p>
                </motion.div>
              </AnimatePresence>
              <ul className="mt-2 text-white">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 95 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 95 }}
                    transition={{ delay: 0.5 }}
                  >
                    <li className="text-lg font-semibold text-emerald-500">
                      Pensamento Crítico
                    </li>
                    <p className="text-white">
                      Tenho habilidades analíticas fortes e sou capaz de
                      analisar problemas complexos de forma detalhada,
                      identificar pontos-chave e encontrar soluções criativas.
                      Minha abordagem lógica me permite tomar decisões
                      informadas e contribuir para a melhoria contínua de
                      projetos.
                    </p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 95 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 95 }}
                    transition={{ delay: 0.6 }}
                  >
                    <li className="mt-2 text-lg font-semibold text-emerald-500">
                      Trabalho em Equipe
                    </li>
                    <p className="text-white">
                      Sou um colaborador dedicado e eficaz em equipe. Tenho a
                      capacidade de ouvir atentamente as ideias dos outros,
                      compartilhar conhecimentos e contribuir com minhas
                      próprias ideias de maneira construtiva. Valorizo a
                      diversidade de perspectivas e estou disposto a colaborar
                      para alcançar os objetivos coletivos.
                    </p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 95 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 95 }}
                    transition={{ delay: 0.7 }}
                  >
                    <li className="mt-2 text-lg font-semibold text-emerald-500">
                      Resolução de Problemas
                    </li>
                    <p className="text-white">
                      Encaro os desafios como oportunidades de aprendizado e
                      crescimento. Sou habilidoso em identificar e analisar
                      problemas, investigar soluções alternativas e implementar
                      ações efetivas. Tenho uma abordagem sistemática para
                      resolver problemas, adaptando-me a diferentes situações e
                      encontrando soluções eficientes.
                    </p>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 95 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 95 }}
                    transition={{ delay: 0.8 }}
                  >
                    <li className="mt-2 text-lg font-semibold text-emerald-500">
                      Comunicação Clara e Efetiva
                    </li>
                    <p className="pb-2 text-white">
                      Possuo excelentes habilidades de comunicação verbal e
                      escrita. Sou capaz de transmitir ideias e informações de
                      maneira clara e concisa, adaptando minha comunicação de
                      acordo com o público-alvo. Isso me permite estabelecer uma
                      comunicação eficaz com colegas de equipe, clientes e
                      outros stakeholders.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </ul>
            </span>
          </div>
        </section>
        <section
          id="skills"
          className="h-auto w-full border-b border-gray-700 bg-neutral-900 py-10"
        >
          <p className="flex justify-center pb-10 text-3xl font-bold text-orange-500">
            Hard Skills
          </p>
          <span className="flex justify-center">
            <img
              title="Javascript"
              className="mr-2 rounded-lg hover:scale-105"
              src="/images/js.png"
              alt="JavaScript"
            />
            <img
              title="Typescript"
              className="mr-2 rounded-lg hover:scale-105"
              src="/images/type.png"
              alt="Typescript"
            />
            <img
              title="React"
              className="mr-2 rounded-lg hover:scale-105"
              src="/images/react.png"
              alt="React"
            />
            <img
              title="Next.js"
              className="mr-2 rounded-lg hover:scale-105"
              src="/images/next.png"
              alt="Next.js"
            />
            <img
              title="Node.js"
              className="mr-2 rounded-lg hover:scale-105"
              src="/images/node.png"
              alt="Node.js"
            />
            <img
              title="Tailwind"
              className="mr-2 rounded-lg hover:scale-105"
              src="/images/tailwind.png"
              alt="Tailwind"
            />
          </span>
        </section>
        <section
          id="projects"
          className="h-auto w-full border-b border-gray-700 bg-neutral-950 py-10"
        >
          <p className="flex justify-center pb-5 text-3xl font-bold text-orange-500">
            Projetos
          </p>
          <div ref={sliderRef} className="keen-slider pb-10">
            <div className="keen-slider__slide number-slide1 flex flex-col align-middle">
              <p className="text-[25px]">Twitter Clone</p>
              <a href="https://tuliter.vercel.app/">
                <img
                  className="rounded-lg border-2 border-neutral-500 duration-500 hover:scale-95 hover:border-sky-500"
                  src="/images/twitter.jpg"
                  alt="Twitter Clone"
                />
              </a>
            </div>
            <div className="keen-slider__slide number-slide2 flex flex-col">
              <p className="text-[25px]">To-do List</p>
              <a href="https://todo-taskss.vercel.app/">
                <img
                  className="rounded-lg border-2 border-neutral-500 duration-500 hover:scale-95 hover:border-sky-500"
                  src="/images/todo.jpg"
                  alt="To-do List"
                />
              </a>
            </div>
            <div className="keen-slider__slide number-slide3 flex flex-col">
              <p className="text-[25px]">Flutter App</p>
              <a href="https://github.com/eduardoduud/SportsTools">
                <img
                  className="rounded-lg border-2 border-neutral-500 duration-500 hover:scale-95 hover:border-sky-500"
                  src="/images/sportstools.jpg"
                  alt="Flutter App"
                />
              </a>
            </div>
          </div>
        </section>
        <section
          id="socials"
          className="h-auto w-full border-b border-gray-700 bg-neutral-900 py-10"
        >
          <p className="flex justify-center pb-5 text-3xl font-bold text-orange-500">
            Fale comigo!
          </p>
          <span className="flex justify-center text-white">
            <a
              className="px-2"
              title="Linkedin"
              href="https://www.linkedin.com/in/eduardoedomingues/"
              target="_blank"
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              className="px-2"
              title="Github"
              href="https://github.com/eduardoduud"
              target="_blank"
            >
              <BsGithub size={40} />
            </a>
            <a
              className="px-2"
              title="Gmail"
              href="mailto:eeadomingues@gmail.com?subject=Olá, Eduardo!&body=Escreva sua mensagem"
              target="_blank"
            >
              <SiGmail size={40} />
            </a>
          </span>
        </section>
      </div>
    </main>
  );
}
