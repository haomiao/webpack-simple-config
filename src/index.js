//import _ from 'lodash';
//import './style.css';
//import Icon from './ico.png'
//import Data from './data.xml';
//import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'release') {
	console.log('Looks like we are in development mode!');
}

function component () {
  /*
  var element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.classList.add('hello');
  
  //var myIcon = new Image();
  //myIcon.src = Icon;
  //element.appendChild(myIcon);
  
  //console.log(Data);
  
  element.appendChild(btn);
  */
  var element = document.createElement('pre');
  element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}
 
document.body.appendChild(component());

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}