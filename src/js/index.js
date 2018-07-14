import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import style from '../styles/index.sass'
import { drawer } from 'material-components-web';
import Slider from './slider';




const sidebar = new drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => sidebar.open = true);

const slider = new Slider({
    container: '.js-carousel',
    touch: true,
    autoplay: true,
    autoplayDelay: 3000
});