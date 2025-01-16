<script setup lang="ts">
    const complicationList = [
        {roll: 1, complication: 'Advanced Studies'},
        {roll: 2, complication: 'Animal Form'},
        {roll: 3, complication: 'Amnesia'},
        {roll: 4, complication: 'Artifact Bonded'},
        {roll: 5, complication: 'Antihero'},
        {roll: 6, complication: 'Bereaved'},
        {roll: 7, complication: 'Betrothed'},
        {roll: 8, complication: 'Careful Curse'},
        {roll: 9, complication: 'Chaos Touched'},
        {roll: 10, complication: 'Chosen One'},
        {roll: 11, complication: 'Consuming Interest'},
        {roll: 12, complication: 'Corrupted Mentor'},
        {roll: 13, complication: 'Coward'},
        {roll: 14, complication: 'Crash Landed'},
        {roll: 15, complication: 'Cult Victim'},
        {roll: 16, complication: 'Curse of Immortality'},
        {roll: 17, complication: 'Curse of Misfortune'},
        {roll: 18, complication: 'Curse of Poverty'},
        {roll: 19, complication: 'Cursed Weapon'},
        {roll: 20, complication: 'Disgraced'},
        {roll: 21, complication: 'Dragon Dreams'},
        {roll: 22, complication: 'Elemental Inside'},
        {roll: 23, complication: 'Evanesceria'},
        {roll: 24, complication: 'Exile'},
        {roll: 25, complication: 'Fallen Immortal'},
        {roll: 26, complication: 'Famous Relative'},
        {roll: 27, complication: 'Feytouched'},
        {roll: 28, complication: 'Fiery Ideal'},
        {roll: 29, complication: 'Fire and Chaos'},
        {roll: 30, complication: 'Following in the Footsteps'},
        {roll: 31, complication: 'Forbidden Romance'},
        {roll: 32, complication: 'Frostheart'},
        {roll: 33, complication: 'Getting Too Old for This'},
        {roll: 34, complication: 'Gnoll-Bit'},
        {roll: 35, complication: 'Greening'},
        {roll: 36, complication: 'Grifter'},
        {roll: 37, complication: 'Grounded'},
        {roll: 38, complication: 'Guilty Conscience'},
        {roll: 39, complication: 'Hawk Rider'},
        {roll: 40, complication: 'Hears Voices'},
        {roll: 41, complication: 'Host Body'},
        {roll: 42, complication: 'Hunted'},
        {roll: 43, complication: 'Hunter'},
        {roll: 44, complication: 'Indebted'},
        {roll: 45, complication: 'Infernal Contract'},
        {roll: 46, complication: 'Infernal Contract … But, Like, Bad'},
        {roll: 47, complication: 'Ivory Tower'},
        {roll: 48, complication: 'Lifebonded'},
        {roll: 49, complication: 'Lightning Soul'},
        {roll: 50, complication: 'Loner'},
        {roll: 51, complication: 'Lost in Time'},
        {roll: 52, complication: 'Lost Your Head'},
        {roll: 53, complication: 'Lucky'},
        {roll: 54, complication: 'Master Chef'},
        {roll: 55, complication: 'Meddling Butler'},
        {roll: 56, complication: 'Medium'},
        {roll: 57, complication: 'Medusa Blood'},
        {roll: 58, complication: 'Misunderstood'},
        {roll: 59, complication: 'Mundane'},
        {roll: 60, complication: 'Outlaw'},
        {roll: 61, complication: 'Pirate'},
        {roll: 62, complication: 'Preacher'},
        {roll: 63, complication: 'Primordial Sickness'},
        {roll: 64, complication: 'Promising Apprentice'},
        {roll: 65, complication: 'Psychic Eruption'},
        {roll: 66, complication: 'Punishment Curse'},
        {roll: 67, complication: 'Raised by Beasts'},
        {roll: 68, complication: 'Refugee'},
        {roll: 69, complication: 'Rival'},
        {roll: 70, complication: 'Rogue Talent'},
        {roll: 71, complication: 'Runaway'},
        {roll: 72, complication: 'Searching for a Cure'},
        {roll: 73, complication: 'Secret Identity'},
        {roll: 74, complication: 'Secret Twin'},
        {roll: 75, complication: 'Self Taught'},
        {roll: 76, complication: 'Sewer Folk'},
        {roll: 77, complication: 'Shadow Born'},
        {roll: 78, complication: 'Shared Spirit'},
        {roll: 79, complication: 'Shattered Legacy'},
        {roll: 80, complication: 'Shipwrecked'},
        {roll: 81, complication: 'Sibling’s Shield'},
        {roll: 82, complication: 'Silent Sentinel'},
        {roll: 83, complication: 'Slight Case of Lycanthropy'},
        {roll: 84, complication: 'Stolen Face'},
        {roll: 85, complication: 'Stone Cursed'},
        {roll: 86, complication: 'Strange Inheritance'},
        {roll: 87, complication: 'Stripped of Rank'},
        {roll: 88, complication: 'Thrill Seeker'},
        {roll: 89, complication: 'Vampire Sire'},
        {roll: 90, complication: 'Voiceless Prisoner'},
        {roll: 91, complication: 'Vow of Honesty'},
        {roll: 92, complication: 'Vow of Duty'},
        {roll: 93, complication: 'Waking Dreams'},
        {roll: 94, complication: 'War Dog'},
        {roll: 95, complication: 'War of Assassins'},
        {roll: 96, complication: 'Ward'},
        {roll: 97, complication: 'Waterborn'},
        {roll: 98, complication: 'Wodewalker'},
        {roll: 99, complication: 'Wrathful Spirit'},
        {roll: 100, complication: 'Wrongly Imprisoned'}
    ];
