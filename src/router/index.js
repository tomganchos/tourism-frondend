import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import MaterialTechProvision from '@/components/MaterialTechProvision'
import PublicationPage from '@/components/PublicationPage'
import MethLibraryPage from '@/components/MethLibraryPage'
import AntiCorruption from '@/components/AntiCorruption'
import ContactsPage from '@/components/ContactsPage'
import Page404 from '@/components/Page404'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/material-tech-provision',
      name: 'MaterialTechProvision',
      component: MaterialTechProvision
    },
    {
      path: '/publications',
      name: 'PublicationPage',
      component: PublicationPage
    },
    {
      path: '/meth-library',
      name: 'MethLibraryPage',
      component: MethLibraryPage
    },
    {
      path: '/anti-corruption',
      name: 'AntiCorruption',
      component: AntiCorruption
    },
    {
      path: '/contacts',
      name: 'ContactsPage',
      component: ContactsPage
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
