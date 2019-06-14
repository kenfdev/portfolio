<template>
  <ais-instant-search
    class="searchBar"
    :search-client="searchClient"
    index-name="portfolio"
  >
    <ais-configure :hits-per-page.camel="10" />
    <ais-autocomplete>
      <template slot-scope="{ currentRefinement, indices, refine }">
        <vue-autosuggest
          :suggestions="indicesToSuggestions(indices)"
          :input-props="{
            placeholder: 'Search about me here…'
          }"
          :get-suggestion-value="getSuggestionValue(currentRefinement)"
          @input="refine"
          @selected="onSelect"
        >
          <template slot="before-suggestions">
            <div class="algolia">
              <a href="https://www.algolia.com/" target="_blank">
                <img src="~assets/images/search_by_algolia.png" alt="" />
              </a>
            </div>
          </template>
          <template slot-scope="{ suggestion }">
            <component
              :is="resultComponent(suggestion.item)"
              :item="suggestion.item"
            />
          </template>
        </vue-autosuggest>
      </template>
    </ais-autocomplete>
  </ais-instant-search>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import algoliasearch from 'algoliasearch/lite';
import { VueAutosuggest } from 'vue-autosuggest';

import BlogResult from '@/components/molecules/BlogResult/index.vue';
import SlideResult from '@/components/molecules/SlideResult/index.vue';
import CourseResult from '@/components/molecules/CourseResult/index.vue';
import RepoResult from '@/components/molecules/RepoResult/index.vue';

@Component({
  components: {
    VueAutosuggest,
    BlogResult,
    SlideResult,
    CourseResult,
    RepoResult
  }
})
export default class SearchBar extends Vue {
  searchClient = algoliasearch(
    'CAT3IJGOMB',
    '8c9416fb984011a0f2b6f53f7a74a9db'
  );
  resultComponent(item: any) {
    switch (item.type) {
      case 'blog':
        return 'BlogResult';
      case 'slide':
        return 'SlideResult';
      case 'course':
        return 'CourseResult';
      case 'repository':
        return 'RepoResult';
    }
  }
  onSelect(selected) {
    console.log(selected);
    const win = window.open(selected.item.url, '_blank');
    if (win) {
      win.focus();
    }
  }
  getSuggestionValue(query) {
    return () => query;
  }
  indicesToSuggestions(indices) {
    console.log(indices);
    return indices.map(({ hits }) => ({ data: hits }));
  }
  mounted() {
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }
  beforeDestroy() {
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  }
  onDocumentMouseUp(e: any) {
    // hack to catch click event inside autosuggestion
    if (
      e.target &&
      e.target.parentNode &&
      e.target.parentNode.href === 'https://www.algolia.com/'
    ) {
      window.open('https://www.algolia.com', '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar {
  .algolia {
    position: sticky;
    width: inherit;
    background-color: white;
    top: 0;
    border-radius: 15px;
    border-radius: 15px 15px 0 0;
    padding-right: 1rem;
    padding-top: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    text-align: right;
  }
}
.searchBar ::v-deep {
  .ais-Highlight-highlighted {
    background: cyan;
    font-style: normal;
  }
  #autosuggest {
    position: relative;
    max-width: 500px;
    margin: auto;
    input {
      width: 100%;
      height: 30px;
      line-height: 30px;
      box-sizing: border-box;
      padding: 0 15px 0 30px;
      border: 1px solid #e3e3e3;
      color: #273849;
      outline: none;
      border-radius: 15px;
      margin-right: 10px;
      transition: border-color 0.2s ease;
      background: #fff url(~assets/images/search.png) 6px 4px no-repeat;
      background-size: 20px;
      vertical-align: middle !important;
    }
  }
  .autosuggest__results {
    ul {
      list-style: none;
    }
    &-container {
      border-radius: 15px;
      position: absolute;
      max-height: 80vh;
      overflow: scroll;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      ul {
        margin: 0;
        padding: 0;
      }
    }
    &-item {
      &:hover {
        background-color: #d3d3d3;
      }
      cursor: pointer;
      word-break: break-all;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding: 1rem;
      list-style-type: none;
      align-items: center;
      justify-content: space-between;

      &-highlighted {
        background-color: rgba(0, 0, 0, 0.24);
      }
    }
  }
}
</style>