</script>

<template>
    <h1>Complications Overview</h1>
    <p class="mx-3">
        Beyond your abilities and features, your hero might have
        something else that makes them … unusual. Perhaps an
        earth elemental lives in your body. Maybe your eldritch
        blade devastates enemies but feeds on your own vitality.
        <br><br>
        A complication is an optional feature you can take to
        enrich your hero’s backstory, with any complication
        providing you both a positive benefit and a negative
        drawback. Because complications are optional, check with
        your Director before taking one.
        <br><br>
        While you may get to determine your hero’s complication,
        it’s your Director’s right to determine how your complication
        affects the story, and you should be okay with that. Maybe
        you get a chance to remove your complication’s drawback or
        it plays a big part of the campaign’s narrative, or it may
        be you always have the complication’s drawback looming over
        you, forcing you into hard decisions! Either option leads
        to great narratives, so embrace the control you give to
        the Director when you take a complication. The story will be richer for it!
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Benefit And Drawback
        </v-card-title>
        <v-card-text>
            Your complication gives your hero both a benefit and a
            drawback. Some of these benefits and drawbacks are
            mechanical, while others are narrative. The benefit and
            drawback of a complication makes your connection to the
            game deeper and more interesting, and provides hooks to
            let the Director better draw your hero into the campaign’s
            story.
            <br><br>
            Not all complication benefits and drawbacks are created
            equal, but each benefit is balanced by its drawback. If you
            have a powerful positive side to your complication, be
            prepared to have an equally influential bit of negative
            backstory as well.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Modifying the Story
        </v-card-title>
        <v-card-text>
            You can modify the narrative of a complication to better fit
            with your vision of your character’s backstory —or change
            it entirely. For instance, if you choose Devil Deal as a
            complication, you can have your hero instead make that
            deal with an archfey or an undead general!
            <br><br>
            Many of the details of each complication are purposefully
            left vague, so that you can connect it to the rest of your
            backstory. If your complication took place during “an
            attack” or “an accident,” you decide the specific details of
            who or what attacked you, or what type of accident befell
            you.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Determining Complication
        </v-card-title>
        <v-card-text>
            You can choose your character’s complication, or you can
            roll on the Complications table.
            <br>
            <v-table density="compact" hover height="300px" fixed-header>
                <thead>
                    <tr>
                        <th class="text-left">d100</th>
                        <th class="text-left">Complication</th>
                        <th class="text-left">d100</th>
                        <th class="text-left">Complication</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in complicationList.slice(0, complicationList.length / 2)" :key="item.roll">
                        <td>{{ item.roll }}</td>
                        <td>{{ item.complication }}</td>
                        <td>{{ complicationList[index + complicationList.length / 2].roll }}</td>
                        <td>{{ complicationList[index + complicationList.length / 2].complication }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-text>
    </v-card>
</template>