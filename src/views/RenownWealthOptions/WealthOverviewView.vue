<script setup lang="ts">
    const heroWealth = [
        {
            score: 1,
            individual: "Mundane clothing, gear, armor, implements, and weapons; meals or drinks at a common tavern; stay at a common inn; passage on a boat",
            group: "Horse and cart; dinner at a fine tavern; stay at a fine inn",
        },
        {
            score: 2,
            individual: "Horse and cart; dinner at a fine tavern; stay at a fine inn",
            group: "Catapult; small house",
        },
        {
            score: 3,
            individual: "Catapult; small house",
            group: "Library; tavern; manor home; sailing boat",
        },
        {
            score: 4,
            individual: "Library; tavern; manor home; sailing boat",
            group: "Church; keep; wizard tower",
        },
        {
            score: 5,
            individual: "Church; keep; wizard tower",
            group: "Castle; shipyard",
        },
        {
            score: 6,
            individual: "Castle; shipyard",
            group: "Private island",
        },
    ];
</script>

<template>
    <h1>Wealth</h1>
    <p class="mx-3">
        This game isn’t about accumulating and counting every
        piece of copper you acquire. Instead of tracking a bank
        account, the amount of stuff your hero can purchase is
        based on their wealth score. As you accomplish more
        deeds, you acquire more treasure and rewards from
        grateful NPCs that allow you to be an even more effective
        hero.
        <br><br>
        The Hero Wealth table shows the types of items, gear,
        services, property, and more that you can purchase at in
        the game. The table shows both the purchases that heroes
        can acquire individually, and that a party can acquire
        when the characters pool their resources together as a
        group.
        <br><br>
        In order for a hero to make a purchase, the item must be
        available to them. The Director can also decide that a hero
        can only afford one or a limited number of purchases. For
        example, a hero with a Wealth score of 3 can buy a small
        house, but their Wealth score doesn’t they can buy up
        every available small house to become a landlord.
        <br><br>
        This isn’t an exhaustive list, but you and the Director can
        use the table to judge what your character can and can’t
        purchase. For instance, the price of an ox isn’t on this list,
        but you can reasonably assume that if you can buy a horse,
        you can probably afford an ox as well. (Don’t @ us, farm
        nerds.) And if you can’t afford something you want, fear
        not! You might still be able to acquire a specific good or
        service through negotiation, or by trading your heroic
        services instead of spending cash. Treasures such as magic
        swords and psionic crowns and even healing potions are
        rare, and typically can’t be purchased. Instead, they’re
        found on adventures, traded for other treasures, given as
        rewards by NPCs, or crafted by the heroes.
    </p>
    <br>
    <h3>Hero Wealth</h3>
    <v-table density="compact" hover>
        <thead>
            <tr>
                <th class="text-left">Score</th>
                <th class="text-left">Individual</th>
                <th class="text-left">Group</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="item in heroWealth" :key="item.score">
                <td>{{ item.score }}</td>
                <td>{{ item.individual }}</td>
                <td>{{ item.group }}</td>
            </tr>
        </tbody>
    </v-table>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Gaining Wealth
        </v-card-title>
        <v-card-text>
            Each hero starts with a Wealth score of 1 that can be
            improved by their choice of career during character
            creation. The hero’s Wealth score increases whenever they
            find and keep a massive amount of monetary treasure,
            such as a hoard of coins and gems from a dragon’s lair or
            several unique and valuable paintings from a monarch as a
            reward for a job well done.
            <br><br>
            In general, a hero’s wealth score increases about once
            every other level of play. The Director can increase this
            rate if they wish.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Losing Wealth
        </v-card-title>
        <v-card-text>
            As an optional rule, the Director can allow a hero to make
            a purchase that is one level above their wealth level. If this
            occurs, the hero’s Wealth score is reduced by 1 after
            making the purchase.
        </v-card-text>
    </v-card>
</template>