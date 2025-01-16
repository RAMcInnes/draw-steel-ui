<script setup lang="ts">
    const difficultyOutcomes = [
        {
            result: 'Easy',
            success: 5,
            failure: 5,
        },
        {
            result: 'Medium',
            success: 6,
            failure: 4,
        },
        {
            result: 'Hard',
            success: 7,
            failure: 3,
        },
    ];
</script>

<template>
    <h1>Montage Tests</h1>
    <p class="mx-3">
        <b>When a group of heroes works together over time to
        accomplish a common goal that requires more than a
        single characteristic, the Director can call for a montage
        test. Such tests typically take place over a prolonged
        period and focus on collective or shared activities.</b>
        Navigating a vast desert, convincing farmers to rise up
        against a tyrannical leader, and performing a ritual to
        open a magically sealed gate can all be accomplished with
        montage tests.
        <br><br>
        <b>In a montage test, the players take turns making tests as
        their characters tackle a task together in a montage test
        round.</b> Each hero has a chance to make a test (or to assist
        another hero’s test) intended to influence the outcome of
        the task (see Assist a Test).
        <br><br>
        A hero can also spend their turn using an item, ability, or
        other option they have available that they believe can help
        in the montage test. For example, if a group of heroes
        wants to cross an ocean on a sailing ship before a storm
        begins, one hero might make use of a magic fan that
        creates wind to keep the sails full day and night. The
        Director decides that this clever action gives the heroes 2
        automatic successes in the montage test, with no
        individual tests necessary (see Total Successes and
        Failures).
        <br><br>
        <b>Once a hero makes a test, assists with a test, or uses an
        ability or other option, they can’t do anything else as part
        of the montage test until each other hero involved in the
        montage test does so as well.</b> A hero can also choose to do
        nothing, most often if they have no one to assist and fear
        that their actions might make the situation worse (see
        Montage Test Outcomes). Once every hero has had a
        chance to act, the montage test round ends and a new one
        begins.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Time and Stakes
        </v-card-title>
        <v-card-text>
            As the name suggests, montage tests create a kind of
            cinematic montage in the action of the game. A montage
            test can take place over the course of several hours or days,
            with each individual test or other activity set up as a brief
            vignette within the montage, and starring one of the
            heroes. Combat encounters, negotiations, and other
            challenges and scenes can break up a montage test (see
            Sample Montage Test below).
            <br><br>
            <b>The Director should deploy montage tests only when the
            players are engaged in overcoming a goal that has stakes
            for the story and some sort of pressure, such as a looming
            deadline or impending harm.</b> A montage test is great for a
            race to get to another location before an enemy army does,
            a chase to escape or catch up to a foe, weathering a hazard,
            preparing a village for war, or similar activities. Low- or
            no-stakes activities such as travel through a forest with no
            time pressure, or training during a respite to use a new kit,
            can be narrated in montage style, but they don’t require a
            montage test.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Director Sets the Scene
        </v-card-title>
        <v-card-text>
            At the start of a montage test, the Director should describe
            the scenario underlying the task at hand, and the various
            challenges the heroes might face as they attempt to
            collectively accomplish it. For example, if the heroes are
            attempting to chase down a pickpocket through a crowded
            market, the Director might talk about the throngs of
            innocent people blocking the way forward, obscuring the
            characters’ vision, and making noise that complicates
            attempts to hear the thief’s nimble footsteps. There are
            also traveling carts to dodge, the speed and dexterity of
            the pursued character to contend with, and a pack of stray
            dogs who chase after anyone who sprints through the
            market. Describing these obstacles gives the heroes ideas
            about what they’re trying to overcome as they attempt to
            achieve their goals.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Individual Tests in Montage Tests
        </v-card-title>
        <v-card-text>
            <b>The difficulty of each individual test in a montage test is
            set by the Director and can vary from test to test.</b> For
            instance, if the heroes are preparing the defenses of a
            village threatened by a band of approaching raiders, the
            Director might decide that a character who wants to dig a
            trench around the village needs to make an easy Might test.
            Another hero wants to train the untested farmers of the
            village in the ways of war, and the Director decides this is
            a hard Reason test.
            <br><br>
            The same rules and guidelines that apply to all individual
            tests apply here. If a hero has a clever, out-of-the-box idea
            that the Director thinks should automatically succeed
            without rolling dice, it does. If the circumstances of the
            test should grant an edge or a bane, they do. <b>Individual
            test outcomes shouldn’t halt the story.</b>
            <br><br>
            <b>The Director should couch each success or failure as it
            relates to the overall goal of the montage test.</b> If the heroes
            are trying to reach an ancient temple, failing a Might test
            to ford a river in their path doesn’t mean they don’t cross
            the river and are stuck on the other side. But it could mean
            that failing to cross the river in a timely manner gives a
            rival group of villains the chance to beat the party to the
            temple.
            <br><br>
            <b>The rewards and consequences of individual tests made
            during a montage test should be handled on an individual
            basis.</b> The Director can use the default additional Malice in
            the next combat encounter for consequences and hero
            tokens for rewards to keep the montage moving.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Can't Use the Same Skill Twice
        </v-card-title>
        <v-card-text>
            <b>An individual character can’t use the same skill more than
            once in a montage test.</b> Though multiple heroes can use
            the same skill, a test or an assist with a specific skill
            represents each characters’ entire contribution to the
            montage test with that skill. At the Director’s discretion,
            this restriction can be lifted for prolonged montage tests,
            or for montage tests that are limited in scope and have
            only a small number of skills that apply to them.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            New Challenges For Each Test
        </v-card-title>
        <v-card-text>
            <b>In general, when a hero makes a test as part of a montage
            test, they should choose new obstacles to overcome that
            haven’t already been tackled as part of the test.</b> If the
            heroes are chasing a thief through the marketplace and
            one of them has already distracted the pack of stray dogs
            with a deft hand and a piece of meat, additional tests made
            to distract the animals don’t count toward the result of the
            montage test.
            <br><br>
            When it fits the scenario, the Director can adjust this
            restriction. If part of a montage test involves searching for
            people trapped in a burning building, the Director is likely
            to allow multiple tests to fight or avoid the fire, since this
            will happen throughout the montage test, not just once.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Director Can Introduce More Challenges
        </v-card-title>
        <v-card-text>
            During a montage test, a Director can introduce new
            challenges for the heroes to face. While attempting to run
            out of a burning building from the top floor, the characters
            might discover that by the time they reach the second
            floor, beams are starting to fall and glass windows are
            exploding as the structure begins to collapse. These new
            challenges can be incorporated into the tests the heroes
            subsequently make.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Total Success And Failures
        </v-card-title>
        <v-card-text>
            The Director or another player will track the total number
            of successes and failures the heroes earn during a montage
            test. Every montage test has a success limit and a failure
            limit. When the number of successful tests equals the
            success limit, the montage test ends and the heroes
            achieve total success (see Montage Test Outcomes). The
            montage test can also end when the number of failed tests
            equals the failure limit, and the heroes suffer total failure.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Limited Rounds
        </v-card-title>
        <v-card-text>
            <b>A montage test should last only 2 montage test rounds. If
            the heroes don’t end the montage test by achieving the
            success limit or failure limit, the montage test ends when
            the second montage test round is over.</b> This time limit
            helps to keep a montage test from becoming a slog, and
            prevents heroes from simply using their turns to assist the
            one hero with the best chance of success. This can inspire
            each hero to be a more active participant in the montage
            test. That said, the Director can increase the number of
            rounds a montage test lasts if they wish to create a
            particularly grueling challenge.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Montage Test Difficulty
        </v-card-title>
        <v-card-text>
            The Director determines the success limit and failure limit
            of a montage test. They can share this information or keep
            it secret, depending on what feels the most fun and
            dramatic for the situation and the players.
            <br><br>
            In general, the higher the success limit, the harder and
            more complicated it is for the heroes to overcome the
            montage test , since a hero can’t make the same test twice.
            The Montage Test Difficulty table gives a recommended
            success limit and failure limit for easy, moderate, and hard
            montage tests for groups with five heroes.
            <v-table density="compact" hover>
                <thead>
                    <tr>
                        <th class="text-left">Difficulty</th>
                        <th class="text-left">Success Limit</th>
                        <th class="text-left">Failure Limit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in difficultyOutcomes" :key="item.result">
                        <td>{{ item.result }}</td>
                        <td>{{ item.success }}</td>
                        <td>{{ item.failure }}</td>
                    </tr>
                </tbody>
            </v-table>
            <br><br>
            For larger or smaller groups, you can make the following
            adjustments to keep montage tests achievable but
            challenging:
            <br>• For four or fewer heroes, decrease the success limit and
            failure limits by 1 (to a minimum of 2) for every hero
            fewer than five. For example, if your group has only
            three heroes, an easy montage test has a success and
            failure limit of 3.
            <br>• For six or more heroes, increase the success and failure
            limits by 1 for every hero more than five.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Montage Test Outcomes
        </v-card-title>
        <v-card-text>
            A montage test can have three different outcomes:
            <br>• If the heroes hit the success limit before hitting the
            failure limit or before the time runs out for the test, they
            achieve <b>TOTAL SUCCESS</b>.
            <br>• If the heroes hit the failure limit or time runs out, and if
            they’ve achieved at least two more successes than
            failures, they achieve a <b>PARTIAL SUCCESS</b>.
            <br>• If the heroes hit the failure limit or time runs out, and if
            they <u>don’t</u> have at least two more successes than
            failures, they suffer <b>TOTAL FAILURE</b>.
            <br><br>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        TOTAL SUCCESS
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If the heroes earn a total success, they achieve what they
                        set out to do without complication. For instance, if the
                        heroes engaged in a montage test to see if they can cross a
                        desert to reach a city before a tyrant’s army arrived there
                        and leveled the place, a total success sees them arrive at
                        the city gates with plenty of time to warn people of the
                        impending assault. The heroes earn 1 Victory when they
                        achieve total success on an easy or moderate montage test,
                        and 2 Victories on a hard montage test.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        PARTIAL SUCCESS
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If the heroes earn a partial success, they succeed at what
                        they set out to do, but there is a complication or a cost
                        involved. For instance, when crossing the desert to reach
                        and warn the city of the tyrant’s army, a mixed success
                        sees the characters arrive at the city gates with the enemy
                        forces just behind them. Alternatively, the Director might
                        allow the heroes to arrive well before the army, but they
                        don’t cover their movements well enough. The tyrant
                        realizes the city has been warned and decides to call in a
                        favor to have a powerful dragon join the siege. The heroes
                        earn 1 Victory when they achieve partial success on a hard
                        or moderate montage test.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        TOTAL FAILURE
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If the heroes suffer total failure, they don’t achieve what
                        they set out to do. Just as with standard tests, failure on a
                        group test shouldn’t bring a story to a halt. Total failure
                        should make things more interesting and challenging!
                        With a total failure in a montage test to cross the desert
                        and warn the city, the characters arrive at the city to find it
                        already under siege by the tyrant.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>