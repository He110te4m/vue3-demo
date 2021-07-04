<template>
    <dl class="article-list">
        <dd v-for="article in list"
            :key="article.id"
            class="article-list__item">
            <article-card :article="article" />
        </dd>
    </dl>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-06-06 14:24:19
 * @description:
 */

import type { Article } from './interface';

import { defineComponent, onMounted, ref } from 'vue';
import { getArticles } from 'apis/article';
import { message } from 'ant-design-vue';
import ArticleCard from './article_card.vue';

export default defineComponent({
    name: 'ArticleList',
    components: {
        ArticleCard
    },
    setup: () => {
        const list = ref([] as Article[]);

        const loadData = async () => {
            const { code, msg, data = [] } = await getArticles(1);

            if (code) {
                message.error(msg || 'fail to load site info!');
                return;
            }

            list.value = data;
        };

        onMounted(loadData);

        return {
            list
        };
    }
});
</script>

<style lang="less" scoped>
.article-list {
    max-width: 90rem;
    margin: 6rem auto;

    &__item {
        padding: 1.6rem;
        background-color: var(--block-bg-color);
        box-shadow: 0 0 1rem var(--block-shadow-color);
    }
}
</style>
