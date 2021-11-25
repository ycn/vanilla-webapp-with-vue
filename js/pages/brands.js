// @ts-nocheck
const PageBrands = Vue.component('page-brands', getPageOptions(() => {
  return {
    props: ['layoutMethods'],
    beforeMount() {
      this.layoutMethods.hideMenu();
    },
    template: `
      <div class="page-brands">
        <v-title title="Brands"></v-title>
      </div>
    `,
    data() {
      return {
      };
    },
  }
}));