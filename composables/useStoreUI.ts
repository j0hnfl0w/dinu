import { acceptHMRUpdate, defineStore } from 'pinia'
import {
  useDocumentVisibility,
  useFps,
  useMouse,
  useWindowFocus,
  useWindowSize,
} from '@vueuse/core'

export const useStoreUI = defineStore('ui', () => {
  const showMenu = ref(false)
  const headerGradient = ref(false)

  const fps = useFps()
  const { x, y } = useMouse()
  const { width, height } = useWindowSize()
  const appFocused = useWindowFocus()
  const appVisible = useDocumentVisibility()

  const sm = computed(() => width.value <= 768)
  const gtesm = computed(() => width.value > 0)
  const gtsm = computed(() => width.value > 768)

  const md = computed(() => width.value > 768 && width.value <= 1024)
  const gtemd = computed(() => width.value > 768)
  const gtmd = computed(() => width.value > 1024)

  const lg = computed(() => width.value > 1024 && width.value <= 1280)
  const gtelg = computed(() => width.value > 1024)
  const gtlg = computed(() => width.value > 1280)

  const xl = computed(() => width.value > 1280 && width.value <= 1536)
  const xl2 = computed(() => width.value > 1536)

  return {
    showMenu,
    headerGradient,
    fps,
    x,
    y,
    width,
    height,
    appFocused,
    appVisible,
    sm,
    gtesm,
    gtsm,
    md,
    gtemd,
    gtmd,
    lg,
    gtelg,
    gtlg,
    xl,
    xl2,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStoreUI, import.meta.hot))
