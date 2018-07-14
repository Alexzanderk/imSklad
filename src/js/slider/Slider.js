export default class Slider {
    constructor({ container, touch = true, autoplay = false, autoplayDelay = 3000}) {
        this.slider = document.querySelector(container);
        this.slidesContainer = this.slider.querySelector('.js-carousel__wrap');
        this.prevButton = this.slider.querySelector('.js-carousel__prev');
        this.nextButton = this.slider.querySelector('.js-carousel__next');
        this.currentSlide = 0;
        this.lastSlide = this.slider.querySelector('.js-carousel__wrap').children.length;

        this.isAnimationEnd = true;
        this.touch = touch;
        this.autoplay = autoplay;
        this.autoplayDelay = autoplayDelay;

        this.touchParammetrs = {
            xDown: 0,
            yDown: 0, 
            xDiff: 0,
            yDiff: 0,
            xUp: 0,
            yUp: 0
        };

        this.slidesContainer.appendChild(this.slider.querySelector('.js-carousel__wrap').children[0].cloneNode(true));

        this.prevButton.addEventListener('click', this.prevSlide.bind(this));
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        if (this.touch === true) {
            this.slidesContainer.addEventListener('touchstart', this.touchStart.bind(this), false);
            this.slidesContainer.addEventListener('touchmove', this.touchMove.bind(this), false);
        }
    }

    prevSlide() {
        if (!this.isAnimationEnd) { return };

        this.isAnimationEnd = false;
        this.currentSlide -= 1;

        if (this.currentSlide < 0) {
            this.slidesContainer.classList.add('s-notransition');
            this.slidesContainer.style['transform'] = `translateX(-${this.lastSlide}00%)`;
            this.currentSlide = this.lastSlide - 1;
        }

        setTimeout(() => {
            this.slidesContainer.classList.remove('s-notransition');
            this.slidesContainer.style['transform'] = `translateX(-${this.currentSlide}00%)`;
        }, 10);

        this.slidesContainer.addEventListener('transitionend', () => this.isAnimationEnd = true);
    }

    nextSlide() {
        if (!this.isAnimationEnd) { return };

        this.isAnimationEnd = false;

        if (this.currentSlide < this.lastSlide) {
            this.currentSlide += 1;
        }

        this.slidesContainer.classList.remove('s-notransition');
        this.slidesContainer.style['transform'] = `translateX(-${this.currentSlide}00%)`;

        this.slidesContainer.addEventListener('transitionend', () => {
            if (this.currentSlide >= this.lastSlide) {
                this.slidesContainer.classList.add('s-notransition');
                this.slidesContainer.style['transform'] = `translateX(0%)`;
                this.currentSlide = 0;
            }
            this.isAnimationEnd = true;
        })
    }

    touchStart(e) {
        this.touchParammetrs.xDown = e.touches[0].clientX;
        this.touchParammetrs.yDown = e.touches[0].clientY;
        console.log(this.touchParammetrs);
    }

    touchMove(e) {
        if (!this.touchParammetrs.xDown || !this.touchParammetrs.yDown) { return; }

        this.touchParammetrs.xUp = e.touches[0].clientX;
        this.touchParammetrs.yUp = e.touches[0].clientY;

        this.touchParammetrs.xDiff = this.touchParammetrs.xDown - this.touchParammetrs.xUp;
        this.touchParammetrs.yDiff = this.touchParammetrs.yDown - this.touchParammetrs.yUp;

        if ( Math.abs( this.touchParammetrs.xDiff ) > Math.abs( this.touchParammetrs.yDiff ) ) {
            if ( this.touchParammetrs.xDiff > 0 ) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
        this.touchParammetrs.xDown = 0;
        this.touchParammetrs.yDown = 0;

    }

    
}