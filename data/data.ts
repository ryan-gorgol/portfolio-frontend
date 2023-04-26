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
  bait: string[]
}

/* CONTENT */

export type Button = {
  title: string,
  href: string
}

export type Buttons = Button[]

export type Content = {
  title: string,
  caption: string,
  hook: string,
  bait: string[],
  buttons: Buttons
}

export type Contents = Content[]

export const content: Contents = [
  {
    title: 'Counter Service',
    caption: 'WebApp',
    hook: 'Stand alone app to compliment companies flagship.',
    bait: ['As part of the RCC team, I interact with our user group to design and build a better webapp. This project emerged from those meetings, as a quick and practical way to help the community we serve. Visit the proof of concept, while the app is rebuilt using .NET'],
    buttons: [{
      title: 'visit counterservice',
      href: 'https://counterservice-client.netlify.app'
    }]
  },
  {
    title: 'Formation',
    caption: 'Open Source',
    hook: 'open-source component library built with Storybook',
    bait: ['For the EventCharm webapp product, we have built a component library for use on EventCharm and other planned application interfaces. The latest component I built is the Timeline component designed to provide a custom calendar interface for event organizers. Check out the Storybook build of Formation.'],
    buttons: [{
      title: 'VISIT FORMATION',
      href: 'https://main--formation-ui.netlify.app/?path=/story/advanced-input-timeline--activities'
    }]
  },
  {
    title: 'Bio',
    caption: 'links',
    hook: 'I started to teach myself development to get back to building products instead of selling them.',
    bait: [`Hello! My name is Ryan Gorgol, and I have a passion for designing and developing products on the web. With over 2 years of web development experience and 13+ years in product design, customer service, process management, and sales, I've honed my skills in various roles and industries. My journey began with a focus on product design, leading me to excel in LEAN environments and thrive in team-focused, fast-paced collaborations.`,

    `Fast-forward to today, I'm currently working remotely as a Product Developer at Reliable Collaboration Company. I've led initiatives to diagnose user needs through research and communication, contributing to the development and scalability of flagship products like EventCharm. I've gained experience in gathering business requirements, creating product visions, and strategically planning for product development by working closely with stakeholders.`,

    `Recently, I've been focusing on enhancing UI design using tools like Figma and refining React components for acceptance testing, all while following best practices. I'm eager to continue building accessible, inclusive products and digital experiences that create measurable improvements and deliver value to clients.`],
    buttons: [{
      title: 'VISIT GITHUB',
      href: 'https://github.com/ryan-gorgol'
    },
    {
      title: 'VISIT LINKEDIN',
      href: 'https://www.linkedin.com/in/ryan-gorgol'
    }]
  }
]