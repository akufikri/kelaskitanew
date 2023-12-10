import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ModalCreateKelas = ({ closeModalKelas }) => {
      useEffect(() => {
            const timer = setTimeout(() => {
                  closeModalKelas();
            }, 5000)
            return () => {
                  clearTimeout(timer)
            }
      }, []);
      const [name, setName] = useState()
      const [deskripsi, setDeskripsi] = useState()
      const Navigate = useNavigate()

      const Submit = (e) => {
            e.preventDefault();
            axios.post('http://localhost:3000/kelas/create', { name, deskripsi })
                  .then(res => {
                        console.log(res)
                        Navigate('/');
                        closeModalKelas();
                  })
                  .catch(err => console.log(err))
      }

      return (
            <>
                  <div className="fixed inset-0 z-50 w-screen overflow-y-auto backdrop-blur-lg bg-fuchsia-500 bg-opacity-5">
                        <div className="flex sm:min-h-full sm:mt-0 mt-28  items-end justify-center p-4 text-center sm:items-center sm:p-0">

                              <div className="relative w-full transform overflow-hidden  duration-300 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg backdrop-blur-sm bg-opacity-50">
                                    <form onSubmit={Submit}>
                                          <div className="bg-white sm:px-4 pt-5 sm:p-6 sm:pb-4">
                                                <div className="sm:flex sm:items-start">
                                                      <div className="mt-3 text-center  sm:mt-0 sm:text-left p-4 w-full">

                                                            <div className="mb-4">
                                                                  <label htmlFor="nama_kelas" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Kelas</label>
                                                                  <input type="text" onChange={(e) => setName(e.target.value)} id="name" className="bg-gray-50 border transition border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="RPL KEREN : OOP" required />
                                                            </div>
                                                            <div className="mb-4">
                                                                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Kelas</label>
                                                                  <textarea onChange={(e) => setDeskripsi(e.target.value)} id="deskripsi" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                                            </div>

                                                      </div>
                                                </div>
                                          </div>
                                          <div className="bg-gray-50 flex px-4 py-3 sm:px-6 gap-4">
                                                <div>
                                                      <button className='bg-fuchsia-500 px-3 py-2 text-white rounded-md shadow-md hover:scale-105 transition text-sm font-semibold'>Buat Kelas</button>
                                                </div>
                                                <div>
                                                      <button
                                                            type="button"
                                                            onClick={closeModalKelas}
                                                            className="inline-flex w-full shadow-md hover:scale-105 transition justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
                                                      >
                                                            Close
                                                      </button>
                                                </div>

                                          </div>
                                    </form>
                              </div>

                        </div>
                  </div>
            </>
      )
}
export default ModalCreateKelas