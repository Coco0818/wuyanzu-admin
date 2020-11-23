import { SHOW_SLIDER } from '../constants/showSlider'

export default function showSlider(prevState = true, action) {
  switch (action.type) {
    case SHOW_SLIDER:
      return !action.data
    default:
      return prevState
  }
}
