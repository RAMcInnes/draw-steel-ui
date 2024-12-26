<script setup lang="ts">

</script>

<template>
    <h1>Power Rolls</h1>
    <p>
        Whenever a hero or other creature in the game attempts a
        task with an uncertain outcome, such as attacking a foe,
        sneaking by a guard patrol without being seen, or
        persuading a queen to provide military aid, the creature
        makes a Power Roll to determine the outcome of their
        actions.
    </p>
    <br>
    <v-card>
        <v-card-title>
            Types of Power Rolls
        </v-card-title>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Ability Roll
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    An Ability Roll is used when you activate certain abilities to
                    determine their impact. For instance, if a fury uses their
                    Brutal Slam ability to strike an enemy, their ability roll
                    determines how much damage the enemy takes and how far back the
                    enemy is pushed.
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Tests
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    A Test is a Power Roll you make outside of using your
                    abilities to affect or interact with the world around you. A
                    Tactician might not have an ability that lets them climb up
                    the face of a cliff, so climbing is an activity they can
                    attempt with a test. An Elementalist doesn’t have an ability
                    that lets them automatically intimidate a cultist into
                    backing down from a fight, but they can make a Test if they
                    want to try.
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>

    <br>

    <v-card>
        <v-card-title>
            Making a Power Roll
        </v-card-title>
        <p>
            When you make a power roll, you roll two ten-sided dice
            (sometimes noted as 2d10 in the rules) and add one of
            your characteristics. The characteristic you add depends
            on the kind of roll you’re making, as outlined in 
            <b>Abilities</b> and <b>Tests</b>.
        </p>
        <br>
        <v-expansion-panels>
            Power Roll Outcomes
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Tier 1
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    If your Power Roll result is <b>11 or lower</b>, it is a <b>Tier
                    1 result</b>. This is the worst result a Power Roll can have. If
                    you’re using an Ability, a Tier 1 result means you still do
                    something, but the impact of what you do is minimal.
                    With this result, a strike ability might deal a little bit of
                    damage and not do much else. For a Test, a Tier 1 result
                    means you fail at what you set out to do, and you might
                    also suffer a negative consequence.
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Tier 2
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    If your Power Roll result is <b>12 to 16</b>, it is a <b>Tier 2
                    result</b>. This is the average result of many power rolls,
                    especially for heroes who are 1st level. When using an
                    Ability, a Tier 2 result means that what you do has a
                    moderate impact. With this result, an strike ability deals
                    a decent amount of damage and has an effect that briefly
                    helps allies or hinders enemies. For a Test, a Tier 2 result
                    means you might succeed at what you set out to do—
                    though depending on the difficulty, success might have a
                    cost.
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Tier 3
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    If your Power Roll result is <b>17 or higher</b>, it is a <b>Tier
                    3 result</b>. This is the best result a power roll can have.
                    When using an Ability, a Tier 3 result means you deliver
                    the maximum impact possible. With this result, an strike
                    ability deals a lot of damage and has a powerful or
                    lasting effect on enemies or allies. For a Test, a Tier 3
                    result means you succeed at what you set out to do. If
                    the test has an easy difficulty, you also get a little
                    something extra in addition to your success.
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <br>
        <h3>
            Downgrade a Power Roll
        </h3>
        <p>
            Whenever you make a Power Roll, you can downgrade it to
            select the result of a lower tier. For instance, if an ability
            has a Tier 3 result that lets you impose the restrained
            condition on a creature, but the Tier 2 result for that ability
            lets you impose the slowed condition, you can use the Tier
            2 result if you would rather have the creature slowed than
            restrained.
            <br>
            If you downgrade a critical hit, you still get the extra action
            benefit of the critical hit <i>(see Critical Hit in Abilities)</i>.
        </p>
        <br>
        <h3>Natural Result</h3>
        <p>
            The result of your power roll before your characteristic or
            any other modifiers are applied is called the natural result.
            The rules often refer to this as “rolling a natural X,” where
            X is the result of the roll. For example, if you get a 20 on
            the power roll before adding your characteristic, this is
            called rolling a natural 20.
            <br>
            Whenever you roll a natural 19 or 20 on a power roll, you
            always achieve the tier 3 result, no matter what
            characteristic is added to the roll and whether or not the
            roll has any banes.
        </p>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Edges and Banes
        </v-card-title>
        <p>
            An archer standing on a castle wall fires down into a
            throng of enemies, hitting the mark each time thanks to
            their high ground. A drunken bandit struggles to land
            blows on sober opponents as alcohol clouds their senses.
            Under certain circumstances, you need more than just a
            characteristic to represent the advantages and
            disadvantages that heroes, their enemies, and their allies
            might have.
        </p>
        <br>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Edge
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    An edge represents a situational advantage a hero or an
                    enemy has when making a power roll. For example, a
                    standing hero who makes a melee strike against a prone
                    creature gains an edge on the power roll for their strike. A
                    pair of magic gloves that makes your hands sticky might
                    grant you an edge when making a power roll to climb
                    walls!
                    <br>
                    When you make a Power Roll with a single edge, you add 2
                    to the roll. If you make a Power Roll with two or more
                    edges, you have a <b>double edge</b>. This means you don’t add
                    anything to the power roll, but the result of the roll
                    automatically improves one tier (to a maximum of tier 3).
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Bane
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    A bane represents a situational disadvantage a hero or an
                    enemy has when making a power roll. For example, if you
                    make an strike while prone, the power roll for the strike
                    takes a bane. A rainstorm might give you a bane on a
                    power roll made to climb an outdoor wall because the
                    weather makes the stone surface extra slick.
                    <br>
                    When you make a Power Roll with a single bane, you
                    subtract 2 from the roll. If you make a Power Roll with two
                    or more banes, you have a <b>double bane</b>. This means you
                    don’t subtract anything from the power roll, but the result
                    of the roll automatically decreases one tier (to a minimum
                    of tier 1).
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    Rolling with Edges and Banes
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    Under certain circumstances, you might have one or more
                    edges and banes on the same roll. For instance, you might
                    take a bane when weakened by poison, even as you gain
                    an edge for striking a prone creature. In general, edges
                    and banes cancel each other out, resolving as follows:
                    <br>• If you have an edge and a bane, or if you have a double
                    edge and a double bane, the roll is made as usual
                    without any edges or banes.
                    <br>• If you have a double edge and just one bane, the roll is
                    made with one edge, regardless of how many single
                    edge instances contribute to the double edge.
                    <br>• If you have a double bane and just one edge, the roll is
                    made with one bane, regardless of how many single
                    bane instances contribute to the double bane.
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    When to use Edges and Banes
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    The rules tell you when to modify a roll with an edge or a
                    bane. The Director can also modify rolls with edges and
                    banes as a response to narrative or environmental
                    circumstances. For instance, no rule specifically says that
                    rain imposes a bane on power rolls made to climb a stone
                    wall. But it makes sense that rainy conditions should make
                    climbing that wall harder, so a Director should absolutely
                    do so!
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Bonuses and Penalties
        </v-card-title>
        <v-card-text>
            While edges and banes cover most circumstantial effects
            that can have an impact on a power roll, a few rules add
            numeric bonuses or penalties to power rolls. Bonus and
            penalty values are specified in the rules that impose them,
            and are calculated independently of edges and banes, and
            before edges and banes are factored into a power roll.
            There is no limit to the number of bonuses or penalties
            that can apply to a power roll, and bonuses and penalties
            always add together.
            <br>
            Though it might sound as if the math with bonuses and
            penalties can get confusing, fear not! Bonuses and
            penalties are rare except in the case of skills, which appear
            on your character sheet <i>(see Skills for more information)</i>.
        </v-card-text>
    </v-card>
    <v-card>
        <v-card-title>
            Automatic Tier Results
        </v-card-title>
        <v-card-text>
            There are a few effects in the game that allow a creature to
            achieve automatic tier 1, 2, or 3 results. These effects
            supersede all edges, banes, bonuses, and penalties. When
            you are experiencing one of these effects and the roll
            would have special effects if you get a specific natural
            result, such as a critical hit when you use an ability as an
            action in combat, you can still make the roll to see if you
            achieve the natural result for an additional effect in
            addition to the automatic result.
            <br>
            If you are under two effects that each give you automatic
            results, then they cancel each other out and all automatic
            results are ignored.
        </v-card-text>
    </v-card>
</template>
