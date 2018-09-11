import { createElement } from './helpers';

export default function adminAddRows() {
    const addRowButton = document.querySelector('.addRowButton');
    const deleteAllRowsButton = document.querySelector('.deleteAllRowsButton');
    const propsList = document.querySelector('.props__list');
    
    function deleteAllRows(e) {
        e.preventDefault();
        e.stopPropagation();
        
        while( propsList.firstChild ) {
            propsList.removeChild(propsList.firstChild);
        }
    }

    function deleteRow(e) {
        e.preventDefault();
        e.stopPropagation();

        const row = this.parentNode;
        const listRows = row.parentNode;
        listRows.removeChild(row);
    }

    function bindEvents() {
        const deleteButtons = document.querySelectorAll('.deleteRowButton');
        deleteButtons.forEach(button => button.addEventListener('click', deleteRow));
    }

    function addRow(e) {
        e.preventDefault();
        e.stopPropagation();

        fetch('http://localhost:3000/admin/catalog/units/get')
            .then(response => {
                if (response.status == 200) return response.json();
            })
            .then(createRow)
            .catch(err => console.error(err));
        
       
        bindEvents();
    }

    function createRow(data) {
        const createOption = (data) => {
            let options = document.createDocumentFragment();

            const option = createElement('option', { class: 'option', value: 'no', selected: true }, 'Выбрать ед.изм');
            options.appendChild(option);

            for (const obj of data) {
                const option = createElement('option', { class: 'option', value: obj._id }, obj.name);
                options.appendChild(option);
            }

            return options;
        };
        const formRow = (element) => createElement('span', { class: element.tagName == 'SELECT' ? 'form-row form-row--select' : 'form-row' }, element);

        const fragment = document.createDocumentFragment();
        const deleteIcon = createElement('i', { class: 'far fa-trash-alt ico-delete' });
        const deleteLink = createElement('a', { class: 'props__link props__link--delete deleteRowButton', href: '#' }, deleteIcon);
        const selectUnit = createElement('select', { class: 'select form-row--select', name: 'propsUnit', placeholder: 'ед.измерения' }, createOption(data));
        const inputTitle = createElement('input', { class: 'input', type: 'text', name: 'propsName', placeholder: 'title - название свойства для таблицы' });
        const inputName = createElement('input', { class: 'input', type: 'text', name: '_id', placeholder: 'name - имя поля для bd' });
        const li = createElement('li', { class: 'props__item' }, formRow(inputName), formRow(inputTitle), formRow(selectUnit), deleteLink);
        
        fragment.appendChild(li);
        propsList.appendChild(fragment);
        bindEvents();
    }
    
    bindEvents();
    deleteAllRowsButton.addEventListener('click', deleteAllRows);
    addRowButton.addEventListener('click', addRow);
}