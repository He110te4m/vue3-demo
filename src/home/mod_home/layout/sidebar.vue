<template>
    <aside class="sidebar"
           :style="wrapperCss">
        <span v-show="!isShowSidebar"
              class="sidebar__expand-button hand iconfont icon-menu"
              @click="changeSidebarExpandState(true)">
        </span>
        <span v-show="isShowSidebar && isIndexPage"
              class="sidebar__expand-button hand iconfont icon-close"
              @click="changeSidebarExpandState(false)">
        </span>
        <introduction v-show="isShowSidebar" />
    </aside>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 20:46:28
 * @description:
 */

import { computed, defineComponent } from 'vue';
import { useStore } from 'store/index';
import { HomeMutationsName } from 'store/home/mutations_name';
import Introduction from './introduction.vue';
import { useRoute } from 'vue-router';
import { RouteNames } from '@/router/modules/home';

export default defineComponent({
    name: 'Sidebar',
    components: {
        Introduction
    },
    setup: () => {
        const store = useStore();

        return {
            isIndexPage: useRoute().name === RouteNames.articles,

            isShowSidebar: computed(() => store.state.home.isExpandSidebar),
            wrapperCss: computed(() => ({
                width: `${store.getters.sidebarWidth}px`
            })),
            changeSidebarExpandState: (status: boolean) => {
                store.commit(HomeMutationsName.switchSidebarExpandStatus, status);
            }
        };
    }
});

</script>

<style lang="less" scoped>
    .sidebar {
        background: var(--white);
        height: var(--full-height);
        transition: width var(--animate-fast);
        text-align: center;

        &__expand-button {
            color: var(--link-color);
            position: fixed;
            font-size: 2.8rem;
            left: 2rem;
            top: 1rem;
            z-index: var(--menu-index);
        }
    }
</style>
