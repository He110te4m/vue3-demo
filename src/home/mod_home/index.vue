<template>
    <div class="home">
        <sidebar />
        <search />
        <main class="container"></main>
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 20:42:16
 * @description:
 */

import { defineComponent } from 'vue';
import Sidebar from './layout/sidebar.vue';
import Search from './layout/search.vue';
import 'common/style/home/index.less';

export default defineComponent({
    name: 'Index',
    components: {
        Sidebar,
        Search
    },
    setup: () => {
        return {};
    }
});

</script>

<style lang="less" scoped>
    .home {
        display: flex;
        width: 100%;
        height: 100%;

        .container {
            flex: 1;
            height: var(--full-height);
            overflow-y: auto;
        }
    }
</style>
