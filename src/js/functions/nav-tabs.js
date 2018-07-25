export class NavTabs {
    constructor(element) {
        this.tab = document.querySelector(element);
        this.buttons = this.tab.querySelectorAll('.nav-tabs__link');
        
        this.buttons.forEach(btn => btn.addEventListener('click', this.toggleTab));
    }

    toggleTab(event) {
        event.preventDefault();

        const controlItem = this.parentNode;
        console.log(controlItem);
        const controlItemAttribute = controlItem.getAttribute('data-tab');
        const tabsList = document.querySelectorAll('.tabs__item');
        const tabItem = Array.prototype.filter.call(tabsList, tab => tab.getAttribute('data-list') === controlItemAttribute);

        Array.prototype.slice.call(controlItem.parentNode.children).forEach(element => element.classList.remove('nav-tabs__items--active'));
        controlItem.classList.add('nav-tabs__items--active');

        tabsList.forEach(element => element.classList.remove('tabs__item--active'));
        tabItem[0].classList.add('tabs__item--active');
    }
}
