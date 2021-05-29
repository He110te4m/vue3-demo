<template>
    <div class="site-info">
        <div class="site-info__item">
            <div class="site-info__item--link link">
                <i class="site-info__item--icon iconfont icon-article"></i>
                <span class="site-info__item--num">{{ articleTotal }}</span>
            </div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item--link link">
                <i class="site-info__item--icon iconfont icon-category"></i>
                <span class="site-info__item--num">{{ categoryTotle }}</span>
            </div>
        </div>
        <div class="site-info__item">
            <div class="site-info__item--link link">
                <i class="site-info__item--icon iconfont icon-tag"></i>
                <span class="site-info__item--num">{{ tagsTotal }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-29 16:29:56
 * @description:
 */

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SiteInfo',
    setup: () => {
        return {
            articleTotal: 10,
            categoryTotle: 4,
            tagsTotal: 20
        };
    }
});
</script>

<style lang="less" scoped>
.site-info {
    display: flex;
    justify-content: center;

    &__item {
        display: flex;
        padding: 0 2rem;
        flex: 0;

        &--link {
            display: flex;
            flex-direction: column;
        }

        &--icon {
            font-size: 2.4rem;
            color: var(--title-color);
        }

        &--num {
            text-align: center;
            color: var(--title-color);
            font-size: 1.4rem;
        }

        & + & {
            border-left: .1rem solid var(--border-color);
        }
    }
}
</style>
