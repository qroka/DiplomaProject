/** Shared open state for portal search (header icon + mobile drawer entry). */
export function usePortalSearch() {
  const open = useState('portal-search-open', () => false)

  function openSearch() {
    open.value = true
  }

  function closeSearch() {
    open.value = false
  }

  return { open, openSearch, closeSearch }
}
