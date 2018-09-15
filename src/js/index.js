import { regex } from './functions/regexForm';
import { regexPolyfill } from './functions/regexPolyfillForm';
import { drawer } from 'material-components-web';
import Slider from './slider';
import NavTabs from './functions/nav-tabs';
import ScrollTop from './functions/scrollTop.js';
import InpuTypeFile from './functions/inputTypeFile';
import adminAddRows from './functions/adminAddRows';
import addElement from './functions/addElement';
import addCategory from './functions/createProduct';
import { alertNotification } from './functions/alert';
import { checkUncheck } from './functions/checkboxUncheck';
import style from '../styles/index.sass';


const inputFile = new InpuTypeFile({element: '#uploadimg', fileOutput: '.file-name'});

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
if (document.querySelector('.nav-tabs')) { const navTab = new NavTabs('.nav-tabs'); }
if (document.querySelector('.on-top__link')) { const scrollTop = new ScrollTop('.on-top__link'); }
if (document.querySelector('#adminCategoryProps')) { adminAddRows(); }
if (document.querySelector('#adminContacts')) { addElement(); }

if (document.querySelector('textarea')) {
    const textareas = document.querySelectorAll('textarea');
    
    textareas.forEach(textarea => {
        tinymce.init({
            selector: textarea.classList.value,
            branding: false,
            height: 300,
            plugins: 'code print preview fullpage  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
            toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | code link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent',
            image_advtab: true,
            hidden_input: false,
            // setup: function (editor) {
            //     editor.on('init', function (e) {
            //         let desc = document.querySelector('input[type=hidden]').value;
            //         editor.setContent(desc);
            //     });
            // },
            // init_instance_callback: function (editor) {
            //     editor.on('PostProcess', function (e) {
            //         console.log(editor);
            //         let content = editor.getBody();
            //         let desc = document.querySelector('input[type=hidden]');
            //         desc.value = content.innerHTML;
            //     });
            // }

        });
    });
}

if (document.querySelector('#adminCreateProduct')) { addCategory(); }
if (document.querySelector('.alert')) { alertNotification(); }
if (document.querySelector('#adminProductList')) { checkUncheck(); }