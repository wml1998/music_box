//防抖函数
export function antiShake(fn,daley) {
    let time = null;
    return function () {
        let coutext = this
        let ags = arguments
        if (time !== null) {
			clearTimeout(time);
 		}
         time = setTimeout(function () {
             fn.apply(coutext,ags)
         },daley)
    }
}

//节流函数
export function throttle(fn,day) {
    let last,defTimer
    return function (ags) {
        let _this = this
        let _ags = arguments
        let now = +new Date()
        if(last && now < last + day) {
            clearTimeout(defTimer)
            defTimer = setTimeout( () => {
                fn.apply(_this,_ags)
            },day)
        }else {
            last = now
            fn.apply(_this,_ags)
        }
    }

}