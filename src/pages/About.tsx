import {
  CardTitle,
  CardContent,
  CardDescription,
  Card,
} from "@/components/ui/card";
import { SiZod } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";

function About() {
  return (
    <section className="flex justify-center items-center pt-10">
      <div className="Kaleko tracking-normal leading-7 w-full max-w-4xl px-4">
        <CardTitle className="p-4 text-center">About</CardTitle>
        <div className="flex justify-center items-center">
          <CardContent className="w-full">
            <div>
              <CardDescription className="text-md text-slate-600">
                Hello! I'm a recent graduate with a Bachelor of Technology
                degree, passionate about the world of DevOps and open-source
                technologies. My journey in academia has equipped me with a
                strong technical foundation and a commitment to ongoing learning
                and community engagement.
              </CardDescription>
            </div>
            <div className="pt-8">
              <CardTitle className="text-2xl">Education</CardTitle>
              <div className="pt-2 flex justify-between flex-wrap">
                <CardDescription className="text-lg w-full md:w-auto md:flex-grow md:pr-4 mb-2 md:mb-0">
                  Rajiv Gandhi University of Knowledge Technologies, Srikakulam
                </CardDescription>
                <CardDescription className="text-lg">
                  April, 2023
                </CardDescription>
              </div>
              <div className="flex justify-between">
                <CardDescription className="text-sm">
                  Computer Science Engineering
                </CardDescription>
                <CardDescription className="text-sm">
                  CGPA: 8.0/10
                </CardDescription>
              </div>
            </div>
            <div className="pt-8">
              <CardTitle className="text-2xl">Certifications</CardTitle>
              <div className="pt-2 flex justify-between flex-wrap">
                <CardDescription className="text-lg w-full md:w-auto md:flex-grow md:pr-4 mb-2 md:mb-0">
                  Docker | <span className="text-slate-700">KodeKloud</span>
                </CardDescription>
                <CardDescription className="text-lg">Feb, 2023</CardDescription>
              </div>
              <CardDescription className="text-sm">
                Mastered docker container management
              </CardDescription>
            </div>
            <div className="pt-8">
              <CardTitle className="text-2xl">Skills</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <AiOutlineHtml5 className="w-5 h-5" /> HTML
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <TbBrandCss3  className="w-5 h-5" /> CSS
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                    <TbBrandJavascript className="w-5 h-5" /> JavaScript
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                    <TbBrandTypescript className="w-5 h-5" /> TypeScript
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <IoLogoReact className="w-5 h-5" /> React
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <TbBrandNextjs className="w-5 h-5" /> Nextjs
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <BiLogoTailwindCss className="w-5 h-5" />
                      Tailwind
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <SiZod className="w-5 h-5" /> Zod
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <DiNodejsSmall className="w-5 h-5" />
                      Nodejs
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                      <SiExpress className="w-5 h-5" />
                      Express
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">

                      <SiMongodb className="w-5 h-5"/>
                      MongoDB
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">

                    <GrMysql className="w-5 h-5"/>
                      MySQL
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">

                    <FaAws className="w-5 h-5"/>
                      AWS
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">

                    <DiDocker  className="w-5 h-5"/>
                      Docker
                    </div>
                  </Card>
                  <Card className="rounded-sm px-4 py-2 text-xs">
                    <div className="flex gap-1 justify-center items-center">
                    <BiLogoJava className="w-5 h-5"/>
                      Java
                    </div>
                  </Card>
                </div>
            </div>
          </CardContent>
        </div>
      </div>
    </section>
  );
}

export default About;
