<script setup lang="ts">
</script>

<template>
    <h1>Victories</h1>
    <p>
        Victories measure your hero’s increasing power over the
        course of an adventure, as they overcome battles and
        other challenges. At the start of an adventure, your hero
        has 0 Victories.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Victories For Combat
        </v-card-title>
        <v-card-text>
            Each time your hero survives a combat encounter in which
            the party’s objectives are achieved, your Victories increase
            by 1. The Director can decide that a trivially easy
            encounter doesn’t increase a hero’s Victories.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Victories For Non-Combat Challenges
        </v-card-title>
        <v-card-text>
            When your hero successfully overcomes a big challenge
            that doesn’t involve combat, the Director can award you 1
            Victory. Such challenges can include things like a
            particularly complicated and deadly trap, a negotiation, a
            montage test, a complicated puzzle, or the execution of a
            clever idea that avoids a battle.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Victories Reset
        </v-card-title>
        <v-card-text>
            Whenever you finish a Respite, your Victories are converted into Experience.
        </v-card-text>
    </v-card>
</template>