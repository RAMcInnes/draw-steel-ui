<script setup lang="ts">
</script>

<template>
    <h1>Move Actions</h1>
    <p class="mx-3">
        A move action allows you to move around the battlefield.
        Sometimes you’ll already be exactly where you want to be
        and not need to use a move action on your turn. That’s
        okay! The decision to not move is just as tactical as the
        decision to move.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Advance
        </v-card-title>
        <v-card-text>
            When you take the Advance move action, you can move a
            number of squares up to your speed. You can break up this
            movement granted with your maneuver and action
            however you wish.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Disengage
        </v-card-title>
        <v-card-text>
            When you take the Disengage move action, you can shift 1
            square. Some class features, kits, or other rules let you
            shift more than 1 square when you take this move action,
            if they do, you can break up the movement granted by this
            move action with your maneuver and action however you
            wish.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Ride
        </v-card-title>
        <v-card-text>
            You can only take the Ride move action while mounted on
            another creature (see <i>Mounted Combat</i>). When take the
            Ride move action, you cause your mount to move up to
            their speed, taking you with them. Alternatively, you can
            use this move action to have your mount use the
            Disengage move action as a free triggered action. A mount
            can only be ridden with this move action once per round.
        </v-card-text>
    </v-card>
</template>