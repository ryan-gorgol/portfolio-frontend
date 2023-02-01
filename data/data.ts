/* MENU */

export type MenuItem = {
  title: string,
  caption: string,
}

export type MenuItems = MenuItem[]

export const menuItems: MenuItems = [
  {
    title: 'CounterService',
    caption: 'WebApp'
  },
  {
    title: 'Formation',
    caption: 'Open Source'
  },
  {
    title: 'Bio',
    caption: 'links'
  }
]

/* HEADER */

export type HeaderContent = {
  title: string,
  subtitle: string | undefined,
  renderButton: boolean
}

/* SNACKS */

export type SnackContentType = {
  hook: string,
  bait: string
}

/* CONTENT */

export const counterServiceContent = {
  hook: 'Stand alone app to compliment companies flagship.',
  bait: 'As part of the RCC team, I interact with our user group to design and build a better webapp. This project emerged from those meetings, as a quick and practical way to help the community we serve. Visit the proof of concept, while the new C# backend is built.'
}

export const formationContent = {
  hook: 'open-source component library built with Storybook',
  bait: 'For the EventCharm webapp product, we have built a component library for use on EventCharm and other planned application interfaces. The latest component I built is the Timeline component designed to provide a custom calendar interface for event organizers. Check out the Storybook build of Formation.'
}

export const gitHubContent = {
  hook: 'I started to teach myself development to get back to building products instead of selling them.',
  bait: 'I believe collaboration fuels creativity. Count me in for a new project, I look forward to working with new teams in the future.'
}