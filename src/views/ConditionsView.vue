<script setup lang="ts">
</script>

<template>
    <h1>Conditions</h1>
    <p>
        Some abilities and other effects apply specific negative
        effects called conditions to a creature. The following
        conditions show up regularly in the game and can be
        tracked on your character sheet.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Bleeding
        </v-card-title>
        <v-card-text>
            While bleeding, whenever you make a test using Might or
            Agility, make a strike, or use an action, maneuver, or a
            triggered action, you lose 1d6 Stamina after the test, action,
            maneuver, or triggered action is resolved. This Stamina loss
            can’t be prevented in any way.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Dazed
        </v-card-title>
        <v-card-text>
            While you are dazed, you can do only one thing on your
            turn: use a maneuver, use an action, or take a move action.
            You also can’t use triggered actions, free triggered actions,
            or free maneuvers.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Frightened
        </v-card-title>
        <v-card-text>
            If you are frightened, ability power rolls you make against
            the source of your fear take a bane. If that source is a
            creature, their ability power rolls against you gain an edge.
            You can’t willingly move closer to the source of your fear if
            you know the location of that source. If you gain the
            frightened condition from one source while already
            frightened by a different source, the new condition replaces
            the old one.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Grabbed
        </v-card-title>
        <v-card-text>
            While you are grabbed, your speed is 0, you can’t be force
            moved, you can’t use the Knockback maneuver, and you
            take a bane on abilities that don’t target the creature
            grabbing you. If the creature grabbing you moves, they
            bring you with them. If the creature’s size is equal to or less
            than yours, their speed is halved while they have you
            grabbed.
            <br>
            The creature grabbing you can use a maneuver to move you
            into an unoccupied space adjacent to them.
            <br>
            The creature grabbing you can end the grab at any time (no
            action required). You can also attempt to escape being
            grabbed using the Escape Grab maneuver (see Maneuvers
            in Combat). If you teleport or if the creature grabbing you is
            force moved to a space that isn’t adjacent to you, you are no
            longer grabbed.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Prone
        </v-card-title>
        <v-card-text>
            While you are prone, you are flat on the ground, strikes you
            make take a bane, and melee abilities made against you
            gain an edge. You must crawl to move along the ground,
            which costs you 1 additional square of movement for every
            square you crawl. You can’t climb, jump, swim, or fly while
            prone. If you are climbing, flying, or jumping while you are
            knocked prone, you fall.
            <br>
            While prone, you can stand up as a maneuver (see
            Maneuvers in Combat), unless the ability or effect that
            imposed the condition says otherwise. You can use a
            maneuver to make an adjacent prone creature stand up.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Restrained
        </v-card-title>
        <v-card-text>
            While you are restrained, your speed is 0, you can’t use the
            Stand Up maneuver, and you can’t be force moved. Your
            ability power rolls take a bane, abilities against you gain an
            edge, and you have a bane on Might and Agility tests.
            <br>
            If you teleport while restrained, the condition ends.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Slowed
        </v-card-title>
        <v-card-text>
            While you are slowed, your speed is 2 unless it is already
            lower, and you can’t shift.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Taunted
        </v-card-title>
        <v-card-text>
            If you are taunted, you have a double bane on ability power
            rolls that don’t target the creature who taunted you while
            you have line of effect to that creature. If you gain the
            taunted condition from one creature while already taunted
            by a different creature, the new condition replaces the old
            one.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Weakened
        </v-card-title>
        <v-card-text>
            While you are weakened, all your power rolls take a bane.
        </v-card-text>
    </v-card>
</template>