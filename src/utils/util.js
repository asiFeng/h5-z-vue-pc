/**
 * 等待事件，返回 promise 对象
 * @param {*} inv 等待时间
 */
export function waitEvent( inv = 1000){
    return new Promise( resolve=> setTimeout( resolve, inv));
}


export const show = function show( msg ){
    alert(msg);
}

