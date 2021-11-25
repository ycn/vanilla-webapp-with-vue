// @ts-nocheck
const PageDistribution = Vue.component('page-distribution', getPageOptions(() => {
  return {
    props: ['layoutMethods'],
    beforeMount() {
      this.layoutMethods.hideMenu();
    },
    template: `
      <div class="page-distribution">
        <v-title title="Distribution"></v-title>
      </div>
    `,
    data() {
      return {
      };
    },
  }
}));