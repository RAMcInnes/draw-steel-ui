<script setup lang="ts">
    const ancestryLanguages = [
        {
            language: 'Anjali',
            commonAncestries: 'Devils, Hobgoblins',
            notes: 'Language of contract law',
        },
        {
            language: 'Axiomatic',
            commonAncestries: 'Memonek',
            notes: 'Native language of Axiom, and the common language of the timescape by trade',
        },
        {
            language: 'Caelian',
            commonAncestries: 'Orden Denizens',
            notes: 'Common tongue of Orden',
        },
        {
            language: 'Filliaric',
            commonAncestries: 'Angulotls',
            notes: 'Offshoot of Cyllinric',
        },
        {
            language: 'High Kuric',
            commonAncestries: 'Bredbeddles, Giants, Orges, Trolls',
            notes: '',
        },
        {
            language: 'Hyrallic',
            commonAncestries: 'High Elves',
            notes: 'Language of interspecies diplomacy',
        },
        {
            language: 'Illyvric',
            commonAncestries: 'Shadow Elves',
            notes: '',
        },
        {
            language: 'Kalliak',
            commonAncestries: 'Orcs',
            notes: 'Offshoot of Zaliac',
        },
        {
            language: 'Kethaic',
            commonAncestries: 'Kobolds',
            notes: 'Patois of Vastariax and Caelian',
        },
        {
            language: 'Khelt',
            commonAncestries: 'Bugbears, Fey',
            notes: 'Offshoot of Kheltivari',
        },
        {
            language: 'Khoursirian',
            commonAncestries: 'Polder, Humans',
            notes: 'Distant offshoot of Khamish',
        },
        {
            language: 'Low Kuric',
            commonAncestries: 'Elementals',
            notes: '',
        },
        {
            language: 'Mindspeech',
            commonAncestries: 'Voiceless Talkers',
            notes: 'A symbolic language shared among native telepaths',
        },
        {
            language: 'Proto-Ctholl',
            commonAncestries: 'Demons',
            notes: 'Incomplete offshoot of Tholl',
        },
        {
            language: 'Szetch',
            commonAncestries: 'Goblins, Radenwights',
            notes: '',
        },
        {
            language: 'The First Language',
            commonAncestries: 'Elder Dragons',
            notes: 'Language of Magic',
        },
        {
            language: 'Tholl',
            commonAncestries: 'Gnolls',
            notes: '',
        },
        {
            language: 'Urollialic',
            commonAncestries: 'Olothec',
            notes: '',
        },
    ];
</script>

