<script setup lang="ts">
    const advancementTable = [
        {
            xp: "0-15",
            level: 1,
        },
        {
            xp: "16-31",
            level: 2,
        },
        {
            xp: "32-47",
            level: 3,
        },
        {
            xp: "48-63",
            level: 4,
        },
        {
            xp: "64-79",
            level: 5,
        },
        {
            xp: "80-95",
            level: 6,
        },
        {
            xp: "96-111",
            level: 7,
        },
        {
            xp: "112-127",
            level: 8,
        },
        {
            xp: "128-143",
            level: 9,
        },
        {
            xp: "144+",
            level: 10,
        },
    ]
</script>

<template>
    <h1>Heroic Advancement</h1>
    <p class="mx-3">
        Your character’s heroic advancement is marked by level.
        Each time you gain a new level in your class, your Stamina
        increases, and you gain new features or abilities according
        to your class’s advancement, as detailed in Classes.
        <br><br>
        In the standard setup for the game, heroes gain Experience
        each time they finish a respite. When you gain sufficient
        Experience, you gain a level during the same respite (see
        Building a Heroic Narrative). The Heroic Advancement
        table shows exactly how much Experience (XP) you need
        to advance from one level to the next. The amount of
        Experience you gain is cumulative.
    </p>
    <br>
    <v-table density="compact" hover>
        <thead>
        <tr>
            <th class="text-left">XP</th>
            <th class="text-left">Level</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in advancementTable" :key="item.xp">
            <td>{{ item.xp }}</td>
            <td>{{ item.level }}</td>
        </tr>
        </tbody>
    </v-table>
    <br>
    <h2>Alternative Advancement</h2>
    <p class="mx-3">
        Though many games might advance using the standard
        setup for heroic advancement, the Director can decide that
        their game uses different advancement. Check with your
        Director to see what method of advancement they plan to use.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Adjusted XP Advancement
        </v-card-title>
        <v-card-text>
            Some Directors prefer that heroes level up faster or slower
            to suit the pace of their story. The Adjusted XP Advancement
            table is set up for campaigns where heroes advance at double
            or half the usual pace. Directors can also create their own
            customized pace for XP-based advancement.
            <br><br>
            See <i>ADJUSTED XP ADVANCEMENT</i> Table for more details.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Milestone
        </v-card-title>
        <v-card-text>
            Rather than tracking XP, some games see the heroes
            advance in level when they achieve a particular story
            milestone. For example, when a party defeats the main
            villain of an adventure and foils their dastardly plot,
            each hero gains a level for achieving this objective,
            no matter how many or few obstacles they faced along the way.
            <br><br>
            For many Directors using milestone advancement, the end
            of each adventure within a campaign serves as a milestone
            for leveling up. The Director can share these milestones
            with the players to encourage them to work toward
            particular goals, and to engage with the story and world
            the Director has prepared. For example, in a campaign
            where the heroes have to face nine evil mages, it makes
            sense that each time the heroes defeat a mage, they gain a
            level. The Director should keep milestone goals flexible,
            though. Defeating a mage could mean stopping them with
            violence, using negotiation to make them stand down, or
            anything else that thwarts their evil plans.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Director Says So
        </v-card-title>
        <v-card-text>
            Some games don’t track XP or goals at all. The heroes
            simply gain a level whenever the Director decides it’s
            appropriate for the story.
        </v-card-text>
    </v-card>
</template>