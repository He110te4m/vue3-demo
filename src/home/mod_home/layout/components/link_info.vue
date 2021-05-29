<template>
    <dl class="link-info">
        <dd v-for="(item, idx) in links"
            :key="`link-${idx}`"
            class="link-info__item">
            <span :title="item.title" class="link">{{ item.title }}</span>
        </dd>
    </dl>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-06-02 21:46:48
 * @description:
 */

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LinkInfo',
    setup: () => {
        return {
            links: [
                {
                    title: 'zhang san',
                    url: ''
                }
            ]
        };
    }
});
</script>

<style lang="less" scoped>
    .link-info {
        display: flex;
        padding: 0 2rem;
        justify-content: center;
    }
</style>
