/*
  防抖函数
*/
let timeout: number | null | undefined
export const debounce = function (func: any, wait: number) {
  // 延迟执行函数
  const later = (args: any[]) => setTimeout(() => {
    // 延迟函数执行完毕，清空定时器。
    timeout = null
    // 延迟执行的情况下，函数会在延迟函数中执行。
    // 使用到之前缓存的参数和上下文
    // @ts-ignore
    func.apply(this, args)
  }, wait)
  const debounced = function (...params: any[]) {
    if (!timeout) {
      timeout = later(params)
    } else {
      clearTimeout(timeout)
      timeout = later(params)
    }
  }
  return debounced
}
