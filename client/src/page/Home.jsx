import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
      const [kelas, setKelas] = useState([]);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get("http://localhost:3000/");
                        setKelas(response.data);
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  }
            };

            fetchData();
      }, []);

      return (
            <>
                  <div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-4">
                              {kelas.map((item) => (
                                    <Link to={`/preview/${item._id}`} key={item._id} className="relative overflow-hidden rounded-md shadow-lg">
                                          <div className="absolute inset-0 "></div>
                                          <div className="relative z-10 h-52">
                                                {/* Card Header */}
                                                <div className="mb-2 bg-fuchsia-400 w-full p-4">
                                                      <h3 className="text-lg font-semibold">{item.name}</h3>
                                                </div>
                                                {/* Card Body */}
                                                <div className="mt-2 p-4">{item.deskripsi}</div>
                                                {/* Card Footer */}
                                                <div className="absolute bottom-0 flex justify-end p-4">
                                                      <button className="bg-fuchsia-500 px-3 py-1 rounded-md hover:bg-fuchsia-600 transition duration-200 text-white shadow-sm">Lihat Tugas</button>
                                                </div>
                                          </div>
                                    </Link>
                              ))}
                        </div>
                  </div>
            </>
      );
};

export default Home;
