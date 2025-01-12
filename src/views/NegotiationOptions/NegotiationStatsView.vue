<script setup lang="ts">
</script>

<template>
    <h1>Negotiation Stats</h1>
    <p>
        During negotiation, the Director assigns NPCs four
        temporary statistics—interest, patience, motivations, and
        pitfalls. The heroes can strike a favorable deal if they
        maximize an NPC’s interest by making arguments that
        invoke the NPC’s motivations and avoid their pitfalls—but
        they have to do all that before the NPC’s patience wears
        out.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Interest
        </v-card-title>
        <v-card-text>
            An NPC’s interest represents how eager they are to make a
            deal with the heroes. Interest is graded on a scale of 0 (no
            interest) to 5 (the most possible interest). When a
            negotiation begins, an NPC’s interest is between 1 and 4. <b>If
            the NPC’s interest goes to 5, they make a final offer and the
            negotiation ends (see <i>Keep Going or Stop</i>). If the
            NPC’s interest drops to 0, they end a negotiation without
            offering the heroes any deal.</b>
            <br>
            Interest increases and decreases during the negotiation
            based on the arguments the heroes make.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Patience
        </v-card-title>
        <v-card-text>
            An NPC’s patience represents how much time and effort
            they’re willing to devote to a negotiation. Patience is
            graded on a scale of 0 to 5, with each NPC starting a
            negotiation with their patience higher than 0. <b>If an NPC’s
            patience reaches 0, the NPC makes a final offer and
            negotiation ends (see <i>Keep Going or Stop</i>).</b>
            Patience can decrease each time the heroes make an
            argument during a negotiation.
            <br><br>
            <h3>LANGUAGE AND PATIENCE</h3>
            If at least one hero negotiating with an NPC speaks the
            NPC’s native language (not including Caelian), then the
            NPC’s patience increases by 1 at the start of the
            negotiation (to a maximum of 5). If three or more heroes
            negotiating with an NPC speak the NPC’s native language,
            the NPC’s patience increases by 2 (to a maximum of 5).
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Motivations
        </v-card-title>
        <v-card-text>
            Each NPC has at least two motivations the heroes can
            appeal to with their arguments. <b>Arguments that appeal to
            an NPC’s motivation require an easier power roll to
            increase the NPC’s interest. Arguments that don’t appeal
            to a motivation require a more difficult power roll.</b> (See
            <i>Making Arguments</i> for more information.)
            <br>
            Each motivation can be successfully appealed to only once
            during a negotiation. To successfully appeal to a
            motivation, the heroes must use the motivation in an
            argument without mentioning one of the NPC’s pitfalls or
            being caught in a lie.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Pitfalls
        </v-card-title>
        <v-card-text>
            Pitfalls are motivations that spark ire, discomfort, shame,
            fear, or some other negative response in an NPC. <b>Using a
            pitfall in an argument causes an NPC’s interest and
            patience to wane.</b> Each NPC has at least one pitfall, and
            many have two or more.
            <br>
            Pitfalls and motivations are two sides of the same concept.
            They’re presented below as a single list, so that what
            might be a motivation for one NPC is a pitfall for another.
            Whenever the heroes make an argument, they risk
            stumbling into one of an NPC’s pitfalls unless they do their
            research beforehand or read the NPC well.
        </v-card-text>
    </v-card>
</template>