import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  return (
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
  );
};

export default Header;
