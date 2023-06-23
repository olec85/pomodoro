import { alarm } from "./alarm.js";
import { changeActiveBtn } from "./control.js";
import { state } from "./state.js";
import { showTodo, updateTodo } from "./todo.js";
import { addZero } from "./util.js";

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

export const showTime = (seconds) => {
    minutesElem.textContent = addZero(Math.floor(seconds / 60));
    secondsElem.textContent = addZero(seconds % 60);
}//показываем таймер

const title = document.title;

export const startTimer = () => {
    const countdown = new Date().getTime() + state.timeLeft * 1000;
    console.log('countdown: ', countdown);
    
    state.timerId = setInterval(() => {
    state.timeLeft -= 1;//менял тут с еденицы щетчик секунд
    showTime(state.timeLeft);

    document.title = state.timeLeft

    // const now = new Date().getTime();
    // state.timeLeft = (countdown - now) / 1000;

    if(state.timeLeft > 0 && state.isActive) {
        return;
    }

    document.title = title;
    clearTimeout(st.timerId);

    if(state.timeLeft <= 0) {
    
    if (state.status === 'work') {
        state.activeTodo.pomodoro += 1;
        updateTodo(state.activeTodo);
                
    
    if (state.activeTodo.pomodoro % state.count !== 0) {
     state.status = 'break'
    } else {
     state.status = 'relax'
    }
} else {
    state.status = 'work'
}
    
            alarm();//вызываем мелодию после каждого изменения статуса
            state.timeLeft = state[state.status] * 60;
            changeActiveBtn(state.status);
            showTodo();
            startTimer();
            
        }
    }, 1000)


    // if(state.timeLeft > 0 && state.isActive) {
    //     state.timerId = setTimeout(startTimer, 1000);//setTimeout-функция которая запускает другую функцию через определеное время
    // }

   
}//запускаем таймер