import decode from 'jwt-decode';

class AuthService {
    getUser() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
      }

    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem('id_token');
          return true;
        }
        return false;
      }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(token) {
      const decoded = decode(token);
      console.log(decoded.data)
        localStorage.setItem('id_token', token);
        window.location.assign(`/me/${decoded.data._id}`);
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
      }

}

export default new AuthService();