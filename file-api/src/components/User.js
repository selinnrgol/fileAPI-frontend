import { useState } from 'react';

function User() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    // dosyaları yüklemek için gerekli işlemler yapılır
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Dosyalarım</h1>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Dosya Adı</th>
                <th>Boyut</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {/* dosyaların listesi burada yer alacak */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleFileUpload}>
            <div className="form-group">
              <label>Dosya Yükle</label>
              <div className="custom-file">
                <input type="file" className="custom-file-input" onChange={handleFileUpload} />
                <label className="custom-file-label">Dosya Seçin</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Yükle</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
