const Techskills = () => {
  return (
    <section
      id="skills"
      className="h-auto w-full border-b border-gray-700 bg-neutral-900 py-10"
    >
      <p className="flex justify-center pb-10 text-3xl font-bold text-orange-500">
        Tech Skills
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
  );
};

export default Techskills;
