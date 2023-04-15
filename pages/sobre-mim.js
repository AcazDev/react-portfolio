/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Navbar from "../pages/components/navbar";
import Contact from "../pages/components/contact"
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fragment, useState } from "react";
import Image from "next/image";
import avataracaz from "/public/avatar-acaz.png";
import acazIcon from "/public/acazIcon.svg"

import projects from "/public/projects/project.png";
import ai from "/public/ai.png"
import psd from "/public/psd.png"
import figma from "/public/figma.png"
import flutter from "/public/flutter.png"
import bootstrap from "/public/bootstrap.png"

import angular from "/public/angular.png"
import react from "/public/react.png"
import html from "/public/html.png"
import css from "/public/css.png"
import js from "/public/js.png"


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

              <Navbar/>

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

          <div className="text-start py-12 flex mx-auto">
            <div className="px-8 mx-auto" >
              {/* <h1 className="font-burtons text-xl dark:text-gray-100 mb-8">developedbyed</h1> */}
              <h2 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 md:text-6xl pb-4">
                + SOBRE MIM
              </h2>

              <h3 className="text-2xl pt-8 pb-4 dark:text-gray-100 md:text-3xl">
                Desenvolvedor e designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-100 max-w-xl md:text-xl">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book.
              </p>

              <button id="contato" class="bg-gradient-to-b from-red-500 to-amber-500 rounded-full
               text-white text-2xl font-semibold px-8 py-2.5 mt-16 mr-0 mb ml-40"
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
            <div class="container px-5 py-8 mx-auto mb-12">
              <div class="flex flex-col text-start w-full mb-12 mx-auto">
                <h1 class="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 md:text-6xl pb-4">Projetos</h1>
                {/* <p class="text-md py-5 leading-8 text-gray-800 dark:text-gray-100 md:text-xl">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
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

        {/* Design */}
          <section class="text-gray-600 body-font">
          <h2 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 md:text-6xl pb-4">Design e Dev</h2>
            <div class="container px-5 py-8 mx-auto">
              <div class="flex flex-wrap -m-4">

                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-black/20 p-8 rounded-2xl">
                    <h1 class="text-3xl title-font font-poppins text-gray-300 mb-4 text-start">Software Web e Design</h1>
                    <p class="leading-relaxed font-poppins text-gray-300 text-lg  mb-6">Programas que utilizo no dia a dia para contrução de design, ilustração e Web.</p>
                    <a class="flex items-center w-16">
                      <Image className="m-2" src={ai} alt="ai"/>
                      <Image className="m-2" src={psd} alt="psd" />
                      <Image className="m-2" src={figma} alt="figma" />
                      <Image className="m-2" src={flutter} alt="flutter" />
                    </a>
                    <a class="flex items-center">
                      <Image className="m-2" src={bootstrap} alt="bootstrap" width={68}/>
                    </a>
                  </div>
                </div>
                {/* Dev */}
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-black/20 p-8 rounded-2xl">
                    <h1 class="text-3xl title-font font-poppins text-gray-300 mb-4 text-start">Frameworks</h1>
                    <p class="leading-relaxed font-poppins text-gray-300 text-lg  mb-6">Frameworks atuais que ja trabalhei e estudo no dia a dia. </p>
                    <a class="flex items-center w-16">
                      <Image className="m-2" src={angular} alt="angular"/>
                      <Image className="m-2" src={react} alt="react" />
                      <Image className="m-2" src={html} alt="html" />
                      <Image className="m-2" src={css} alt="css" />
                    </a>
                    <a class="flex items-center">
                      <Image className="m-2" src={js} alt="js" width={68}/>
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

      <footer class="text-gray-500 body-font dark:text-gray-400 bg-gray-900">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={acazIcon}
              height={32}
              width={32}
              alt='acaz icon'
            />
            <p class="text-gray-400 text-2xl mb-1 ml-8"> | </p>
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0 mt-4">© 2023 Designed and Developed by Alessandro Azevedo —
            <a href="https://twitter.com/knyttneve" class="font-bold text-transparent text-xs bg-clip-text bg-gradient-to-b from-red-500 to-amber-500 ml-1" rel="noopener noreferrer" target="_blank">@ACAZ</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-400">
              <svg fill="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg fill="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
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
