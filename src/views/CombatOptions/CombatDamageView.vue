<script setup lang="ts">
</script>

<template>
    <h1>Damage</h1>
    <p>
        Whenever you take damage, you reduce your Stamina by
        an amount equal to the damage taken
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Strikes And Damage
        </v-card-title>
        <v-card-text>
            When you make a strike that deals damage with a power
            roll, you add the characteristic score used to modify the
            power roll to the damage dealt by the power roll. This
            bonus does not apply to Area abilities that deal damage.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Damage Types
        </v-card-title>
        <v-card-text>
            Typical damage, such as that caused by weapons, falling,
            traps, and monstrous claws, has no type associated with it.
            That’s because for most creatures, there’s no difference in
            the amount of harm caused by being run through with a
            pike, dropped from a height onto a stone floor, slashed by
            a pendulum scythe, or skewered on a minotaur’s horns.
            <br>
            However, when it comes to elemental and magical damage
            sources, some creatures might have an immunity or
            weakness to that damage. As such, abilities and effects
            note when they deal any of the following damage types:
            acid, cold, corruption, fire, holy, lightning, poison, psychic,
            or sonic.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Damage Immunity
        </v-card-title>
        <v-card-text>
            Damage immunity means that a creature can ignore some
            or all of the damage they would usually take from certain
            attacks or effects.
            <br>
            Damage immunity might have a damage type associated
            with it, expressed as “[damage type] immunity.” Damage
            immunity often has a value associated with it, so that one
            creature’s stat block notes “fire immunity 5,” while
            another creature has “lightning immunity 5.”
            <br>
            <b>Whenever a target with damage immunity takes damage
            of the indicated type, they can reduce the damage by the
            value of the immunity (to a minimum of 0 damage).</b> If the
            value of the immunity is “all,” then the target can take no
            damage of the indicated type.
            <br>
            Certain creatures also have forced move damage immunity.
            Whenever they take damage from forced movement, that
            damage is reduced by a number equal to their immunity.
            <br>
            <b>Damage immunity should be the last thing applied when
            calculating damage.</b> For instance, if your hero has fire
            immunity 5 and takes 8 fire damage, you would take 3
            damage. If a someone first halved the damage with a
            triggered action, you would take 4 damage from the attack
            before immunity is applied, with immunity then reducing
            the damage to 0.
            <br>
            If multiple damage immunities apply to a source of
            damage, only the immunity with the highest value applies.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Damage Weakness
        </v-card-title>
        <v-card-text>
            <b>Damage weakness works like damage immunity, except
            that creatures take extra damage whenever they take
            damage of the indicated type.</b> For instance, if a creature
            has fire weakness 5 and is dealt 10 fire damage, they take
            15 fire damage instead.
            <br>
            A creature who has “damage weakness X” with no specific
            type or keyword indicated has weakness of the indicated
            amount when they take damage of any type.
            <br>
            If you have both damage immunity and weakness applied
            to a source of damage, apply both. First apply weakness,
            then immunities.
        </v-card-text>
    </v-card>
</template>