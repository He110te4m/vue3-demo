<template>
    <sidebar />
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 20:42:16
 * @description:
 */

import { defineComponent, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { homeStore } from 'store/home/store';
import Sidebar from './layout/sidebar.vue';

const storeKey = 'home';

export default defineComponent({
    name: 'Index',
    components: {
        Sidebar
    },
    setup: () => {
        const store = useStore();

        store.registerModule(storeKey, homeStore);
        onBeforeUnmount(() => {
            store.unregisterModule(storeKey);
        });

        return {};
    }
});

</script>

<style lang="less">
</style>
