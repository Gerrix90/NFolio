


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
      class: 'flex-reverse',
      style: {
        // background: `url(${rootLink}bg.svg) right/cover`,
        color: '#3f51b5',
        height:'1150px',
      },
      content: [
        {
        type: 'text',
        class: 'intro-text',
        value: `
        <h2 class="header-2"  >Code Mirror</h2>
        <p>Android app</p>
        <h4 class="header-4" >The Role</h4>
        <p>personal project. Learning React Native and Redux</p>
        <h4 class="header-4" >The Toolkit</h4>
        <p>React Native |Redux | ES6</p>
        
        <h4 class="header-4" >Use </h4>
        <p>This App is used for learn the basics of 9 programming languages by comparing the syntax of 2 languages with each other.  </p>
        <h4 class="header-4" >Download <a class="match-content" href="https://play.google.com/store/apps/details?id=com.codemirror" ${linkAttrs} >App</a></h4>
        `,
      }, {
        type: 'image',
        height: '130%',
        class: 'image-shadow',
        value: `${rootLink}cm-ss-2.png`,
        alt: 'screen 2',
      }]
    }, {
      class:'text-row row-collapse',
      style: {
        color: '#4c0f11',
        backgroundColor:'#90b4f7',
        height:'1150px'
      },
      content: [
     
        {
        type: 'text',
        // class: 'intro-text',
        value: `
       <p clase="header-3">My goal was to learn React Native and Redux by actually making something with it. The project was built with ES6,
        and I used a number of modern JavaScript features such as the
        <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator" ${linkAttrs} >
        spread operator</a>,
        <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" ${linkAttrs} >
        arrow functions</a> and
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" ${linkAttrs} >
        promises</a>.
        For backwards compatability I also used webpack with Babel</p><br/>
        <p>for the UI i used Native Base libray and to create the  Navigation i used react-native-navigation library to create different screen views</p> 
        <p>And for the state Management i used Redux. As well as in this project i used different libraries of React Native such as React-native-fs
         to access the file system of the android,Redux-thunk,react-native-vector-icon . 
        </p>
        <h4 class="header-4" >View <a class="match-content" href="https://github.com/Naim-Bijapure/CodeMirror" ${linkAttrs} >Source</a></h4>
        `,
      }, {
        type: 'image',
        height: '100%',
        class: 'image-shadow',
        value: `${rootLink}cm-ss-1.png`,
        alt: 'screen2',
      }]
    }, 

      {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

