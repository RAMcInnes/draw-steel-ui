<script setup lang="ts">
</script>

<template>
    <h1>Potencies</h1>
    <p class="mx-3">
        Many effects inflict conditions and unique statuses on
        heroes and their enemies. But creatures get a chance to
        resist these effects. A creature with a high Might score
        should be harder to knock prone than a creature who is
        lacking in that characteristic.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Resisting Potencies
        </v-card-title>
        <v-card-text>
        These effects have a potency and only take hold of the
        target if the effect’s potency value is higher than the
        target’s indicated characteristic scores.
        <br><br>
        <b>
            A potency always appears in text as a capital letter
            followed by a less-than sign (<) single digit number, such
            as M < 1 or R < 3. The letter indicates which characteristic
            is used to resist the effect (M for Might, A for Agility, R for
            Reason, I for Intuition, and P for Presence), and the
            number indicates the minimum score in that characteristic
            the target needs to beat the effect.
        </b>
        <br><br>
        For example, a 1st-level conduit’s Punishing Smite ability
        has the following power roll outcomes:
        Power Roll + Intuition:
        <br>• 11 or lower: 3 holy damage; A < 0 prone
        <br>• 12–16: 6 holy damage; A < 1 prone
        <br>• 17+: 9 holy damage; A < 2 prone and can’t stand
        (save ends)
        <br><br>
        If the conduit uses this ability and targets a bandit with an
        Agility score of 0, then a tier 1 result would deal holy
        damage to the bandit but have no other effect. But a tier 2
        result would deal damage and knock the bandit prone
        while a tier 3 result would deal damage and knock the
        bandit prone and mean the bandit couldn’t get up until
        they succeed on a saving throw.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Your Potency
        </v-card-title>
        <v-card-text>
            Many of your abilities have a potency. The characteristic a
            target uses to resist is based on the ability used, and the
            value of your potency is based on one of your
            characteristics and determined by your choice of class
            during character creation.
            <br><br>
            You have <b>weak</b>, <b>average</b>, and <b>strong</b> potency values. All of
            these values increase as your hero advances in level and
            gains power.
            <br>• Your <b>weak</b> potency value is equal to your highest characteristic score - 2.
            <br>• Your <b>average</b> potency value is equal to your highest characteristic score - 1.
            <br>• Your <b>strong</b> potency value is your highest characteristic value.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Adjusting Potencies
        </v-card-title>
        <v-card-text>
            Potencies are made for quick resolution at the table, but
            there are some triggered actions and other abilities that
            allow you to manipulate their value. If you build a hero
            who can adjust a potency, pay attention during battle!
            <br><br>
            You might be able to help out a friend who needs a little boost
            to make their ability take full effect or an enemy about to
            lock down one of your allies who has a potency that needs
            some dampening. As the saying goes, “Teamwork makes
            the potencies dynamic.” Yeah, that’s the saying.
        </v-card-text>
    </v-card>
</template>