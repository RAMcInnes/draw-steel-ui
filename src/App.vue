<script setup lang="ts">
    import { ref } from 'vue';

    const gameIntroOptions = [
      ['What Draw Steel IS NOT', 'whatTheGameIs'],
      ['What Draw Steel IS', 'whatTheGameIsNot'],
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
      // ['Heroic Resources', 'heroicResources'],
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
      ['Devil', 'ancestryDevil'],
      ['Dragon Knight', 'ancestryDragonKnight'],
      ['Dwarf', 'ancestryDwarf'],
      ['Wode Elf', 'ancestryWodeElf'],
      ['High Elf', 'ancestryHighElf'],
      ['Hakaan', 'ancestryHakaan'],
      ['Human', 'ancestryHuman'],
      ['Memonek', 'ancestryMemonek'],
      ['Orc', 'ancestryOrc'],
      ['Polder', 'ancestryPolder'],
      ['Revenant', 'ancestryRevenant'],
      ['Time Raider', 'ancestryTimeRaider'],
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
      ['Agent', 'careersAgent'],
      ['Aristocrat', 'careersAristocrat'],
      ['Artisan', 'careersArtisan'],
      ['Beggar', 'careersBeggar'],
      ['Criminal', 'careersCriminal'],
      ['Disciple', 'careersDisciple'],
      ['Explorer', 'careersExplorer'],
      ['Farmer', 'careersFarmer'],
      ['Gladiator', 'careersGladiator'],
      ['Laborer', 'careersLaborer'],
      [`Mage's Apprentice`, 'careersMagesApprentice'],
      ['Performer', 'careersPerformer'],
      ['Politician', 'careersPolitician'],
      ['Sage', 'careersSage'],
      ['Sailor', 'careersSailor'],
      ['Soldier', 'careersSoldier'],
      ['Warden', 'careersWarden'],
      ['Watch Officer', 'careersWatchOfficer'],
    ];
    const classesOptions = [
      ['Class Overview', 'classesOverview'],
      ['Abilities', 'classesAbilities']
    ];
    const kitsOptions = [
      ['Kit Overview', 'kitsOverview'],
      ['Equipment', 'kitsEquipment'],
      ['Bonuses', 'kitsBonuses'],
      ['Signature Ability', 'kitsSignatureAbility'],
    ];
    const perkOptions = [
      ['Perk Overview', 'perksOverview'],
      ['Crafting Perks', 'perksCrafting'],
      ['Exploration Perks', 'perksExploration'],
      ['Interpersonal Perks', 'perksInterpersonal'],
      ['Intrigue Perks', 'perksIntrigue'],
      ['Lore Perks', 'perksLore'],
      ['Supernatural Perks', 'perksSupernatural'],
    ];

    let navOpen = ref(null);
</script>

<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <button @click="navOpen = !navOpen">
          <v-app-bar-nav-icon>
          </v-app-bar-nav-icon>
        </button>
      </template>

      <v-app-bar-title>Draw Steel</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer v-model="navOpen">
        <v-list open-strategy="multiple">
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
                v-for="([title,location], i) in perkOptions"
                :key="i"
                :title="title"
                :value="title"
                :to="location"
              ></v-list-item>
          </v-list-group>

          <v-list-item
            title="Conditions"
            value="Conditions"
            to="conditions">
          </v-list-item>
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
