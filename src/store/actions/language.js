// 定义创建action对象
import { CHANGE_LANGUAGE } from '../constants/language'

export const changeLanguageSync = (lang) => ({
  type: CHANGE_LANGUAGE,
  data: lang,
})
