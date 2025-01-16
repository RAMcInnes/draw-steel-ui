export interface AbilityInterface {
    name?: string,
    storyText?: string,
    resourceCost?: string,
    keywords?: string[],
    type?: string,
    distance?: string,
    target?: string,
    abilityRoll?: Record<string,string>,
    effect?: string,
    spendResource?: Record<string,string>,
};