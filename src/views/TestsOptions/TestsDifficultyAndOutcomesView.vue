<script setup lang="ts">
    const difficultyOutcomes = [
        {
            result: "Less than 11",
            easy: "Success with consequence",
            medium: "Failure",
            hard: "Failure with consequence"
        },
        {
            result: "12-16",
            easy: "Success",
            medium: "Success with consequence",
            hard: "Failure"
        },
        {
            result: "17+",
            easy: "Success with reward",
            medium: "Success",
            hard: "Success",
        },
        {
            result: "Natural 19-20",
            easy: "Success with reward",
            medium: "Success with reward",
            hard: "Success with reward",
        }
    ];
</script>

<template>
    <h1>Difficulty and Outcomes</h1>
    <br>
    <h3>Test Difficulty Outcomes</h3>
    <v-table density="compact" hover>
        <thead>
            <tr>
                <th class="text-left">Result</th>
                <th class="text-left">Easy Outcomes</th>
                <th class="text-left">Medium Outcomes</th>
                <th class="text-left">Hard Outcomes</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in difficultyOutcomes" :key="item.result">
                <td>{{ item.result }}</td>
                <td>{{ item.easy }}</td>
                <td>{{ item.medium }}</td>
                <td>{{ item.hard }}</td>
            </tr>
        </tbody>
    </v-table>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Easy Tests
        </v-card-title>
        <v-card-text>
            An easy test has some risk of failure, but most heroes will
            likely overcome it. A test is easy if only one creature opposes the
            hero, and that opposed creature would have a lower
            bonus to their test roll for the task than the hero does. If
            a hero with an Agility score of 2 attempts to sneak by a
            guard with an Intuition score of 0, the test is easy.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Medium Tests
        </v-card-title>
        <v-card-text>
            A medium test has some risk of failure that most heroes
            will likely overcome—but with a cost. A test is moderate if
            multiple creatures oppose the hero and those creatures would
            have lower bonuses to their test rolls than the hero, or if
            only one creature opposes the hero and has the same test bonus
            as the hero.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Hard Tests
        </v-card-title>
        <v-card-text>
            A hard test has a greater risk of failure, and most heroes
            are likely to suffer some hardship while trying to
            overcome the intended task. A test is hard if an opposed creature would
            have a higher bonus to their test roll than the hero, or if
            multiple creatures with the same test bonus as the hero
            oppose the hero.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Natural 19 or 20: Success with Reward
        </v-card-title>
        <v-card-text>
            When you get a natural 19 or 20 on a test’s power roll, you
            succeed on the task with a reward, even if the test has a
            medium or hard difficulty.
        </v-card-text>
    </v-card>
</template>