<script setup lang="ts">
</script>

<template>
    <h1>Abilities</h1>
    <v-row>
        <v-col>
            <v-img src="/Ability_Example.png" max-height="400" />
        </v-col>
        <v-col>
            <v-img src="/Ability_Example_2.png" max-height="400" />
        </v-col>
    </v-row>
    <br>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>
                1. Name and Story Text
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Each ability has an evocative name that sets up what it does
                in the game, followed by a line or two of flavor text that
                provides a sense of how the use of the ability might appear
                if described in an action scene in a story.
                <br>
                The name and story text for abilities sometimes makes
                reference to specific ways in which the ability is used—
                particularly combat abilities whose names imply specific
                types of weapons or tactics. However, that narrative flavor
                has no effect on how an ability can be used. For example,
                the fury’s Impaling Strike ability allows you to grab a target,
                setting up the idea of harpooning your monstrous foe with
                a sword, then wrenching them in close before pulling your
                weapon free. But you can use that ability with an axe, a
                mace, a hammer, or any other weapon.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                2. Resource Cost
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Some abilities have a Heroic Resource cost to use them.
                When you use one of these abilities, you spend your Heroic
                Resource, then activate the ability.
                <br>
                <h2>Heroic Resource</h2>
                <p>
                    Your hero has a Heroic Resource determined by your class,
                    and which you manage during play. Earning resources can
                    increase your hero’s power, and Resources are spent to
                    activate your most powerful abilities.
                    <br>
                    Your hero’s class description has more information about
                    how to use your Heroic Resource.
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                3. Keywords
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Each ability has a “Keyword” entry with one or more
                keywords that explain how the ability functions.
                <br>
                <div style="background-color: lightgray;">
                    <h2>Area</h2>
                    <p>
                        Abilities with the Area keyword create an area of effect.
                        Many area abilities also deal damage, but such abilities are
                        not strikes. See <i>Area Abilities</i> for more information.
                    </p>
                </div>
                <h2>Charge</h2>
                <p>
                    Abilities with the Charge keyword can be used with the
                    Charge action in place of a melee free strike (see Charge in
                    Actions in Combat).
                </p>
                <div style="background-color: lightgray;">
                    <h2>Magic</h2>
                    <p>
                        Magic-keyword abilities are used by creatures who can cast
                        spells, have innate magical features, or wield magic items.
                        These abilities do magical things such as create rays of fire,
                        open swirling portals, or summon creatures.
                    </p>
                </div>
                <h2>Melee</h2>
                <p>
                    Abilities with the Melee keyword can be used only over
                    very short distances, typically within a creature’s reach,
                    because they require you to touch someone or something
                    with your body, a weapon, or an implement.
                </p>
                <div style="background-color: lightgray;">
                    <h2>Psionic</h2>
                    <p>
                        Psionic-keyword abilities are used by creatures who can
                        manifest psionic powers, have innate psionic features, or
                        wield psionic items. These abilities might create blasts of
                        psychic energy, move objects with telekinesis, or slow
                        down time with chronopathy.
                    </p>
                </div>
                <h2>Ranged</h2>
                <p>
                    Abilities with the Ranged keyword can be used to affect
                    creatures who are too far away to touch.
                </p>
                <div style="background-color: lightgray;">
                <h2>Strike</h2>
                <p>
                    Abilities with the Strike keyword (referred to simply as
                    “strikes”) deal damage to or impose a harmful effect on
                    other creatures.
                    <br>
                    <b>NOTE:</b> The Strike keyword and phrases like “makes a strike” are reserved
                        for abilities that have a creature specifically targeting other
                        creatures or objects (not an area), and dealing harm to them by
                        making a power roll. Other abilities that target areas of effect, are
                        not strikes. They instead use the Area keyword. That means if a
                        feature distinctly interacts with a strike, that feature has no effect
                        on abilities with the Area keyword.
                </p>
                </div>
                <h2>Weapon</h2>
                <p>
                    The Weapon keyword is used in abilities that are made
                    with blades, bows, and other such items. Weapon abilities
                    also include attacks creatures make with their own bodies,
                    such as punches, kicks, bites, tail slaps, and more. Your kit
                    determines the types of weapons you wield and use with
                    weapon abilities (see Kits).
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                4. Type
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Each ability has a “Type” entry that describes how long it
                takes to execute the ability. For instance, if you use an
                ability that has “Action” as its type entry, you must use your
                action to activate the ability.
                <br>
                Most abilities require you to use an <b>Action</b>, a <b>Maneuver</b>,
                a <b>Triggered Action</b>, a <b>Free Maneuver</b>, or a <b>Free Triggered Action</b>
                (see <i>Combat</i> for more information).
                <br>
                If an ability takes 1 minute or longer to use, you can’t use it
                in combat.
                <br>
                <h2>Trigger</h2>
                <p>
                    If an ability requires a Triggered Action or a Free Triggered
                    Action to use, a “Trigger” entry is part of the ability.
                    <br>
                    For example, the Trigger for the (above) <i>Advanced Tactics</i> ability is:
                    “The target deals damage to another creature.”
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                5. Distance
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                An ability’s “Distance” entry indicates how close you need
                to be to a creature or object to affect that target with the
                ability.
                <br>
                <h2>Self</h2>
                <p>
                    If an ability has a distance of “Self,” that ability originates
                    from or affects only you. The ability’s description specifies
                    how it works.
                </p>
                <h2>Melee</h2>
                <p>
                    Melee abilities have a distance of “Melee X” require you to
                    touch a creature with your body, a weapon, or an
                    implement. X is the distance in squares at which you can
                    physically make contact with another creature or object
                    targeted by the ability. For instance, a distance of “Melee 2”
                    can be used to target creatures or objects within 2 squares
                    of you.
                </p>
                <h2>Ranged</h2>
                <p>
                    Abilities with a distance noted as “Ranged” can be used to
                    target creatures who are more than a touch away. Ranged
                    distances are presented as “Ranged X,” with X being the
                    number of squares away a creature or object can be while
                    still allowing you to target them with the ability. For
                    instance, a distance of “Ranged 5” can be used to target
                    creatures or objects within 5 squares of you.
                    <br>
                    If you make a ranged strike while an enemy is adjacent to
                    you, you have a bane on the strike’s power roll.
                </p>
                <h2>Melee or Ranged</h2>
                <p>
                    Some abilities have a melee distance and a ranged distance.
                    When you use such an ability, you choose whether to use it
                    as a melee or a ranged ability. The ability never has both
                    the Melee and Ranged keywords at the same time. For
                    example, if you have the Cloak and Dagger kit, which has a
                    weapon damage bonus to melee and ranged abilities, only
                    one bonus at a time applies to an ability with the Melee or
                    Ranged keywords.
                </p>
                <h2>Area Abilities</h2>
                <p>
                    Area abilities cover an area, creating an effect within that
                    area that lets you target multiple creatures or objects at
                    once. When an ability allows you to create an area of effect,
                    you are sometimes given a distance, noted as “within X,”
                    that describes how many squares away from you the area
                    can be. If an area ability doesn’t originate from you, then
                    least 1 square of the area of effect must be within that
                    distance and your line of effect. This square is referred to as
                    the origin square of the area of effect. The area of effect can
                    spread from the origin square however you choose, as long
                    as the area of effect conforms to the shape and
                    arrangement rules of that particular area.
                    Unless otherwise noted, area abilities don’t pass through
                    solid barriers such as walls or ceilings, or spread around
                    corners.
                    <br>
                    As long as you have line of effect and distance to the origin
                    square, you can place an area ability to include one or more
                    squares where you don’t have line of effect (see <i>Line of
                    Effect</i> below).
                    <br>
                    An area ability might use any of the following areas of
                    effect:
                </p>
                <h3>Aura</h3>
                <p>
                    When an ability creates an aura, it is expressed as “X
                    aura.” Aura areas always originate from you and move
                    with you for the duration of the ability that created them.
                    A creature must be within X squares of you to be targeted
                    by an aura ability.
                </p>
                <h3>Burst</h3>
                <p>
                    When an ability creates a burst area, it is expressed
                    as “X burst.” Burst areas always originate from you. A
                    creature must be within X squares of you to be targeted
                    with a burst ability
                </p>
                <h3>Cube</h3>
                <p>
                    When an ability affects a cubic area, it is expressed as
                    “X cube.” X is the length of all the area’s sides.
                </p>
                <h3>Line</h3>
                <p>
                    When an ability affects a linear area, it is expressed as
                    “A × B line.” This means that A equals the line’s length in
                    squares, while B equals the line’s width and height in
                    squares. When you create a line area of effect, the
                    squares it occupies on the grid must be in a straight line,
                    forming either a rectangle or straight diagonal line shape
                    with the squares it effects
                </p>
                <h3>Wall</h3>
                <p>
                    When an ability creates a wall, it is expressed as “X
                    wall,” where X equals how many squares are used to
                    make the wall. When you place a wall, you can build it
                    one square at a time, but each square must share at least
                    one side (not just a corner) with another square of the
                    wall. You can stack squares on top of each other to make
                    the wall higher. Unless otherwise stated, a wall can’t be
                    placed in occupied squares, and a wall blocks line of
                    effect
                </p>
                <h3>Special</h3>
                <p>
                    Some abilities create a unique area of effect. The distance
                    entry of such abilities specifies how the area is created.
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                6. Target
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                The “Target” entry of an ability notes the number of
                creatures or objects who can be targeted by that ability.
                <br>
                <h2>Creature</h2>
                <p>
                    If an ability targets one or more creatures, you can have it
                    target any creature within the ability’s distance. You aren’t
                    an eligible creature target for your own abilities unless
                    those abilities also have “self” as a target (see below).
                </p>
                <h2>Object</h2>
                <p>
                    If an ability targets one or more objects, you can have it
                    target any object within the ability’s distance. Unless
                    otherwise noted, objects have poison and psychic immunity.
                    When an ability can target creatures and objects, the ability
                    can damage objects. However, unless otherwise noted or if
                    the Director decides otherwise, objects are immune to an
                    ability’s other effects.
                </p>
                <h2>Enemy</h2>
                <p>
                    If an ability targets one or more enemies, you can use the
                    ability to target only creatures who are hostile to you.
                    Typically, you decide who counts as an enemy, though the
                    Director has the final say.
                </p>
                <h2>Ally</h2>
                <p>
                    If an ability targets one or more allies, you can use the
                    ability to target only willing creatures who are friendly to
                    you. Typically, you and any other player’s character who
                    you target decide who counts as an ally, though the
                    Director has the final say. You aren’t an eligible ally target
                    for your own abilities unless those abilities also have “self”
                    as a target.
                </p>
                <h2>Self</h2>
                <p>
                    If an ability targets “self,” then you are a valid target for the
                    ability.
                </p>
                <h2>All</h2>
                <p>
                    If an ability doesn’t provide a number of targets but instead
                    says it applies to all creatures, objects, enemies, or allies,
                    then all eligible targets are affected.
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                7. Ability Roll
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                If an ability requires a power roll, it has a “Power Roll”
                entry that tells you which characteristic to add to the 2d10
                roll you make when you activate the ability.
                <br>
                Unlike power rolls made as tests, ability rolls always do
                something useful when you make them. You’re just rolling
                to see the impact of the ability, including damage and any
                effects based on the tier result of the power roll.
                <h2> Characteristics and Damage</h2>
                <p>
                    Certain abilities that deal damage list their damage as a
                    number followed by a plus sign (+) and the letter M, A, R, I,
                    or P. The indicated letter means you should also add your
                    characteristic score to the damage dealt by the ability.
                    <br>
                    The damage for these abilities increases at each echelon of
                    play, since your characteristic scores improve each time
                    you enter a new echelon.
                </p>
                <h2>Abilities with Damage and Effect</h2>
                <p>
                    Both strikes and area abilities deal damage and often have
                    an additional effect on their target. The amount of damage
                    and the strength of the effect are determined by the power
                    roll.
                    <br>
                    To keep things quick and easy to read at the table, damage
                    and effects are separated in a power roll entry with a
                    semicolon, with effects abbreviated whenever possible. An
                    effect determined by the power roll result always applies to
                    the target unless otherwise specified.
                    <br>
                    Unless otherwise indicated, any effects that are determined
                    by a power roll result occur after the power roll’s damage
                    has been dealt to all targets.
                    <br>
                    If an ability has multiple effects, they resolve in the order in
                    which they are presented.
                </p>
                <h3>"During The Move"</h3>
                <p>
                    Certain ability effects allow you to move and affect other
                    creatures or objects during that move, such as the shadow’s
                    Blade Dance ability. For such abilities, the move begins in
                    the space you first leave when you begin the move, and
                    ends in the last space you move into.
                </p>
                <h3>"Rolled Damage"</h3>
                <p>
                    Some treasures and other effects affected rolled damage, a
                    term that refers to the variable damage that is determined
                    by making an ability power roll. Some abilities or ability
                    effects deal damage without requiring a power roll—that is
                    not rolled damage.
                </p>

                <h2>Critical Hit</h2>
                <p>
                    When you make an ability power roll as part of an strike or
                    action and the total of the roll is 19 or 20 before adding
                    your characteristic (a natural 19 or natural 20), you score a
                    critical hit. This allows you to immediately take an
                    additional action after resolving the power roll, whether or
                    not it’s your turn and even if you are dazed (see Conditions).
                </p>
                <h2>Roll Against Multiple Creatures</h2>
                <p>
                    When an ability targets multiple creatures, you make one
                    power roll and apply the result to all the creatures you
                    target. If you have edges or banes against some but not all
                    of your targets, you might apply a different tier of result to
                    individual targets.
                    <br>
                    For example, if you target three creatures with a strike and
                    your result is 11, each of the targets should be affected by
                    the tier 1 result of the ability. However, if you gain an edge
                    on strikes against one of the targets to add 2 to the power
                    roll, your result against that target is 13 and that target is
                    affected by the tier 2 result of the ability
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                8. Effect
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Many abilities that require power rolls also have effect
                entries describing additional effects or rules for how the
                ability is used. If an ability doesn’t require a power roll, it
                has an effect entry that describes how it works.
                <h2>Stacking Unique Effects</h2>
                <p>
                    The unique effects of different abilities are combined if
                    their durations and targets overlap. However, the effects of
                    the same ability used multiple times don’t add together.
                    Instead, the most impactful result—such as the highest
                    bonus—from each use of the ability applies. The most
                    recent ability applies for determining duration.
                    <br>
                    Different effects that impose the same condition (see
                    <i>Conditions</i>) don’t stack to impose the condition twice. For
                    example, if a hero is targeted by numerous creatures whose
                    abilities can halve a target’s recovery value, the hero’s
                    recovery value is only halved once.
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                9. Ending Effects
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                When a creature suffers a lasting effect, whatever ability,
                hazard, or other mechanic imposed the effect specifies how
                long the effect lasts. Unless otherwise noted, all effects and
                conditions (see Conditions) that are imposed on you during
                a combat encounter end when the encounter is over if you
                want them to.
                <h2>EOT (End of Turn)</h2>
                <p>
                    If an effect ends with “(EoT)” at the end of its description, a
                    creature suffers the effect until the end of their next turn, or
                    the current turn if they got the effect on their current turn.
                </p>
                <h2>Save Ends</h2>
                <p>
                    If an effect ends with “(save ends)” at the end of its
                    description, then a creature suffering the effect can make a
                    saving throw at the end of their turn to remove the effect.
                    A saving throw represents your luck in shaking off an effect.
                    You likely already got a chance to resist the effect using
                    your characteristic score to resist a potency, so now it’s
                    down to fate. To make a saving throw, roll a 1d10. On a
                    result of 6 or higher, the effect ends. Otherwise, it continues.
                </p>
                <h2>End of Encounter or Dying</h2>
                <p>
                    Some ability effects, such as the one associated with the
                    conduit’s Blessing of Fate and Destiny ability, last until the
                    end of the encounter or until the creature who used the
                    ability is dying. If these abilities are used outside of combat,
                    they last 5 minutes.
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                10. Spend Resource
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Some abilities have a “Spend X [Heroic Resource]” entry.
                These are similar to effect entries, except they cost Heroic
                Resources to use. You must spend X of your Heroic
                Resource to activate the effect. If the entry reads “Spend
                [Heroic Resource]” with no number, then you can spend as
                much of your Heroic Resource as you like to increase the
                effect’s impact, as described in the entry’s details.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Surges
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                Many abilities give heroes surges during a battle. When you
                earn a surge, you can keep track of it on your character
                sheet.
                <br>
                <ul>
                    <li>
                        When you deal damage with an ability power roll, you can spend up to
                        three surges you have to increase the damage you deal by
                        an amount equal to your highest characteristic score per
                        surge spent to one creature or object targeted with the
                        ability.
                    </li>
                    <li>
                        When you target one or more creatures with an
                        ability that has a potency, you can spend two surges to
                        increase the potency by 1 for one of the creatures targeted
                        with the effect. You can’t increase the potency by more than
                        1 with surges, though you can spend multiple at once to
                        increase the potency for multiple targets.
                    </li>
                </ul>
                <br>
                After you spend a
                surge, it disappears. At the end of combat, you lose all your
                surges.
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Misc. Terms
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <h2>Adjacent</h2>
                Many abilities and other options refer to creatures, objects,
                or spaces that are adjacent to a specified creature.
                Something is adjacent to a creature if it is within 1 square of
                that creature.
                <h2>Line of Effect</h2>
                <p>
                    To target a creature or object with an ability, including
                    striking the creature or object, you must have line of effect
                    to that creature or object. If a solid object, such as a wall or
                    pillar, completely blocks the creature from you, then you
                    don’t have line of effect to them. If you’re not sure if you
                    have line of effect to a creature, imagine drawing a straight
                    line from any corner of the space you occupy on the map to
                    any corner of a space the creature occupies. If you can do
                    this with at least one corner connecting to another with no
                    obstruction in between, you have line of effect to the
                    creature.
                    <br>
                    At the Director’s discretion, flimsy or fragile obstructions
                    such as a glass window or linen curtains don’t block line of
                    effect, and might be automatically broken or torn by strikes
                    or other abilities used through them.
                    If you want to create an area of effect in a specific area, you
                    must have line of effect to at least one of the squares in that
                    area. See <i>Area Abilities</i>.
                </p>
                <h2>Straight Line</h2>
                <p>
                    Whenever your character moves or when you or another
                    creature are force moved, that movement is typically in a
                    straight line. Abilities that allow you to move or to forcibly
                    move another creature often talk about moving straight
                    toward or away from another creature or an object.
                    Although a line of travel must be straight, it doesn’t have to
                    travel a straight line of squares on the grid.
                </p>
                <h2>Ground</h2>
                <p>
                    Some abilities affect or refer to a hero or their targets being
                    “on the ground.” In this case, the ground means any surface
                    that a person could normally stand, sit, or lay upon. The
                    ground can be a castle floor, the earthen road, a metal
                    platform, or the deck of a ship.
                </p>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>