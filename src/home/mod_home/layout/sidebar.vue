<template>
    <aside class="sidebar" :style="wrapperCss">
        <span class="sidebar__expand-button hand iconfont icon-menu"
              @click="changeSidebarExpandState"></span>
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

        const css = computed(() => getStyle(store.getters.sidebarWidth));

        return {
            wrapperCss: css,
            changeSidebarExpandState: () => {
                store.commit(HomeMutationsName.switchSidebarExpandStatus, 'auto');
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
