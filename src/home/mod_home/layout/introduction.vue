<template>
    <div class="introduction">
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
    name: 'introduction',
    setup: () => {
        return {};
    }
});
</script>

<style lang="less" scoped>
    .introduction {
        width: 30rem;
        height: 100%;
        margin: 3.2rem .6rem;

        &__separator {
            background-color: var(--separator-color);
            height: .1rem;
            margin: 1rem 0;
        }
    }
</style>
