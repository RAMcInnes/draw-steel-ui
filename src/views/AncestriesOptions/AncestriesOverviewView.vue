<script setup lang="ts">
    const ancestryMeasurements = [
        {
            ancestry: `Devil`,
            height: `5'0"-6'0"`,
            weight: `120-250`,
            life: `70-120`,
        },
        {
            ancestry: `Dragon Knight`,
            height: `6'0"-7'0"`,
            weight: `200-350`,
            life: `50-90`,
        },
        {
            ancestry: `Dwarf`,
            height: `4'0"-4'6"`,
            weight: `500-1,000`,
            life: `700-1,500`,
        },
        {
            ancestry: `Wode Elf`,
            height: `5'6"-6'6"`,
            weight: `100-150`,
            life: `1,200-3,000`,
        },
        {
            ancestry: `High Elf`,
            height: `5'6"-6'6"`,
            weight: `100-150`,
            life: `1,200-3,000`,
        },
        {
            ancestry: `Hakaan`,
            height: `7'6"-8'6"`,
            weight: `1,000-2,000`,
            life: `300-500`,
        },
        {
            ancestry: `Human`,
            height: `5'0"-6'0"`,
            weight: `100-300`,
            life: `70-120`,
        },
        {
            ancestry: `Memonek`,
            height: `5'0"-6'0"`,
            weight: `50-100`,
            life: `70-120`,
        },
        {
            ancestry: `Orc`,
            height: `5'6"-6'6"`,
            weight: `150-300`,
            life: `50-90`,
        },
        {
            ancestry: `Polder`,
            height: `3'0"-3'6"`,
            weight: `20-50`,
            life: `50-90`,
        },
        {
            ancestry: `Time Raider`,
            height: `5'0"-6'0"`,
            weight: `120-250`,
            life: `50-90`,
        },
    ]
</script>

