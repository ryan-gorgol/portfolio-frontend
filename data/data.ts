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
    bait: [`As a proactive member of the RCC team, I actively engage with our user group to better understand their needs and work towards designing and building an improved web app. Driven by my initiative and genuine desire to help the community we serve, I identified a pressing issue during one of our meetings and quickly devised a practical solution to address it.`,

    `Initially, I constructed the app using JavaScript to create a rapid prototype, leveraging the power and flexibility of Node.js. However, after careful consideration and evaluation, I realized that the app's performance could be enhanced by using a different programming language. With my team and the company's interests in mind, I decided to rewrite the app using .NET, as it would not only improve performance but also align better with the organization's technology stack and goals.`,

    `The transition from JavaScript to .NET demonstrates my adaptability and commitment to delivering the best possible solution for both users and the company. You can explore the updated .NET version of the app by visiting the link provided.`,

    `My experience in identifying problems, finding innovative solutions, and taking the initiative to adapt and optimize those solutions to meet the needs of various stakeholders illustrates my dedication to creating exceptional digital experiences. I am confident in my ability to contribute positively to any team and project, driving measurable improvements for clients and end-users alike.`],
    buttons: [{
      title: 'visit counterservice',
      href: 'https://counterservice-client.netlify.app'
    }]
  },
  {
    title: 'Formation',
    caption: 'Open Source',
    hook: 'open-source component library built with Storybook',
    bait: [`I'm excited to share my recent work on the EventCharm web app, where I've contributed to building a robust component library. This library has been designed to streamline the user interface not only for EventCharm but also for other upcoming applications. One of the latest components I've developed is the Timeline component, specifically crafted to deliver an intuitive and user-friendly calendar interface for event organizers.`,

    `In creating this Timeline component, I was faced with a dynamic team environment that required me to adapt to new requirements swiftly. Embracing these challenges, I've showcased my ability to effectively collaborate with my team, quickly adjust to changes, and ensure that the end result aligns with the project's goals and meets the users' needs. To demonstrate the versatility and functionality of this component, I've included a Storybook build of Formation in my portfolio, which highlights the component's features and customization options.`,

    `I look forward to taking on new challenges and continuing to create innovative, inclusive, and accessible digital experiences that drive measurable improvements for clients and end-users alike.`],
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