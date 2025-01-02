<script setup lang="ts">
</script>

<template>
    <h1>Recoveries</h1>
    <p>
        Recoveries represent the number of times your hero can
        take a breather and keep fighting. Running out of
        Recoveries means your hero has reached their uttermost
        limit. You can spend your Recoveries with a special action
        (see below) or you might get a little magical help from a
        conduit, a boost of adrenaline from an allied tactician or
        inspiration from your party’s troubadour.
        <br><br>
        When you spend a Recovery, you regain Stamina equal to
        your <b>Recovery Value</b>, which is <b>one-third your Stamina
        maximum</b>.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Spending Recoveries
        </v-card-title>
        <v-card-text>
            During combat encounters and similarly dangerous
            situations when time is tracked in rounds <i>(see Combat)</i>,
            you can use the Catch Breath maneuver to regain Stamina.
            See <u>Catch Breath</u> in <i>Maneuvers</i> for more information.
            Some heroes have abilities that allow them or their allies
            to spend more Recoveries without using the Catch Breath
            maneuver.
            <br>
            Outside of combat and other dangerous situations, you can
            spend Recoveries freely.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Regaining Recoveries
        </v-card-title>
        <v-card-text>
            You regain all lost Recoveries when you finish a Respite
            <i>(see Respite)</i>.
        </v-card-text>
    </v-card>
</template>