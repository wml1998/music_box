/***
 * 统一出口
 */
//首页接口
import * as home from "./modules/home"
import * as album from "./modules/album"
import * as search from "./modules/search"
import * as login from "./modules/login"
export default {
    ...home,
    ...album,
    ...search,
    ...login
}