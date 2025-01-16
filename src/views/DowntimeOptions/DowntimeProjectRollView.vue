<script setup lang="ts">
    const eventMilestones = [
        {
            goal: 'Fewer than 30',
            milestone: 'None',
        },
        {
            goal: '31-200',
            milestone: 'One event halfway through the goal',
        },
        {
            goal: '201-999',
            milestone: 'Two events at one-third and two thirds of the way to the goal',
        },
        {
            goal: '1,000 or more',
            milestone: 'Three events and one-quarter, one-half, and three-quarters of the way to the goal',
        }
    ];
</script>

<template>
    <h1>Project Roll</h1>
    <p class="mx-3">
        As a respite activity, you can make a project roll for one of
        your own projects. You can also make a project roll to
        contribute to another hero’s project, with their permission.
        A project roll is a test with a special outcome. The
        characteristic used in the test is determined by the project.
        <br><br>
        <b>When you make a project roll, the result—no matter how
        low—becomes project points that are accrued by the
        project.</b> Even if you have a penalty on a project roll, the
        minimum result for the roll is 1. If you get a natural 19 or
        20 on the roll, this is called a breakthrough, and you can
        make another project roll for the same project as part of
        the same respite activity.
        <br><br>
        A project is complete when it accrues project points equal
        to or greater than its project goal—the number of points it
        takes to complete the project, noted in each project’s
        description.
        <br><br>
        As you work on a project, the Director can add events that
        help form the narrative of your research, crafting, or other
        activities. These events might provide unexpected benefits
        or challenges as you work on your project, to help make
        the journey as dramatic as arriving at the destination. (See
        <i>For the Director: Project Events</i> for more information.)
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Edges and Banes
        </v-card-title>
        <v-card-text>
            Since project rolls don’t use success tiers, they don’t follow
            the normal rules for double edges and double banes. <b>If you
            gain an edge on a project roll, you add 2 to the roll, as
            usual. But if you have a double edge, you add 4 to the roll.</b>
            Likewise, you subtract 2 from a project roll that takes a
            bane, and you subtract 4 from a roll that has a double bane.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Skills
        </v-card-title>
        <v-card-text>
            <b>You can apply skills from either the Crafting or Lore skill
            groups to project rolls that directly relate to the project</b>
            (see <i>Skills in Tests</i>). For example, you could use the
            Tailoring skill for project rolls related to making a magic
            cloak, and you could use the History skill while attempting
            to research the location of an ancient battle where a magic
            crown was lost. At the Director’s discretion, you can also
            use skills from other skill groups, but a skill used for a
            project roll must be directly related to the project.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Language
        </v-card-title>
        <v-card-text>
            If you know the language of a project source, you can make
            a project roll without any issues. <b>If you don’t know the
            language of the source but you know a related language,
            then the project roll takes a bane.</b> If you don’t know the
            source’s language or a related language, the project roll
            has a double bane.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Guides
        </v-card-title>
        <v-card-text>
            Heroes sometimes find guides—special books, schematics,
            knowledgeable NPCs, magical recordings, and so forth—
            providing important and easy-to-understand information
            relating to a project. <b>Each guide has a knowledge value
            and a connection to a specific project that greatly
            decreases the time required to complete the project. When
            a hero studies a guide as a respite activity, they gain the
            guide’s knowledge value as project points toward its
            project.</b> The guide can’t be used with that specific instance
            of the project again, though it can be used for a different
            project of the same type.
            <br><br>
            Guides are awarded at the Director’s discretion, usually as
            a tool that can be used to increase the speed of complex
            projects for campaigns with little downtime. For example,
            the Craft Automaton project has a project goal of 1,500,
            requiring a fair bit of downtime. But if a hero finds a
            manual that describes how to craft an automaton and
            grants them 500 or more project points toward the Craft
            Automaton project, the crafting time can be significantly
            reduced.
            <br><br>
            A guide must provide its information in a language you
            understand for you to gain its full benefit. If it’s written in
            a language related to one you know, you gain only half the
            guide’s knowledge value (rounded down) as project points
            toward your project.
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            For the Director: Project Events
        </v-card-title>
        <v-card-text>
            Project events are story events that present boons and
            challenges to heroes as they complete research and
            crafting projects. These events are entirely optional. If you
            want to have a game where the heroes simply work
            toward their goals by making project rolls, that’s fine. But
            using these events can help you inject more drama into the
            processes of research and crafting.
            <br><br>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        When To Use Project Events
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Projects don’t need an event every time a hero makes a
                        project roll. If they did, the heroes would likely spend all
                        their time trying to manage their projects and never do
                        any adventuring. Instead, pick one of the following
                        methods to determine when an event occurs in a project.
                        You can always switch up the method you use during a
                        campaign, doing whatever you think works best for the
                        current situation.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Roll for Event
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If you want events to be a surprise for even you, then once
                        during any respite when one or more heroes makes a
                        project roll, roll a d6. On a result of 6, an event occurs. This
                        is a good option if you enjoy coming up with story on the
                        fly during play.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Event Milestones
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If you want to guarantee that events occur during a project,
                        use project point milestones. When the project accrues a
                        certain number of points, an event occurs the next time a
                        hero wants to make a project roll. This approach works
                        well if you want to plan your event in detail before it
                        occurs.
                        <br><br>
                        You can use the Suggested Event Milestones table to
                        determine when an event should occur during a project.
                        <v-table density="compact" hover>
                            <thead>
                                <tr>
                                    <th class="text-left">Project Goal</th>
                                    <th class="text-left">Milestone</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in eventMilestones" :key="item.goal">
                                    <td>{{ item.goal }}</td>
                                    <td>{{ item.milestone }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Whenever You Want
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Whenever you think the heroes could use a little drama
                        during a respite, throw in an event. This approach allows
                        you to plan an event in detail when a project begins, then
                        deploy it at the most dramatic moment—or even throw it
                        in during an encounter if you’re feeling saucy!
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Deploying Events
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        An event occurs when a hero makes a project roll. You can
                        roll for or choose an event from the appropriate events
                        prompts table, or use the tables to inspire your own
                        events. Each entry on the table is a narrative prompt that
                        you can change and flesh out as you see fit, and specifies
                        whether it occurs before or after the project roll.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
</template>