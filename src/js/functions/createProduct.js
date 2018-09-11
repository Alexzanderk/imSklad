import { createElement } from './helpers';

export default function addCategory() {
    const categorySelect = document.querySelector('select[name=category]');
    let selectValue;

    categorySelect.addEventListener('change', load);

    function load(e) {
        selectValue = e.target.selectedOptions[0].value;

        fetch('http://localhost:3000/admin/catalog/category/get')
            .then(response => {
                if (response.status == 200) return response.json();
            })
            .then(add)
            .catch(console.error);
    }

    function add(data) {
        let categoryProps = data.find(elem => elem.id === selectValue).props;
        // const parent = document.querySelector('li[data-list="2"].tabs__item');
        const parent = document.querySelector('.props__list');
        const fragment = document.createDocumentFragment();
        del(parent);
        categoryProps.forEach( elem => fragment.appendChild(createField(elem)));
        
        parent.appendChild(fragment);
    }

    function createField(data) {
        const fragment = document.createDocumentFragment();
        const inputs = createInput(data);

        const li = createElement('li', { class: 'product__item' }, inputs);

        return fragment.appendChild(li);
    }

    function createInput(data) {
        const fragment = document.createDocumentFragment();
        let name = document.createDocumentFragment();
        let unit = document.createDocumentFragment();
        let value = document.createDocumentFragment();
        let unitValue = data.propsUnit;

        for (let key in data) {
            if (key !== '_id') {
                const label = createElement('label', {class: 'row__label'}, data[key]);
                const input = createElement('input', { 
                    readonly: true,
                    class: 'input', 
                    type: key === 'propsUnit' ? 'hidden' : 'text', 
                    name: key === 'propsName' ? 'propName' : 'propUnit', 
                    placeholder: data[key],
                    value: data[key]
                });
                const span = createElement('span', { class: 'form-row' }, label, input);
                key === 'propsUnit' ? unit.appendChild(span) : name.appendChild(span);
            } else {
                const label = createElement('label', {class: 'row__label'}, unitValue);
                const input = createElement('input', { 
                    class: 'input', 
                    type: 'text', 
                    name: 'value', 
                    placeholder: 'Значение'
                });
                const span = createElement('span', { class: 'form-row' }, label, input);
                value.appendChild(span);
            }
        }

        fragment.appendChild(name);
        fragment.appendChild(unit);
        fragment.appendChild(value);

        return fragment;
    }

    function del(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

}