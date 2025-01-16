<script setup lang="ts">
</script>

<template>
    <h1>Equipment</h1>
    <p class="mx-3">
        Each kit includes an armor entry and a weapons entry. It’s
        important to know what equipment a kit uses, because
        that informs your hero’s appearance and story. It also
        determines the type of magic and psionic treasures they
        can wield.
        <br><br>
        The description of gear in your kit is limited to broad
        categories, leaving you free to decide the specifics that
        best align with your vision of the character. For instance,
        the Guisarmier kit provides medium armor and a polearm.
        One player using this kit could wear heavy layers of hide
        and wield a longspear, while another might wear a shining
        breastplate and carry a halberd into battle.
        <br><br>
        The equipment categories your kit gives you are part of
        what affects the math behind your kit’s benefits, alongside
        the fighting techniques each kit provides.
        <br><br>
        <b>You can wear armor and wield weapons that aren’t part of
        your kit, but if you don’t you don’t get your kit’s bonuses.</b>
    </p>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Kit Armor Categories
        </v-card-title>
        <v-card-text>
            Each kit has an armor category that indicates the kind of
            protection you have while using the kit.
            <br><br>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        NONE
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If a kit has no armor, you can wear whatever clothing you like! Robes, a fashionable tunic and pants, or just a loincloth—it’s totally up to you.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        LIGHT ARMOR
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If a kit features light armor, you might wear padded cloth, leather armor, or even a chain shirt.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        MEDIUM ARMOR
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If a kit has medium armor, you might wear layers of thick hides, a breastplate, or armor made of metal scales.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        HEAVY ARMOR
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If a kit has heavy armor, then you’re likely wearing metal from head to toe. Chain mail, ring mail, and suits of plate armor protect you better than any other mundane protection.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        SHIELD
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        If a kit has a shield, then you wield a shield that can be any shape and made of any mundane material you like. The best shields have a sweet insignia on them, so start thinking about yours!
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-card-title>
            Kit Weapon Categories
        </v-card-title>
        <v-card-text>
            Each kit has a weapon category that indicates the types of
            weapons you wield while using the kit. You can use any
            ability with the Weapon keyword even if your kit doesn’t
            have a weapon, but you don’t get to apply your kit’s
            bonuses to that ability.
            <br><br>
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        BOW
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Bows cover any weapon used to fire an arrow or bolt projectile. This includes crossbows, longbows, and shortbows. You don’t need to track mundane ammunition for these weapons, unless the Director says otherwise.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        ENSNARING WEAPON
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Ensnaring weapons include bolas, nets, and other weapons made to capture an enemy and hold them in place.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        HEAVY WEAPON
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Heavy weapons are two-handed melee weapons with weighty bladed or bludgeoning heads, made to seriously harm or kill enemies in a single mighty blow. Greatswords, greataxes, mauls, and morningstars are all examples of heavy weapons.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        MEDIUM WEAPON
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Medium weapons are one-handed melee weapons that can be carried into battle while leaving one hand free, or while using that hand to hold a shield or implement. Battleaxes, clubs, longswords, and warhammers are medium weapons.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        LIGHT WEAPON
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Light weapons are one-handed melee weapons that can be used to make several strikes in rapid succession. Many such weapons can be thrown or used as an off-hand defensive weapon. Daggers, shortswords, rapiers, and throwing hammers are typical light weapons. If your kit uses a light weapon, you can wield two light weapons at a time.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        POLEARM
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Polearms are two-handed melee weapons with long hafts that increase the wielder’s reach. They include glaives, halberds, longspears, and quarterstaffs.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        WHIP
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Whip weapons include the standard whip, but also include spiked chains, flails, and any similarly long and flexible melee weapon.
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        UNARMED STRIKE
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        Any kit that uses unarmed strikes allows you to use your body as a weapon
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-text>
    </v-card>
    <br>
    <v-card color="grey-lighten-2">
        <v-card-title>
            Kits and Treasures
        </v-card-title>
        <v-card-text>
            When you find a supernatural item such as a magic sword,
            you can use the item as long as it matches one of your kit’s
            equipment categories. A Blade of Quintessence is a
            medium weapon, so you can use it with the Ranger or
            Shining Armor kits. However, you can’t use it with the
            Cloak and Dagger or Spellslinger kits because those kits
            don’t use medium weapons, meaning you haven’t done the
            necessary preparations to use the weapon effectively. You
            can still swing a Blade of Quintessence around, but you
            don’t get any of its bonuses or benefits.
            <br><br>
            If you find a piece of equipment you really want to use that
            isn’t part of your kit, you can always change your kit as a
            respite activity.
        </v-card-text>
    </v-card>
</template>