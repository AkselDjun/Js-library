import "./lib/lib";
import $ from "./lib/lib";

$(".active").toggle();// работает также, как и 2 метода до этого 
$("div").hide();//скрывает все элементы div
$("div").show();//показывает все элементы div скрытые методом hide


$(".active").addClass("hello", "world");//добавление класса(классы) к опрделенному объекту 
$(".active").removeClass("world");//удаление класса(классы) к опрделенному объекту 


function sayHello() {
    console.log("Hello!");
}
$(".active").on("click", sayHello);//аналог addEventListener
$(".active").off("click", sayHello);//аналог removeEventListener
$("button").on("click", function () {
    $(this).toggleClass("active");
});


console.log($("button").html("Hello world!"));//аналог innerHTML
$("button").on("click", function () {//присвоение класса элементу под определенным номером 
    $("div").eq(3).toggleClass("active");
});
$("div").on("click", function () {//получение номер элемента на который мы кликнули
    console.log($(this).index());
});
console.log($("div").eq(2).find(".more"));
console.log($(".some").closest(".findMe").addClass("hi"));// поиск ближайшего блока-родителя к заявленному элементу
console.log($(".more").eq(0).siblings());//показывает всех соседей выбранного блока под определенным порядковым числом 


$(".findMe").fadeOut(2000);//эффект исчезновения
$(".findMe").fadeIn(2000);//эффект появления


