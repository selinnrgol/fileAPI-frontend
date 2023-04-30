import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // burada e-posta adresinin doğruluğunu kontrol edebilirsiniz
    // ardından, doğruysa e-posta adresini sunucuya gönderebilirsiniz
    // işlem tamamlandıktan sonra login sayfasına geri dönülebilir
    history.goBack();
  };

  return (
    <div className="container">
      <h2>Şifremi Unuttum</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-posta Adresi:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Şifremi Sıfırla
          </button>
          <button type="button" className="btn btn-link ml-2" onClick={() => history.goBack()}>
            Geri Dön
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
