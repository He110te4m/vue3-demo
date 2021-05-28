<template>
    <div class="introduction">
        <div class="introduction__avatar--wrapper">
            <img src="static/imgs/avatar.jpg"
                 alt=""
                 class="introduction__avatar" />
        </div>
    </div>
</template>

<script lang="ts">
/**
 * @author: he110
 * @since: 2021-05-23 17:28:33
 * @description:
 */

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Introduction',
    setup: () => {
        return {};
    }
});
</script>

<style lang="less" scoped>
.introduction {
    width: 30rem;
    height: 100%;
    margin: 3.2rem 0.6rem;

    &__separator {
        background-color: var(--separator-color);
        height: 0.1rem;
        margin: 1rem 0;
    }
}
</style>
