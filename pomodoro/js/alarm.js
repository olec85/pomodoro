import { state } from "./state.js";

const audio = {
    work: new Audio('audio/dudu.mp3'),
    break: new Audio('audio/wave2.mp3'),
    relax: new Audio('audio/ya-ustala.mp3'),
}

export const alarm = () => {
    audio[state.status].play();
};//мелодия по окончанию таймера