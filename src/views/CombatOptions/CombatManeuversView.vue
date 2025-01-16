<script setup lang="ts">
    import Ability from '@/components/Ability.vue';
    import type { AbilityInterface } from '@/types';

    const grabAbility: AbilityInterface = {
        keywords: ['Melee'],
        type: 'Maneuver',
        distance: 'Melee 1',
        target: '1 creature no more than 1 size larger than you',
        abilityRoll: {
            characteristic: 'Might',
            tierOne: 'No effect.',
            tierTwo: 'You can grab the target, but if you do, they can make a melee free strike against you right before they become grabbed by you.',
            tierThree: 'The target is grabbed by you.'
        },
        effect: 'You gain an edge on the power roll if the creature’s size is smaller than yours. You can grab only one creature at a time this way.',
    };
    const knockbackAbility: AbilityInterface = {
        keywords: ['Melee', 'Weapon'],
        type: 'Maneuver',
        distance: 'Melee 1',
        target: '1 creature no more than 1 size larger than you',
        abilityRoll: {
            characteristic: 'Might',
            tierOne: 'Push 1',
            tierTwo: ' Push 2',
            tierThree: 'Push 3'
        },
        effect: 'You gain an edge on the power roll if the creature’s size is smaller than yours.',
    };
</script>

<template>
    <h1>Maneuvers</h1>
    <p class="mx-3">
        A maneuver typically involves less focus and exertion than
        an action. It can be an opportunity to move other creatures,
        drink a potion, or undertake similar activities.
        <br><br>
        Sometimes you might not have anything you can do with
        your maneuver. That’s totally fine! Often, the best thing to
        do on your turn is take an action and move on.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Aid Attack
        </v-card-title>
        <v-card-text>
            Choose an enemy adjacent to you. The next ability power
            roll an ally who makes against that creature before the
            start of your next turn has an edge.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Catch Breath
       </v-card-title>
        <v-card-text>
            You spend a Recovery and regain Stamina in
            an amount equal to your recovery value.
            <br><br>
            If you are dying (see Dying and Death in Stamina), you
            can’t take the Catch Breath maneuver, but other creatures
            can help you spend recoveries.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Escape Grab
       </v-card-title>
        <v-card-text>
            While you are grabbed by another creature (see Grab
            below), you can attempt to escape by making the following
            test (which can’t have a skill applied). You take a bane on
            the roll if the creature’s size is larger than yours.
            <br><br>
            Power Roll + Might or Agility:
            <br>• 11 or lower: You fail to escape the grab.
            <br>• 12–16: You can escape the grab, but if you do, the
            creature grabbing you can make a melee free strike
            against you before you are no longer grabbed.
            <br>• 17+: You are no longer grabbed.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Grab
       </v-card-title>
        <v-card-text>
            <Ability :ability=grabAbility />
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Hide
       </v-card-title>
        <v-card-text>
            Using the Hide maneuver, you attempt to hide from other
            creatures who aren’t observing you while you have cover
            or concealment (see <i>Hide and Sneak</i>).
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Knockback
       </v-card-title>
        <v-card-text>
            <Ability :ability=knockbackAbility />
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Make or Assist A Test
       </v-card-title>
        <v-card-text>
            Many tests are maneuvers if made in combat. Searching a
            chest with a Reason test, picking a door’s lock with an
            Agility test, or lifting a portcullis with a Might test would
            all be maneuvers. Assisting a test is also a maneuver in
            combat.
            <br>
            Complex or time-consuming tests might require an action
            if made in combat—or could take so long that they can’t be
            made during combat at all. Other tests that take no time at
            all, such as a Reason test to recall lore about mummies, are
            usually free maneuvers in combat. The Director has the
            final say regarding which tests can be made as maneuvers.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Search for Hidden Creatures
       </v-card-title>
        <v-card-text>
            You can use this maneuver to attempt to search for
            creatures hidden from you (see <b>Hide and Sneak</b>).
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Stand Up
       </v-card-title>
        <v-card-text>
            You can use this maneuver to stand up if you are prone,
            ending that condition. Alternatively, you can use this
            maneuver to make an adjacent prone creature stand up.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Use Consumable
       </v-card-title>
        <v-card-text>
            Unless otherwise noted in a treasure’s description, you can
            use a consumable treasure (see Treasures), such as a
            potion, with this maneuver. You can use this maneuver to
            administer a potion or other consumable that benefits the
            user to a willing, adjacent creature instead of yourself.
        </v-card-text>
    </v-card>
</template>