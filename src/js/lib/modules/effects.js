import $ from "../core";

$.prototype.animateOverTime = function (delay, callback, final) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / delay, 1);

        callback(complection);

        if (timeElapsed < delay) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof final === "function") {
                final();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function (delay, display = "block", final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(delay, _fadeIn, final);
        requestAnimationFrame(ani);
    };
    return this;
}

$.prototype.fadeOut = function (delay, final) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = none;
            }
        };

        const ani = this.animateOverTime(delay, _fadeOut, final);
        requestAnimationFrame(ani);
    };
    return this;
}