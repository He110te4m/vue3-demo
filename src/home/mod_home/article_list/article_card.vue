<template>
    <div class="article-card">
        <div class="article-card__header">
            <router-link :to="`article?id=${article.id}`" class="article-card__header__title link">
                {{ article.title }}
            </router-link>
        </div>
        <div class="article-card__info">
            <div class="article-card__info__time">
                {{ article.created_at }}
            </div>
            <div class="article-card__info__time--separator">-</div>
            <div class="article-card__info__time">
                {{ article.updated_at }}
            </div>
        </div>
        <div class="article-card__body">
            <div class="article-card__body__desc"
                 v-markdown="article.desc">
            </div>
        </div>
        <div class="article-card__footer">
            <div class="article-card__footer__category"></div>
            <dl class="article-card__footer__tags"></dl>
        </div>
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-06-20 20:05:44
 * @description:
 */

import type { Article } from './interface';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleCard',
    props: {
        article: {
            type: Object,
            default: () => ({} as Article)
        }
    },
    setup () {
        return {};
    }
});
</script>

<style lang="less" scoped>
.article-card {
    display: flex;
    width: 100%;
    flex-direction: column;

    &__header {
        text-align: center;
        margin-bottom: .8rem;

        &__title {
            font-size: 2rem;
        }
    }

    &__info {
        display: flex;
        justify-content: center;
        margin-bottom: .8rem;

        &__time {
            &--separator {
                margin: 0 .8rem;
            }
        }
    }

    &__desc {
        display: flex;
    }
}
</style>
