import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
// #region GameIntroOptions imports
const WhatTheGameIsNotView = () => import('@/views/GameIntroOptions/WhatTheGameIsNotView.vue')
const WhatTheGameIsView = () => import('@/views/GameIntroOptions/WhatTheGameIsView.vue')
const ComingFromD20View = () => import('@/views/GameIntroOptions/ComingFromD20View.vue')
// #endregion
// #region BasicOptions imports
const CharacteristicsView = () => import('@/views/BasicOptions/CharacteristicsView.vue')
const PotenciesView = () => import('@/views/BasicOptions/PotenciesView.vue')
const DiceView = () => import('@/views/BasicOptions/DiceView.vue')
const PowerRollsView = () => import('@/views/BasicOptions/PowerRollsView.vue')
const HeroTokenView = () => import('@/views/BasicOptions/HeroTokenView.vue')
const VictoriesView = () => import('@/views/BasicOptions/VictoriesView.vue')
const ExperienceView = () => import('@/views/BasicOptions/ExperienceView.vue')
const RecoveriesView = () => import('@/views/BasicOptions/RecoveriesView.vue')
const RespiteView = () => import('@/views/BasicOptions/RespiteView.vue')
const MiscRulesView = () => import('@/views/BasicOptions/MiscRulesView.vue')
const EchelonsView = () => import('@/views/BasicOptions/EchelonsView.vue')
// #endregion
// #region MakingAHeroOptions imports
const FirstSessionView = () => import('@/views/MakingAHeroOptions/FirstSessionView.vue')
const HeroMakingView = () => import('@/views/MakingAHeroOptions/HeroMakingView.vue')
const AdventuringGearView = () => import('@/views/MakingAHeroOptions/AdventuringGearView.vue')
const ChangingOptionsView = () => import('@/views/MakingAHeroOptions/ChangingOptionsView.vue')
const HeroicAdvancementView = () => import('@/views/MakingAHeroOptions/HeroicAdvancementView.vue')
// #endregion
// #region AncestriesOptions imports
const AncestriesOverviewView = () => import('@/views/AncestriesOptions/AncestryOverviewView.vue')
// #endregion
// #region CulturesOptions imports
const CultureOverviewView = () => import('@/views/CulturesOptions/CultureOverviewView.vue')
const CultureLanguageView = () => import('@/views/CulturesOptions/CultureLanguageView.vue')
const CultureEnvironmentView = () => import('@/views/CulturesOptions/CultureEnvironmentView.vue')
const CultureOrganizationView = () => import('@/views/CulturesOptions/CultureOrganizationView.vue')
const CultureUpbringingView = () => import('@/views/CulturesOptions/CultureUpbringingView.vue')
// #endregion
// #region CareersOptions imports
const CareersOverviewView = () => import('@/views/CareersOptions/CareersOverviewView.vue')
// #endregion
// #region ClassesOptions imports
const ClassesOverviewView = () => import('@/views/ClassesOptions/ClassesOverviewView.vue')
const ClassesAbilitiesView = () => import('@/views/ClassesOptions/ClassesAbilitiesView.vue')
const ConditionsView = () => import('@/views/ClassesOptions/ConditionsView.vue')
// #endregion
// #region KitsOptions imports
const KitOverviewView = () => import('@/views/KitsOptions/KitsOverviewView.vue')
const KitsEquipmentView = () => import('@/views/KitsOptions/KitsEquipmentView.vue')
const KitsBonusesView = () => import('@/views/KitsOptions/KitsBonusesView.vue')
const KitsSignatureAbilityView = () => import('@/views/KitsOptions/KitsSignatureAbilityView.vue')
// #endregion
// #region PerksOptions imports
const PerksOverviewView = () => import('@/views/PerksOptions/PerksOverviewView.vue')
// #endregion
// #region ComplicationsOptions imports
const ComplicationsOverviewView = () => import('@/views/ComplicationsOptions/ComplicationsOverviewView.vue')
// #endregion
// #region TestsOptions imports
const TestsOverviewView = () => import('@/views/TestsOptions/TestsOverviewView.vue')
const TestsHowToMakeView = () => import('@/views/TestsOptions/TestsHowToMakeView.vue')
const TestsDifficultyAndOutcomesView = () => import('@/views/TestsOptions/TestsDifficultyAndOutcomesView.vue')
const TestsReactiveView = () => import('@/views/TestsOptions/TestsReactiveView.vue')
const TestsAssistView = () => import('@/views/TestsOptions/TestsAssistView.vue')
const TestsGroupView = () => import('@/views/TestsOptions/TestsGroupView.vue')
const TestsMontageView = () => import('@/views/TestsOptions/TestsMontageView.vue')
const TestsHideAndSneakView = () => import('@/views/TestsOptions/TestsHideAndSneakView.vue')
// #endregion
// #region SkillsOptions imports
const SkillsOverviewView = () => import('@/views/SkillsOptions/SkillsOverviewView.vue')
const SkillsGroupsView = () => import('@/views/SkillsOptions/SkillsGroupsView.vue')
// #endregion
// #region CombatOptions imports
const CombatOverviewView = () => import('@/views/CombatOptions/CombatOverviewView.vue')
const CombatRoundView = () => import('@/views/CombatOptions/CombatRoundView.vue')
const CombatTakeingATurnView = () => import('@/views/CombatOptions/CombatTakeingATurnView.vue')
const CombatMovementView = () => import('@/views/CombatOptions/CombatMovementView.vue')
const CombatMoveActionView = () => import('@/views/CombatOptions/CombatMoveActionView.vue')
const CombatManeuversView = () => import('@/views/CombatOptions/CombatManeuversView.vue')
const CombatActionsView = () => import('@/views/CombatOptions/CombatActionsView.vue')
const CombatFreeStrikesView = () => import('@/views/CombatOptions/CombatFreeStrikesView.vue')
const CombatFlankingView = () => import('@/views/CombatOptions/CombatFlankingView.vue')
const CombatCoverAndConcealmentView = () => import('@/views/CombatOptions/CombatCoverAndConcealmentView.vue')
const CombatDamageView = () => import('@/views/CombatOptions/CombatDamageView.vue')
const CombatStaminaView = () => import('@/views/CombatOptions/CombatStaminaView.vue')
const CombatUnderwaterView = () => import('@/views/CombatOptions/CombatUnderwaterView.vue')
const CombatMountedView = () => import('@/views/CombatOptions/CombatMountedView.vue')
const CombatEndOfCombatView = () => import('@/views/CombatOptions/CombatEndOfCombatView.vue')
// #endregion
// #region NegotiationOptions imports
const NegotiationOverviewView = () => import('@/views/NegotiationOptions/NegotiationOverviewView.vue')
const NegotiationStatsView = () => import('@/views/NegotiationOptions/NegotiationStatsView.vue')
const NegotiationMotivationsAndPitfallsView = () => import('@/views/NegotiationOptions/NegotiationMotivationsAndPitfallsView.vue')
const NegotiationOpeningANegotiationView = () => import('@/views/NegotiationOptions/NegotiationOpeningANegotiationView.vue')
const NegotiationUncoveringMotivationsView = () => import('@/views/NegotiationOptions/NegotiationUncoveringMotivationsView.vue')
const NegotiationMakingArgumentsView = () => import('@/views/NegotiationOptions/NegotiationMakingArgumentsView.vue')
const NegotiationResponseAndOfferView = () => import('@/views/NegotiationOptions/NegotiationResponseAndOfferView.vue')
const NegotiationKeepGoingOrStopView = () => import('@/views/NegotiationOptions/NegotiationKeepGoingOrStopView.vue')
// #endregion
// #region DowntimeProjectsOptions imports
const DowntimeOverviewView = () => import('@/views/DowntimeOptions/DowntimeOverviewView.vue')
const DowntimeProjectRollView = () => import('@/views/DowntimeOptions/DowntimeProjectRollView.vue')
const DowntimeCraftingProjectsView = () => import('@/views/DowntimeOptions/DowntimeCraftingProjectsView.vue')
const DowntimeResearchProjectsView = () => import('@/views/DowntimeOptions/DowntimeResearchProjectsView.vue')
const DowntimeOtherProjectsView = () => import('@/views/DowntimeOptions/DowntimeOtherProjectsView.vue')
// #endregion
// #region RewardsOptions imports
const RewardsOverviewView = () => import('@/views/RewardsOptions/RewardsOverviewView.vue')
const RewardsFoundEarnedOrCraftedView = () => import('@/views/RewardsOptions/RewardsFoundEarnedOrCraftedView.vue')
// #endregion
// #region TitlesOptions imports
const TitlesOverviewView = () => import('@/views/TitlesOptions/TitlesOverviewView.vue')
// #endregion
// #region RenownAndWealthOptions imports
const RenownOverviewView = () => import('@/views/RenownWealthOptions/RenownOverviewView.vue')
const WealthOverviewView = () => import('@/views/RenownWealthOptions/WealthOverviewView.vue')
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
