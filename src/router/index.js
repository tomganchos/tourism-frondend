import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import DocumentsOfCenterPage from '@/components/DocumentsOfCenterPage'
import StructurePage from '@/components/StructurePage'
import MaterialTechProvisionPage from '@/components/MaterialTechProvisionPage'
import ReportAboutUsPage from '@/components/ReportAboutUsPage'
import PaidEducationServicesPage from '@/components/PaidEducationServicesPage'
import NormativeBasePage from '@/components/NormativeBasePage'
import CommonInformationPage from '@/components/CommonInformationPage'
import ControlPage from '@/components/ControlPage'
import EducationStandardsPage from '@/components/EducationStandardsPage'
import ScholarshipsPage from '@/components/ScholarshipsPage'
import VacanciesPage from '@/components/VacanciesPage'
import AdministrationPage from '@/components/AdministrationPage'
import PersonalPage from '@/components/PersonalPage'
import TeachingStaffPage from '@/components/TeachingStaffPage'
import LocalHistorySectionPage from '@/components/LocalHistorySectionPage'
import TourismSectionPage from '@/components/TourismSectionPage'
import MuseumSectionPage from '@/components/MuseumSectionPage'
import TripSectionPage from '@/components/TripSectionPage'
import MuseumAboutEducationPage from '@/components/MuseumAboutEducationPage'
import HostelPage from '@/components/HostelPage'
import PlansPage from '@/components/PlansPage'
import PublicationPage from '@/components/PublicationPage'
import GalleryPage from '@/components/GalleryPage'
import MethLibraryPage from '@/components/MethLibraryPage'
import AntiCorruptionPage from '@/components/AntiCorruptionPage'
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
      path: '/documents-of-center',
      name: 'DocumentsOfCenterPage',
      component: DocumentsOfCenterPage
    },
    {
      path: '/structure',
      name: 'StructurePage',
      component: StructurePage
    },
    {
      path: '/material-tech-provision',
      name: 'MaterialTechProvisionPage',
      component: MaterialTechProvisionPage
    },
    {
      path: '/report-about-us',
      name: 'ReportAboutUsPage',
      component: ReportAboutUsPage
    },
    {
      path: '/paid-education-services',
      name: 'PaidEducationServicesPage',
      component: PaidEducationServicesPage
    },
    {
      path: '/normative-base',
      name: 'NormativeBasePage',
      component: NormativeBasePage
    },
    {
      path: '/common-information',
      name: 'CommonInformationPage',
      component: CommonInformationPage
    },
    {
      path: '/control',
      name: 'ControlPage',
      component: ControlPage
    },
    {
      path: '/education-standards',
      name: 'EducationStandardsPage',
      component: EducationStandardsPage
    },
    {
      path: '/scholarships',
      name: 'ScholarshipsPage',
      component: ScholarshipsPage
    },
    {
      path: '/vacancies',
      name: 'VacanciesPage',
      component: VacanciesPage
    },
    {
      path: '/administration',
      name: 'AdministrationPage',
      component: AdministrationPage
    },
    {
      path: '/personal',
      name: 'PersonalPage',
      component: PersonalPage
    },
    {
      path: '/teaching-staff',
      name: 'TeachingStaffPage',
      component: TeachingStaffPage
    },
    {
      path: '/local-history-section',
      name: 'LocalHistorySectionPage',
      component: LocalHistorySectionPage
    },
    {
      path: '/tourism-section',
      name: 'TourismSectionPage',
      component: TourismSectionPage
    },
    {
      path: '/museum-section',
      name: 'MuseumSectionPage',
      component: MuseumSectionPage
    },
    {
      path: '/trip-section',
      name: 'TripSectionPage',
      component: TripSectionPage
    },
    {
      path: '/museum-about-education',
      name: 'MuseumAboutEducationPage',
      component: MuseumAboutEducationPage
    },
    {
      path: '/hostel',
      name: 'HostelPage',
      component: HostelPage
    },
    {
      path: '/plans',
      name: 'PlansPage',
      component: PlansPage
    },
    {
      path: '/publications',
      name: 'PublicationPage',
      component: PublicationPage
    },
    {
      path: '/gallery',
      name: 'GalleryPage',
      component: GalleryPage
    },
    {
      path: '/meth-library',
      name: 'MethLibraryPage',
      component: MethLibraryPage
    },
    {
      path: '/anti-corruption',
      name: 'AntiCorruptionPage',
      component: AntiCorruptionPage
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
