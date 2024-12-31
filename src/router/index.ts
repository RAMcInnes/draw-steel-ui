import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/BasicOptions/HomeView.vue'
// GameIntroOptions
import WhatTheGameIsView from '@/views/GameIntroOptions/WhatTheGameIsView.vue'
import WhatTheGameIsNotView from '@/views/GameIntroOptions/WhatTheGameIsNotView.vue'
import ComingFromD20View from '@/views/GameIntroOptions/ComingFromD20View.vue'
// BasicOptions
import CharacteristicsView from '@/views/BasicOptions/CharacteristicsView.vue'
import PotenciesView from '@/views/BasicOptions/PotenciesView.vue'
import DiceView from '@/views/BasicOptions/DiceView.vue'
import PowerRollsView from '@/views/BasicOptions/PowerRollsView.vue'
import HeroTokenView from '@/views/BasicOptions/HeroTokenView.vue'
import VictoriesView from '@/views/BasicOptions/VictoriesView.vue'
import ExperienceView from '@/views/BasicOptions/ExperienceView.vue'
import RecoveriesView from '@/views/BasicOptions/RecoveriesView.vue'
import RespiteView from '@/views/BasicOptions/RespiteView.vue'
import MiscRulesView from '@/views/BasicOptions/MiscRulesView.vue'
import EchelonsView from '@/views/BasicOptions/EchelonsView.vue'
// MakingAHeroOptions
import FirstSessionView from '@/views/MakingAHeroOptions/FirstSessionView.vue'
import HeroMakingView from '@/views/MakingAHeroOptions/HeroMakingView.vue'
import AdventuringGearView from '@/views/MakingAHeroOptions/AdventuringGearView.vue'
import ChangingOptionsView from '@/views/MakingAHeroOptions/ChangingOptionsView.vue'
import HeroicAdvancementView from '@/views/MakingAHeroOptions/HeroicAdvancementView.vue'
// AncestriesOptions
import AncestriesOverviewView from '@/views/AncestriesOptions/AncestriesOverviewView.vue'
import AncestryDevilView from '@/views/AncestriesOptions/AncestryDevilView.vue'
import AncestryDragonKnightView from '@/views/AncestriesOptions/AncestryDragonKnightView.vue'
import AncestryDwarfView from '@/views/AncestriesOptions/AncestryDwarfView.vue'
import AncestryWodeElfView from '@/views/AncestriesOptions/AncestryWodeElfView.vue'
import AncestryHighElfView from '@/views/AncestriesOptions/AncestryHighElfView.vue'
import AncestryHakaanView from '@/views/AncestriesOptions/AncestryHakaanView.vue'
import AncestryHumanView from '@/views/AncestriesOptions/AncestryHumanView.vue'
import AncestryMemonekView from '@/views/AncestriesOptions/AncestryMemonekView.vue'
import AncestryOrkView from '@/views/AncestriesOptions/AncestryOrkView.vue'
import AncestryPolderView from '@/views/AncestriesOptions/AncestryPolderView.vue'
import AncestryRevenantView from '@/views/AncestriesOptions/AncestryRevenantView.vue'
import AncestryTimeRaiderView from '@/views/AncestriesOptions/AncestryTimeRaiderView.vue'
// CulturesOptions
import CultureOverviewView from '@/views/CulturesOptions/CultureOverviewView.vue'
import CultureLanguageView from '@/views/CulturesOptions/CultureLanguageView.vue'
import CultureEnvironmentView from '@/views/CulturesOptions/CultureEnvironmentView.vue'
import CultureOrganizationView from '@/views/CulturesOptions/CultureOrganizationView.vue'
import CultureUpbringingView from '@/views/CulturesOptions/CultureUpbringingView.vue'
// CareersOptions
import CareersOverviewView from '@/views/CareersOptions/CareersOverviewView.vue'
import CareersAgentView from '@/views/CareersOptions/CareersAgentView.vue'
import CareersAristocratView from '@/views/CareersOptions/CareersAristocratView.vue'
import CareersArtisanView from '@/views/CareersOptions/CareersArtisanView.vue'
import CareersBeggarView from '@/views/CareersOptions/CareersBeggarView.vue'
import CareersCriminalView from '@/views/CareersOptions/CareersCriminalView.vue'
import CareersDiscipleView from '@/views/CareersOptions/CareersDiscipleView.vue'
import CareersExplorerView from '@/views/CareersOptions/CareersExplorerView.vue'
import CareersFarmerView from '@/views/CareersOptions/CareersFarmerView.vue'
import CareersGladiatorView from '@/views/CareersOptions/CareersGladiatorView.vue'
import CareersLaborerView from '@/views/CareersOptions/CareersLaborerView.vue'
import CareersMagesApprenticeView from '@/views/CareersOptions/CareersMagesApprenticeView.vue'
import CareersPerformerView from '@/views/CareersOptions/CareersPerformerView.vue'
import CareersPoliticianView from '@/views/CareersOptions/CareersPoliticianView.vue'
import CareersSageView from '@/views/CareersOptions/CareersSageView.vue'
import CareersSailorView from '@/views/CareersOptions/CareersSailorView.vue'
import CareersSoldierView from '@/views/CareersOptions/CareersSoldierView.vue'
import CareersWardenView from '@/views/CareersOptions/CareersWardenView.vue'
import CareersWatchOfficerView from '@/views/CareersOptions/CareersWatchOfficerView.vue'
// ClassesOptions
import ClassesOverviewView from '@/views/ClassesOptions/ClassesOverviewView.vue'
import ClassesAbilitiesView from '@/views/ClassesOptions/ClassesAbilitiesView.vue'
// Conditions
import ConditionsView from '@/views/ConditionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/whatTheGameIs',
      name: 'whatTheGameIs',
      component: WhatTheGameIsView,
    },
    {
      path: '/whatTheGameIsNot',
      name: 'whatTheGameIsNot',
      component: WhatTheGameIsNotView,
    },
    {
      path: '/ComingFromD20',
      name: 'comingFromD20',
      component: ComingFromD20View
    },
    {
      path: '/characteristics',
      name: 'characteristics',
      component: CharacteristicsView,
    },
    {
      path: '/potencies',
      name: 'potencies',
      component: PotenciesView,
    },
    {
      path: '/dice',
      name: 'dice',
      component: DiceView,
    },
    {
      path: '/powerRolls',
      name: 'powerRolls',
      component: PowerRollsView,
    },
    {
      path: '/heroTokens',
      name: 'heroTokens',
      component: HeroTokenView,
    },
    {
      path: '/victories',
      name: 'victories',
      component: VictoriesView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/recoveries',
      name: 'recoveries',
      component: RecoveriesView,
    },
    {
      path: '/respite',
      name: 'respite',
      component: RespiteView,
    },
    {
      path: '/miscRules',
      name: 'miscRules',
      component: MiscRulesView,
    },
    {
      path: '/echelons',
      name: 'echelons',
      component: EchelonsView,
    },
    {
      path: '/firstSession',
      name: 'firstSession',
      component: FirstSessionView,
    },
    {
      path: '/heroMaking',
      name: 'heroMaking',
      component: HeroMakingView,
    },
    {
      path: '/adventuringGear',
      name: 'adventuringGear',
      component: AdventuringGearView,
    },
    {
      path: '/changingCharacterOptions',
      name: 'changingCharacterOptions',
      component: ChangingOptionsView,
    },
    {
      path: '/heroicAdvancement',
      name: 'heroicAdvancement',
      component: HeroicAdvancementView,
    },
    {
      path: '/ancestriesOverview',
      name: 'ancestriesOverview',
      component: AncestriesOverviewView,
    },
    {
      path: '/ancestryDevil',
      name: 'ancestryDevil',
      component: AncestryDevilView,
    },
    {
      path: '/ancestryDragonKnight',
      name: 'ancestryDragonKnight',
      component: AncestryDragonKnightView,
    },
    {
      path: '/ancestryDwarf',
      name: 'ancestryDwarf',
      component: AncestryDwarfView,
    },
    {
      path: '/ancestryWodeElf',
      name: 'ancestryWodeElf',
      component: AncestryWodeElfView,
    },
    {
      path: '/ancestryHighElf',
      name: 'ancestryHighElf',
      component: AncestryHighElfView,
    },
    {
      path: '/ancestryHakaan',
      name: 'ancestryHakaan',
      component: AncestryHakaanView,
    },
    {
      path: '/ancestryHuman',
      name: 'ancestryHuman',
      component: AncestryHumanView,
    },
    {
      path: '/ancestryMemonek',
      name: 'ancestryMemonek',
      component: AncestryMemonekView,
    },
    {
      path: '/ancestryOrc',
      name: 'ancestryOrc',
      component: AncestryOrkView,
    },
    {
      path: '/ancestryPolder',
      name: 'ancestryPolder',
      component: AncestryPolderView,
    },
    {
      path: '/ancestryRevenant',
      name: 'ancestryRevenant',
      component: AncestryRevenantView,
    },
    {
      path: '/ancestryTimeRaider',
      name: 'ancestryTimeRaider',
      component: AncestryTimeRaiderView,
    },
    {
      path: '/culturesOverview',
      name: 'culturesOverview',
      component: CultureOverviewView,
    },
    {
      path: '/culturesLanguage',
      name: 'culturesLanguage',
      component: CultureLanguageView,
    },
    {
      path: '/culturesEnvironment',
      name: 'culturesEnvironment',
      component: CultureEnvironmentView,
    },
    {
      path: '/culturesOrganization',
      name: 'culturesOrganization',
      component: CultureOrganizationView,
    },
    {
      path: '/culturesUpbringing',
      name: 'culturesUpbringing',
      component: CultureUpbringingView,
    },
    {
      path: '/careersOverview',
      name: 'careersOverview',
      component: CareersOverviewView,
    },
    {
      path: '/careersAgent',
      name: 'careersAgent',
      component: CareersAgentView,
    },
    {
      path: '/careersAristocrat',
      name: 'careersAristocrat',
      component: CareersAristocratView,
    },
    {
      path: '/careersArtisan',
      name: 'careersArtisan',
      component: CareersArtisanView,
    },
    {
      path: '/careersBeggar',
      name: 'careersBeggar',
      component: CareersBeggarView,
    },
    {
      path: '/careersCriminal',
      name: 'careersCriminal',
      component: CareersCriminalView,
    },
    {
      path: '/careersDisciple',
      name: 'careersDisciple',
      component: CareersDiscipleView,
    },
    {
      path: '/careersExplorer',
      name: 'careersExplorer',
      component: CareersExplorerView,
    },
    {
      path: '/careersFarmer',
      name: 'careersFarmer',
      component: CareersFarmerView,
    },
    {
      path: '/careersGladiator',
      name: 'careersGladiator',
      component: CareersGladiatorView,
    },
    {
      path: '/careersLaborer',
      name: 'careersLaborer',
      component: CareersLaborerView,
    },
    {
      path: '/careersMagesApprentice',
      name: 'careersMagesApprentice',
      component: CareersMagesApprenticeView,
    },
    {
      path: '/careersPerformer',
      name: 'careersPerformer',
      component: CareersPerformerView,
    },
    {
      path: '/careersPolitician',
      name: 'careersPolitician',
      component: CareersPoliticianView,
    },
    {
      path: '/careersSage',
      name: 'careersSage',
      component: CareersSageView,
    },
    {
      path: '/careersSailor',
      name: 'careersSailor',
      component: CareersSailorView,
    },
    {
      path: '/careersSoldier',
      name: 'careersSoldier',
      component: CareersSoldierView,
    },
    {
      path: '/careersWarden',
      name: 'careersWarden',
      component: CareersWardenView,
    },
    {
      path: '/careersWatchOfficer',
      name: 'careersWatchOfficer',
      component: CareersWatchOfficerView,
    },
    {
      path: '/classesOverview',
      name: 'classesOverview',
      component: ClassesOverviewView,
    },
    {
      path: '/classesAbilities',
      name: 'classesAbilities',
      component: ClassesAbilitiesView,
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: ConditionsView,
    },
  ],
})

export default router