<template>
    <h1>Ancestries Overview</h1>
    <p>
        Fantastic peoples inhabit the worlds of Draw Steel. Among
        them are devils, dwarves, elves, time raiders—even
        humans with their ability to sense the supernatural.
        Your hero is one of these folks! The fantastic ancestry you
        choose bestows benefits that come from your anatomy
        and physiology. This choice doesn’t grant you cultural
        benefits, like crafting or lore skills. While many game
        settings have cultures made of mostly one ancestry, other
        cultures and worlds have a cosmopolitan mix of peoples.
        Ancestry describes how you were born. Culture (in the
        next chapter) describes how you grew up. If you want to
        be a wode elf who was raised in a forest among other
        wode elves, you can do that! If you want to play a wode elf
        who was raised in a underground city of dwarves, humans,
        and orcs, you can do that too!
    </p>
    <br>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>
                On The Origin Of Species
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Orden is a fantasy world. It works on principles similar to
                those many people throughout history believed governed
                the real world. “I dunno, a god did it probably.”
                <br>
                Humans, elves, orcs, dwarves, dragons, all have creator
                gods—the elder gods, four of whom made the world for
                some reason. Maybe they were bored.
                <br>
                The fashion among those gods for creating new, intelligent,
                species petered out after the orcs. Once humans came
                along and invented war, it stopped being fun.
                <br>
                It may be all species were created by gods. That’s certainly
                what a lot of people throughout our own history assumed.
                Orden has no Darwin and probably won’t ever. There’s
                still inheritance. People expect children to look like their
                parents, but there aren’t evolutionary pressures except on
                a very local scale.
                <br>
                And in a world where powerful, world-altering magics are
                available, mortals sometimes try to recreate the gods'
                efforts. Some succeed, and new intelligent, speaking
                peoples are born.
                <br>
                However, mortals are not gods and lack their ineffable
                wisdom. They are, in fact, very effable. Many have sought
                the power to create. It is available to any sorcerer of neargodlike power with the right rituals, though these days
                that power is very obscure. Creating new intelligent
                species was easier for mortal wizards back in the youth of
                the world when magic was friskier.
                <br>
                In every instance in recorded history, attempts by mortals
                to make obedient servitor species backfire. The steel
                dwarves worked marvels with valiar, the truemetal, and
                the miracle mineral iridoss, known as prismacore, that
                grants objects a semblance of life. Eventually their science
                and magics produced the omnivok, machines that were
                self-aware. Perhaps uniquely, when the dwarves realized
                they had created beings equal to themselves they stopped
                their work and gave their creation full rights and
                independence, preferring to work with them rather than
                attempt, and inevitably fail, to be their masters.
                <br>
                Normally, it doesn’t work out that nicely. Even with the
                best of intentions, things go awry. The Dragon Phalanx
                were created by Good King Omund’s wizard Vitae to be the
                perfect knights, dispensing justice throughout the lands.
                But the same sorceries that grant self-awareness also
                grant independence. Agency. And though they enjoyed
                thirty years of peace and justice, eventually the dragon
                knights were betrayed by one of their own, seduced by the
                power offered by Ajax.
                <br>
                The law of unintended consequences applies to the just
                and the unjust alike.
                <br>
                Usually when some powerful being tries to create an
                intelligent species, it’s for less than virtuous reasons. The
                synliroi are responsible for several intelligent species in
                the timescape, each an attempt to create a perfectly
                obedient servitor species. The most notorious example are
                the kuran’zoi, the time raiders who rebelled almost
                immediately and carry a burning hate for the voiceless
                talkers to this day.
                <br>
                A perhaps less egregious use of this power is called
                quickening. Used when a powerful mage lives in and
                amongst some clever species just on the cusp of selfawareness. These instances, which are much more
                numerous than creating a new species from whole cloth,
                are more like the concept of uplifting found in science
                fiction. The mage or witch or shaman didn’t create
                anything. They just gave these cute, clever, frog-things a
                little boost. A little nudge. And suddenly there are
                angualotls walking around having conversations with each
                other, wondering when someone will invent a fabric that
                doesn’t get moldy in the swamp.
                <br>
                This also carries serious ethical repercussions! “You didn’t
                create angulotls! You screwed up some perfectly good
                frogs! Look at them, you gave them anxiety!”
                <br>
                This is only how it works on Orden. You may have
                completely different explanations for why there are
                several different intelligent species walking around in
                your world. Or no explanation! Or competing and
                irreconcilable theories on the matter! Use whatever
                inspires you.
                <br>
                At the end of the day, if you throw out all of this and
                replace it with something you made up, it will be better.
                Because it’s yours!
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <br>
    <v-card>
        <v-card-title>
            Measurements
        </v-card-title>
        <v-card-text>
            How tall is a polder? How long does a dwarf live? The
            Ancestry Measurements table provides the average adult
            height and weight ranges and life expectancy for each of
            the ancestries in this chapter. These measurements are
            just average, and many folks in the world exist outside of
            them, so your hero can too!
            Revenants are not on the table, since they live until
            destroyed or moving on after completing their unfinished
            business and their height and weight is based on their
            previous ancestry.
            Humans have the potential to live a little longer on Orden
            than they do in the real world thanks to the presence of
            magic.
        </v-card-text>
    </v-card>
    <br>
    <v-table density="compact">
        <thead>
        <tr>
            <th class="text-left">Ancestry</th>
            <th class="text-left">Height in Feet/Inches</th>
            <th class="text-left">Weight in Pounds</th>
            <th class="text-left">Life Expectancy in Years</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in ancestryMeasurements" :key="item.ancestry">
            <td>{{ item.ancestry }}</td>
            <td>{{ item.height }}</td>
            <td>{{ item.weight }}</td>
            <td>{{ item.life }}</td>
        </tr>
        </tbody>
    </v-table>
    <br>
    <v-card>
        <v-card-title>
            Starting Size and Speed
        </v-card-title>
        <v-card-text>
            Unless otherwise noted, a character from any of these
            ancestries is size 1M and has a speed of 5 and a stability of 0.
            Where an ancestry provides you with an ability, see
            Abilities for details of the ability format.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Ancestry Trait
        </v-card-title>
        <v-card-text>
            Each ancestry has at least one signature trait, which your
            hero gets for free if they take the ancestry. This is a
            defining feature that other heroes of your ancestry also
            possess.
            <br>
            There are also purchased traits. You don’t get every
            purchased trait your ancestry has to offer. Instead, your
            ancestry details a budget of ancestry points you can use to
            purchase traits. Each trait has a point cost that you pay to
            grant the benefit to your hero.
            <br>
            For example, the devil ancestry has the signature trait
            Silver Tongue and 3 ancestry points to spend on seven
            different traits. A player creating a devil hero could buy
            Barbed Tail, Big Horns, and Glowing Eyes, which each cost
            1 ancestry point, or they could buy one of those traits and
            purchase Beast Legs or Wings, which each cost 2 points.
            They couldn’t buy both Beast Legs and Wings, since their
            combined cost is 4, which is over the ancestry points
            budget for the devil.
        </v-card-text>
    </v-card>
</template>