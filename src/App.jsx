import { Link } from "react-router-dom";
import "./App.scss";
import img from "./assets/illustration-article.svg";
import img1 from "./assets/image-avatar.webp";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="card  flex flex-col gap-3 border border-black">
        <div className="w-full">
          <div className="w-full rounded-[15px] overflow-hidden">
            <img src={img} className="block w-full" alt="blog-img" />
          </div>
        </div>
        <div className="flex flex-col gap-3 py-3">
          <span className="bg-yellow-500 font-semibold w-max px-2 rounded-md flex items-center justify-center py-1">
            Learning
          </span>

          <p className="text-sm text-black font-medium">
            Published 21 Dec 2023
          </p>

          <a
            href="https://www.frontendmentor.io/learning-paths"
            className="font-extrabold md:text-2xl text-xl hover:text-yellow-400 active:text-yellow-400"
          >
            HTML & CSS foundations
          </a>

          <p className="text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <picture className="w-[32px] h-[32px] flex items-center justify-center rounded-full overflow-hidden">
            <img src={img1} alt="avatar" className="w-full h-full" />
          </picture>
          <div>
            <h2 className="font-bold text-sm">Greg Hooper</h2>
          </div>
        </div>
      </div>
      <div className="text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Sumitkumar01" className="capitalize">
          sumit kumar
        </a>
        .
      </div>
    </div>
  );
}

export default App;
