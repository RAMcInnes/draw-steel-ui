<script setup lang="ts">
</script>

<template>
    <h1>Group Tests</h1>
    <p class="mx-3">
        Whenever two or more heroes attempt to overcome a
        single, simple task together that calls for them to make the
        same test, the Director can call for a group test.
        <br><br>
        For example, if several heroes are all attempting to climb the
        outside of a tower at the same time, giving each other
        boosts and advice, they could be asked to make a Might
        group test. If a group of heroes attempt to sneak by a
        sleeping ogre, they might make an Agility group test.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Group Test Difficulty
        </v-card-title>
        <v-card-text>
            The Director determines the difficulty of a group test the
            same way they do for individual tests. <b>Group tests can be
            easy, medium, or hard.</b>
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Making A Group Test
        </v-card-title>
        <v-card-text>
            Each hero participating in the group test makes the test
            individually as usual, but the Director waits until all the
            tests have been made to interpret the results. A hero who
            is participating in the group test can’t assist another hero
            participating in the test.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Group Test Outcome
        </v-card-title>
        <v-card-text>
            When interpreting the outcome of a group test, the
            Director first determines if the task succeeded or not
            before figuring out rewards and consequences. <b>If half or
            more of the heroes making the group test succeed, then
            the group test succeeds. Otherwise, the group test fails.</b>
            <br><br>
            If the heroes succeeded and half or more of them obtained
            a reward from the test, the Director gives the group a
            collective reward and ignores any consequences incurred
            in the test. This collective reward should be equivalent to
            earning two individual rewards. In fact, it could be two
            consumable items, juicy pieces of information, or hero
            tokens. However, it could also be something more tailored
            to the task. For instance, if the heroes earn a collective
            reward while sneaking through the camp of an enemy
            army, the Director might allow them to sabotage a bunch
            of war engines or steal a few horses on their way out.
            <br><br>
            If the heroes failed the group test and more than half of
            them incurred a consequence as a result, the Director
            gives the group a collective consequence and ignores any
            earned rewards. This collective consequence should affect
            everyone. An easy option is for the stress of failing the test
            to cause each hero to take a bane on their next power roll
            or for the Director to gain 2 Malice per hero at the start of
            the next combat encounter, but the consequence could
            also be tailored to the task. For instance, if the heroes fail
            in their attempt to sneak through the camp of an enemy
            army, they’re spotted and the camp immediately goes on
            alert as waves of enemies attack them.
            <br><br>
            If fewer than half the heroes get a consequence or reward
            on their individual tests, then the group test simply
            succeeds or fails.
        </v-card-text>
    </v-card>
</template>