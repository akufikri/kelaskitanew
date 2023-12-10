import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import Logo from '../assets/logo/logo.png';
import ModalJoinKelas from './ModalJoinKelas';
import { Dialog } from '@headlessui/react';
import Sidebar from './Sidebar'
import ModalCreateKelas from './ModalCreateKelas';
// import { useAuth } from '@clerk/clerk-react'

const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [isOpen, setIsOpen] = useState(false);
      const [userDropdownOpen, setUserDropdownOpen] = useState(false);
      const [isOpenKelas, setIsOpenKelas] = useState(false);

      const openModal = () => {
            setIsOpen(true);
      };

      const closeModal = () => {
            setIsOpen(false);
      };
      const openModalKelas = () => {
            setIsOpenKelas(true)
      }
      const closeModalKelas = () => {
            setIsOpenKelas(false)
      }

      // useEffect(() => {
      //       const timer = setTimeout(() => {
      //             setMenuOpen(false); // Menutup dropdown setelah 1000 milidetik (1 detik)
      //             setUserDropdownOpen(false); // Menutup user dropdown setelah 1000 milidetik (1 detik)
      //       }, 3000);

      //       return () => {
      //             clearTimeout(timer);
      //       };
      // }, [menuOpen, userDropdownOpen]);

      return (
            <>
                  <Fragment>
                        <nav className="fixed sm:px-16 top-0 sm:z-20 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                              <div className="px-3 py-3 lg:px-5 lg:pl-3">
                                    <div className="flex items-center justify-between">
                                          <div className="flex items-center justify-start rtl:justify-end">
                                                <div className="text-center">
                                                      <button className="focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                                                            <i className="fa-solid fa-bars sm:text-2xl text-xl"></i>
                                                      </button>
                                                </div>
                                                <Link to="/" className="flex ms-2 md:me-24">
                                                      <img src={Logo} className="h-10 me-3 mt-1" alt="FlowBite Logo" />
                                                      <div className="grid">
                                                            <span className="self-center text-xl font-bold sm:text-2xl text-gray-800 whitespace-nowrap dark:text-white">
                                                                  Kelaskita
                                                            </span>
                                                            <span className="sm:block hidden text-sm text-slate-500">
                                                                  Belajar Lebih Mudah dan Tertata Rapi Hanya di Kelaskita
                                                            </span>
                                                      </div>
                                                </Link>
                                          </div>
                                          <div className="flex items-center">
                                                <div className="flex items-center ms-3">
                                                      <div>
                                                            <div className="flex gap-4">
                                                                  <div>
                                                                        <Menu as="div" className="relative inline-block text-left">
                                                                              <div>
                                                                                    <Menu.Button
                                                                                          type="button"
                                                                                          className="inline-flex w-9 hover:scale-105 transition justify-center gap-x-1.5 rounded-full bg-white h-9 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                                          id="menu-button"
                                                                                          aria-expanded="true"
                                                                                          aria-haspopup="true"
                                                                                          onClick={() => setMenuOpen(!menuOpen)}
                                                                                    >
                                                                                          <i className="fa-solid fa-plus mt-2.5"></i>
                                                                                    </Menu.Button>
                                                                              </div>
                                                                              <Transition
                                                                                    show={menuOpen}
                                                                                    enter="transition duration-100 ease-out"
                                                                                    enterFrom="transform scale-95 opacity-0"
                                                                                    enterTo="transform scale-100 opacity-100"
                                                                                    leave="transition duration-75 ease-out"
                                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                                    leaveTo="transform scale-95 opacity-0"
                                                                              >
                                                                                    <Menu.Items
                                                                                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                                          role="menu"
                                                                                          aria-orientation="vertical"
                                                                                          aria-labelledby="menu-button"
                                                                                          tabIndex="-1"
                                                                                    >
                                                                                          <div className="py-1" role="none">
                                                                                                <Link
                                                                                                      className="text-gray-700 hover:bg-fuchsia-100 transition block px-4 py-2 text-sm"
                                                                                                      role="menuitem"
                                                                                                      tabIndex="-1"
                                                                                                      id="menu-item-0"
                                                                                                      onClick={openModalKelas}
                                                                                                >
                                                                                                      Buat Kelas
                                                                                                </Link>
                                                                                                <Dialog open={isOpenKelas} onClose={closeModalKelas}>
                                                                                                      <ModalCreateKelas closeModalKelas={closeModalKelas} />
                                                                                                </Dialog>
                                                                                                <Link
                                                                                                      className="text-gray-700 hover:bg-fuchsia-100 transition block px-4 py-2 text-sm"
                                                                                                      role="menuitem"
                                                                                                      tabIndex="-1"
                                                                                                      id="menu-item-0"
                                                                                                      onClick={openModal}
                                                                                                >
                                                                                                      Join Kelas
                                                                                                </Link>

                                                                                                <Dialog open={isOpen} onClose={closeModal}>
                                                                                                      <ModalJoinKelas closeModal={closeModal} />
                                                                                                </Dialog>
                                                                                          </div>
                                                                                    </Menu.Items>
                                                                              </Transition>
                                                                        </Menu>
                                                                  </div>
                                                                  {/* ... */}
                                                                  <div>
                                                                        <Menu as="div" className="relative sm:inline-block text-left hidden">
                                                                              <div>
                                                                                    <button
                                                                                          type="button"
                                                                                          className="flex text-sm transition bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                                                                          aria-expanded="false"
                                                                                          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                                                                    >
                                                                                          <span className="sr-only">Open user menu</span>
                                                                                          <img
                                                                                                className="w-8 h-8 rounded-full"
                                                                                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                                                                alt="user photo"
                                                                                          />
                                                                                    </button>
                                                                              </div>
                                                                              <Transition
                                                                                    show={userDropdownOpen}
                                                                                    enter="transition duration-100 ease-out"
                                                                                    enterFrom="transform scale-95 opacity-0"
                                                                                    enterTo="transform scale-100 opacity-100"
                                                                                    leave="transition duration-75 ease-out"
                                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                                    leaveTo="transform scale-95 opacity-0"
                                                                              >
                                                                                    <Menu.Items
                                                                                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                                          role="menu"
                                                                                          aria-orientation="vertical"
                                                                                          aria-labelledby="user-menu"
                                                                                          tabIndex="-1"
                                                                                    >
                                                                                          <div className="py-1" role="none">
                                                                                                <Link
                                                                                                      to="/sign-out"
                                                                                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                                                      role="menuitem"
                                                                                                >
                                                                                                      Sign out
                                                                                                </Link>
                                                                                          </div>
                                                                                    </Menu.Items>
                                                                              </Transition>
                                                                        </Menu>
                                                                  </div>
                                                                  {/* ... */}
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </nav>
                  </Fragment>
                  <Sidebar />
            </>
      );
};

export default Navbar;
