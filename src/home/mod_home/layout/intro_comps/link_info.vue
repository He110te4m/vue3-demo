<template>
    <dl class="link-info">
        <dd v-for="(item, idx) in links"
            :key="`link-${idx}`"
            class="link-info__item">
            <span :title="item.title"
                  class="link">
                {{ item.title }}
            </span>
        </dd>
    </dl>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-06-02 21:46:48
 * @description:
 */

import { defineComponent, onMounted, ref } from 'vue';
import { getLinks } from 'apis/link';

interface LinkInfo {
    id: number;
    avatar: string;
    title: string;
    desc: string;
    url: string;
}

export default defineComponent({
    name: 'LinkInfo',
    setup: () => {
        const linkList = ref([] as LinkInfo[]);

        const loadData = async () => {
            const { data = [] } = await getLinks();
            linkList.value = data;
        };

        onMounted(loadData);

        return {
            links: linkList
        };
    }
});
</script>

<style lang="less" scoped>
    .link-info {
        display: flex;
        padding: 0 2rem;
        justify-content: center;
        flex-wrap: wrap;

        &__item {
            margin-right: 1rem;
        }
    }
</style>
