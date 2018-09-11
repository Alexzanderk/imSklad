export default class ScrollTop {
    constructor(element, {speed = 30} = {}) {
        this.marginY = 0;
        this.speed = speed;
        this.scroller = null;
        this.button = document.querySelector(element);

        this.button.addEventListener('click', this.toTop.bind(this));
        
        window.onscroll = () => { this.marginY = window.pageYOffset; }
    }

    toTop() {
        this.scroller = setTimeout(() => { this.toTop(); }, 1);
        this.marginY = this.marginY - this.speed;
        if (this.marginY <= 0) { clearTimeout(this.scroller); }

        window.scroll(0, this.marginY);
    }

}