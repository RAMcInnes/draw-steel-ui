<script setup lang="ts">
    import { ref } from 'vue';

    const gameIntroOptions = [
      ['What Draw Steel IS NOT', 'whatTheGameIsNot'],
      ['What Draw Steel IS', 'whatTheGameIs'],
      ['Coming from D20 Fantasy', 'ComingFromD20']
    ];
    const basicOptions = [
      ['Characteristics', 'characteristics'],
      ['Potencies', 'potencies'],
      ['Dice', 'dice'],
      ['Power Rolls', 'powerRolls'],
      ['Victories', 'victories'],
      ['Experience', 'experience'],
      ['Recoveries', 'recoveries'],
      ['Respite', 'respite'],
      ['Hero Tokens', 'heroTokens'],
      ['Misc. Rules', 'miscRules'],
      ['Echelons of Play', 'echelons']
    ];
    const makingAHeroOptions = [
      ['Your First Session', 'firstSession'],
      ['10 Step Hero Making', 'heroMaking'],
      ['Adventuring Gear', 'adventuringGear'],
      ['Changing Options', 'changingCharacterOptions'],
      ['Heroic Advancement', 'heroicAdvancement']
    ];
    const ancestriesOption = [
      ['Ancestry Overview', 'ancestriesOverview'],
    ];
    const culturesOptions = [
      ['Culture Overview', 'culturesOverview'],
      ['Language', 'culturesLanguage'],
      ['Environment', 'culturesEnvironment'],
      ['Organization', 'culturesOrganization'],
      ['Upbringing', 'culturesUpbringing'],
    ];
    const careersOptions = [
      ['Career Overview', 'careersOverview'],
    ];
    const classesOptions = [
      ['Class Overview', 'classesOverview'],
      ['Abilities', 'classesAbilities'],
      ['Conditions', 'conditions']
    ];
    const kitsOptions = [
      ['Kit Overview', 'kitsOverview'],
      ['Equipment', 'kitsEquipment'],
      ['Bonuses', 'kitsBonuses'],
      ['Signature Ability', 'kitsSignatureAbility'],
    ];
    const perksOptions = [
      ['Perk Overview', 'perksOverview'],
    ];
    const complicationsOptions = [
      ['Complication Overview', 'complicationsOverview'],
    ];
    const testsOptions = [
      ['Test Overview', 'testsOverview'],
      ['How to Make a Test', 'testsHowToMake'],
      ['Difficulty and Outcomes', 'testsDifficultyAndOutcomes'],
      ['Assist a Test', 'testsAssist'],
      ['Reactive Tests', 'testsReactive'],
      ['Group Tests', 'testsGroup'],
      ['Montage Tests', 'testsMontage'],
      ['Hide and Sneak', 'testsHideAndSneak'],
    ];
    const skillsOptions = [
      ['Skill Overview', 'skillsOverview'],
      ['Skill Groups', 'skillsGroups'],
    ];
    const combatOptions = [
      ['Combat Overview', 'combatOverview'],
      ['Combat Round', 'combatRound'],
      ['Taking a Turn', 'combatTakingATurn'],
      ['Movement', 'combatMovement'],
      ['Move Action', 'combatMoveAction'],
      ['Maneuvers', 'combatManeuvers'],
      ['Actions', 'combatActions'],
      ['Free Strikes', 'combatFreeStrikes'],
      ['Flanking', 'combatFlanking'],
      ['Cover and Concealment', 'combatCoverAndConcealment'],
      ['Damage', 'combatDamage'],
      ['Stamina', 'combatStamina'],
      ['Underwater Combat', 'combatUnderwater'],
      ['Mounted Combat', 'combatMounted'],
      ['End of Combat', 'combatEndOfCombat'],
    ];
    const negotiationOptions = [
      ['Negotiation Overview', 'negotiationOverview'],
      ['Negotiation Stats', 'negotiationStats'],
      ['Motivations and Pitfalls', 'negotiationMotivationsAndPitfalls'],
      ['Opening A Negotiation', 'negotiationOpeningANegotiation'],
      ['Uncovering Motivations', 'negotiationUncoveringMotivations'],
      ['Making Arguments', 'negotiationMakingArguments'],
      ['Response And Offer', 'negotiationResponseAndOffer'],
      ['Keep Going or Stop', 'negotiationKeepGoingOrStop'],
    ];
    const downTimeOptions = [
      ['Downtime Overview', 'downtimeOverview'],
      ['Project Roll', 'downtimeProjectRoll'],
      ['Crafting Projects', 'downtimeCraftingProjects'],
      ['Research Projects', 'downtimeResearchProjects'],
      ['Other Projects', 'downtimeOtherProjects'],
    ];
    const rewardsOptions = [
      ['Rewards Overview', 'rewardsOverview'],
      ['Found, Earned, or Crafted', 'rewardsFoundEarnedOrCrafted'],
    ];
    const titlesOptions = [
      ['Titles Overview', 'titlesOverview'],
    ];
    const renownWealthOptions = [
      ['Renown Overview', 'renownOverview'],
      ['Wealth Overview', 'wealthOverview'],
    ];

    const combinedArray = [
      gameIntroOptions,
      basicOptions,
      makingAHeroOptions,
      ancestriesOption,
      culturesOptions,
      careersOptions,
      classesOptions,
      kitsOptions,
      perksOptions,
      complicationsOptions,
      testsOptions,
      skillsOptions,
      combatOptions,
      negotiationOptions,
      downTimeOptions,
    ];

    const allSectionsArray = combinedArray.flatMap(arr => arr.map(section => section[0]));

    let navOpen = ref(null);

    let filteredSections = ref();

    function updateShownSections(searchTerm: string) {
      if (searchTerm === '') {
        filteredSections.value = undefined;
        return;
      }
      filteredSections.value = allSectionsArray.filter(section => section.toLowerCase().includes(searchTerm.toLowerCase()));
    };
</script>

<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <button @click="navOpen = !navOpen">
          <v-app-bar-nav-icon />
        </button>
      </template>

      <v-app-bar-title>Draw Steel</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer v-model="navOpen">
        <v-text-field
          label="Search Section Titles"
          density="compact"
          variant="underlined"
          hide-details="auto"
          @update:modelValue="updateShownSections"
        />
        <v-list v-if="!filteredSections" open-strategy="multiple">
          <v-list-group value="Game">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Game Intro">
              </v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in gameIntroOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Basics">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="The Basics"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in basicOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="MakingAHero">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Making A Hero"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in makingAHeroOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Ancestry">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Ancestry"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in ancestriesOption"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Culture">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Culture"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in culturesOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Careers">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Careers"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in careersOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Classes">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Classes"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in classesOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Kits">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Kits"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in kitsOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Perks">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Perks"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in perksOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Complications">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Complications"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in complicationsOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Tests">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Tests"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in testsOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Skills">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Skills"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in skillsOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Combat">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Combat"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in combatOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Negotiation">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Negotiation"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in negotiationOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Downtime Projects">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Downtime Projects"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in downTimeOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Rewards">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Rewards"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in rewardsOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="Titles">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Titles"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in titlesOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-group value="RenownWealth">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Renown & Wealth"
              ></v-list-item>
            </template>

            <v-list-item
                v-for="([title,location], i) in renownWealthOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>
        </v-list>

        <v-list v-if="filteredSections" open-strategy="multiple">
          <v-list-item
            v-for="(section, i) in filteredSections"
            :key="i"
            :title="section"
            :value="section"
            to="conditions"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
/* .v-list-group {
  --list-indent-size: 15px;
  --prepend-width: 60px;
} */
</style>
