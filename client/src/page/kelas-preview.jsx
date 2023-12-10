import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Preview = () => {
      const { id } = useParams();
      const navigate = useNavigate();

      const [name, setName] = useState('');
      const [kodeKelas, setKodeKelas] = useState('');
      const [deskripsi, setDeskripsi] = useState('');

      useEffect(() => {
            axios.get(`http://localhost:3000/kelas/show/${id}`)
                  .then(res => {
                        const { name, kode_kelas, deskripsi } = res.data;
                        setName(name);
                        setKodeKelas(kode_kelas);
                        setDeskripsi(deskripsi);
                  })
                  .catch(err => {
                        console.error(err);
                        navigate('/'); // Redirect ke halaman utama jika terjadi kesalahan
                  });
      }, [id, navigate]);

      return (
            <>
                  <h1>{name}</h1>
                  <p>Kode Kelas: {kodeKelas}</p>
                  <p>Deskripsi: {deskripsi}</p>

            </>
      );
};

export default Preview;
