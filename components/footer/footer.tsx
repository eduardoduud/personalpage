const Footer = () => {
  return (
    <div className="flex h-9 w-full flex-row items-center justify-center bg-neutral-950 text-white">
      <span>Criado por&nbsp;</span>
      <a
        className="font-bold hover:underline"
        href="https://eduardodomingues.vercel.app/"
      >
        Eduardo Domingues
      </a>
      <span>&nbsp;-&nbsp;</span>
      <a
        className="font-bold text-sky-500 hover:underline"
        href="https://github.com/eduardoduud"
      >
        GitHub
      </a>
    </div>
  );
};
export default Footer;
