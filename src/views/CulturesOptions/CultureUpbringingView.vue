<script setup lang="ts">
</script>

<template>
    <h1>Upbringing</h1>
    <p class="mx-3">
        Your culture’s upbringing aspect is a more specific and
        personal part of your hero’s story, describing how you were
        individually raised within your culture. Were you trained to
        become the newest archmage in a secret order of wizards,
        or to be a sword-wielding bodyguard who protected that
        arcane organization? Did you learn to delve deep into
        mines looking for ore in a mountain kingdom, or did you
        build machines meant to dig faster and deeper than any
        person could alone? Whatever your culture, your
        upbringing makes you special within that culture.
        <br><br>
        Pick your upbringing aspect from the following list:
        academic, creative, illegal, labor, martial, or noble. You then
        gain skill options from your chosen aspect.
    </p>
    <br>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Academic
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Heroes with an academic upbringing were raised by people
                who collect, study, and share books and other records.
                Some academics focus on one area of study, such as a
                college for wizards dedicated to the study of magic, or a
                church that teaches the word of one deity. People in an
                academic culture learn how to wield the power that is
                knowledge.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Lore</i> skill group.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Creative
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Heroes with a creative upbringing were raised among folk
                who create art or other works valuable enough to trade. A
                creative culture might produce fine art such as dance,
                music, or sculpture, or more practical wares such as
                wagons, weapons, tools, or buildings. People in such
                cultures learn the value of quality crafting and attention to
                detail.
                <br><br>
                <b>Skill Options</b>: The <i>Music</i> or <i>Perform</i> skill, or one skill from
                the <i>Crafting</i> skill group.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Illegal
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Heroes with an illegal upbringing had caregivers who
                performed activities that other folk—whether within or
                outside their culture—considered unlawful. A band of
                pirates, a guild of assassins, or an organization of spies all
                commit unlawful acts for money. People with illegal
                upbringings typically don’t mind breaking the rules when it
                suits them—and are good at making sure no one finds out
                they did.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Intrigue</i> skill group.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Labor
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                People who labor for a living survive through cultivation,
                typically raising crops or livestock on a farm; by harvesting
                natural resources, whether by hunting, trapping, logging, or
                mining; or through manual labor tied to settlement and
                trade, such as construction, carting, loading cargo, and so
                forth. People with a labor upbringing know the value of
                hard work.
                <br><br>
                <b>Skill Options</b>: One of the <i>Blacksmithing</i> or <i>Handle Animals</i>
                skills, or one skill from the <i>Exploration</i> skill group.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Martial
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Heroes who have a martial upbringing are raised by
                warriors. These might be the soldiers of an established
                army, a band of mercenaries, a guild of monster-slaying
                adventurers, or any other folk whose lives revolve around
                combat. Heroes with a martial upbringing are always ready
                for a fight—and they know how to finish that fight.
                <br><br>
                <b>Skill Options</b>: One of the <i>Alertness</i>, <i>Blacksmithing</i>, <i>Climb</i>,
                <i>Endurance</i>, <i>Fletching</i>, <i>Intimidate</i>, <i>Monsters</i>, <i>Ride</i>, <i>Strategy</i>,
                or <i>Track</i> skills.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Noble
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Heroes with a noble upbringing were raised by leaders who
                rule over others and play the games of politics to maintain
                power. Many families are nobles by birthright, but some
                cultures have noble titles that are earned through deeds or
                popularity. Whatever the case, heroes with this background
                understand why the whispered words in the right ear can
                sometimes be more powerful than any army.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Interpersonal</i> skill group.
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>