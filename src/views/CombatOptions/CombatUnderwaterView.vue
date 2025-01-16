<script setup lang="ts">
</script>

<template>
    <h1>Underwater Combat</h1>
    <p class="mx-3">
        If a creature is fully submerged in water, they have fire
        immunity 5 and lightning weakness 5. If their speed
        doesn’t have the Swim keyword, all their power rolls take
        a bane.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Suffocating
        </v-card-title>
        <v-card-text>
            <b>During combat or under similarly stressful conditions, you
            can hold your breath for a number of rounds equal to your
            Might score (minimum 1 round).</b> At the end of each round
            after that, you take 1d6 damage while holding your breath.
            <br><br>
            <b>Out of combat, you can hold your breath for a number of
            minutes equal to your Might score.</b> Being unable to
            breathe after that time counts as a stressful condition,
            causing you to run out of air as above.
        </v-card-text>
    </v-card>
</template>