import { Link } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react";

const Sidebar = () => {
      const { isSignedIn, user, isLoaded } = useUser();
      if (!isLoaded) {
            return null;
      }
      if (isSignedIn) {
            return (
                  <>
                        <div id="drawer-navigation" className="fixed shadow-lg top-0 left-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white  dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
                              <div className='mt-8 grid  gap-4 sm:hidden'>
                                    <div>
                                          {user.pictureUrl ? (
                                                <img
                                                      className="inline-block border-2 border-fuchsia-500 p-1 shadow-md h-16 w-16 rounded-full ring-2 ring-white"
                                                      src={user.pictureUrl}
                                                      alt=""
                                                />
                                          ) : null}
                                    </div>

                                    <div>
                                          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">{user.fullName}</h5>
                                          <span>{user.emailAddresses[0].emailAddress}</span>
                                    </div>
                              </div>
                              <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-800 bg-transparent transition hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close menu</span>
                              </button>
                              <hr className='mt-5 sm:hidden' />
                              <div className="py-4 overflow-y-auto sm:mt-32">
                                    <ul className="space-y-4 font-medium text-xl">
                                          <li>
                                                <Link to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-200 dark:hover:bg-gray-700 group transition hover:shadow-lg">
                                                      <i className="fa-solid fa-house-user  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-900 dark:group-hover:text-white"></i>
                                                      <span className="ms-3">Home</span>
                                                </Link>
                                          </li>
                                          <li>
                                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-200 dark:hover:bg-gray-700 group transition hover:shadow-lg">
                                                      <i className="fa-solid fa-list-check flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-900 dark:group-hover:text-white"></i>
                                                      <span className="flex-1 ms-3 whitespace-nowrap">Tugas</span>

                                                </a>
                                          </li>
                                          <li>
                                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-200 dark:hover:bg-gray-700 group transition hover:shadow-lg">

                                                      <i className="fa-solid fa-calendar-days flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-900 dark:group-hover:text-white"></i>
                                                      <span className="flex-1 ms-3 whitespace-nowrap">Kalender</span>

                                                </a>
                                          </li>
                                          <li>
                                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-200 dark:hover:bg-gray-700 group transition hover:shadow-lg">

                                                      <i className="fa-solid fa-gear flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-900 dark:group-hover:text-white"></i>
                                                      <span className="flex-1 ms-3 whitespace-nowrap">Pengaturan</span>
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-200 dark:hover:bg-gray-700 group transition hover:shadow-lg">
                                                      <i className="fa-solid fa-right-from-bracket flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-indigo-900 dark:group-hover:text-white"></i>
                                                      <span className="flex-1 ms-3 whitespace-nowrap">Keluar</span>
                                                </a>
                                          </li>
                                    </ul>
                              </div>
                        </div >
                  </>
            )
      }
}
export default Sidebar