import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context';
import { LocaleContextProvider } from './context/locale-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <LocaleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocaleContextProvider>
  </AuthContextProvider>,
);
