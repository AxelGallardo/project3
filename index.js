// index.js
import { AppRegistry } from 'react-native';
import App from './App'; // O el nombre del componente principal de tu aplicación
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (window.document) {
  const rootTag = document.getElementById('root') || document.getElementById('app') || document.getElementById('main');
  AppRegistry.runApplication(appName, { rootTag });
}
