// @ts-nocheck
const PageContacts = Vue.component('page-contacts', getPageOptions(() => {
  return {
    props: ['layoutMethods'],
    beforeMount() {
      this.layoutMethods.hideMenu();
    },
    template: `
      <div class="page-contacts">
        <v-title title="Contact Us"></v-title>
      </div>
    `,
    data() {
      return {
      };
    },
  }
}));