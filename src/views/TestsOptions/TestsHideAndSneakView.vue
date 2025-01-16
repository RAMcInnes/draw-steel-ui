<script setup lang="ts">
</script>

<template>
    <h1>Hide and Sneak</h1>
    <p class="mx-3">
        Hiding and sneaking are important tools for heroes and
        their foes. You might want to avoid another creatures’
        notice to eavesdrop on conversations, steal items, set up
        an ambush, or avoid a combat encounter.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Hiding
        </v-card-title>
        <v-card-text>
            <b>When you wish to hide from a creature, you must have
            cover or concealment (see <i>Combat</i>) from your foe, and
            that foe can’t observe you attempting to hide.</b> A creature is
            observing you if they’re aware of your specific location
            before you attempt to hide. This means they can pinpoint
            you with their senses and be able to point a finger (or paw
            or tentacle) at you as if to shout, “There they are!” If you
            duck behind a barrel to hide from a foe, your attempt to
            hide has a chance of succeeding only if your foe doesn’t
            notice you doing so. If you are being chased by a hungry
            dragon, you can hide only if you first move into a place
            where the dragon can’t observe you, such as turning a
            sharp corner into a tunnel full of giant stalagmites before
            the dragon does. You then make your hide attempt.
            <br><br>
            <b>When you use the Hide maneuver to hide during combat
            while you have cover or concealment from a creature who
            isn’t observing you, you are automatically hidden from
            them unless the Director deems otherwise.</b> If you hide
            outside of combat, the Director might ask you to make a
            test using the Hide skill to see how well hidden you are.
            <br><br>
            <b>While you are hidden from another creature, you gain an
            edge on ability power rolls made against them, and the
            creature can’t target you with abilities that don’t have the
            Area keyword. This benefit lasts until the end of the turn
            in which you become no longer hidden.</b> These rules allow
            you to be hidden from another creature at the start of your
            turn, move out of cover or concealment toward them and
            use an ability against them and still gain the benefit of
            being hidden as long as you use the ability before the end
            of the turn in which you moved out of hiding.
            <br><br>
            You are no longer hidden from a creature if you don’t have
            cover or concealment from them. If you use an ability,
            interact with an enemy creature, move without sneaking,
            or otherwise make noise or reveal yourself while hidden,
            you are no longer hidden once the thing you’re doing
            resolves. For instance, if you are hidden and then make an
            strike, you resolve the strike first, then are no longer
            hidden.
            <br><br>
            <h3>SEARCHING FOR HIDDEN CREATURES</h3>
            You can search for creatures who are hidden from you as
            long as those creatures are within 10 squares of you and
            you have line of effect to them. To do so, you make an
            Intuition test as a maneuver and assess the result:
            <br>
            <br>• 11 or lower: You find any hidden creatures with an
            Agility of 0 or lower and who don’t have the Hide skill.
            <br>• 12–16: You find any hidden creatures who don’t have
            the Hide skill.
            <br>• 17 or more: You find all hidden creatures.
            <br><br>
            As part of this maneuver, you can point out any creatures
            you find to allies within 10 squares of you, making those
            creatures no longer hidden from those allies. If a creature
            is hidden from your allies but not from you, you can use a
            maneuver without making a test to point them out to your
            allies.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Sneaking
        </v-card-title>
        <v-card-text>
            While you are hidden from another creature and not in
            combat, you can attempt to sneak, which means avoiding
            the senses of other creatures as you move around them
            out in the open, in order to remain hidden. <b>While sneaking,
            your speed is halved. If you do so, you can make an Agility
            test with a difficulty set by the Director, remaining hidden
            during your movement if you succeed.</b> This test can use
            another characteristic at the Director’s discretion, such as
            using Presence to blend in with a crowd in a packed city
            street.
        </v-card-text>
    </v-card>
</template>