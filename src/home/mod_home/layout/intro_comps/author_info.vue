<template>
    <div class="author-info">
        <img src="/static/imgs/avatar.jpg"
             alt=""
             class="author-info__avatar hand"
             @click="goHome()" />

        <div class="author-info__author link"
             @click="goHome()">
            {{ author }}
        </div>

        <div class="author-info__site-name link"
             @click="goHome()">
            {{ siteName }}
        </div>

        <dl class="author-info__description">
            <dd v-for="(item, idx) in introList"
                :key="`desc-${idx}`"
                class="author-info__description--item">
                {{ item }}
            </dd>
        </dl>
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-29 16:05:27
 * @description:
 */

import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouteNames } from 'router/modules/home';
import { getSiteInfo } from 'apis/site';

export default defineComponent({
    name: 'AuthorInfo',
    setup: () => {
        const authorName = ref('');
        let introList = ref([] as string[]);
        const siteName = ref('');

        const loadData = async () => {
            const { data: { author = '', name = '', desc = '' } } = await getSiteInfo();

            authorName.value = author;
            siteName.value = name;
            introList.value = desc.split('\\n');
        };

        onMounted(loadData);

        return {
            author: authorName,
            siteName,
            introList,
            goHome: () => {
                useRouter().push({
                    name: RouteNames.index
                });
            }
        };
    }
});
</script>

<style lang="less">
.author-info {
    &__avatar {
        display: block;
        margin: 0 auto;
        width: 10rem;
        height: 10rem;
        padding: .4rem;
        border-radius: 50%;
        box-shadow: 0 0 1.4rem var(--border-color);
        background: var(--white);
    }

    &__author {
        font-size: 1.6rem;
    }

    &__site-name {
        font-size: 1.4rem;
        color: var(--title-color);
        font-weight: 700;
    }

    &__description {
        color: var(--subtitle-color);

        &--item {
            margin: 0;
        }
    }

    &__author,
    &__site-name,
    &__description {
        margin: 1rem 0;
    }
}
</style>
