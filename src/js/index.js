import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import style from '../styles/index.sass'
import { drawer } from 'material-components-web';
import Slider from './slider';
import { NavTabs } from './functions/nav-tabs';


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
if (document.querySelector('.nav-tabs')){ const navTab = new NavTabs('.nav-tabs') }