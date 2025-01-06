<script setup lang="ts">
</script>

<template>
    <h1>Stamina</h1>
    <p>
        Your hero’s survivability is represented by your Stamina.
        Think of Stamina as a combination of a creature’s physical
        vitality and their overall energy for dodging and resisting
        incoming blows, spells, and other violence. It’s not that
        every instance of damage deals a bleeding wound to you,
        but that each one chips away at your ability to fight
        effectively. An attack might make you sweat as you leap
        back to avoid an arrow, while another might just graze
        your elbow with a dagger nick, leaving a dull, distracting
        pain. Eventually, though, this draining of energy leaves you
        open for bigger blows that can truly harm your body—or
        possibly kill you.
        <br>
        After any damage you take is reduced by damage
        immunity or other effects, your Stamina is reduced by an
        amount equal to the remaining damage. Some effects can
        also reduce your Stamina maximum, limiting the amount
        of Stamina you can regain.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Recoveries And Recovery Value
        </v-card-title>
        <v-card-text>
            <b>Each hero has a number of Recoveries determined by their
            class. A hero also has a recovery value that equals one-third
            of their Stamina, rounded down.</b> When you use the
            Catch Breath maneuver (see Maneuvers), you spend a
            Recovery and regain Stamina equal to your recovery value.
            Outside of combat, you can spend as many Recoveries as
            you have remaining. Some abilities, items, and other
            effects allow you to spend a Recovery to regain Stamina
            equal to your recovery value plus a little extra (as
            described by the effect), or to regain Stamina without
            spending a Recovery.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Winded
        </v-card-title>
        <v-card-text>
            Your winded value equals half your Stamina maximum.
            <b>When your Stamina is equal to or less than your winded
            value, you are winded.</b> Although being winded has no
            effects on its own, certain ancestry, class, item, and title
            abilities affect winded creatures.
            <br>
            You can tell when other creatures are winded and vice
            versa.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Dying And Death
        </v-card-title>
        <v-card-text>
            When your Stamina is 0 or lower, you are dying. <b>While
            dying, you can’t take the Catch Breath maneuver in combat,
            and you are Bleeding (see <i>Conditions</i>), and this condition
            can’t be removed in any way until you are no longer dying.</b> While
            you are dying, your allies can help you spend Recoveries in combat,
            and you can spend Recoveries out of combat as usual.
            <br>
            <b>While your Stamina is lower than 0, if it reaches the
            negative of your winded value, you die.</b> When you die, you
            can’t be brought back to life without the use of a special
            powerful item such as a Scroll of Resurrection.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Director-Controlled Creatures
        </v-card-title>
        <v-card-text>
            <b>Director-controlled creatures die when their Stamina
            drops to 0.</b>
            <br><br>
            <h3>NO RECOVERIES</h3>
            Director-controlled creatures don’t have Recoveries or a
            recovery value. Any such creatures who regain Stamina
            during a battle do so via a special item or an ability in their
            stat block. However, there are times when a hero might
            wish to use an ability that allows another creature to
            spend a Recovery or to regain Stamina equal to their
            recovery value on an injured NPC. In such cases, a
            Director-controlled creature regains Stamina equal to
            one-third their Stamina maximum.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Knocking Creatures Out
        </v-card-title>
        <v-card-text>
            <b>If you damage a creature with an ability that would kill
            them, you can choose to instead knock them unconscious.</b>
            If a creature takes damage while unconscious in this way,
            they die.
            <br>
            Director-controlled creatures remain unconscious for 1
            hour if no one does anything to end that condition. They
            then gain 1 Stamina and their unconsciousness ends.
            Heroes remain unconscious for 1 hour if no one does
            anything to end that condition. After 1 hour, they can
            spend a Recovery and end their unconsciousness. If the
            hero has no Recoveries left, they can’t wake up until they
            finish a respite.
            <br><br>
            <h3>UNCONSCIOUS</h3>
            While you are unconscious, you can’t take actions,
            maneuvers, triggered actions, free triggered actions, or
            free maneuvers; your speed is 0; you are unaware of your
            surroundings; and you are prone. Ability power rolls
            against you have a double edge. If you wake up from being
            unconscious, you can stand up from prone as a free
            maneuver.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Temporary Stamina
        </v-card-title>
        <v-card-text>
            Some abilities, treasures, and other effects grant a creature
            temporary Stamina. <b>Temporary Stamina shouldn’t be
            included in a creature’s Stamina total when figuring out a
            creature’s recovery value or winded value.</b> If you have
            temporary Stamina while winded, dying, or dead, the
            temporary Stamina doesn’t change those states.
            <br>
            Whenever you take damage while you have temporary
            Stamina, the temporary Stamina decreases first, and any
            leftover damage is applied to your Stamina as usual. For
            instance, if you have 10 temporary Stamina and take 16
            damage, you lose the temporary Stamina and then lose
            another 6 Stamina.
            <br>
            There is no maximum to how much temporary Stamina
            you can have. Regaining Stamina can’t restore temporary
            Stamina. <b>If you have temporary Stamina and then gain
            more temporary Stamina, you get whichever amount of
            temporary Stamina is greater, rather than adding the two
            pools together.</b> For instance, if an ability grants you 10
            temporary Stamina when you already have 5, you have 10
            temporary Stamina, not 15.
            Unless otherwise indicated, temporary Stamina
            disappears when you finish an encounter.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Object Stamina
        </v-card-title>
        <v-card-text>
            Mundane objects in the game have Stamina based on the
            material they’re made of. When an object’s Stamina is
            reduced to 0, the object is destroyed. Objects have damage
            immunity all to poison and psychic damage. Objects made
            of common materials have stamina as follows:
            <br>• A size 1 object or 1 square of a larger object made of
            glass has 1 Stamina.
            <br>• A size 1 object or 1 square of a larger object made of
            wood has 3 Stamina.
            <br>• A size 1 object or 1 square of a larger object made of
            stone has 6 Stamina.
            <br>• A size 1 object or 1 square of a larger object made of
            metal has 9 Stamina.
            <br><br>
            The Director can decide that a well-made or poorly made
            object has more or less Stamina. Destroying a
            supernatural object often (but not always) requires a
            specific quest, such as throwing a magic ring back into the
            volcano where it was forged.
        </v-card-text>
    </v-card>
</template>