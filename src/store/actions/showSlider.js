import { SHOW_SLIDER } from '../constants/showSlider'

export const changeShowSilder = (collapsed) => ({
  type: SHOW_SLIDER,
  data: collapsed,
})
