<template>
    <div class="introduction">
        <author-info />
        <div class="introduction__separator"></div>
        <site-info />
        <div class="introduction__separator"></div>
        <social-link-info />
        <div class="introduction__separator"></div>
        <link-info />
    </div>
</template>

<script lang="ts">
/**
 * @author: he110
 * @since: 2021-05-23 17:28:33
 * @description:
 */

import { defineComponent } from 'vue';
import AuthorInfo from './components/author_info.vue';
import LinkInfo from './components/link_info.vue';
import SiteInfo from './components/site_info.vue';
import SocialLinkInfo from './components/social_link_info.vue';

export default defineComponent({
    name: 'Introduction',
    components: {
        AuthorInfo,
        LinkInfo,
        SiteInfo,
        SocialLinkInfo
    },
    setup: () => {
        return {
        };
    }
});
</script>

<style lang="less" scoped>
.introduction {
    width: calc(100% - 2rem);
    height: calc(100% - 6.4rem);
    margin: 3.2rem 0.6rem;

    &__separator {
        background-color: var(--separator-color);
        height: 0.1rem;
        margin: 1rem 2rem;
    }
}
</style>
