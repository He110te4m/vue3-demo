<template>
    <div>sidebar</div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 20:46:28
 * @description:
 */

import { defineComponent } from 'vue';
import { useHomeStore } from 'store/home/store';
import { HomeMutationsName } from 'store/home/mutations_name';

export default defineComponent({
    name: 'sidebar',
    setup: () => {
        const store = useHomeStore();
        store.commit(HomeMutationsName.updateSidebarExpandStatus, true);

        return {};
    }
});
</script>

<style lang="less">
</style>
