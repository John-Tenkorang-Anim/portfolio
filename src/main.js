// Small progressive enhancements. The page is fully usable without this file.

/* ---------- Header: highlight the section currently in view ---------- */
const links = new Map(
  [...document.querySelectorAll('.site-nav a')].map((a) => [a.getAttribute('href').slice(1), a]),
)
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = links.get(entry.target.id)
      if (!link) return
      if (entry.isIntersecting) {
        links.forEach((a) => a.removeAttribute('aria-current'))
        link.setAttribute('aria-current', 'true')
      }
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  links.forEach((_, id) => {
    const section = document.getElementById(id)
    if (section) spy.observe(section)
  })
}

/* ---------- Footer status bar: local time in Ithaca ---------- */
const clock = document.getElementById('local-time')
if (clock) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York', timeZoneName: 'short',
  })
  const tick = () => {
    const now = new Date()
    clock.textContent = `· ${fmt.format(now)}`
    clock.dateTime = now.toISOString()
  }
  tick()
  setInterval(tick, 30_000)
}
