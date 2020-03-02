/**
 * 通过import引入的本模块为单例模式，所有模块共享同一份date变量。
 * 所以各个页面取到的 getTime 数值一致。
 */
let date = new Date();

export function getTime(){
    return date.getTime();
};

export function setTime(){
    date = new Date('1970-01-01');
}

