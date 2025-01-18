import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/BasicOptions/HomeView.vue'
// #region GameIntroOptions imports
import WhatTheGameIsNotView from '@/views/GameIntroOptions/WhatTheGameIsNotView.vue'
import WhatTheGameIsView from '@/views/GameIntroOptions/WhatTheGameIsView.vue'
import ComingFromD20View from '@/views/GameIntroOptions/ComingFromD20View.vue'
// #endregion
// #region BasicOptions imports
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
// #endregion
// #region MakingAHeroOptions imports
import FirstSessionView from '@/views/MakingAHeroOptions/FirstSessionView.vue'
import HeroMakingView from '@/views/MakingAHeroOptions/HeroMakingView.vue'
import AdventuringGearView from '@/views/MakingAHeroOptions/AdventuringGearView.vue'
import ChangingOptionsView from '@/views/MakingAHeroOptions/ChangingOptionsView.vue'
import HeroicAdvancementView from '@/views/MakingAHeroOptions/HeroicAdvancementView.vue'
// #endregion
// #region AncestriesOptions imports
import AncestriesOverviewView from '@/views/AncestriesOptions/AncestryOverviewView.vue'
// #endregion
// #region CulturesOptions imports
import CultureOverviewView from '@/views/CulturesOptions/CultureOverviewView.vue'
import CultureLanguageView from '@/views/CulturesOptions/CultureLanguageView.vue'
import CultureEnvironmentView from '@/views/CulturesOptions/CultureEnvironmentView.vue'
import CultureOrganizationView from '@/views/CulturesOptions/CultureOrganizationView.vue'
import CultureUpbringingView from '@/views/CulturesOptions/CultureUpbringingView.vue'
// #endregion
// #region CareersOptions imports
import CareersOverviewView from '@/views/CareersOptions/CareersOverviewView.vue'
// #endregion
// #region ClassesOptions imports
import ClassesOverviewView from '@/views/ClassesOptions/ClassesOverviewView.vue'
import ClassesAbilitiesView from '@/views/ClassesOptions/ClassesAbilitiesView.vue'
import ConditionsView from '@/views/ConditionsView.vue'
// #endregion
// #region KitsOptions imports
import KitOverviewView from '@/views/KitsOptions/KitsOverviewView.vue'
import KitsEquipmentView from '@/views/KitsOptions/KitsEquipmentView.vue'
import KitsBonusesView from '@/views/KitsOptions/KitsBonusesView.vue'
import KitsSignatureAbilityView from '@/views/KitsOptions/KitsSignatureAbilityView.vue'
// #endregion
// #region PerksOptions imports
import PerksOverviewView from '@/views/PerksOptions/PerksOverviewView.vue'
// #endregion
// #region ComplicationsOptions imports
import ComplicationsOverviewView from '@/views/ComplicationsOptions/ComplicationsOverviewView.vue'
// #endregion
// #region TestsOptions imports
import TestsOverviewView from '@/views/TestsOptions/TestsOverviewView.vue'
import TestsHowToMakeView from '@/views/TestsOptions/TestsHowToMakeView.vue'
import TestsDifficultyAndOutcomesView from '@/views/TestsOptions/TestsDifficultyAndOutcomesView.vue'
import TestsReactiveView from '@/views/TestsOptions/TestsReactiveView.vue'
import TestsAssistView from '@/views/TestsOptions/TestsAssistView.vue'
import TestsGroupView from '@/views/TestsOptions/TestsGroupView.vue'
import TestsMontageView from '@/views/TestsOptions/TestsMontageView.vue'
import TestsHideAndSneakView from '@/views/TestsOptions/TestsHideAndSneakView.vue'
// #endregion
// #region SkillsOptions imports
import SkillsOverviewView from '@/views/SkillsOptions/SkillsOverviewView.vue'
import SkillsGroupsView from '@/views/SkillsOptions/SkillsGroupsView.vue'
// #endregion
// #region CombatOptions imports
import CombatOverviewView from '@/views/CombatOptions/CombatOverviewView.vue'
import CombatRoundView from '@/views/CombatOptions/CombatRoundView.vue'
import CombatTakeingATurnView from '@/views/CombatOptions/CombatTakeingATurnView.vue'
import CombatMovementView from '@/views/CombatOptions/CombatMovementView.vue'
import CombatMoveActionView from '@/views/CombatOptions/CombatMoveActionView.vue'
import CombatManeuversView from '@/views/CombatOptions/CombatManeuversView.vue'
import CombatActionsView from '@/views/CombatOptions/CombatActionsView.vue'
import CombatFreeStrikesView from '@/views/CombatOptions/CombatFreeStrikesView.vue'
import CombatFlankingView from '@/views/CombatOptions/CombatFlankingView.vue'
import CombatCoverAndConcealmentView from '@/views/CombatOptions/CombatCoverAndConcealmentView.vue'
import CombatDamageView from '@/views/CombatOptions/CombatDamageView.vue'
import CombatStaminaView from '@/views/CombatOptions/CombatStaminaView.vue'
import CombatUnderwaterView from '@/views/CombatOptions/CombatUnderwaterView.vue'
import CombatMountedView from '@/views/CombatOptions/CombatMountedView.vue'
import CombatEndOfCombatView from '@/views/CombatOptions/CombatEndOfCombatView.vue'
// #endregion
// #region NegotiationOptions imports
import NegotiationOverviewView from '@/views/NegotiationOptions/NegotiationOverviewView.vue'
import NegotiationStatsView from '@/views/NegotiationOptions/NegotiationStatsView.vue'
import NegotiationMotivationsAndPitfallsView from '@/views/NegotiationOptions/NegotiationMotivationsAndPitfallsView.vue'
import NegotiationOpeningANegotiationView from '@/views/NegotiationOptions/NegotiationOpeningANegotiationView.vue'
import NegotiationUncoveringMotivationsView from '@/views/NegotiationOptions/NegotiationUncoveringMotivationsView.vue'
import NegotiationMakingArgumentsView from '@/views/NegotiationOptions/NegotiationMakingArgumentsView.vue'
import NegotiationResponseAndOfferView from '@/views/NegotiationOptions/NegotiationResponseAndOfferView.vue'
import NegotiationKeepGoingOrStopView from '@/views/NegotiationOptions/NegotiationKeepGoingOrStopView.vue'
// #endregion
// #region DowntimeProjectsOptions imports
import DowntimeOverviewView from '@/views/DowntimeOptions/DowntimeOverviewView.vue'
import DowntimeProjectRollView from '@/views/DowntimeOptions/DowntimeProjectRollView.vue'
import DowntimeCraftingProjectsView from '@/views/DowntimeOptions/DowntimeCraftingProjectsView.vue'
import DowntimeResearchProjectsView from '@/views/DowntimeOptions/DowntimeResearchProjectsView.vue'
import DowntimeOtherProjectsView from '@/views/DowntimeOptions/DowntimeOtherProjectsView.vue'
// #endregion
// #region RewardsOptions imports
import RewardsOverviewView from '@/views/RewardsOptions/RewardsOverviewView.vue'
import RewardsFoundEarnedOrCraftedView from '@/views/RewardsOptions/RewardsFoundEarnedOrCraftedView.vue'
// #endregion
// #region TitlesOptions imports
import TitlesOverviewView from '@/views/TitlesOptions/TitlesOverviewView.vue'
// #endregion
// #region RenownAndWealthOptions imports
import RenownOverviewView from '@/views/RenownWealthOptions/RenownOverviewView.vue'
import WealthOverviewView from '@/views/RenownWealthOptions/WealthOverviewView.vue'
// #endregion

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // #region GameIntroOptions
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
    // #endregion
    // #region BasicOptions
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
    // #endregion
    // #region MakingAHeroOptions
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
    // #endregion
    // #region Ancestries
    {
      path: '/ancestriesOverview',
      name: 'ancestriesOverview',
      component: AncestriesOverviewView,
    },
    // #endregion
    // #region Cultures
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
    // #endregion
    // #region Careers
    {
      path: '/careersOverview',
      name: 'careersOverview',
      component: CareersOverviewView,
    },
    // #endregion
    // #region Classes
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
    // #endregion
    // #region Kits
    {
      path: '/kitsOverview',
      name: 'kitsOverview',
      component: KitOverviewView,
    },
    {
      path: '/kitsEquipment',
      name: 'kitsEquipment',
      component: KitsEquipmentView,
    },
    {
      path: '/kitsBonuses',
      name: 'kitsBonuses',
      component: KitsBonusesView,
    },
    {
      path: '/kitsSignatureAbility',
      name: 'kitsSignatureAbility',
      component: KitsSignatureAbilityView,
    },
    // #endregion
    // #region Perks
    {
      path: '/perksOverview',
      name: 'perksOverview',
      component: PerksOverviewView,
    },
    // #endregion
    // #region Complications
    {
      path: '/complicationsOverview',
      name: 'complicationsOverview',
      component: ComplicationsOverviewView,
    },
    // #endregion
    // #region Tests
    {
      path: '/testsOverview',
      name: 'testsOverview',
      component: TestsOverviewView,
    },
    {
      path: '/testsHowToMake',
      name: 'testsHowToMake',
      component: TestsHowToMakeView,
    },
    {
      path: '/testsDifficultyAndOutcomes',
      name: 'testsDifficultyAndOutcomes',
      component: TestsDifficultyAndOutcomesView,
    },
    {
      path: '/testsReactive',
      name: 'testsReactive',
      component: TestsReactiveView,
    },
    {
      path: '/testsAssist',
      name: 'testsAssist',
      component: TestsAssistView,
    },
    {
      path: '/testsGroup',
      name: 'testsGroup',
      component: TestsGroupView,
    },
    {
      path: '/testsMontage',
      name: 'testsMontage',
      component: TestsMontageView,
    },
    {
      path: '/testsHideAndSneak',
      name: 'testsHideAndSneak',
      component: TestsHideAndSneakView,
    },
    // #endregion
    // #region Skills
    {
      path: '/skillsOverview',
      name: 'skillsOverview',
      component: SkillsOverviewView,
    },
    {
      path: '/skillsGroups',
      name: 'skillsGroups',
      component: SkillsGroupsView,
    },
    // #endregion
    // #region Combat
    {
      path: '/combatOverview',
      name: 'combatOverview',
      component: CombatOverviewView,
    },
    {
      path: '/combatRound',
      name: 'combatRound',
      component: CombatRoundView,
    },
    {
      path: '/combatTakingATurn',
      name: 'combatTakingATurn',
      component: CombatTakeingATurnView,
    },
    {
      path: '/combatMovement',
      name: 'combatMOvement',
      component: CombatMovementView,
    },
    {
      path: '/combatMoveAction',
      name: 'combatMoveAction',
      component: CombatMoveActionView,
    },
    {
      path: '/combatManeuvers',
      name: 'combatManeuvers',
      component: CombatManeuversView,
    },
    {
      path: '/combatActions',
      name: 'combatActions',
      component: CombatActionsView,
    },
    {
      path: '/combatFreeStrikes',
      name: 'combatFreeStrikes',
      component: CombatFreeStrikesView,
    },
    {
      path: '/combatFlanking',
      name: 'combatFlanking',
      component: CombatFlankingView,
    },
    {
      path: '/combatCoverAndConcealment',
      name: 'combatCoverAndConcealment',
      component: CombatCoverAndConcealmentView,
    },
    {
      path: '/combatDamage',
      name: 'combatDamage',
      component: CombatDamageView,
    },
    {
      path: '/combatStamina',
      name: 'combatStamina',
      component: CombatStaminaView,
    },
    {
      path: '/combatUnderwater',
      name: 'combatUnderwater',
      component: CombatUnderwaterView,
    },
    {
      path: '/combatMounted',
      name: 'combatMounted',
      component: CombatMountedView,
    },
    {
      path: '/combatEndOfCombat',
      name: 'combatEndOfCombat',
      component: CombatEndOfCombatView,
    },
    // #endregion
    // #region Negotiation
    {
      path: '/negotiationOverview',
      name: 'negotiationOverview',
      component: NegotiationOverviewView,
    },
    {
      path: '/negotiationStats',
      name: 'negotiationStats',
      component: NegotiationStatsView,
    },
    {
      path: '/negotiationMotivationsAndPitfalls',
      name: 'negotiationMotivationsAndPitfalls',
      component: NegotiationMotivationsAndPitfallsView,
    },
    {
      path: '/negotiationOpeningANegotiation',
      name: 'negotiationOpeningANegotiation',
      component: NegotiationOpeningANegotiationView,
    },
    {
      path: '/negotiationUncoveringMotivations',
      name: 'negotiationUncoveringMotivations',
      component: NegotiationUncoveringMotivationsView,
    },
    {
      path: '/negotiationMakingArguments',
      name: 'negotiationMakingArguments',
      component: NegotiationMakingArgumentsView,
    },
    {
      path: '/negotiationResponseAndOffer',
      name: 'negotiationResponseAndOffer',
      component: NegotiationResponseAndOfferView,
    },
    {
      path: '/negotiationKeepGoingOrStop',
      name: 'negotiationKeepGoingOrStop',
      component: NegotiationKeepGoingOrStopView,
    },
    // #endregion
    // #region Downtime Projects
    {
      path: '/downtimeOverview',
      name: 'downtimeOverview',
      component: DowntimeOverviewView,
    },
    {
      path: '/downtimeProjectRoll',
      name: 'downtimeProjectRoll',
      component: DowntimeProjectRollView,
    },
    {
      path: '/downtimeCraftingProjects',
      name: 'downtimeCraftingProjects',
      component: DowntimeCraftingProjectsView,
    },
    {
      path: '/downtimeResearchProjects',
      name: 'downtimeResearchProjects',
      component: DowntimeResearchProjectsView,
    },
    {
      path: '/downtimeOtherProjects',
      name: 'downtimeOtherProjects',
      component: DowntimeOtherProjectsView,
    },
    // #endregion
    // #region Rewards
    {
      path: '/rewardsOverview',
      name: 'rewardsOverview',
      component: RewardsOverviewView,
    },
    {
      path: '/rewardsFoundEarnedOrCrafted',
      name: 'rewardsFoundEarnedOrCrafted',
      component: RewardsFoundEarnedOrCraftedView,
    },
    // #endregion
    // #region Titles
    {
      path: '/titlesOverview',
      name: 'titlesOverview',
      component: TitlesOverviewView,
    },
    // #endregion
    // #region Renown & Wealth
    {
      path: '/renownOverview',
      name: 'renownOverview',
      component: RenownOverviewView,
    },
    {
      path: '/wealthOverview',
      name: 'wealthOverview',
      component: WealthOverviewView,
    },
    // #endregion
  ],
})

export default router
