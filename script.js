//Реализовать идущие часики в заголовке (Title)
setInterval (function() {
    document.title = `${new Date().toLocaleTimeString()} One Piece`;
}, 1000);
// Функция изменения цвета фона
function changeColor(color) {
    document.body.style.backgroundColor = color;
}
//Вывести текущую дату в pop up, нажав на кнопку.
function SDate() {
    alert(new Date().toLocaleDateString('ru-RU'));
}