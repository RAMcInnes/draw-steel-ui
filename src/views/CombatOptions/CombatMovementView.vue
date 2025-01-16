<script setup lang="ts">
</script>

<template>
    <h1>Movement</h1>
    <p class="mx-3">
        During combat, creatures can employ multiple mechanics
        that allow them to move around the battlefield. The most
        common of those mechanics is to use the Advance or
        Disengage move action on your turn, but abilities granted
        by your class, equipment, ancestry, title, or other options
        might allow you other ways to move.
        <br><br>
        Your hero starts with a speed based on their ancestry—
        usually 5. This represents the maximum number of
        squares you can move when you take the move action or
        when another effect allows you to move. Your speed can
        be increased by your kit and other game options.
        All squares adjacent to your character cost 1 movement to
        move into. No, there is no Pythagorean theorem on the
        grid. It’s a game, don’t overthink it.
        <br><br>
        <b>You can move freely through an allied creature’s space.
        You can move through an enemy creature’s space, but it
        counts as difficult terrain (see <i>Difficult Terrain</i>).</b> You can’t
        stop moving in any other creature’s space, including
        making an strike or using an action or maneuver while in
        that space and then continuing your move.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Can't Exceed Speed
        </v-card-title>
        <v-card-text>
            A single move or other effect can never allow a creature to
            move more squares than their speed, unless the effect
            specifically states otherwise. For example, a creature with
            a speed of 5 might have that speed reduced to 2 by the
            slowed condition. If an ally then targets them with an
            effect that allows them to move up to 3 squares, the
            creature can move only 2 squares because that’s their
            current speed.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Can't Cut Corners
        </v-card-title>
        <v-card-text>
            A creature can’t move diagonally when doing so would
            allow them to cross the corner of a wall or other structure
            the fills the corner between your space and the space you
            are moving to. This rule applies only to moving by objects,
            not creatures.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Shifting
        </v-card-title>
        <v-card-text>
            Shifting is a careful form of movement that allows your
            hero to move safely by dangerous foes. Certain abilities,
            features, and other rules allow you to shift a specific
            number of squares, sometimes up to your speed.
            <b>Whenever you shift, creatures can’t make opportunity
            attacks against you during your movement (see Free
            Strikes).</b> You can’t shift into difficult or damaging terrain.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Movement Types
        </v-card-title>
        <v-card-text>
            Creatures in the game can use eight types of movement:
            <b>Walk, Burrow, Climb, Swim, Jump, Crawl, Fly, and Teleport</b>.
            <br><br>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Walk
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Walking is the most common movement type, whether it
                        refers to ambulating on legs, slithering, or some other
                        default method of movement. Unless specified otherwise,
                        all creatures can move over solid horizontal ground
                        without any problem.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Burrow
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        A creature with “burrow” in their speed entry can move
                        through dirt vertically or horizontally, and either has the
                        means to breathe while doing so or doesn’t require air to
                        live. Such creatures can’t move through more solid ground,
                        such as stone, unless their stat block says otherwise.
                        <br><br>
                        A creature who can’t burrow can dig through soft,
                        borrowable earth by spending 3 squares of movement for
                        every 1 square they move.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Climb or Swim
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If a creature’s speed entry includes the word “climb,” they
                        can climb across vertical and horizontal surfaces at full
                        speed. Likewise, if a creature has “swim” in their speed
                        entry, they can swim in liquid at full speed.
                        <br><br>
                        Creatures without those types of movement can still climb
                        or swim when a rule allows them to move, but each square
                        of climbing or swimming costs 2 squares of movement. If a
                        surface is difficult to climb (for instance, a sheer cliff or
                        ice-covered wall) or a liquid is hard to swim through (a
                        raging river or whirlpool), the Director can call for a Might
                        test. On a failure, a creature can’t climb or swim but
                        wastes no movement in the attempt. The Director can also
                        impose other consequences to failure, such as being
                        caught in the spinning current of a whirlpool.
                        <br><br>
                        <h3>CLIMBING OTHER CREATURES</h3>
                        You can attempt to climb a creature whose size is greater
                        than yours. If the creature is willing, you can climb them
                        without any trouble. If the creature is unwilling, you make
                        the following test:
                        <br>
                        Power Roll + Might or Agility:
                        <br>• 11 or lower: You fail to climb the creature, and they can
                        make a free strike against you.
                        <br>• 12–16: You fail to climb the creature.
                        <br>• 17+: You climb the creature.
                        <br><br>
                        While you climb or ride a creature, you gain an edge to
                        melee abilities used against them. The creature can use a
                        maneuver to attempt to knock you off. If you are knocked
                        off a creature, you must make the following test:
                        <br>
                        Power Roll + Might or Agility:
                        <br>• 11 or lower: You fall off the creature into an unoccupied
                        adjacent space of your choice, taking falling damage and
                        landing prone as usual (see Falling in Adventuring).
                        <br>• 12–16: You slide down the creature into an unoccupied
                        adjacent space of your choice and don’t land prone.
                        <br>• 17+: You continue to hold on to the creature.
                        <br><br>
                        If you are knocked prone while climbing or riding a
                        creature, you fall and land prone in an adjacent space of
                        your choice, taking damage as usual from the fall.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Jump
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        When an effect allows you to move, you can long jump a
                        number of squares up to your Might or Agility score (your
                        choice; minimum 1 square) without a test as part of that
                        movement. If you move at least 2 squares in a straight line
                        immediately before your jump, you can long jump 1
                        additional square.
                        <br><br>
                        If you want to jump even farther than your initial jump
                        allows, make a medium Might test. On a success, you jump
                        1 additional square, or 2 additional squares if you get a
                        success with a reward.
                        <br><br>
                        The height of your jump is 1 square. If you move at least 2
                        squares in a straight line immediately before your jump,
                        you can jump 1 square higher.
                        <br><br>
                        You can’t jump farther or higher than the distance of the
                        effect that allows you to move. You can’t jump out of
                        difficult or damaging terrain.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Crawl
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If you are prone (see <i>Conditions</i>), you can remain prone
                        and crawl on the ground. Doing so costs you 1 additional
                        square of movement for every square you crawl. If you
                        intentionally want to crawl, you can fall prone as a free
                        maneuver on your turn. While voluntarily prone, you can
                        choose to stand as a free maneuver.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Fly
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        A creature who can fly can move through the air vertically
                        or horizontally at full speed and stay still in midair. If a
                        flying creature is knocked prone or has their speed
                        reduced to 0, they fall (see Falling).
                        <br><br>
                        If a creature who can fly also has the Hover keyword in
                        their speed, they remain in the air and don’t fall even if
                        they are knocked prone or their speed is reduced to 0.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Teleport
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        When you teleport, you move from one space to another
                        space instantaneously. The following rules apply to
                        teleporting:
                        <br>• Teleporting doesn’t provoke opportunity attacks.
                        <br>• When you teleport, you bypass any obstacles between
                        the space you leave and your destination space.
                        <br>• The creature teleporting you must have line of effect
                        from the space you leave and to your destination space.
                        <br>• Your destination space can’t be occupied by another
                        creature or object.
                        <br>• The effect that lets you teleport tells you how far you
                        can teleport, which you can use even if it is greater than
                        your speed.
                        <br>• If your movement has the Teleport keyword, you can
                        use the Advance move action to teleport a number of
                        squares up to your speed, unmodified by conditions or
                        effects.
                        <br>• If you teleport while prone, you can be standing when
                        you reach your destination space provided you are able
                        to stand. If another creature teleports you, it is up to
                        them if you remain prone or stand, provided you are
                        able.
                        <br>• If you teleport while affected by the grabbed or
                        restrained conditions, those conditions end for you.
                        <br>• When you teleport, you must leave the space when you
                        start and enter a new one. You can’t teleport and remain
                        in the same space.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Falling
        </v-card-title>
        <v-card-text>
            <b>When you fall 2 or more squares, you take 2 damage for
            each square you fall (to a maximum of 50 damage), then
            you land prone.</b> When you fall, you reduce the effective
            height of the fall by a number of squares equal to your
            Agility score (minimum 0). Falling into liquid that is at
            least 1 square deep reduces the effective height of a fall by
            4 squares.
            <br><br>
            Falling is not forced movement, but being force moved
            downward is considered falling (see <i>Forced Movement</i>).
            Movement from falling doesn’t provoke opportunity attacks
            (see <i>Opportunity Attacks</i>).
            <br><br>
            <h3>FALLING ONTO ANOTHER CREATURE</h3>
            If you land on another creature when you fall, that
            creature takes the same damage you do from the fall. You
            then land prone in the nearest unoccupied space of your
            choice. If your size is greater than the creature’s Might
            score, the creature also falls prone.
            <br>
            <h3>FALLING FAR</h3>
            When you first fall from a great height, you fall 100
            squares in the first round. At the end of each subsequent
            round that you remain falling, you fall another 100
            squares.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Difficult Terrain
        </v-card-title>
        <v-card-text>
            Areas of thick underbrush, rubble, spiderwebs, or other
            obstacles to movement create difficult terrain. It costs 1
            additional square of movement to enter a square of
            difficult terrain.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Damaging Terrain
        </v-card-title>
        <v-card-text>
            Areas of acid, fire, sharp rocks, lava, or any other terrain
            that causes damage to creatures who are in it is damaging
            terrain. The amount of damage caused by hazardous
            terrain is listed in the terrain’s description or in the
            description of the effect that creates the terrain.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            High Ground
        </v-card-title>
        <v-card-text>
            <b>When you use an ability against a creature or object while
            standing on ground and occupying a space that is fully
            above the space the target takes up, with the bottom of
            your space higher than the top of the target’s space, you
            gain an edge on the power roll against that target.</b> You can
            get this the benefit while climbing if your speed has the
            Climb keyword.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Forced Movement
        </v-card-title>
        <v-card-text>
            Some actions and maneuvers allow you to push, pull, or
            slide another creature a specific distance across the
            battlefield. Collectively, these types of movement are
            called forced movement:
            <br>
            <br><b>Push X</b>: You move the target up to X squares away from
            you in a straight line, without moving them vertically.
            <br><b>Pull X</b>: You move the target up to X squares toward you in
            a straight line, without moving them vertically. Each
            square you move the creature must bring them closer to
            you.
            <br><b>Slide X</b>: You move the target up to X squares in any
            direction, except for vertically.
            <br><br>
            When you force move a target, you can always move that
            target fewer squares than the number indicated. For
            example, when the conduit gets a tier 3 “push 3” result
            with their Call the Tunder Down ability, they can push
            targets any distance up to 3 squares, including choosing to
            not move certain targets at all.
            <br><br>
            <b>Forced movement ignores difficult terrain and never
            provokes opportunity attacks.</b> When you force move a
            target into damaging terrain or into terrain that produces
            an effect, they are affected as if they had moved into it
            willingly.
            <br><br>
            <div style="background-color: darkgray;">
                <h3>STABILITY</h3>
                <p>
                    Each creature has a stability that allows them to resist
                    forced movement. <b>When a creature is forced moved, they
                    can reduce the movement up to a number of squares equal
                    to their stability.</b> Heroes start with a stability of 0 that can
                    be increased through kit and ancestry options.
                </p>
            </div>
            <br>
            <h3>VERTICAL</h3>
            <p>
                If a forced movement effect has the word “vertical” in front
                of it, then the forced movement can move a target up or
                down in addition to horizontally. For example, if a forced
                movement effect says “vertical push 5,” then the creature
                targeted by the effect can be pushed up to 5 squares in any
                direction, as long as the forced movement is a straight line.
                <br><br>
                If a creature who can’t fly is left in midair at the end of a
                vertical forced move, they fall.
                <br><br>
                Though you can’t push, pull, or slide a creature unless that
                forced movement specifies “vertical,” you can move them
                along a physical slope, such as a hill or staircase. For a
                creature to be force moved along a slope, each square of
                the slope can be no more than 1 square higher or lower
                than the previous square.
            </p>
            <br>
            <div style="background-color: darkgray;">
                <h3>BIG VS LITTLE</h3>
                <p>
                    When a larger creature force moves a smaller creature
                    with a melee weapon ability, the force move distance is
                    increased by 1. If a smaller creature force moves a larger
                    creature with a melee weapon ability, the force move
                    distance does not change.
                </p>
            </div>
            <br>
            <h3>SLAMMING INTO CREATURES</h3>
            <p>
                <b>When you force move a creature into another creature, the
                movement ends and both creatures take 1 damage for
                each square remaining in the first creature’s forced
                movement.</b> You can also force move an object into a
                creature. The object’s movement ends and the creature
                takes 1 damage for each square remaining in the object’s
                forced movement.
                <br><br>
                It is possible to move a creature or object of a larger size
                into several creatures of a smaller size at the same time.
                When this happens, all creatures in the collision take
                damage once.
                <br><br>
                If a creature is killed by damage from an ability or effect
                that force moves them, the second creature still takes
                damage unless the Director deems otherwise.
                You can force move another creature into yourself with a
                pull or a slide.
                <br><br>
            </p>
            <div style="background-color: darkgray;">
                <h3>TRACKING OBJECT FORCED-MOVEMENT DAMAGE</h3>
                <p>
                    At the Director’s discretion, mundane objects that are force
                    moved into creatures or other objects take damage as if they
                    were creatures. Sturdy objects can take damage as follows:
                    <br>• For each square a wood object occupies, it can take 3 damage
                    before it is destroyed.
                    <br>• For each square a stone object occupies, it can take 6 damage
                    before it is destroyed.
                    <br>• For each square a metal object occupies, it can take 9 damage
                    before it is destroyed.
                    More fragile objects are destroyed after taking any damage.
                </p>
            </div>
            <br>
            <h3>SLAMMING INTO OBJECTS</h3>
            <p>
                <b>When you force move a creature into a stationary object
                that is their size or larger and the object doesn’t break (see
                below), the movement ends and the creature takes 2
                damage plus 1 damage for each square remaining in their
                forced movement.</b>
                <br><br>
                If you force move a creature downward into an object that
                doesn’t break (including the ground), they also take falling
                damage.
            </p>
            <br>
            <div style="background-color: darkgray;">
                <h3>HURLING THROUGH OBJECTS</h3>
                <p>
                    When you move a creature into a mundane object, the
                    object can break depending on how many squares of
                    forced movement remain:
                    <br>
                    <br>• It costs 1 remaining square of forced movement to
                    destroy 1 square of glass. The creature moved takes 1
                    damage.
                    <br>• It costs 3 remaining squares of forced movement to
                    destroy 1 square of wood. The creature moved takes 3
                    damage.
                    <br>• It costs 6 remaining squares of forced movement to
                    destroy 1 square of stone. The creature moved takes 6
                    damage.
                    <br>• It costs 9 remaining squares of forced movement to
                    destroy 1 square of metal. The creature moved takes 9
                    damage.
                    <br><br>
                    If any forced movement remains after the object is
                    destroyed, you can continue to move the creature who
                    destroyed the object.
                </p>
            </div>
            <br>
            <h3>FORCED INTO A FALL</h3>
            <p>
                If you can’t fly and are force moved across an open space
                that would cause you to fall, such as being pushed over the
                edge of a cliff, you continue moving the total distance you
                were moved first. If you are still in a position to fall when
                your move ends, you fall.
            </p>
        </v-card-text>
</v-card>
</template>