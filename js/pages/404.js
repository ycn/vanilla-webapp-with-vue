// @ts-nocheck
const Page404 = Vue.component('page-404', getPageOptions(() => {
  return {
    template: `
      <div class="page-404">
        <v-title title="Not Found"></v-title>
        <h1>NOT FOUND</h1>
      </div>
    `,
    data: () => {
      return {
      };
    },
  }
}));