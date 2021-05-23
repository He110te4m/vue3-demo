<template>
    <aside class="sidebar"
           :style="wrapperCss">
        <span v-if="!isShowSidebar"
              class="sidebar__expand-button hand iconfont icon-menu"
              @click="changeSidebarExpandState(true)"></span>
        <template v-else>
            <span class="sidebar__expand-button hand iconfont icon-close1"
                  @click="changeSidebarExpandState(false)"></span>
            <introduction />
        </template>
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

export default defineComponent({
    name: 'sidebar',
    components: {
        Introduction,
    },
    setup: () => {
        const store = useStore();

        return {
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
            color: var(--link);
            position: fixed;
            font-size: 2.8rem;
            left: 2rem;
            top: 1rem;
            z-index: 20;
        }
    }
</style>
