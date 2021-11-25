// @ts-nocheck
const routes = [
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        name: 'Home',
        path: '',
        component: PageHome,
      },
      {
        name: 'About',
        path: 'about.html',
        component: PageAbout,
      },
      {
        name: 'Contact Us',
        path: 'contacts.html',
        component: PageContacts,
      },
      {
        name: 'Distribution',
        path: 'distribution.html',
        component: PageDistribution,
      },
      {
        name: 'Brands',
        path: 'brands.html',
        component: PageBrands,
      },
      {
        name: 'Brand',
        path: 'brand/:id.html',
        component: PageBrandDetail,
      },
      { 
        name: 'NotFound',
        path: '/:catchAll(.*)', 
        component: Page404,
      }
    ],
  },
];