// @ts-nocheck
const PageBrandDetail = Vue.component('page-brand-detail', getPageOptions(() => {
  return {
    props: ['layoutMethods'],
    beforeMount() {
      this.layoutMethods.hideMenu();
    },
    template: `
      <div class="page-brand-detail">
        <v-title title="BrandDetail"></v-title>
      </div>
    `,
    data() {
      return {
      };
    },
  }
}));