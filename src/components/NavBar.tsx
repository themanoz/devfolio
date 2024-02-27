import manoj from "@/assets/images/manoj.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky top-0 z-50 shadow-sm bg-white">
      <div className="p-2 md:p-5 mx-2 md:mx-5 flex flex-col py-2 md:flex-row justify-between items-center Kaleko">
        <div className="flex gap-3">
          <Link to={"/"}>
            {" "}
            <div className="flex justify-center items-center gap-2">
              <img src={manoj} alt="" className="w-10 rounded-full" />
              <div className="leading-5 Kaleko">
                <h1 className="tracking-normal text-sm">Manoj Kumar</h1>
                <p className="tracking-loose text-slate-400 text-xs">
                  Software Engineer
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-4 md:gap-8 px-4 md:px-8 text-base md:text-lg">
            <li>
              <Link
                to="/projects"
                className="font-semibold tracking-loose pt-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-semibold tracking-loose pt-2">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
