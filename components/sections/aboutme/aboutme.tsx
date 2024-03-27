import { motion, AnimatePresence } from "framer-motion";

const Aboutme = () => {
  return (
    <section
      id="about"
      className="flex border-b border-gray-700 bg-neutral-950 p-9 pt-5"
    >
      <div className="flex flex-col lg:flex-row">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -85 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -85 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex w-full justify-center sm:w-full  lg:h-[450px] 2xl:w-[600px]">
              <img
                className="
                  flex
                  w-4/12
                  max-w-md
                  justify-center
                  rounded-full
                  duration-500
                  hover:scale-105
                  sm:w-4/12
                  md:w-6/12
                  lg:w-9/12
                  2xl:w-11/12
                  "
                src="/assets/images/eu.png"
                alt="Minha Imagem"
              />
            </div>
          </motion.div>
        </AnimatePresence>
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
                Anteriormente cursei quatro períodos de Ciência da Computação na
                UFRPE
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
                  Tenho habilidades analíticas fortes e sou capaz de analisar
                  problemas complexos de forma detalhada, identificar
                  pontos-chave e encontrar soluções criativas. Minha abordagem
                  lógica me permite tomar decisões informadas e contribuir para
                  a melhoria contínua de projetos.
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
                  compartilhar conhecimentos e contribuir com minhas próprias
                  ideias de maneira construtiva. Valorizo a diversidade de
                  perspectivas e estou disposto a colaborar para alcançar os
                  objetivos coletivos.
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
                  ações efetivas. Tenho uma abordagem sistemática para resolver
                  problemas, adaptando-me a diferentes situações e encontrando
                  soluções eficientes.
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
                  Possuo excelentes habilidades de comunicação verbal e escrita.
                  Sou capaz de transmitir ideias e informações de maneira clara
                  e concisa, adaptando minha comunicação de acordo com o
                  público-alvo. Isso me permite estabelecer uma comunicação
                  eficaz com colegas de equipe, clientes e outros stakeholders.
                </p>
              </motion.div>
            </AnimatePresence>
          </ul>
        </span>
      </div>
    </section>
  );
};

export default Aboutme;
