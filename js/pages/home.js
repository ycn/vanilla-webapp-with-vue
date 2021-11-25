// @ts-nocheck
const Banner = Vue.component('v-banner', {
  props: ['entity'],
  template: `
    <div class="banner-item" :class="{ nobg: !entity.bg, [entity.className]: !!entity.className }" :style="entity.bg ? { backgroundImage: 'url(' + entity.bg + ')', height: '' + entity.height + 'px' } : { height: '' + entity.height + 'px' }">
      <div v-show="!!entity.title" class="banner-title title">{{ entity.title }}</div>
      <div v-show="!!entity.desc" class="banner-desc">{{ entity.desc }}</div>
      <div class="banner-link"><router-link v-show="!!entity.link" class="button" :to="entity.link || ''">{{ entity.linkText }}</router-link></div>
    </div>
  `,
});

const PageHome = Vue.component('page-home', getPageOptions(() => {
  const pageData = {
    title: 'Home',
    banner: {
      title: 'Love is sharing every brilliant moment',
      desc: undefined,
      bg: '/img/banner.png',
      link: undefined,
      height: 928,
      className: undefined,
    },
    content: [
      {
        title: 'What We Believe',
        desc: 'Our professional brands provide forward-thinking, high quality products to care for your pets. We are committed to helping pets live healthier.',
        height: 500,
      },
      {
        title: 'Who We Are',
        desc: 'Hangzhou Diyi Trading Co., Ltd. was established in 2017 and has now developed into a company integrating international commodity import and export trade.',
        bg: '/img/p2.jpg',
        link: '/about.html',
        linkText: 'LEARN MORE',
        height: 500,
      },
      {
        title: 'Explore our Brands',
        desc: 'Hangzhou Diyi Trading Co., Ltd. has a portfolio of more than 65 high-quality brands, including Pennington, Amdro, Nylabone, Cadet, Kaytee, Aqueon, Four Paws, Farnam and K&H.',
        link: '/brands.html',
        linkText: 'LEARN MORE',
        height: 500,
      },
      {
        height: 500,
        className: 'p3',
      },
      {
        title: 'Our connection of Nature',
        desc: 'We only use natural ingredients in our premium pet food. We avoid artificial colours, flavours or preservatives on principle. We do not use ingredients that cause food sensitivities. We don’t believe in the use of fllers - we think that every ingredient should hava a nutritional and functional purpose.',
        height: 500,
      },
      {
        bg: '/img/p4.jpg',
        height: 500,
      },
    ],
  }

  return {
    props: ['layoutMethods'],
    beforeMount() {
      this.layoutMethods.hideMenu();
    },
    template: `
      <div class="page-home">
        <v-title title="Home"></v-title>
        <div class="banner">
          <v-banner :entity="pageData.banner"></v-banner>
        </div>
        <div class="covers">
          <div class="cover reverse">
            <v-banner :entity="pageData.content[0]"></v-banner>
            <v-banner :entity="pageData.content[1]"></v-banner>
          </div>
          <div class="cover p3">
            <v-banner :entity="pageData.content[2]"></v-banner>
            <v-banner :entity="pageData.content[3]"></v-banner>
          </div>
          <div class="cover reverse">
            <v-banner :entity="pageData.content[4]"></v-banner>
            <v-banner :entity="pageData.content[5]"></v-banner>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        appData,
        pageData,
      };
    },
    components: {
      'v-banner': Banner,
    },
  }
}));