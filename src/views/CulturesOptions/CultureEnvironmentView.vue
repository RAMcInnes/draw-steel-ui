<script setup lang="ts">
</script>

<template>
    <h1>Environment</h1>
    <p class="mx-3">
        Your culture’s environment aspect describes where the
        people of that culture spend most of their time. Is your
        culture centered in a bustling city or a small village? Did
        you spend your early life in an isolated monastery? Or did
        you wander the wilderness, never staying in one place for
        long?
        <br><br>
        When you build a culture, select its environment aspect
        from the following options: nomadic, rural, secluded, urban,
        or wilderness. You then gain skill options from your chosen
        environment. All of these environments can be found in any
        sort of terrain, whether aboveground, in subterranean
        caverns, deep in trackless forest, or even underwater.
    </p>
    <br>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Nomadic
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                A nomadic culture travels from place to place to survive.
                They might follow animal migrations or the weather, travel
                to sell their wares or services, or simply enjoy a restless
                lifestyle full of new experiences and peoples. Those who
                grow up in nomadic cultures learn to navigate the
                wilderness and interact with others.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Exploration</i> or
                <i>Interpersonal</i> skill groups.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Rural
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                A rural culture is one located in a town, village, or smaller
                settled enclave. People dwelling in such places often
                cultivate the land, trade goods or services with travelers
                passing through, harvest fish from the sea, or mine metals
                and gems from the earth.
                <br><br>
                Living among a small population, most folks in a rural
                community learn a trade and are handed down bits of
                essential knowledge to help their community survive. For
                example, when a rural culture has only one blacksmith, it’s
                important to have an apprentice already learning at the
                anvil well before that smith starts to get old. If the only
                priest in town gets the sniffles, folks want an acolyte ready
                to wear the fancy robes should the worst occur.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Crafting</i> or <i>Lore</i> skill
                groups.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Secluded
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                A secluded culture is based in one relatively close-quarters
                structure—a building, a cavern, and so forth—and interacts
                with other cultures only rarely. Such places are often
                buildings or complexes such as monasteries, castles, or
                prisons. Folk in a secluded culture have little or no reason
                to leave their home or interact with other cultures on the
                outside, but might have an awareness of those cultures and
                of events happening outside their enclave.
                <br><br>
                When people live together in close quarters, they typically
                learn to get along. They often spend much time in study or
                introspection, as there is not much else to do in seclusion.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Interpersonal</i> or <i>Lore</i> skill
                groups.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Urban
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                An urban culture is always centered in a city. Such a culture
                might arise within the walls of Capital, a massive
                metropolis with a cosmopolitan population; within a
                network of caverns that hold an underground city; or in any
                other place where a large population lives relatively close
                together. The people of urban cultures often learn to
                effectively misdirect others in order to navigate the crowds
                and the political machinations that can come with city life.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Interpersonal</i> or <i>Intrigue</i>
                skill groups.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Wilderness
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                A wilderness culture doesn’t attempt to tame the terrain in
                which its people live, whether desert, forest, swamp, tundra,
                ocean, or more exotic climes. Instead, the folk of such a
                culture thrive amid nature, taking their sustenance and
                shelter from the land itself. A wilderness culture might be a
                circle of druids protecting a great wode, a band of brigands
                hiding out in desert caves, or a camp of orc mercenaries
                who call the trackless mountains home. People in a
                wilderness culture learn how to use the land for all they
                need to live, typically crafting their own tools, clothing, and
                more.
                <br><br>
                <b>Skill Options</b>: One skill from the <i>Crafting</i> or <i>Exploration</i>
                skill groups.
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>