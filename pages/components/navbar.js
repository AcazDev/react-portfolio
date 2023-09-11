import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Image from 'next/image';
import acazIcon from '/public/acazIcon.svg';

const navigation = [
  { name: 'Inicio', href: '/home', current: false },
  { name: 'Sobre mim', href: '/sobre-mim', current: false },
  { name: 'Design', href: '/design', current: false },
  { name: 'Dev', href: '/dev', current: false },
  { name: 'Ilustração', href: '/ilustration', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gradient-to-b from-gray-900 rounded-lg">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Image
                        src={acazIcon}
                        className="block h-8 w-auto lg:hidden"
                        height={32}
                        width={32}
                        alt="acaz icon"
                      />

                      <Image
                        src={acazIcon}
                        className="hidden h-8 w-auto lg:block"
                        height={32}
                        width={32}
                        alt="acaz icon"
                      />
                    </div>
                    <div className="hidden sm:ml-16 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              currentPath === item.href
                                ? ' text-white w-24 h-10 border-b-8 border-yellow-500'
                                : 'text-gray-200 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium flex items-center'
                            )}
                            onClick={() => router.push(item.href)} // Use router.push para navegar entre as rotas
                          >
                            {currentPath === item.href ? (

                              <div className="h-28 w-28 -mt-2 -mr-5 -mb-10 -ml-12 float-right">
                                <img src="fireFlame.gif" alt="GIF Animado" />
                              </div>

                                ) :(
                              <>
                              </>
                            )}
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        currentPath === item.href
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      onClick={() => router.push(item.href)} // Use router.push para navegar entre as rotas
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
