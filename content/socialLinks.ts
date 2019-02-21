interface SocialLink {
  name: string;
  link: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'linkedin',
    link: '//linkedin.com/in/martinsgiberts',
    text: `
      <p>Up to date information about my work history and current position with short description of my experience at it.</p>
    `,
  },
  {
    name: 'instagram',
    link: '//instagram.com/mgiberts',
    text: `
      <p>Pictures and videos from places and events that I have been to.</p>
    `,
  },
  {
    name: 'facebook',
    link: '//facebook.com/mgiberts',
    text: `
      <p>Feel free to contact me here for a chat or invite to any tech group/event.</p>
    `,
  },
  {
    name: 'github',
    link: '//github.com/martins-giberts/martins-giberts.github.io',
    text: `
      <p>This page was built using Webpack, Babel, ES6, React, Styled-Components. It is hosted by github pages.</p>
    `,
  },
];

export default socialLinks;
