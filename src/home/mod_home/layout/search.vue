<template>
    <div class="search">
        <i :class="['search__icon', 'link', 'iconfont', isShowSearchInput ? 'icon-close' : 'icon-search']"
           @click="reverseSearchShowStatus()"></i>
        <teleport to="body">
            <div class="search-field"
                 v-show="isShowSearchInput">
                <a-input-search class="search-field__input"
                                size="large"
                                @search="onSearch()" />
            </div>
        </teleport>
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-05-21 21:19:49
 * @description:
 */

import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Search',
    setup: () => {
        const keyword = ref('');
        const isShowSearchInput = ref(false);

        return {
            keyword,
            isShowSearchInput,
            reverseSearchShowStatus () {
                isShowSearchInput.value = !isShowSearchInput.value;
            },
            onSearch () {}
        };
    }
});
</script>

<style lang="less">
.search {
    position: fixed;
    top: 1rem;
    right: 2rem;
    z-index: var(--search-button-index);

    &__icon {
        float: right;
        font-size: 2.8rem;
    }

    &__input {
        float: right;
        width: 20rem;
        margin: .6rem;
    }
}

.search-field {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--full-width);
    height: var(--full-height);

    background-color: var(--white);
    z-index: var(--search-index);

    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3rem);

    &__input {
        width: 90%;
        max-width: 80rem;
    }
}
</style>
