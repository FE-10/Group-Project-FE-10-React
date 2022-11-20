import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/form.css";

function ProfilePage() {
  const url = "https://637907f87419b414df88cddd.mockapi.io/data";
  const [post, setPost] = useState([]);

  const fetchpost = async () => {
    const response = await axios.get(url);
    setPost(response.data);
    console.log(setPost);
  };
  return (
    <div>
      <form>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span className="font-weight-bold">{post.nama}</span>
                <span className="text-black-50">edogaru@mail.com.my</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Nomor Induk Kependudukan</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Nama Lengkap</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Tempat Lahir</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Tanggal Lahir</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Jenis Kelamin</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Agama</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Pilih salah satu..</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen Protestan">
                        Kristen Protestan
                      </option>
                      <option value="Kristen Katolik">Kristen Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Buddha">Buddha</option>
                      <option value="Konghucu">Konghucu</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">No HandPhone</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Alamat</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Provinsi</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Kota</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Kecamatan</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Desa</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Kode Pos</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="submit"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
