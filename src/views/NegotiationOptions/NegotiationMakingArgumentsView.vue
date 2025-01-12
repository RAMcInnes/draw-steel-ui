<script setup lang="ts">
    const npcsAndImpression = [
        {
            impression: 1,
            npc: "Brigand leader, commoner, shop owner"
        },
        {
            impression: 2,
            npc: "Knight, local guildmaster, professor"
        },
        {
            impression: 3,
            npc: "Cult leader, locally known mage, noble lord"
        },
        {
            impression: 4,
            npc: "Assassin, baron, locally famous entertainer"
        },
        {
            impression: 5,
            npc: "Watch captain in a large city, high priest, viscount"
        },
        {
            impression: 6,
            npc: "Count, warlord"
        },
        {
            impression: 7,
            npc: "Marquis, world-renowned entertainer"
        },
        {
            impression: 8,
            npc: "Duke, spymaster"
        },
        {
            impression: 9,
            npc: "Archmage, prince"
        },
        {
            impression: 10,
            npc: "Demon lord, monarch"
        },
        {
            impression: 11,
            npc: "Archdevil, archfey, demigod"
        },
        {
            impression: 12,
            npc: "Deity, titan"
        }
    ];
</script>

<template>
    <h1>Making Arguments</h1>
    <p>
        As part of their initial request to an NPC in a negotiation, a
        hero makes an argument as to why the NPC should give
        the heroes what they want. The hero might offer to do
        something in exchange as part of their argument, such as
        clear bandits from a forest, hand over a piece of treasure,
        or slay a dragon for the NPC. Or instead of offering
        something, the hero could attempt to convince the NPC
        that it’s in their own best interest to help—or even that it’s
        a moral imperative. For example, a hero could appeal to a
        knight’s sense of duty, the potential wealth a mercenary
        could make, or the final wish of a queen’s dearly departed
        grandmother as part of an argument. NPCs who admire
        the heroes are more likely to respond to compliments and
        buttering up, while those who fear the heroes are more
        likely to respond to intimidation and awe.
        <br>
        Arguments need a justification as to why they’re true.
        “Helping us defeat Lord Saxton is good for you in the long
        run,” is half of an argument, so that the hero also needs to
        explain why this is the case. “Helping us defeat Lord
        Saxton is good for you in the long run, because we know
        he’s coming for your kingdom after Bedegar falls!” If a
        hero makes half an argument, the NPC might follow up
        with questions such as, “Why do you say that?” or “What
        makes you think that’s true?” to get the full argument from
        the hero.
        <br>
        One hero makes an argument to an NPC, but the players
        can discuss the details of the argument out of character
        beforehand. It’s up to the group to decide how much
        discussion to have before making an argument, and to
        decide what argument the players think will best sway the
        NPC.
        <br>
        This is a good topic for discussion before a group actually
        gets into a negotiation, so everyone knows the other
        players’ thoughts. Some groups have the most fun without
        any around-the-table discussion, while others prefer being
        able to strategize as often as possible.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Appeal To Motivation
        </v-card-title>
        <v-card-text>
            If an argument doesn’t include a pitfall and appeals to one
            of the NPC’s motivations that hasn’t already been appealed
            to, the hero making the argument can make an easy test to
            attempt to sway the NPC with the argument. Depending on
            the argument, this can be a Reason, Intuition, or Presence
            test using any applicable skill—most commonly a skill
            from the interpersonal skill group. The test has the
            following outcomes.
            <br>
            <b>Power Roll + Reason, Intuition, or Presence:</b>
            <br>• 11 or lower: The NPC’s patience decreases by 1.
            <br>• 12–16: The NPC’s interest increases by 1, and their
            patience decreases by 1.
            <br>• 17+: The NPC’s interest increases by 1, and their
            patience doesn’t change.
            <br><br>
            At the Director’s discretion, a particularly well-roleplayed
            or well-reasoned argument automatically counts as a tier
            3 result without a test. Good roleplaying should be
            rewarded!
            <br>
            If the heroes attempt to appeal to a motivation that’s
            already been appealed to, the NPC’s interest remains the
            same and their patience decreases by 1.
            <br><br>
            <h3>APPEALING TO MULTIPLE MOTIVATIONS</h3>
            If a hero makes an argument that appears to appeal to multiple
            motivations, the Director can always ask for clarification, listing
            the motivations it seemed like the player was trying to appeal to
            and allowing the player to pick one from the list. If the player
            had another motivation in mind, it’s up to the Director if the
            argument appealed to that specific motivation or not.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            No Motivation or Pitfall
        </v-card-title>
        <v-card-text>
            If an argument doesn’t include one of the NPC’s
            motivations or pitfalls, the hero who makes the argument
            must make a more difficult test to appeal to the NPC. The
            test has the following outcomes.
            <br>
            <b>Power Roll + Reason, Intuition, or Presence:</b>
            <br>• 11 or lower: The NPC’s patience decreases by 1, and
            their interest decreases by 1.
            <br>• 12–16: The NPC’s patience decreases by 1.
            <br>• 17+: The NPC’s interest increases by 1, and their
            patience decreases by 1. (On a natural 19 or 20, the
            NPC’s patience remains the same.)
            <br><br>
            If the heroes try to use the same argument without a pitfall
            or motivation twice, the test automatically gets a tier 1
            result.
            <br><br>
            <h3>EVERYONE CAN PARTICIPATE</h3>
            Since Reason and Intuition with creatively applied skills can be
            used to make arguments, all heroes can actively participate in
            the process of negotiation. The hero with the highest Presence
            who has the Persuade skill doesn’t automatically have to be the
            one who makes all the tests.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Caught In A Lie
        </v-card-title>
        <v-card-text>
            If a hero lies to an NPC with an argument that fails to
            increase the NPC’s interest, the Director can decide that
            the NPC catches the lie and is offended by it. The NPC’s
            interest decreases by 1, in addition to any decrease
            imposed by the failure.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Pitfall Used
        </v-card-title>
        <v-card-text>
            If an argument uses one of the NPC’s pitfalls, it
            automatically fails and the NPC’s interest and patience
            each decrease by 1. The NPC might also warn the heroes
            not to treat them in such a way again.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Renown and Negotiation
        </v-card-title>
        <p>
            During a negotiation, an NPC has an Impression score
            that determines the amount of Renown needed to
            influence them (see Renown). This score only matters if
            the NPC knows of the heroes. A dragon who slumbered
            away the last hundred years and was just woken up to
            negotiate can’t be influenced by a hero’s Renown. (By the
            way, it’s a terrible idea to wake a dragon, even if they do
            know you’re famous.) <b>If the NPC does know of the hero
            and has an Impression that is equal to or lower than the
            hero’s Renown, the NPC can be influenced by that hero.</b>
            <br>
            The higher an NPC’s Impression, the harder they are to
            influence with Renown. A small-time brigand has a lower
            Impression score than a monarch who meets with
            powerful and famous people all the time. The NPCs and
            Impression table provides examples of different
            archetypical NPC Impression scores. If a creature has a
            level, then their Impression equals their level unless the
            Director deems otherwise.
        </p>
        <v-table density="compact" hover>
            <thead>
                <tr>
                    <th class="text-left">Impression</th>
                    <th class="text-left">Example NPC</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in npcsAndImpression" :key="item.impression">
                    <td>{{ item.impression }}</td>
                    <td>{{ item.npc }}</td>
                </tr>
            </tbody>
        </v-table>
        <br>
        <h3>FAME OR INFAMY?</h3>
        If a hero has enough Renown to influence an NPC during
        negotiation, the Director decides if they are famous or
        infamous to the NPC. If the NPC appreciates a character’s
        deeds and views them as a hero who makes the world a
        better place, that hero is famous to them. If the NPC
        believes the hero’s accomplishments make the world
        worse and views them as an enemy, the hero is infamous
        to the NPC.
        <br><br>
        <h3>INFLUENCING TESTS</h3>
        If a hero is famous to an NPC, they gain an edge on tests
        when making arguments to which the Flirt, Lead, or
        Persuade skill could be applied. If they are infamous to the
        NPC, they gain an edge on tests when making arguments
        to which the Brag, Interrogate, or Intimidate skill could be
        applied. A hero gains this edge even if they don’t have the
        appropriate skill.
    </v-card>
</template>