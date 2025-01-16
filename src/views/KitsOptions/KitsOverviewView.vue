<script setup lang="ts">
    const martialKits = [
        {
            name: 'Arcane Archer',
            armor: 'None',
            weapon: 'Bow',
            stamina: '---',
            speed: '+1',
            stability: '---',
            meleeDamage: '---',
            meleeDistance: '---',
            rangedDamage: '+2/+2/+2',
            rangedDistance: '+10',
            disengage: '+1',
        },
        {
            name: 'Battlemind',
            armor: 'Light',
            weapon: 'Medium',
            stamina: '+3',
            speed: '+2',
            stability: '+1',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Cloak and Dagger',
            armor: 'Light',
            weapon: 'Light',
            stamina: '+3',
            speed: '+2',
            stability: '---',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '---',
            rangedDamage: '+1/+1/+1',
            rangedDistance: '+5',
            disengage: '+1',
        },
        {
            name: 'Dual Wielder',
            armor: 'Medium',
            weapon: 'Medium, Light',
            stamina: '+6',
            speed: '+2',
            stability: '---',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
        {
            name: 'Guisarmier',
            armor: 'Medium',
            weapon: 'Polearm',
            stamina: '+6',
            speed: '---',
            stability: '+1',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '+1',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Martial Artist',
            armor: 'None',
            weapon: 'Unarmed Strike',
            stamina: '+3',
            speed: '+3',
            stability: '---',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
        {
            name: 'Mountain',
            armor: 'Heavy',
            weapon: 'Heavy',
            stamina: '+9',
            speed: '---',
            stability: '+2',
            meleeDamage: '+0/+0/+4',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Panther',
            armor: 'None',
            weapon: 'Heavy',
            stamina: '+6',
            speed: '+1',
            stability: '+1',
            meleeDamage: '+0/+0/+4',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Pugilist',
            armor: 'None',
            weapon: 'Unarmed Strike',
            stamina: '+6',
            speed: '+2',
            stability: '+1',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Raider',
            armor: 'Light, Shield',
            weapon: 'Light',
            stamina: '+6',
            speed: '+1',
            stability: '---',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '---',
            rangedDamage: '+1/+1/+1',
            rangedDistance: '+5',
            disengage: '+1',
        },
        {
            name: 'Ranger',
            armor: 'Medium',
            weapon: 'Medium, Bow',
            stamina: '+6',
            speed: '+1',
            stability: '---',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '---',
            rangedDamage: '+1/+1/+1',
            rangedDistance: '+5',
            disengage: '+1',
        },
        {
            name: 'Rapid-Fire',
            armor: 'Light',
            weapon: 'Bow',
            stamina: '+3',
            speed: '+1',
            stability: '---',
            meleeDamage: '---',
            meleeDistance: '---',
            rangedDamage: '+2/+2/+2',
            rangedDistance: '+7',
            disengage: '+1',
        },
        {
            name: 'Retiaruis',
            armor: 'Light',
            weapon: 'Polearm, Ensnaring',
            stamina: '+3',
            speed: '+1',
            stability: '---',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '+1',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
        {
            name: 'Shining Armor',
            armor: 'Heavy, Shield',
            weapon: 'Medium',
            stamina: '+12',
            speed: '---',
            stability: '+1',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Sniper',
            armor: 'None',
            weapon: 'Bow',
            stamina: '--',
            speed: '+1',
            stability: '---',
            meleeDamage: '---',
            meleeDistance: '---',
            rangedDamage: '+0/+0/+4',
            rangedDistance: '+10',
            disengage: '+1',
        },
        {
            name: 'Spellsword',
            armor: 'Light, Shield',
            weapon: 'Medium',
            stamina: '+6',
            speed: '+1',
            stability: '+1',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Stick and Robe',
            armor: 'Light',
            weapon: 'Polearm',
            stamina: '+3',
            speed: '+2',
            stability: '---',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '+1',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
        {
            name: 'Swashbuckler',
            armor: 'Light',
            weapon: 'Medium',
            stamina: '+3',
            speed: '+3',
            stability: '---',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
        {
            name: 'Sword and Board',
            armor: 'Medium, Shield',
            weapon: 'Medium',
            stamina: '+9',
            speed: '---',
            stability: '+1',
            meleeDamage: '+2/+2/+2',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
        {
            name: 'Warrior Priest',
            armor: 'Heavy',
            weapon: 'Light',
            stamina: '+9',
            speed: '+1',
            stability: '+1',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '---',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '---',
        },
        {
            name: 'Whirlwind',
            armor: 'None',
            weapon: 'Whip',
            stamina: '---',
            speed: '+3',
            stability: '---',
            meleeDamage: '+1/+1/+1',
            meleeDistance: '+1',
            rangedDamage: '---',
            rangedDistance: '---',
            disengage: '+1',
        },
    ];
</script>

<template>
    <h1>Kits Overview</h1>
    <p class="mx-3">
        The knight in shining armor. The warrior priest. The
        sniper. Censors, furies, shadows, tacticians, and
        troubadours can tap into these and many more archetypal
        concepts using kits. A kit is a combination of weapons,
        armor, and fighting techniques that lets you personalize
        martial heroes for battle.
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Changing Your Kit
        </v-card-title>
        <v-card-text>
            Your choice of kit is always flexible, and your hero is never
            locked into a specific kit. If you want to change your kit,
            you can do so as a respite activity (see <i>Respite</i>).
        </v-card-text>
    </v-card>
    <br>
    <h2>Marital Kits</h2>
    <v-table density="compact" hover>
        <thead>
            <tr>
                <th class="text-left">Kit</th>
                <th class="text-left">Armor</th>
                <th class="text-left">Weapon</th>
                <th class="text-left">Stamina (per Echelon)</th>
                <th class="text-left">Speed</th>
                <th class="text-left">Stability</th>
                <th class="text-left">Melee Damage</th>
                <th class="text-left">Melee Distance</th>
                <th class="text-left">Ranged Damage</th>
                <th class="text-left">Ranged Distance</th>
                <th class="text-left">Disengage</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in martialKits" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.armor }}</td>
                <td>{{ item.weapon }}</td>
                <td>{{ item.stamina }}</td>
                <td>{{ item.speed }}</td>
                <td>{{ item.stability }}</td>
                <td>{{ item.meleeDamage }}</td>
                <td>{{ item.meleeDistance }}</td>
                <td>{{ item.rangedDamage }}</td>
                <td>{{ item.rangedDistance }}</td>
                <td>{{ item.disengage }}</td>
            </tr>
        </tbody>
    </v-table>
</template>