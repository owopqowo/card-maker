import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/icon.css';
import App from './app';
import AuthService from './service/auth_service'
import ImageUploader from './service/image_uploader';
import Upload from './components/upload/upload';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props => (<Upload {...props} imageUploader={imageUploader} />);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);

