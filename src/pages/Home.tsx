import { CiTwitter } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";

function About() {
  return (
    <section className="w-full py-24 md:py-24 lg:py-36 xl:py-48 Kaleko">
      <div className="container flex flex-col items-center justify-center space-y-4 text-center md:space-y-10">
        <h1 className="text-4xl font-bold tracking-loose sm:text-5xl md:text-6xl">
          Hi, I'm Manoj Kumar
        </h1>
        <p className="w-full text-slate-400 text-xl tracking-loose dark:text-gray-400 font-medium">
          I'm a passionate developer with a love for clean and elegant
          aesthetics.
        </p>
      </div>
      <div className="flex justify-center items-center py-5 gap-3">
        <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600 ">
          <a
            href="https://github.com/themanoz"
            target="_blank"
            className="w-full h-full flex justify-center items-center"
          >
            <VscGithubAlt className="w-4 h-4" />
          </a>
        </div>

        <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600">
          <a
            href="https://twitter.com/the_manoz"
            target="_blank"
            className="w-full h-full flex justify-center items-center"
          >
            <CiTwitter className="w-5 h-5" />
          </a>
        </div>
        <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600">
          <a
            href="https://www.linkedin.com/in/manojkumarbonala/"
            className="w-full h-full flex justify-center items-center"
          >
            <RiLinkedinLine className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
