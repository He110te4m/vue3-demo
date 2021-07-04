<template>
    <dl class="social-link-info">
        <dd v-for="(item, idx) in links"
            :key="`social-link-${idx}`"
            class="social-link-info__item link">
            <span :title="item.title"
                  :class="[ 'iconfont', item.icon ]">
            </span>
        </dd>
    </dl>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-06-02 21:03:02
 * @description:
 */

import { defineComponent, onMounted, ref } from 'vue';
import { getSocials } from 'apis/social';
import { message } from 'ant-design-vue';

interface SocialInfo {
    id: number;
    icon: string;
    title: string;
    url: string;
}

export default defineComponent({
    name: 'SocialLinkInfo',
    setup: () => {
        const socialList = ref([] as SocialInfo[]);

        const loadData = async () => {
            const { code, msg, data = [] } = await getSocials()

            if (code) {
                message.error(msg || 'fail to load social link list!')
                return;
            }

            socialList.value = data;
        };

        onMounted(loadData);

        return {
            links: socialList
        };
    }
});
</script>

<style lang="less" scoped>
    .social-link-info {
        display: flex;
        padding: 0 2rem;

        &__item {
            border-radius: 50%;
            display: inline-flex;
            width: 3.6rem;
            height: 3.6rem;
            border: 1px solid transparent;
            justify-content: center;
            align-items: center;
            transition: border-color var(--animate-fast);

            & {
                margin-right: .6rem;
            }

            &:last-child {
                margin-right: 0;
            }

            &:hover {
                border-color: var(--link-hover-border-color);
            }
        }
    }
</style>
