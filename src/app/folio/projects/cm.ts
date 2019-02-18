


export const linkAttrs = 'target="_blank" rel="nofollow"';
// shared accross the other projects

const rootLink = '../assets/cm/';

export default {
  id: 1,
  cat: 'play',
  slug: 'cm',
  intro: {
    title: 'CodeMirror android app',
    desc: 'React Native | ES6 ',
    icon: `${rootLink}cm.png`,
    style: {
      color: '#140E2A',
      background: 'linear-gradient(#344dde, #55d9e7)',
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}cm.png`,
        alt: 'Code Mirror',
      }, {
        type: 'text',
        class: 'intro-text row-collapse',
        value: `
        <h3 class="header-3" >The Project</h3>
        <p>A android app which is used for comparing syntax of different programming languages</p>
        <h3 class="header-3" >The Role</h3>
        <p>Personal project. Learning  React Native with Redux</p>
        <h3 class="header-3" >The Toolkit</h3>
        <ul>
          <li>Javascript framework = React Native</li>
          <li>Built with create-react-native-app and webpack with ES6 </li>
        </ul>
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h3 class="header-3">View source on
          <a href="https://github.com/Naim-bijapure/codemirror" ${linkAttrs} >Github</a>
        </h3>
        `,
      }, {
        type: 'text',
        class: 'text-center',
        value: `
        <h3 class="header-3">View
          <a href="https://jon-richards.com/blackjack/" ${linkAttrs} >Live Game</a>
        </h3>
        `,
      }],
    },  {
      class: 'text',
      content: [{
        type: 'text',
        value: `
        <p>My goal was to learn React Native and Redux by actually making something with it. The project was built with ES6.
        and i implement some latest features of javascript language such as spread operator, arrow functions .
        in this project i used different react native liabraries such as React naviagation to create the navigation,react file system to
        access the file system of android. 
        as well as i used the redux and react-redux liabrariy to manage the state of application  
        </p>
        

       
        `,
      }],
    }, 
      {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

