export type menuItem = {
  title: string,
  caption: string,
  href: string,
}

export type menuItems = menuItem[]

export const menuItems: menuItems = [
  {
    title: 'CounterService',
    caption: 'WebApp',
    href: '/counterservice'
  },
  {
    title: 'Formation',
    caption: 'Open Source',
    href: '/formation'
  },
  {
    title: 'GitHub',
    caption: 'ryan-gorgol',
    href: '/github'
  }
]