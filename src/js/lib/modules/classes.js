import $ from "../core";

$.prototype.addClass = function (...classNames) {//добавляет классы к объекту
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.add(...classNames);
    };
    return this;
};

$.prototype.removeClass = function (...classNames) {//удаляет классы у объекту
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.remove(...classNames);
    };
    return this;
};

$.prototype.toggleClass = function (classNames) {//добавляет только один класс к объекту
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(classNames);
    };
    return this;
};