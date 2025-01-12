<script setup lang="ts">
    const startingAttitudes = [
        {
            attitude: 'Hostile',
            description: 'Openly opposed to the heroes. Barely willing to listen.',
            interest: 1,
            patience: 2
        },
        {
            attitude: 'Suspicious',
            description: 'Doubts the heroes’ motives, but is willing to listen.',
            interest: 2,
            patience: 2
        },
        {
            attitude: 'Neutral',
            description: 'Doesn’t feel one way or the other. Would probably rather be somewhere else, but doesn’t want to be rude.',
            interest: 2,
            patience: 3
        },
        {
            attitude: 'Open',
            description: 'Willing to listen, willing to help, as long as the heroes aren’t asking too much.',
            interest: 3,
            patience: 3
        },
        {
            attitude: 'Friendly',
            description: 'The heroes seem like the NPC’s people. The NPC is willing to give them the benefit of the doubt.',
            interest: 3,
            patience: 4
        },
        {
            attitude: 'Trusting',
            description: 'The NPC has reason to take the heroes at their word, and will help if the characters don’t screw this up.',
            interest: 3,
            patience: 5
        }
    ];
</script>

<template>
    <h1>Opening A Negotiation</h1>
    <p>
        A negotiation begins when the heroes ask something of an
        NPC and the Director deems that the circumstances
        require a negotiation. Those circumstances always involve
        the heroes requiring assistance that could change the
        course of the adventure, and having the NPC conflicted
        about working with them. Unlike combat, which can be
        thrust upon the heroes by violent allies, the heroes must
        be the ones to willingly start a negotiation. They must
        want something from the NPC, otherwise they have no
        reason to negotiate!
        <br>
        The Director can decide that an NPC who has something
        the players want could show up at their door and ask if the
        heroes want to negotiate, but it’s always okay for the
        characters to say, “Not interested,” and refuse to negotiate.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Stop Combat, Start Negotiation
        </v-card-title>
        <v-card-text>
            If a hero wants to halt hostilities to negotiate with the
            other side, they can use a maneuver to make a hard
            Presence test (or another applicable test, as the Director
            determines) in an attempt to stop combat and start a
            negotiation. The test has a chance of success only if the
            Director believes the other side is willing and capable of
            negotiating. A foe who has the upper hand, who hates the
            heroes beyond measure, or who lacks sapience is unlikely
            to negotiate.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Starting Stats
        </v-card-title>
        <p>
            An NPC’s starting negotiation stats depend on their
            attitude toward the heroes, as shown on the Negotiation
            Starting Attitudes table, and can be adjusted by the
            Director as they see fit. A naturally irascible NPC might
            have lower patience, while a hostile NPC with a greater-than-expected
            stake in the negotiation topic might have a higher-than-typical interest.
        </p>
        <br>
        <v-table density="compact" hover>
        <thead>
            <tr>
                <th class="text-left">Attitude</th>
                <th class="text-left">Description</th>
                <th class="text-left">Interest</th>
                <th class="text-left">Patience</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in startingAttitudes" :key="item.attitude">
                <td>{{ item.attitude }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.interest }}</td>
                <td>{{ item.patience }}</td>
            </tr>
        </tbody>
    </v-table>
    </v-card>
</template>