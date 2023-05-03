$(document).ready(function () {
    let position = 0;           //Начальная позиция
    const slidesToShow = 4;     //Количество отображаемых элементов
    const slidesToScroll = 3;   //Количество элементов будет пролистано
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow; //Ширина каждого элемента
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) { //Присвоение ширины елемнта в массиве
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function () {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();

    });

    btnPrev.click(function () {
        const itemsLeft = Math.abs(position)/itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;;
        setPosition();
        checkBtns();

    });

    const setPosition = () => { //Смещение слайдов
        track.css({
            transform: `translateX( ${position}px )`
        });

    }

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);

    }

    checkBtns();
});