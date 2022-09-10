/* eslint-disable no-console */
import MovingElement from './modules/MovingElement';

const divForMovingElement = document.getElementById('movingElement');
const movingElement = new MovingElement(divForMovingElement);
movingElement.init();

console.log('app started');
