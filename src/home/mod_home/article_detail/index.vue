<template>
    <div class="article-detail">
        <detail :article="article" />
    </div>
</template>

<script lang="ts">

/**
 * @author: he110
 * @since: 2021-07-04 11:52:01
 * @description:
 */

import type { ArticleInfo } from '../interface';

import { defineComponent, PropType, reactive, ref, toRefs, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { getArticleByID } from 'apis/article';
import { RouteNames } from 'router/modules/home';
import { useStore } from 'store/index';
import detail from './detail.vue';

export default defineComponent({
    name: 'ArticleDetail',
    props: {
        id: {
            type: String as PropType<string>,
            default: ''
        }
    },
    components: { detail },
    setup: props => {
        const router = useRouter();
        const goHome = () => {
            router.push({ name: RouteNames.index });
        };

        const getArticle = async (id: string) => {
            const articleInfo = useStore().getters.getArticleByID(id);
            if (!articleInfo) {
                goHome();
                return;
            }
            const content = await getArticleByID(id);

            return { ...articleInfo, content };
        };

        let article = reactive({} as ArticleInfo & { content: string });

        const { id } = toRefs(props);

        watch(id, async () => {
            if (!id.value) {
                goHome()
                return;
            }

            Object.assign(article, await getArticle(id.value));
        }, { immediate: true });

        return {
            article
        };
    }
});
</script>

<style lang="less" scoped>
.article-detail {
    max-width: var(--container-max-width);
    margin: var(--container-margin);
}
</style>
