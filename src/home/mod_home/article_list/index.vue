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

import type { ArticleInfo } from '../interface';

import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'store/index';
import { ArticleActionsName } from 'store/article/actions_name';
import ArticleCard from './article_card.vue';

export default defineComponent({
    name: 'ArticleList',
    components: {
        ArticleCard
    },
    setup: () => {
        const list = ref([] as ArticleInfo[]);

        onMounted(async () => {
            const store = useStore();
            await store.dispatch(ArticleActionsName.initArticle);
            list.value = store.state.article.articles;
        });

        return {
            list
        };
    }
});
</script>

<style lang="less" scoped>
.article-list {
    max-width: var(--container-max-width);
    margin: var(--container-margin);

    &__item {
        padding: var(--lg-seperator-size);
        background-color: var(--block-bg-color);
        box-shadow: var(--block-shadow);
        margin-bottom: var(--article-margin);
    }
}
</style>
