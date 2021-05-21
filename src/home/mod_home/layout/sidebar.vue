<template>

</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 20:46:28
 * @description:
 */

import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { HomeMutationsName } from 'store/home/mutations_name';

export default defineComponent({
    name: 'sidebar',
    setup: () => {
        const store = useStore();
        store.commit(HomeMutationsName.updateSidebarExpandStatus, true);

        return {};
    }
});
</script>

<style lang="less">
</style>
