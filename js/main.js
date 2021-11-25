// @ts-nocheck
// global appData
const appData = {
};

// global appMethods
const appMethods = {
};

// page render
let vue;
let router;

const render = () => {
  router = new VueRouter({
    mode: 'history',
    routes,
  });

  vue = new Vue({
    router,
  }).$mount('#app');
}

// page common options
const getPageOptions = (getFn) => {
  if (typeof getFn !== 'function') {
    console.warn('getPageOptions must be a callback function!');
    return {};
  }

  const obj = getFn();

  return {
    ...obj,
    components: {
      ...components,
      ...(obj.components || {}),
    },
    methods: {
      ...appMethods,
      ...(obj.methods || {}),
    },
  }
}
