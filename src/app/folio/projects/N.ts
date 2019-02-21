


export const linkAttrs = 'target="_blank" rel="nofollow"';
// shared accross the other projects

const rootLink = '../assets/n/';

export default {
  id: 1,
  cat: 'play',
  slug: 'n',
  intro: {
    title: 'My Portfolio in Angular',
    desc: 'Angular 7 | Typescript ',
    icon: `${rootLink}angular.svg`,
    style: {
      color: '#ffffff',
      background: 'linear-gradient(#c3002f 50%,#ffffff)',
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [
         {
        type: 'text',
        class: 'intro-text row-collapse',
        value: `
        <h3 class="header-3" >The Project</h3>
        <p>A personel portfolio site with PWA functionalites </p>
        <h3 class="header-3" >The Role</h3>
        <p>Personal project. To showcase my project works</p>
        <h3 class="header-3" >The Toolkit</h3>
        <ul>
          <li>Javascript framework = Angular 7 </li>
          <li>Built with Typescript  </li>
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
          <a href="https://github.com/Naim-bijapure/Nfolio" ${linkAttrs} >Github</a>
        </h3>
        `,
      },],
    },  {
      class: 'center ',
      content: [{
        type: 'text',
        value: `
        <p>
        This is my personel portfolio site which i built in Angular 7 to showcase my work.
        this  site have Progressive Web App features. 
       <br/>
       In this site i try to apply best css3 design principles.
       <br/>
       This site is fully responsive on both desktop as well as mobile devices.
       <br/>
       For the navigation i used angular routing 
       <br/>
       And  for animation effects i created angular animations 
       <br>
       Background animation is done using canvas       
       <br/>
       Currently this site is hosted on Github pages
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


