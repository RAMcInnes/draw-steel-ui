<script setup lang="ts">
import { computed } from 'vue';
import type { AbilityInterface } from '@/types';

    const props = defineProps<{
        ability: AbilityInterface
    }>();

    const abilityToShow = computed(() => {
        return props.ability;
    })
</script>

<template>
    <v-card density="compact">
        <v-card-title v-if="abilityToShow.name">
            {{ abilityToShow.name }} <span v-if="abilityToShow.resourceCost">({{ abilityToShow.resourceCost }})</span>
        </v-card-title>
        <v-card-subtitle v-if="abilityToShow.storyText">
            {{ abilityToShow.storyText }}
        </v-card-subtitle>
        <v-container>
            <v-row dense>
                <v-col>
                    <span v-if="abilityToShow.keywords"><b>Keyword:</b> {{ abilityToShow.keywords.join(', ') }}</span>
                </v-col>
                <v-col>
                    <span v-if="abilityToShow.type"><b>Type:</b> {{ abilityToShow.type }}</span>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col>
                    <span v-if="abilityToShow.distance"><b>Distance:</b> {{ abilityToShow.distance }}</span>
                </v-col>
                <v-col>
                    <span v-if="abilityToShow.target"><b>Target:</b> {{ abilityToShow.target }}</span>
                </v-col>
            </v-row>
            <v-row dense v-if="abilityToShow.abilityRoll">
                <v-col>
                    <div>
                        <strong>Power Roll + {{ abilityToShow.abilityRoll.characteristic }}:</strong>
                        <br><span>• <b>11 or lower:</b> {{ abilityToShow.abilityRoll.tierOne }}</span>
                        <br><span>• <b>12–16:</b> {{ abilityToShow.abilityRoll.tierTwo }}</span>
                        <br><span>• <b>17+:</b> {{ abilityToShow.abilityRoll.tierThree }}</span>
                    </div>
                </v-col>
            </v-row>
            <v-row dense v-if="abilityToShow.effect">
                <v-col>
                    <div>
                        <strong>Effect:</strong> {{ abilityToShow.effect }}
                    </div>
                </v-col>
            </v-row>
            <v-row dense v-if="abilityToShow.spendResource">
                <v-col>
                    <div>
                        <strong>Spend {{ abilityToShow.spendResource.characteristic }}:</strong>{{ abilityToShow.spendResource.effect }}
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>