<script setup lang="ts">
</script>

<template>
    <h1>NPC Response And Offer</h1>
    <p>
        After a hero makes an argument, the NPC responds in one
        of three ways:
        <br>• An NPC responds positively if the heroes increase the
        NPC’s interest. “That’s an excellent point.” “You’ve given
        me much to consider.” “Fair enough.” “Makes sense to
        me.”
        <br>• An NPC responds negatively if the heroes decrease their
        interest. “I don’t buy that.” “Poppycock!” “I hear you, but
        I disagree.” “That’s not going to sway me.”
        <br>• An NPC responds with impatience if the heroes fail to
        increase or decrease their interest. “I’ve heard that
        before.” “Are you going to offer me anything real?” “This
        debate is tiresome.” “BORING!”
        <br><br>
        Unless the NPC is deceitful, it should be clear to the heroes
        if their argument helped convince the NPC, if they need to
        take a new approach, or if the argument actually did more
        harm than good.
        <br>
        The initial response should come with an offer (or a
        refusal to make an offer) based on the NPC’s current
        interest. If a hero’s argument reduces an NPC’s patience to
        0, the NPC lets the heroes know that this is their final offer.
    </p>
    <br>
    <h3>FOR THE DIRECTOR: REASONS FOR DECEPTION</h3>
    <p>
        Under certain circumstances, an NPC might not want to show the
        heroes how well their arguments are working. For example, if an
        NPC’s interest has dropped so low that they now intend to harm
        the heroes, the NPC might falsely agree to what the heroes ask
        for as part of a trap. Likewise, a greedy NPC might try to keep
        their enthusiasm for a deal concealed while their interest is high
        to obtain more money or favors from the heroes. If a hero thinks
        an NPC is attempting to fool them, they can make an Intuition
        test. On a success, the hero learns their true standing with the
        NPC.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Interest 5 ("Yes, And...")
        </v-card-title>
        <v-card-text>
            If the NPC’s interest is 5, they offer everything the heroes
            initially asked for—and then sweeten the deal. This result
            is the best possible outcome for the heroes. If they offered
            to perform any services or make payments as part of the
            deal, the NPC might waive those obligations, allowing the
            heroes to get what they want for free. Alternatively, the
            NPC might hold the heroes to any offers they made and
            instead offer an extra service or item on top of what was
            asked for.
            <br>
            For example, if the heroes asked the boss of a thieves guild
            for that organization’s help in standing against Lord
            Saxton, the guildmaster might pledge to send a unit of elite
            assassins to aid in the battle against that tyrannical noble,
            and then offer the heroes a quiver filled with explosive
            arrows to give them an additional advantage in the fight.
            <br>
            The NPC should let the heroes know that this is the best
            offer they can make.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Interest 4 ("Yes.")
        </v-card-title>
        <v-card-text>
            If the NPC’s interest is 4, they offer the heroes everything
            they asked for but won’t sweeten the deal. The NPC also
            accepts anything the heroes have offered as part of the
            deal with this result.
            <br>
            For example, if the heroes offered to help spring a guild
            thief from prison in exchange for the thieves guild’s elite
            assassins standing against Lord Saxton, the guildmaster
            agrees to those terms without attempting to adjust
            anything. This likely ends the negotiation, but it’s possible
            that the heroes could push for a little more, provided the
            NPC has the patience for another argument. A Director
            could prompt the heroes to push for more by having the
            NPC ask a leading question, such as, “Is there anything
            else?” or “What else do you want from me?”
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Interest 3 ("Yes, But...")
        </v-card-title>
        <v-card-text>
            If the NPC’s interest is 3, they offer the heroes what they
            want in exchange for everything the heroes offered … then
            they ask for a little extra, such as a favor or a payment
            from the characters. If the heroes offered to free a thieves
            guild member from prison in exchange for the service of
            the organization’s assassins, the guildmaster might ask
            them to free an additional prisoner, or to grant the
            prisoner they rescue a sum of cash or a magic weapon.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Interest 2 ("No, But...")
        </v-card-title>
        <v-card-text>
            If the NPC’s interest is 2, the NPC can’t give the heroes
            what they want. However, they are willing to offer other
            less impactful goods or services in exchange for whatever
            the heroes have promised. The guildmaster might not be
            willing to spare any troops to fight Lord Saxton, but could
            instead offer the latest spy reports on Saxton’s movements
            in exchange for the jailbreak.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Interest 1 ("No.")
        </v-card-title>
        <v-card-text>
            If the NPC’s interest is 1, they outright reject the heroes’
            idea without a counteroffer. If the NPC still has patience,
            they might press the heroes for a better deal, saying
            something like, “Why should we risk our necks to help you
            fight Lord Saxton? What’s really in it for the thieves guild,
            other than a short, brutal end when you inevitably fail?”
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Interest 0 ("No, And...")
        </v-card-title>
        <v-card-text>
            If an NPC’s interest is 0, they offer nothing, refuse to
            negotiate further, and seek to harm the heroes. The NPC
            might attack immediately, or they could take a different
            approach, perhaps spreading malicious rumors about the
            characters, sending assassins after them, or otherwise
            making their lives difficult. If the heroes don’t want to be
            at odds with the NPC, they’ll need to offer an valuable gift
            or undertake a quest just to make amends.
            <br>
            It is impossible to continue a negotiation when an NPC’s
            interest drops to 0.
        </v-card-text>
    </v-card>
</template>