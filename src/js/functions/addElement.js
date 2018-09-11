import { createElement } from './helpers.js';

export default function addElement() {
    const addButton = document.querySelector('#addElement');
    let element;
    
    addButton.addEventListener('click', add);
    bindEvents();

    function add(e) {
        e.preventDefault();
        e.stopPropagation();

        element = document.querySelector('#addElementInput').value;
        const container = document.querySelector(`.${element}`);
        container.appendChild(create());
        bindEvents();
    }
    
    function create() {
        if (element !== 'no') {
            const deleteIcon = createElement('i', { class: 'far fa-trash-alt ico-delete' });
            const deleteLink = createElement('a', { class: 'input__link input__link--delete deleteInputButton', href: '#' }, deleteIcon);
            const input = createElement('input', { class: 'input', type: (element === 'telephones') ? 'tel' : 'email', placeholder: (element === 'telephones') ? 'Телефон' : 'Email', name: (element === 'telephones') ? 'tel' : 'email' });
            const span = createElement('span', { class: 'form-row' }, input, deleteLink);
            return span;
        }
        return false;
    }

    function del(e) {
        e.preventDefault();
        e.stopPropagation();

        const currentInput = this.parentNode;
        const listRows = currentInput.parentNode;
        listRows.removeChild(currentInput);
    }

    function bindEvents() {
        const deleteButtons = document.querySelectorAll('.deleteInputButton');
        deleteButtons.forEach(button => button.addEventListener('click', del));
    }
}