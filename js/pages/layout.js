// @ts-nocheck
const PageLayout = Vue.component('page-layout', getPageOptions(() => {
  const pageData = {
    navs: [
      {
        name: 'ABOUT',
        path: '/about.html',
      },
      {
        name: 'BRANDS',
        path: '/brands.html',
      },
      {
        name: 'DISTRIBUTION',
        path: '/distribution.html',
      },
      {
        name: 'CONTACT US',
        path: '/contacts.html',
      },
    ],
    copyright: `©${new Date().getFullYear()} Hangzhou Diyi Trading Co., Ltd. All rights reserved. `,
    // menu visible on top bar
    menuVisible: false,
  }

  const methods = {
    showMenu: () => {
      pageData.menuVisible = true;
    },
    hideMenu: () => {
      pageData.menuVisible = false;
    },
  }

  return {
    template: `
      <div class="container">
        <div class="header">
          <div class="logo">
            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="116 94 113 100">
                <path fill="currentColor" d="M172.73 94.2s11.11.12 16.39.86 22.53 1.75 29.94 19.18c4.53 10.86 4.44 28.72 3.57 44.05s-6.71 27.24-20.39 32.84c-13.68 5.6-43.27 2.55-45.78 2.66-2.5-.7-14.17-.54-23.27-10.49-5.75-6.32-7.14-13.33-7.14-13.33s-2.61-14.4-2.5-25.7 1.6-25.27 5.8-33.46c4.58-8.24 13.79-15.1 32.49-16.22l10.89-.39z"/>
                <path fill="#fff" d="M171.6 160.68h-2.63c-.83 0-1.5-.67-1.5-1.5v-27.44c0-.83.67-1.5 1.5-1.5h2.63c.83 0 1.5.67 1.5 1.5v27.44c-.01.83-.68 1.5-1.5 1.5zm37.45.08h-2.63c-.83 0-1.5-.67-1.5-1.5v-27.44c0-.83.67-1.5 1.5-1.5h2.63c.83 0 1.5.67 1.5 1.5v27.44c0 .83-.67 1.5-1.5 1.5zm-30.59-30.31s1.35-.66 2.27.03c.5.09 2.35 2.66 2.35 2.66l5.53 7.74s.41.47.65.47.35-.11.35-.11.33-.28.57-.68c.24-.4 3.09-4.54 3.09-4.54l3.06-4.56s1.45-2.24 3.77-.74c2.15 1.84.82 3.73-.5 5.46-1.32 1.72-5.99 8.62-5.99 8.62l-1.16 1.68s-.71 1.38-.67 2.62l.03 8.39s.07 2.75-2.13 3.08c-2.2.33-2.82-1.27-2.82-1.27s-.48-.58-.37-2.82v-8.29s.1-1.15-1.06-2.81c0 0-1.8-2.46-4.15-5.31l-3.8-5.19s-1.25-1.68-.4-3.19c.46-.78 1.38-1.24 1.38-1.24zm-38.68-.21h7.63s4.84-.05 6.83.87c0 0 3.89.99 6.34 5.49 2.46 4.5 2.14 9.62 2.14 9.62s.26 8.59-6.73 12.97c-1.74 1.14-4.11 1.33-4.11 1.33l-1.92.1h-9.49s-2.1.05-2.86-.58-.83-1.43-.83-1.43-.17-.88-.16-1.8c.01-.91 0-13.27 0-13.27v-10s-.01-1.31.56-2.19c.57-.87 1.68-1 1.68-1l.92-.11z"/>
                <path fill="currentColor" d="m145.27 135.47 5.25.07s3.26.09 4.66 3.23c1.64 2.99 2.74 7.37.8 11.91 0 0-1.41 4.05-4.45 4.62-3.04.57-8.46.28-8.46.28s-.87-.02-.87-1.15v-17.82s-.05-1.11 1.17-1.15c1.22-.05 1.8 0 1.8 0l.1.01z"/>
              </svg>       
            </a>
          </div>
          <div class="nav">
            <div class="action hide">
              <svg class="menu-icon" v-show="!pageData.menuVisible" v-on:click="showMenu" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M64 64h896v128H64V64z m0 768h896v128H64v-128z m0-384h896v128H64V448z" fill="currentColor"></path></svg>
              <svg class="close-icon" v-show="pageData.menuVisible" v-on:click="hideMenu" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M940.8 207.530667L818.602667 85.333333l-305.493334 305.493334L207.616 85.333333 85.333333 207.530667l305.493334 305.493333L85.333333 818.517333l122.282667 122.282667 305.493333-305.493333 305.493334 305.493333 122.197333-122.282667-305.493333-305.493333z" fill="currentColor"></path></svg>        
            </div>
            <div :class="{ navList: true, active: pageData.menuVisible }">
              <router-link
                v-for="item in pageData.navs"
                :key="item.name"
                :to="item.path"
                :class="{ active: item.active, nowrap: true }"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="content">
          <router-view :layoutMethods="methods"></router-view>
        </div>
        <div class="footer">
          <div class="copyright nowrap">{{ pageData.copyright }}</div>
        </div>
      </div>
    `,
    data() {
      return {
        appData,
        pageData,
        methods,
      };
    },
    methods,
  }
}));