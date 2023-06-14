import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
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
  );
};

export default Contact;
