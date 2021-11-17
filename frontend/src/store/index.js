import { createStore } from 'vuex'
import theme from './modules/theme'
import note from './modules/note'

export default createStore({
  modules: {
    theme,
    note
  }
})
