<script setup lang="ts">
</script>

<template>
    <h1>Characteristics</h1>
    <p class="mx-3">
        Each creature in the game has five characteristics that represent their physical and mental prowess.
        <br>
        Each characteristic has a score that runs from −5 to +5.
        The higher a score, the more impact the creature has with
        that characteristic. The average human has a score of 0 in all
        their characteristics.
        <br>
        Characteristic scores are added to
        power rolls—the dice rolls you make whenever your
        character attempts a task with an uncertain outcome (see
        Power Rolls).
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            MIGHT
        </v-card-title>
        <v-card-text>
            Might <b>(M)</b> represents strength and brawn. A creature’s
            ability to break down doors, swing an axe, stand up during
            an earthquake, or hurl an ally across a chasm is
            determined by Might.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            AGILITY
        </v-card-title>
        <v-card-text>
            Agility <b>(A)</b> represents coordination and nimbleness. A
            creature’s ability to backflip out of danger, shoot a
            crossbow, dodge an explosion, or pluck keys from a
            guard’s belt is determined by Agility.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            REASON
        </v-card-title>
        <v-card-text>
            Reason <b>(R)</b> represents a logical mind and education. A
            creature’s ability to solve a puzzle that unlocks a door,
            recall lore about necromancy, decipher a coded message,
            or blast a foe with psionic power is determined by Reason.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            INTUITION
        </v-card-title>
        <v-card-text>
            Intuition <b>(I)</b> represents instincts and experience. A
            creature’s ability to recognize a faint sound as the
            approach of a distant rider, quickly read the tell of a
            bluffing gambler, calm a rearing horse, or track a monster
            across the tundra is determined by Intuition.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            PRESENCE
        </v-card-title>
        <v-card-text>
            Presence <b>(P)</b> represents force of personality. A creature’s
            ability to lie to a judge, convince a crowd to join a
            revolution, impress a queen at a royal banquet, or cast a
            magic spell by singing a song is determined by Presence.
        </v-card-text>
    </v-card>
</template>