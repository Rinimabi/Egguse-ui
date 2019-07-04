import { get, post } from '../api/utils'

//测试接口
export const getHello = params => { return get('helloGet', params); }
export const postHello = params => { return post('helloPost', params); }