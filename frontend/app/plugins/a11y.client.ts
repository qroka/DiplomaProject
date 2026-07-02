export default defineNuxtPlugin(() => {
  const { init } = useAccessibility()
  init()
})
