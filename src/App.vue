<script setup lang="ts">
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
      ['Overview', 'ancestriesOverview'],
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
      ['Overview', 'culturesOverview'],
      ['Language', 'culturesLanguage'],
      ['Environment', 'culturesEnvironment'],
      ['Organization', 'culturesOrganization'],
      ['Upbringing', 'culturesUpbringing'],
    ]
</script>

<template>
  <v-app>
    <v-main>
      <v-navigation-drawer permanent >
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

          <v-list-group value="Ancestries">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                title="Ancestries"
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

          <v-list-group value="Cultures">
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
