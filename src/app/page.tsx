import Skills from "@/_components/skills";
import Projects from "@/_components/projects";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="banner mx-auto fit-content my-10 px-1 md:px-0">
        <h1 className="mx-auto fit-content text-4xl font-bold text-center">
          Software Engineer
        </h1>
        <h2 className="mx-auto fit-content text-2xl font-bold m-1 text-center">
          Driven to learn and create beautiful designs.
        </h2>
        <img src={"/images/avatar.jpg"} alt="avatar" className="mx-auto h-60 my-5" />
      </div>
      <div className="max-w-screen  bg-[#75BE90] px-1 md:px-0" id="aboutMe">
        <div className="text-white mx-auto pb-10  max-w-[900px]">
          <h2 className="text-2xl py-6 fit-content mx-auto font-bold">
            Hey I'm Charlotte!
          </h2>
          <p className="text-white text-center text-2xl">
            {" "}
            Devon-based software engineer skilled in React, Node.js, and
            Next.js. Proficient with Tailwind CSS, Bootstrap, postgres, noSQL databases and
            exploring automation/testing with Playwright in Node.js. Eager to contribute
            and passionate about crafting seamless web experiences.
          </p>
        </div>

        <div className="max-w-[1000px] w-11/12 md:w-3/4 mx-auto bg-white p-3 rounded-xl">
          <Skills />
        </div>
        <div className="max-w-[1000px] w-11/12 md:w-3/4 mx-auto" id="projects">
          <h2 className="text-white text-3xl text-center p-10 font-bold">
            Projects
          </h2>
          <Projects />
        </div>
        <div
          className="max-w-[1000px] w-3/4 mx-auto text-white py-12"
          id="contact"
        >
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>

          {/* Contact Information and Social Media Links */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Contact Information */}
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <p>Email: me@charlotte-greenaway.com</p>
              <p>Phone: 07802 767605</p>
            </div>

            {/* Social Media Links */}
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Charlotte-Greenaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-grey-400 mx-4"
                  aria-label="GitHub"
                >
                  <Github size={24}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/charlotte-greenaway-777140183/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-grey-400 mx-4"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24}/>
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-sm text-gray-200">
            &copy; 2024 Charlotte Greenaway. All rights reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
