<template>
    <article class="detail">
        <header class="detail__header">
            <div class="detail__header__title">
                {{ article.title }}
            </div>
        </header>
        <div class="detail__info">
            <div class="detail__info__time">
                {{ article.createdAt }}
            </div>
            <!-- <div class="detail__info__time--separator">-</div> -->
            <!-- <div class="detail__info__time">
                {{ article.updated_at }}
            </div> -->
        </div>
        <div class="detail__body">
            <div class="detail__body__content"
                 v-markdown="article.content">
            </div>
        </div>
        <footer class="detail__footer">
            <div class="detail__footer__category"></div>
            <dl class="detail__footer__tags"></dl>
        </footer>
    </article>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-07-04 11:52:01
 * @description:
 */

import type { ArticleInfo } from '../interface';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Detail',
    props: {
        article: {
            type: Object,
            default: {} as ArticleInfo
        }
    }
});
</script>

<style lang="less" scoped>
.detail {
    padding: var(--lg-seperator-size);
    background-color: var(--block-bg-color);
    box-shadow: var(--block-shadow);

    &__header {
        text-align: center;
        margin-bottom: var(--sm-seperator-size);
        &__title {
            font-size: 2.4rem;
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
}
</style>
