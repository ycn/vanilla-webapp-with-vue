// @ts-nocheck
const PageAbout = Vue.component('page-about', getPageOptions(() => {
  return {
    props: ['layoutMethods'],
    beforeMount() {
      this.layoutMethods.hideMenu();
    },
    template: `
      <div class="page-about">
        <v-title title="About"></v-title>
        123-about
      </div>
    `,
    data() {
      return {
      };
    },
  }
}));