import { VscGithubAlt } from "react-icons/vsc";
import { GoLink } from "react-icons/go";
import webopsify from "@/assets/images/webopsify.jpeg";
import portfolio from "@/assets/images/portfolio.jpeg"
import { CardContainer } from "@/components/ui/3d-card";

function Project() {
  return (
    <section className="p-2">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="px-5 md:px-10 w-full md:w-1/2 leading-6">
          <h1 className="Kaleko-bold text-md">WebOpsify</h1>
          <p className="Kaleko text-sm text-slate-500">
            Online platform for mastering Web Development and DevOps. Partner
            with us to enhance your skills and stay ahead of industry trends.
          </p>
          <div className="flex gap-3 pt-2">
            <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600">
              <a
                href="https://github.com/themanoz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                <VscGithubAlt className="w-4 h-4" />
              </a>
            </div>
            <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600">
              <a
                href="https://d19rkie9pbuo7v.cloudfront.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                <GoLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <CardContainer className="shadow-lg md:mx-5">
          <img
            src={webopsify}
            alt="WebOpsify"
            className="w-full md:max-w-lg border border-slate-100 rounded"
          />
        </CardContainer>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-5">
        <CardContainer className="shadow-lg md:mx-5">
          <img
            src={portfolio}
            alt="portfolio"
            className="w-full md:max-w-lg border border-slate-100 rounded"
          />
        </CardContainer>
        <div className="px-5 md:px-10 w-full md:w-1/2 leading-6">
          <h1 className="Kaleko-bold text-md">Portfolio</h1>
          <p className="Kaleko text-sm text-slate-500">
          Explore my dev portfolio. Elevate your skills and contribute to industry innovation with me.
          </p>
          <div className="flex gap-3 pt-2">
            <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600">
              <a
                href="https://github.com/themanoz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                <VscGithubAlt className="w-4 h-4" />
              </a>
            </div>
            <div className="border border-slate-200 rounded-md w-10 h-10 flex justify-center items-center hover:border-slate-600">
              <a
                href="https://d19rkie9pbuo7v.cloudfront.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                <GoLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
