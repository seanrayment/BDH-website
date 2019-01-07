import Axios from 'axios';

export const bdhRequester = {

    defaultArticleParams: {
        type: 'newspaper.ArticlePage',
        fields: 'content,section,summary,featured_on_section,featured_on_main,tags',
    },

    defaultAuthorParams: {
        type: 'newspaper.AuthorPage',
        fields: 'name,lastName,description,position,year',
    },

    /**
     * Builds a request for an individual article from wagtail API
     * Uses the spread operator giving priority to...
     * 1. params defined in function
     * 2. params passed as argument to function
     * 3. params property of bdhRequester
     *
     * @param customParams
     */
    getArticle(customParams) {
        const params = {
            limit: 1,
        };

        const mergedParams = {...this.defaultArticleParams, ...customParams, ...params};

        Axios.get('/api/v2/pages/', {params: mergedParams})
            .then(function (response) {
                return response;
            });
    },

    /**
     * Same functionality as getArticle without limit=1
     *
     * @param customParams
     */
    getArticles(customParams) {
        const params = {};

        const mergedParams = {...this.defaultArticleParams, ...customParams, ...params};

        Axios.get('/api/v2/pages/', {params: mergedParams})
            .then(function (response) {
                console.log(response.data);
                return response;
            });
    },

    getAuthor(customParams) {
        const params = {
            limit: 1,
        };

        const mergedParams = {...this.defaultAuthorParams, ...customParams, ...params};

        Axios.get('/api/v2/pages/', {params: mergedParams})
            .then(function (response) {
                return response;
            });
    },

    getAuthor(customParams) {
        const params = {};

        const mergedParams = {...this.defaultAuthorParams, ...customParams, ...params};

        Axios.get('/api/v2/pages/', {params: mergedParams})
            .then(function (response) {
                return response;
            });
    },

    ////////////////////////
    // Example Requests
    ///////////////////////

    getArticleBySlug(slug) {
        return this.getArticle({slug: slug});
    },

    /**
     * Gets the 10 most recently published articles
     *
     * @param limit
     * @returns {*}
     */
    getNewArticles(limit) {
        return this.getArticles({order: "-first_published_at", limit: 10});
    },


};