// Pour pouvoir utiliser les imports
require('@babel/register')();
// Pour pouvoir require des modules react qui ont des imports css
// Sinon il veut interpréter le css comme du JS et ça plante
require('ignore-styles');

const enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
enzyme.configure({adapter: new Adapter()})
