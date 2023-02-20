import { state } from "./state.js";
import { showTime, startTimer } from "./timer.js";

const btnStart = document.querySelector('.control__btn-start');//получаем кнопку старт
const btnStop = document.querySelector('.control__btn-stop');//получаем кнопку стоп
const navigationBtns = document.querySelectorAll('.navigation__btn');//получаем одну кнопку помодоро

export const changeActiveBtn = (dataUse) => {
    // const btn = document.querySelector(`[data-use="${dataUse}"]`);
    state.status = dataUse;//делаем так чтобы при переключении между отдых перерыв и помодоро менялось и время 
    for (let i = 0; i < navigationBtns.length; i++) {
        if(navigationBtns[i].dataset.use === dataUse) {
            navigationBtns[i].classList.add('navigation__btn-active')//добавили класс активности с кнопки
        } else {
            navigationBtns[i].classList.remove('navigation__btn-active')//удалили класс активности с кнопки
        }
        
    }

    
}

const stop = () => {
    clearTimeout(state.timerId);//остановка таймера
    state.isActive = false;//выключать активность
    btnStart.textContent = 'Старт';//писать слово старт
    state.timeLeft = state[state.status] * 60;//
    showTime(state.timeLeft);//
}//функция остановки которую ниже передадим в кнопку стоп на 45 строке

export const initControl = () => {
    btnStart.addEventListener('click', () => {
        if (state.isActive) {
            clearTimeout(state.timerId);
            state.isActive = false;
            btnStart.textContent = 'Старт';
            
        } else {
            state.isActive = true;
            btnStart.textContent = 'Пауза';
            startTimer();
        }
    });

    btnStop.addEventListener('click', stop);
    showTime(state.timeLeft);

    for (let i = 0;i < navigationBtns.length;i++) {
        navigationBtns[i].addEventListener('click', () => {
            changeActiveBtn(navigationBtns[i].dataset.use);
            stop();
        })//активируем чтобы кнопки при нажатии переключались(помодоро,перерыв отдых)
    }
    showTime(state.timeLeft);//на кнопку стоп навесили слушатель пo клику
};//инициализация контроллера


