import { createElement } from './helpers';

export function checkUncheck() {
    const form = document.forms.adminProductList;
    const checkboxes = form.elements.published;
    console.log(checkboxes);

    form.addEventListener('submit', falseValue);

    function falseValue() {
        const inputsCheckbox = document.querySelectorAll('.form-row--checkbox');

        inputsCheckbox.forEach(el => {
            const checkbox = el.querySelector('input[type=checkbox]');
            const hiddenInput = el.parentNode.querySelector('input[type=hidden][name=published]');

            if (checkbox.checked) {

                if (hiddenInput) {
                    hiddenInput.parentNode.removeChild(hiddenInput);
                    checkbox.value = 1;
                } else {
                    checkbox.value = 1;
                }

            } else {
                if (!hiddenInput) {
                    const createInput = createElement('input', {
                        type: 'hidden',
                        name: 'published',
                        value: 0
                    });
                    const row = el.parentNode;
                    row.appendChild(createInput);
                }

                return false;

            }

        });

    }

}