<script setup lang="ts">
</script>

<template>
    <h1>Assist a Test</h1>
    <p class="mx-3">
        You can attempt to assist another creature with a test they
        make, provided you have a skill that applies to the test, the
        other creature isn’t using that same skill on the test, and
        you can describe how your character helps to the
        Director’s satisfaction. In other words, your attempt to
        help has to make sense, and you have to bring some useful
        expertise to the table. Helping another creature sneak by
        shouting encouragement at them isn’t going to make them
        stealthier.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            How to Assist
        </v-card-title>
        <v-card-text>
            When you attempt to assist another creature, make an test
            using the skill you choose, and with a characteristic chosen
            by the Director based on the action you take to help. The
            outcome of that test determines the bonus applied to the
            test you’re assisting:
            <br>
            <br>• <b>11 or lower</b>: You get in the way or make things worse.
            The creature takes a bane on their test.
            <br>• <b>12–16</b>: Your help grants the other creature an edge on
            their test.
            <br>• <b>17+</b>: Your help gives the other creature a double edge on
            their test.
            <br><br>
            For example, if you want to use the Flirt skill to help
            another hero pick a jailor’s pocket, the Director might ask
            you to make a Presence test using Flirt. The outcome of
            that test determines the bonus you provide to the other
            hero’s Agility test to pick the pocket.
        </v-card-text>
    </v-card>
</template>