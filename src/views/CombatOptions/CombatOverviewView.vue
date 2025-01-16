<script setup lang="ts">
    const creatureObjectSizes = [
        {
            size: '1T',
            creature: 'Pixie',
            object: 'Potato',
        },
        {
            size: '1S',
            creature: 'Polder',
            object: 'Heavy Armor',
        },
        {
            size: '1M',
            creature: 'Human',
            object: 'Wardrobe',
        },
        {
            size: '1L',
            creature: 'Hakaan',
            object: 'Anvil',
        },
        {
            size: '2',
            creature: 'Ogre',
            object: 'Carriage',
        },
        {
            size: '3',
            creature: 'Treant',
            object: 'Sailboat',
        },
        {
            size: '4',
            creature: 'Ancient Dragon',
            object: 'Galley',
        },
        {
            size: '5',
            creature: 'Kraken',
            object: 'Castle',
        },
    ]
</script>

<template>
    <h1>Combat Overview</h1>
    <p class="mx-3">
        When the heroes face a problem that can be solved only
        with action, or when they come up against creatures who
        want to harm them, it’s time to throw down!
    </p>
    <br>
    <v-card>
        <v-card-title>
            Set The Map
        </v-card-title>
        <v-card-text>
            When combat begins, the Director should position
            miniatures or tokens on a gridded map to represent the
            environment, the heroes, their foes, and any other
            creatures in the battle.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Size and Space
        </v-card-title>
        <v-card-text>
            A creature’s size indicates how many squares they occupy
            during combat, which defines the creature’s space. <b>If a
            creature’s size is 1, they occupy a space of 1 square. If a
            creature is larger than 1 square, their size equals the
            number of squares they take up in length, width, and
            height.</b> For example, a horse has a size of 2, which means
            that during combat, they occupy a space that is 2 squares
            long, 2 squares wide, and 2 squares high. You could also
            think of that space as a cube that is 2 squares on all sides.
            <br>
            If a creature is a size 1, their size value includes the letter
            T, S, M, or L, abbreviations of tiny, small, medium, and
            large respectively. Since the minimal amount of space a
            creature can take up during combat is 1, this letter
            indicates the difference between tiny pixies, small polders,
            medium humans, and large hakaan, each of which occupy
            of a space 1 square in combat. These sizes in order from
            smallest to largest are 1T, 1S, 1M, and 1L.
            <br><br>
            Objects can also have a size rating. If an object has an O (an
            abbreviation for oblong) next to its size, it indicates that
            the object’s size isn’t the number of squares the object
            occupies, but rather it’s relative mass and weight to a
            creature of equivalent size. If an ability or feature allows
            you to interact with objects of a certain size that rule
            includes all objects of that size, oblong or otherwise.
            <br><br>
            The Creature and Object Sizes table shows examples sizes
            of creatures and objects up to size 5, but there is no limit
            to what a creature or object’s size could be.
        </v-card-text>
    </v-card>
    <br>
    <h3>Create and ObjectSizes</h3>
    <v-table density="compact" hover>
        <thead>
            <tr>
                <th class="text-left">Size</th>
                <th class="text-left">Example Creature</th>
                <th class="text-left">Example Object</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in creatureObjectSizes" :key="item.size">
                <td>{{ item.size }}</td>
                <td>{{ item.creature }}</td>
                <td>{{ item.object }}</td>
            </tr>
        </tbody>
    </v-table>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Sides
        </v-card-title>
        <v-card-text>
            Every combat encounter is a conflict between two sides.
            The heroes and any of their allies are one side, controlled
            by the players. Any creatures who oppose the heroes are
            the other side, controlled by the Director. All creatures
            who oppose the heroes are on the same side, even if those
            creatures also oppose each other. For example, if the
            heroes are battling a group of bandits when a kingfissure
            worm suddenly bursts into the fray to devour player
            characters and brigands alike, the worm is still on the side
            of the bandits for the purpose of the game’s combat rules.
            <br><br>
            <h3>NPC ALLIES</h3>
            If an NPC ally fights alongside the heroes, the Director should
            give the players the ally’s stat block and let them control the NPC
            during combat. The Director has enough to worry about. As well,
            any missteps, mistakes, or triumphs the ally makes will be thanks
            to the decisions of the players and not the Director, which can
            make the outcome of the battle more satisfying for the players.
        </v-card-text>
    </v-card>
</template>