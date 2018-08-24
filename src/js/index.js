import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import { drawer } from 'material-components-web';
import Slider from './slider';
import NavTabs from './functions/nav-tabs';
import ScrollTop from './functions/scrollTop.js';
import styles from '../styles/index.sass';
import inputTypeFile from './functions/inputTypeFile';
import InpuTypeFile from './functions/inputTypeFile';

if (document.querySelector('#aside') && document.querySelector('#sidebar')) {
    const menu = new drawer.MDCTemporaryDrawer(document.querySelector('#aside'));
    document.querySelector('.menu').addEventListener('click', () => menu.open = true);

    const sidebar = new drawer.MDCTemporaryDrawer(document.querySelector('#sidebar'));
    document.querySelector('.sidebar').addEventListener('click', () => sidebar.open = true);
}

if (document.querySelector('.js-carousel')) {
    const slider = new Slider({
        container: '.js-carousel',
        touch: true,
        autoplay: true,
        autoplayDelay: 3000
    });
}
if (document.querySelector('.nav-tabs')) { const navTab = new NavTabs('.nav-tabs') };
if (document.querySelector('.on-top__link')) { const scrollTop = new ScrollTop('.on-top__link') };

const inputFile = new InpuTypeFile({element: '#uploadimg', fileOutput: '.file-name'});