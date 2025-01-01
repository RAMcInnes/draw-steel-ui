<script setup lang="ts">
</script>

<template>
    <h1>Kits Bonuses and Traits</h1>
    <p>
        A kit can increase your Stamina, speed, and stability, as
        well as the damage and distance of your weapon abilities.
        Kit bonuses are applied to free strikes.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Stamina Bonus
        </v-card-title>
        <v-card-text>
            Your kit’s Stamina bonus is added to your Stamina
            maximum and scales with your Echelon.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Speed Bonus
        </v-card-title>
        <v-card-text>
            Your kit’s speed bonus is added to your speed.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Stability Bonus
        </v-card-title>
        <v-card-text>
            Your kit’s stability bonus is added to your stability.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Damage Bonus
        </v-card-title>
        <v-card-text>
            Kits can grant you a bonus to damage with certain types of abilities.
            <br>
            <h3>MELEE DAMAGE BONUS</h3>
            Kits can have a melee damage bonus. This bonus is added
            to the rolled damage of abilities with both the Melee and
            Weapon keywords that deal damage.
            <h3>RANGED DAMAGE BONUS</h3>
            Kits can have a ranged damage bonus. This bonus is added
            to the rolled damage of abilities with both the Ranged and
            Weapon keywords that deal damage.
            <h3>BONUSES ACROSS TIERS</h3>
            Kit damage bonuses are presented as “+X/+Y/+Z.” The X
            bonus is added to qualifying tier 1 power roll results, the Y
            bonus is added to qualifying tier 2 power roll results, and
            the Z bonus is added to qualifying tier 3 power roll results.
            <br>
            For example, the Shining Armor Kit has a +2/+2/+2 melee
            damage bonus, increasing the damage of your abilities
            with the Melee and Weapon keywords across all tier
            results. The Sniper kit has a +0/+0/+4 ranged damage
            bonus, having no effect on tier 1 and 2 results, increasing
            the damage of tier 3 results by 4 for your ranged weapon
            abilities.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Distance Bonus
        </v-card-title>
        <v-card-text>
            Your kit’s ranged distance bonus increases the distance of
            your abilities with the Ranged and Weapon keywords.
            Your kits melee distance bonus increase the distance of
            your abilities with the Melee and Weapon keywords.
            <br>
            A distance bonus doesn’t increase the size of any ability’s
            area of effect.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Disengage Bonus
        </v-card-title>
        <v-card-text>
            Your kit’s disengage bonus increases the number of
            squares you can shift when you take the Disengage move
            action. You can shift an additional number of squares
            equal to the bonus when you use Disengage.
        </v-card-text>
    </v-card>
</template>