/**
 * 每个函数的作用空间是相互独立的
 */
export function debounce (){
    let timer = null;
    let count = 0;
    return function( fn, t=1000 ){
        if( timer ){
            clearTimeout( timer );
        }
        if(typeof fn !== 'function'){
            let a = 0;
            timer = setTimeout( a++, t )
        }else{
            timer = setTimeout( fn, t )
        }
        count++;
        console.log( count );
    }
}

