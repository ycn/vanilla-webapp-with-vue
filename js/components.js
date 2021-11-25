// @ts-nocheck

/**
 * Title
 */
const Title = Vue.component('v-title', {
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = `${this.title} | Diyi Trading`;
      }
    }
  },
  render: () => {},
});

const components = {
  'v-title': Title,
};