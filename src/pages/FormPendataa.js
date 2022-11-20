import axios from "axios";
import React, { useState } from "react";
import "../assets/form.css";

function FormPendataa() {
  const url = "https://637907f87419b414df88cddd.mockapi.io/data";
  const [data, setData] = useState({
    nik: "",
    nama: "",
    tml: "",
    tgl: "",
    jk: "",
    agama: "",
    nohp: "",
    alamat: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    desa: "",
    pos: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        nik: data.nik,
        nama: data.nama,
        tml: data.tml,
        tgl: data.tgl,
        jk: data.jk,
        agama: data.agama,
        nohp: data.nohp,
        alamat: data.alamat,
        provinsi: data.provinsi,
        kota: data.kota,
        kecamatan: data.kecamatan,
        desa: data.desa,
        pos: data.pos,
      })
      .then((res) => {
        console.log("Data Berhasil disimpan");
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div>
      <main>
        <form id="form" onSubmit={(e) => submit(e)}>
          <h2>Data Pribadi</h2>
          <div className="mb-3">
            <label className="form-label">
              <strong>Nomor Induk Kependudukan (NIK)</strong>
            </label>
            <input
              type="number"
              placeholder="Contoh: 327512xxxxxx"
              className="form-control"
              id="nik"
              value={data.nik}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Nama Lengkap</strong>
            </label>
            <input
              type="text"
              placeholder="Contoh: Deni Irwan"
              className="form-control"
              id="nama"
              value={data.nama}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Tempat Lahir</strong>
            </label>
            <input
              onChange={(e) => handle(e)}
              className="form-control"
              type="text"
              placeholder="Jakarta"
              id="tml"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Tanggal Lahir</strong>
            </label>
            <input
              type="date"
              className="form-control"
              id="tgl"
              value={data.tgl}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Jenis Kelamin</strong>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="jk"
              value={data.jk}
              onChange={(e) => handle(e)}
            >
              <option selected>Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Agama</strong>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="agama"
              value={data.agama}
              onChange={(e) => handle(e)}
            >
              <option selected>Pilih salah satu..</option>
              <option value="Islam">Islam</option>
              <option value="Kristen Protestan">Kristen Protestan</option>
              <option value="Kristen Katolik">Kristen Katolik</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Konghucu">Konghucu</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>No HP</strong>
            </label>
            <input
              type="number"
              placeholder="Contoh: 0821xxxxxxxx"
              className="form-control"
              id="nohp"
              value={data.nohp}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Alamat</strong>
            </label>
            <input
              type="text"
              placeholder="Contoh: Jl. Ujung No.22 RT02/RW02"
              className="form-control"
              id="alamat"
              value={data.alamat}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Provinsi</strong>
            </label>
            <input
              type="text"
              placeholder="Contoh: DKI Jakarta"
              className="form-control"
              id="provinsi"
              value={data.provinsi}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Kota</strong>
            </label>
            <input
              type="text"
              placeholder="Contoh: Jakarta"
              className="form-control"
              id="kota"
              value={data.kota}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Kecamatan</strong>
            </label>
            <input
              type="text"
              placeholder="Contoh: Kramat Jati"
              className="form-control"
              id="kecamatan"
              value={data.kecamatan}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Desa</strong>
            </label>
            <input
              type="text"
              placeholder="Contoh: Cipinang"
              className="form-control"
              id="desa"
              value={data.desa}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <strong>Kode Pos</strong>
            </label>
            <input
              type="number"
              placeholder="Contoh: 13510"
              className="form-control"
              id="pos"
              value={data.pos}
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button type="submit" className="btn btn-primary btn-lg" id="butt">
              Simpan
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default FormPendataa;
