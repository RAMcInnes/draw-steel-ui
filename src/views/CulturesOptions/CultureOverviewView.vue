<script setup lang="ts">
    const ancestralCultures = [
        {
            ancestry: 'Devil',
            language: 'Anjali',
            environment: 'Urban',
            organization: 'Bureaucratic',
            upbringing: 'Academic'
        },
        {
            ancestry: 'Dragon Knight',
            language: 'Vastariax',
            environment: 'Secluded',
            organization: 'Bureaucratic',
            upbringing: 'Martial'
        },
        {
            ancestry: 'Dwarf',
            language: 'Zaliac',
            environment: 'Secluded',
            organization: 'Bureaucratic',
            upbringing: 'Creative'
        },
        {
            ancestry: 'Wode Elf',
            language: 'Yllric',
            environment: 'Wilderness',
            organization: 'Bureaucratic',
            upbringing: 'Martial'
        },
        {
            ancestry: 'High Elf',
            language: 'Hyrallic',
            environment: 'Secluded',
            organization: 'Bureaucratic',
            upbringing: 'Martial'
        },
        {
            ancestry: 'Hakaan',
            language: 'Vhoric',
            environment: 'Rural',
            organization: 'Communal',
            upbringing: 'Labor'
        },
        {
            ancestry: 'Human',
            language: 'Vaslorian',
            environment: 'Urban',
            organization: 'Communal',
            upbringing: 'Labor'
        },
        {
            ancestry: 'Memonek',
            language: 'Axiomatic',
            environment: 'Nomadic',
            organization: 'Communal',
            upbringing: 'Academic'
        },
        {
            ancestry: 'Orc',
            language: 'Kaliac',
            environment: 'Wilderness',
            organization: 'Anarchic',
            upbringing: 'Creative'
        },
        {
            ancestry: 'Polder',
            language: 'Khoursirian',
            environment: 'Urban',
            organization: 'Communal',
            upbringing: 'Creative'
        },
        {
            ancestry: 'Time Raider',
            language: 'Voll',
            environment: 'Nomadic',
            organization: 'Anarchic',
            upbringing: 'Martial'
        },
    ]
</script>

<template>
    <h1>Culture Overview</h1>
    <p class="mx-3">
        A hero’s culture describes the beliefs, customs, values, and
        way of life held by the community in which they were
        raised. This community provides life experiences that give a
        character some of their game statistics. Even if a hero
        doesn’t share their culture’s values, those values shaped
        their early development and way of life. In fact, some
        people become heroes primarily from the rejection of the
        ways of their culture.
        <br><br>
        For our purposes, a hero’s culture represents people, not a
        place. Yes, you might have grown up in the city of Capital,
        but your culture is more specific than that. One hero’s
        culture might be House Alvaro, a noble house in Capital
        where they were raised. Another’s culture could be a group
        or organization that moves around, such as a band of
        pirates or a secret order of sorcerers sworn to protect
        books of fell magic. It helps to get specific when thinking
        about your culture, and working with the four aspects of a
        culture can help you do that: <b>Language</b>, <b>Environment</b>,
        <b>Organization</b>, and <b>Upbringing</b>.
    </p>
    <br>
    <h3>Why Build a Culture?</h3>
    <p class="mx-3">
        Building a character is about more than adding up your
        stats, picking skills and abilities, and recording that
        information on a character sheet. You’re building a hero—a
        main character in a story, be it a one-shot or a heroic
        campaign. Think about the personality and the past of who
        you are creating. That’s why the game lets you build a
        culture rather than simply saying, “Pick three skills and a
        bonus language.” We want players to imagine their heroes
        as complex and intricate characters.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Using Culture
        </v-card-title>
        <v-card-text>
            Directors can use the rules in this section to build cultures
            that players can choose for their characters. Players can use
            these rules to build a unique culture or modify an existing
            culture for their character, working with the Director to
            find a right place for that culture within the world of the
            campaign’s world.
            <br><br>
            In many worlds, at least some cultures have a majority
            ancestry. The people of Bedegar, a duchy in Vasloria, are
            mostly humans. The folk dwelling in the Great Wode, a
            forest realm north of Bedegar, are primarily wode elves.
            However, you can always choose to be from one of these
            cultures and take a different ancestry. A dwarf raised in the
            culture of the Great Wode speaks Yllyric and probably
            knows a lot about nature, while a dwarf raised in the dwarf
            thanedom of Kal Kalavar speaks Zaliac and might know a
            good deal about smithing.
            <br><br>
            You can build your culture one aspect at a time or use the
            following tables if you want to make something quick or see
            an example. If you want to quickly create an archetypical
            culture for a hero who grew up surrounded by mostly other
            members of their ancestry, you can create your culture
            quickly by using or modifying the aspect options on the
            Typical Ancestry Cultures table. Revenants are missing
            from this table because they don’t gain their ancestry until
            after they die. If you’d rather quickly create a culture based
            on a cultural archetype, such as a noble house or pirate
            crew, use the Archetypical Cultures table.
        </v-card-text>
    </v-card>
    <br>
    <v-table density="compact" hover>
        <thead>
        <tr>
            <th class="text-left">Ancestry</th>
            <th class="text-left">Language</th>
            <th class="text-left">Environment</th>
            <th class="text-left">Organization</th>
            <th class="text-left">Upbringing</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in ancestralCultures" :key="item.ancestry">
            <td>{{ item.ancestry }}</td>
            <td>{{ item.language }}</td>
            <td>{{ item.environment }}</td>
            <td>{{ item.organization }}</td>
            <td>{{ item.upbringing }}</td>
        </tr>
        </tbody>
    </v-table>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Culture Benefits
        </v-card-title>
        <v-card-text>
            The culture you choose or create grants you the following
            benefits:
            <br>
            <br>• You know the language of your culture, in addition to
            knowing Caelian.
            <br>• From the environment, organization, and upbringing
            aspects of your culture, you gain access to skills. You can
            select one skill from each aspect’s list of options. (See
            Skills for details.)
            <br>• You gain an edge on tests to recall lore about your
            culture, and on tests to influence and interact with
            people of your culture.
        </v-card-text>
    </v-card>
</template>