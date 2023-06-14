import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 25000, easing: (t: number) => t };

const Projects = () => {
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
  );
};

export default Projects;
