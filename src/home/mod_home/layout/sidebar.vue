<template>
    <aside class="sidebar"
           :style="wrapperCss">
        <span v-if="!isShowSidebar"
              class="sidebar__expand-button hand iconfont icon-menu"
              @click="changeSidebarExpandState(true)"></span>
        <template v-else>
            <span class="sidebar__expand-button hand iconfont icon-close1"
                  @click="changeSidebarExpandState(false)"></span>
        </template>
    </aside>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 20:46:28
 * @description:
 */

import { computed, defineComponent, Ref, ref } from 'vue';
import { HomeMutationsName } from 'store/home/mutations_name';
import { useStore } from 'store/index';

export default defineComponent({
    name: 'sidebar',
    setup: () => {
        const store = useStore();
        console.log(store);

        const isShowSidebar = computed(() => store.state.home.isExpandSidebar)
        const css = computed(() => getStyle(store.getters.sidebarWidth));

        return {
            isShowSidebar,
            wrapperCss: css,
            changeSidebarExpandState: (state: boolean) => {
                store.commit(HomeMutationsName.switchSidebarExpandStatus, state);
            }
        };
    }
});

function getStyle (width: number): Partial<CSSStyleDeclaration> {
    return {
        width: `${width}px`
    };
}

</script>

<style lang="less" scoped>
    .sidebar {
        background: var(--white);
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        transition: width var(--animate-fast);

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
