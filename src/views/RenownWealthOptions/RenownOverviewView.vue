<script setup lang="ts">
    const renownAndFollowers = [
        {
            renown: 3,
            followers: 1,
        },
        {
            renown: 6,
            followers: 2,
        },
        {
            renown: 9,
            followers: 3,
        },
        {
            renown: 12,
            followers: 4,
        },
    ]
</script>

<template>
    <h1>Renown</h1>
    <p class="mx-3">
        As you accomplish heroic deeds, your fame allows you to
        influence NPCs and attract followers. Your infamy among
        enemies also grows, and their hatred and fear of you can
        cause foes to lash out during negotiations (see
        Negotiation). Every hero has a Renown score that
        represents how they can use their reputation to influence
        others. The higher the score, the greater your impact with
        those who know of your legend.
        <br><br>
        At the start of character creation, your Renown is 0. Some
        careers can increase your initial Renown score (see
        Careers).
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Increasing Renown
        </v-card-title>
        <v-card-text>
            Your starting Renown score is 0 unless modified by your
            choice of career or other rule. Renown typically increases
            at the end of an adventure, often after the
            acknowledgement of a powerful NPC that you helped save
            them, their family, their home, or their organization. That
            NPC and anyone else who witnessed your heroics can tell
            the tale, and from there, your legend grows.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Influence Negotiation
        </v-card-title>
        <v-card-text>
            Renown changes the way NPCs respond to heroes during
            negotiations. For more information, (see <i>Negotiation</i>).
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Attract Followers
        </v-card-title>
        <v-card-text>
            You can also use your Renown score to attract and employ
            followers who perform different duties or favors for you.
            The Renown Followers table shows how many followers a
            hero can have at one time based on Renown. You can
            always let go of a follower in your employ to hire a new
            one.
            <br><br>
            You can recruit as many new followers as your Renown
            allows as a respite activity, provided you are in a place or
            have a means of communication that allows you to recruit
            such followers.
            <v-table density="compact" hover>
                <thead>
                    <tr>
                        <th class="text-left">Renown</th>
                        <th class="text-left">Number of Followers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in renownAndFollowers" :key="item.renown">
                        <td>{{ item.renown }}</td>
                        <td>{{ item.followers }}</td>
                    </tr>
                </tbody>
            </v-table>
            <br>
            <h3>Stronghold</h3>
            Many followers stay at a stronghold, which is a home base
            you designate and can change. Your stronghold is typically
            a location shared by your fellow heroes. It could be a few
            rooms at an inn in a sleepy village, an old castle you
            claimed after clearing it of monsters, or a fleet of sailing
            ships.
            <br><br>
            <h3>Follower Types</h3>
            When you attract a new follower, you decide on their
            name and ancestry, and choose what role they play in their
            service to you.
            <br><br>
            <div style="background-color: darkgray;">
                <h4>ARTISAN</h4>
                Artisans are crafting experts who can contribute to your
                research and crafting projects (see Research and Crafting).
                An artisan can contribute one project roll per day to a
                project you choose while they remain at your stronghold,
                provided they have access to the necessary materials.
                <br><br>
                When you recruit an artisan, choose four skills from the
                crafting skill group that they know. An artisan has a Might
                or Agility score of 1 (your choice), a Reason score of 1, and
                a 0 in all other characteristics. They know Caelian and two
                other languages of your choice.
            </div>
            <br>
            <h4>RETAINERS</h4>
            Retainers are heroic NPCs who adventure alongside the
            player characters. They are controlled by players in
            combat and much simpler to run and less powerful than
            the player characters. A hero can only have one retainer in
            their service at a time unless the Director deems
            otherwise.
            <br><br>
            Rules for retainers are found in the Draw Steel: Monsters
            core rulebook.
            <br><br>
            <div style="background-color: darkgray;">
                <h4>SAGE</h4>
                Sages are research experts who can contribute to your
                research and crafting projects. A sage can contribute one
                project roll per day to a project you choose while they
                remain at your stronghold, provided they have access to
                the necessary materials.
                <br><br>
                When you recruit a sage, choose four skills from the lore
                skill group that they know. A sage has a Reason and
                Intuition score of 1, and a 0 in all other characteristics.
                They know Caelian and two other languages of your choice.
            </div>
        </v-card-text>
    </v-card>
</template>