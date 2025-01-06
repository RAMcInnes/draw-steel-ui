<script setup lang="ts">
</script>

<template>
    <h1>Taking a Turn</h1>
    <p>
        <b>Each creature in combat—whether hero, adversary, or
        something in between—gets to take a Move Action, a
        Maneuver, and an Action on their turn.
        <br>
        Each combatant can perform their maneuver and action
        in any order, and can break up the movement granted
        by their move action before, after, or between their
        maneuver and action however they like.
        <br>
        You can also turn your action into a
        move action or a maneuver, so that your turn can
        alternatively consist of two move actions and a maneuver;
        or two maneuvers and a move action.</b>
        <br>
        The Movement section breaks down how your move
        action works, while the Maneuvers and Actions sections
        break down the baseline maneuvers and actions your
        character can undertake. For any activities not specifically
        covered in those rules, such as cutting down a chandelier
        to drop on enemies, the Director decides whether such an
        activity is a maneuver or an action.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Triggered Actions and Free Triggered Actions
        </v-card-title>
        <v-card-text>
            Your hero might have one or more unique triggered
            actions, each of which has a specified trigger that allows
            the action to be used. <b>You can use one triggered action per
            round, either on your turn or another creature’s turn, but
            only when the action’s trigger occurs.</b> For instance, a fury
            hero can use the Relentless Toss triggered action to force
            move a target, but only after an enemy has first tried to
            force move the fury or one of their allies.
            <br>
            <b>A free triggered action follows the same rules as a
            triggered action, but it doesn’t count against your limit of
            one triggered action per round.</b> For instance, a shadow
            hero can use their Hesitation is Weakness ability to take
            their turn in response to the trigger of another hero
            ending their turn. But because that ability is a free
            triggered action, the shadow can still use their In All This
            Confusion triggered action later in the round.
            <br>
            If multiple triggered actions occur in response to the same
            trigger, any heroes and other player-controlled creatures
            taking a triggered action or a free triggered action decide
            among themselves which of those triggered actions are
            resolved first. Then the Director decides the same for
            creatures they control.
            <br>
            Any effect that prevents you from making triggered
            actions also prevents you from making free triggered
            actions.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Free Maneuvers
        </v-card-title>
        <v-card-text>
            Boring stuff like opening an unlocked door, picking up an
            arrow from the ground, giving an object to an adjacent ally,
            or drawing a weapon doesn’t require a maneuver or an
            action. Rather, you can undertake such straightforward
            activities as free maneuvers on your turn. <b>A free maneuver
            follows the same rules as a regular maneuver, but you can
            typically take as many free maneuvers as you like.</b>
            <br>
            At the Director’s discretion, circumstances could make
            something that is typically boring more impactful and
            exciting. For instance, if you need to pick a magic arrow up
            off the ground during a violent earthquake, what would
            otherwise be a free maneuver could require a maneuver
            or an action to accomplish.
            <br>
            Likewise, the nature of an activity might make it too
            complicated for a free maneuver. For example, picking up
            the body of an unconscious talent ally to carry them to
            safety can probably be done as a free maneuver. But if
            your Might is lacking and you need to pick up a tactician
            ally decked out in the Shining Armor kit, the Director
            might determine that you need to use a regular maneuver
            to hoist their armored form over your shoulders.
            Any effect that prevents you from making maneuvers also
            prevents you from making free maneuvers.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            No-Action Activities
        </v-card-title>
        <v-card-text>
            Free maneuvers cover most of the simple activities you
            might want to undertake on your turn. When it isn’t your
            turn, you can typically undertake even simpler activities
            requiring no action with the Director’s approval. For
            instance, shouting out a warning to an ally or dropping an
            item so another creature can pick it up require no action.
            <br>
            The Director can limit what kinds of no-action activities
            you can attempt when it isn’t your turn. For instance,
            shouting out a warning about an unseen foe to an ally on
            the ally’s or the foe’s turn requires no action. But the
            Director might stop you from giving that ally complex
            tactical advice, saying that doing so instead requires a free
            maneuver on your turn.
        </v-card-text>
    </v-card>
</template>