<template>
    <h1>Language</h1>
    <p>
        When you create your hero, you’ll be able to select the
    languages they know. The following section details the
    languages of Orden, the baseline world of the game, but
    the Director can use these languages in their own
    campaign world or can swap this list with their own list of
    languages.
    <br>
    If your hero knows a language, they can speak, read, write,
    and understand it.
    </p>
    <v-card>
        <v-card-title>
            Caelian Empire
        </v-card-title>
        <v-card-text>
            The Caelian Empire dominated five of the seven regions of
            Orden three thousand years ago. During the height of this
            most recent human empire, all humans (including folks
            from Vanigar in the far north, but not folks from the
            islands of Ix) learned to speak the Caelian tongue. For
            many, especially the noble classes and the well-to-do,
            Caelian effectively replaced their native language.
            Some thirteen hundred years after the fall of the Caelian
            Empire, the languages of the different regions of the
            empire are enjoying a resurgence. Still, the Caelian tongue
            is spoken by most humans in most regions to one extent or
            another.
            <br>
            Most people in Orden can speak and understand some
            Caelian, simply because the empire was so powerful and
            so widespread. Anyone trading with the empire or living
            near its borders or under its influence eventually learned
            to speak Caelian, including dwarves, elves, orcs, lizardfolk,
            and goblins. If you speak more than one language in Orden,
            your second language is almost certainly Caelian. As a
            result, that language of empire is now colloquially referred
            to as “the common tongue”—the language that most folk
            of Orden have in common
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Extant Spoken Languages
        </v-card-title>
        <v-card-text>
            Folks have been speaking and writing in Orden for at least
            thirty thousand years, but most of those languages are
            now dead. Many have been forgotten. Others were spoken
            by peoples who never developed writing, preventing those
            languages from being preserved. And many languages that
            were preserved in writing left no related descendants, so
            that no one knows what sounds that writing represented.
            <br>
            The languages on the Vasloria Languages by Ancestry
            table are the most common languages in that region,
            actively spoken by significant populations of people. Most
            languages are associated with a specific ancestry and its
            culture, but being a member of an ancestry doesn’t
            automatically make you part of the associated culture the
            language is tied to. For example, if your orc hero was
            raised in a culture of elves, you probably speak one of the
            elf languages, and might never have learned Kalliak.
            <br>
            Most languages have colloquial or casual names. For
            instance, many people in Orden call Kalliak “Orcish” and
            Hyrallic “Elvish,” but any sage knows there are lots of
            orcish and elf languages, just as there are multiple human
            languages.
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Language Usage
        </v-card-title>
        <v-card-text>
            <b>Hyrallic</b> is the primary language of the high elves in Orden.
            Although young for an elf language, Hyrallic is older than
            almost all other modern cultural languages, save those of
            the dwarves. As a result, while anyone who lives near or
            trades with a human culture probably speaks at least a
            little Caelian, most nobles across all ancestries make sure
            their children or offspring speak Hyrallic. Caelian is new
            from many cultures’ point of view, while Hyrallic as a
            language for diplomacy is considered cultured and
            traditional.
            <br>
            <b>Yllyric</b> is the cultural language of wode elves, and also the
            common language among those who defend and protect
            the natural forests of Orden.
            <br>
            Within any document concerning the workings of
            machines, masonry, or geology, you are likely to find a
            healthy supply of jargon using <b>Zaliac</b>, the most popular
            dwarf language. Even when such texts aren’t fully written
            in Zaliac, they use a lot of dwarf language when describing
            esoteric, complex ideas.
            <br>
            Just as Zaliac is used in engineering, contract law isn’t
            written purely in <b>Anjali</b>, the dominant language of the
            Seven Cities of Hell. But a lot of the legal jargon in any
            contract, as well as some of the language of trial courts,
            features many Anjali words. People are sticklers for detail
            in the Seven Cities, and this makes their language popular
            among lawyers.
            <br>
            In the same way that intelligent creatures in Orden who
            live near or trade with other cultures use Caelian as a
            common language, the denizens of the World Below, the
            Dark Under All, often speak <b>Variac</b>, the language of the
            voiceless talkers
        </v-card-text>
    </v-card>
    <br>
    <v-table density="compact" hover>
        <thead>
        <tr>
            <th class="text-left">Language</th>
            <th class="text-left">Common Ancestries</th>
            <th class="text-left">Notes</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in ancestryLanguages" :key="item.language">
            <td>{{ item.language }}</td>
            <td>{{ item.commonAncestries }}</td>
            <td>{{ item.notes }}</td>
        </tr>
        </tbody>
    </v-table>
    <br>
    <v-card>
        <v-card-title>
            Dead Language
        </v-card-title>
        <v-card-text>
            For an adventuring hero with an ambition to create great
            works or unlock deep lore, it can be useful to be able to
            read ancient writing. Much deep lore is attested only in
            ancient tomes and scrolls written in languages that no
            modern culture uses.
            <br>
            Most of these ancient writings were written by people
            who expected other people to read it. The lore might have
            been kept secret by not sharing it with anyone outside the
            college or cult whose members originally wrote it, but the
            actual writing was not intended to be difficult to read or
            understand. It wasn’t written in code—just in a language
            that people stopped speaking long ago.
            <br>
            Sages can reconstruct many of these languages by learning
            which modern languages descended from them, then
            comparing them to related languages from the same time
            period that might have survived. Translating such ancient
            languages has been extremely useful for the purposes of
            crafting and research.
            <br>
            The Dead Languages table shows some of the dead
            languages of Orden, and the modern languages related to
            those ancient languages.
        </v-card-text>
    </v-card>
</template>