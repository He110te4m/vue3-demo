<template>
    <div class="article-card">
        <header class="article-card__header">
            <router-link
                :to="`article/${article.id}`"
                class="article-card__header__title link">
                {{ article.title }}
            </router-link>
        </header>
        <div class="article-card__info">
            <div class="article-card__info__time">
                {{ article.createdAt }}
            </div>
            <!-- <div class="article-card__info__time--separator">-</div> -->
            <!-- <div class="article-card__info__time">
                {{ article.updatedAt }}
            </div> -->
        </div>
        <div class="article-card__body">
            <div class="article-card__body__desc"
                 v-markdown="article.desc">
            </div>
        </div>
        <footer class="article-card__footer">
            <div class="article-card__footer__category"></div>
            <dl class="article-card__footer__tags"></dl>
        </footer>
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-06-20 20:05:44
 * @description:
 */

import type { ArticleInfo } from '../interface';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleCard',
    props: {
        article: {
            type: Object,
            default: () => ({} as ArticleInfo)
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
        margin-bottom: var(--sm-seperator-size);

        &__title {
            font-size: 2rem;
        }
    }

    &__info {
        display: flex;
        justify-content: center;
        margin-bottom: var(--sm-seperator-size);

        &__time {
            &--separator {
                margin: 0 var(--sm-seperator-size);
            }
        }
    }

    &__desc {
        display: flex;
    }
}
</style>
