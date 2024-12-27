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
// AncestriesOptions

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
  ],
})

export default router
