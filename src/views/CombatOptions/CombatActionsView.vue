<script setup lang="ts">
</script>

<template>
    <h1>Actions</h1>
    <p>
        When you take an action on your turn, you most often do
        so to use a unique ability defined on your character sheet
        (see <i>Abilities</i>). These abilities are the most unique,
        flavorful, and impactful things you can do with your action.
        You can also use your action to catch your breath, help
        another creature regain Stamina, charge into battle,
        defend yourself, or make a free strike.
        You can convert your action into a maneuver or move
        action.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Free Strike
        </v-card-title>
        <v-card-text>
            You can use this action to make a free strike (see <i>Free
            Strikes</i>). Most of the time, you’ll want to use the more
            impactful actions found on your character sheet, just as
            the director will use the actions in a creature’s stat block,
            but free strikes are always available for when all else fails.
            For instance, a fury who has no other options for ranged
            strikes might use the Ranged Weapon Free Strike ability
            with an improvised weapon when battling a flying
            creature.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Charge
        </v-card-title>
        <v-card-text>
            When you take the Charge action, you move up to your
            speed in a straight line without shifting, and can then
            make a melee free strike (see <i>Free Strikes</i>) against a
            creature when you end your move. You can’t move
            through difficult terrain as part of your movement with
            this action. You can’t climb, fly, or swim as part of this
            action unless you have that type of movement as a
            keyword in your speed.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Defend
        </v-card-title>
        <v-card-text>
            When you take the Defend action, all ability power rolls
            made against you have a double bane until the start of
            your next turn. You gain no benefit from this action while
            another creature is taunted by you (see <i>Conditions</i>).
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Heal
        </v-card-title>
        <v-card-text>
            You use your action to employ medicine or inspiring
            words to make an adjacent creature feel better and stay in
            the fight. The creature can spend a Recovery to regain
            Stamina, or can make a saving throw against a “(save
            ends)” effect they are suffering.
        </v-card-text>
    </v-card>
</template>