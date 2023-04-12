/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../pages/components/navbar";
import Contact from "../pages/components/contact"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fragment, useState } from "react";
import avataracaz from "/public/avatar-acaz.png";
import acazIcon from "/public/acazIcon.svg"
import code from "/public/code.png";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import Image from "next/image";
import projects from "/public/projects/project.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showContact, setShowContact] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Fragment>
        <Head>
          <title>Acaz</title>
          <meta name="description" content="Acaz" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>

        <main className=" bg-white px-10 dark:bg-bg_all md:px-20 lg:px-40">

          <section> {/* className="min-h-screen" */}
            <nav className="py-10 dark:text-white">

              <Navbar />

              <button className="block w-auto lg:hidden p-16 pb-0 absolute top-0 right-0">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </button>

              <button className="hidden w-auto lg:block p-16 pb-0 absolute top-0 right-0">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </button>
            </nav>
          </section>

          <div className="text-start py-10 flex mx-auto">
            <div className="px-8 mx-auto" >
              {/* <h1 className="font-burtons text-xl dark:text-gray-100 mb-8">developedbyed</h1> */}
              <h2 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 md:text-6xl">
                Alessandro Azevedo
              </h2>

              <h3 className="text-2xl py-4 dark:text-gray-100 md:text-3xl">
                Desenvolvedor e designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-100 max-w-xl md:text-xl">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book.
              </p>

              <button id="contato" class="bg-gradient-to-b from-red-500 to-amber-500 rounded-full m-8
               text-white text-2xl font-semibold px-8 py-2.5"
                onClick={() => setShowContact(true)}
              >
                <p className="pb-1.5">Contato</p>
              </button>
              {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div> */}
            </div>

            <div className="mx-auto bg-gradient-to-b from-gray-900 rounded-full w-80 h-80 relative md:h-96 md:w-96">
              <Image src={avataracaz} alt="avatar" />
            </div>
          </div>

          {/* <svg class="animate-bounce w-6 h-6 ...">
          </svg> */}
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-start w-full mb-20 mx-auto">
                <h1 class="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 sm:text-6xl mb-4">Projetos</h1>
                <p class="lg:w-2/3 leading-relaxed text-base text-gray-100">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <p className="title-font text-2xl text-gray-300">Projeto</p>
                  <p className="title-font text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  <div class="flex relative">
                    <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={projects} width={0} height={0} />
                    <a href="#" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </a>
                  </div>
                </div>

                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <p className="title-font text-2xl text-gray-300">Projeto</p>
                  <p className="title-font text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  <div class="flex relative">
                    <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={projects} width={0} height={0} />
                    <a href="#" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </a>
                  </div>
                </div>

                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <p className="title-font text-2xl text-gray-300">Projeto</p>
                  <p className="title-font text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  <div class="flex relative">
                    <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={projects} width={0} height={0} />
                    <a href="#" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </a>
                  </div>
                </div>

                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <p className="title-font text-2xl text-gray-300">Projeto</p>
                  <p className="title-font text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  <div class="flex relative">
                    <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={projects} width={0} height={0} />
                    <a href="#" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </a>
                  </div>
                </div>

                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <p className="title-font text-2xl text-gray-300">Projeto</p>
                  <p className="title-font text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  <div class="flex relative">
                    <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={projects} width={0} height={0} />
                    <a href="#" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </a>
                  </div>
                </div>

                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <p className="title-font text-2xl text-gray-300">Projeto</p>
                  <p className="title-font text-lg text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                  <div class="flex relative">
                    <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={projects} width={606} height={366} />
                    <a href="#" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Dev e Design */}
          <section class="text-gray-600 body-font">
          <h2 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 md:text-6xl">Dev e Design</h2>
            <div class="container px-5 py-24 mx-auto">
              <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                    <a class="inline-flex items-center">
                      {/* <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                        <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                    <a class="inline-flex items-center">
                      {/* <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        <span class="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Contact isVisible={showContact}
          onClose={() => setShowContact(false)}>
        </Contact>
      </Fragment>

      <footer class="text-gray-600 body-font dark:text-gray-400 bg-gray-900">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={acazIcon}
              height={32}
              width={32}
              alt='acaz icon'
            />
            <span class="ml-3 text-xl">Acaz</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0 mt-4">© 2023 Designed and Developed by Alessandro Azevedo —
            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@ACAZ</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
