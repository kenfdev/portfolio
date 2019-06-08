<template>
  <section :class="$style.projectsSection">
    <k-container>
      <h2>Projects</h2>
      <ul :class="$style.projectList">
        <li
          v-for="(project, index) in projects"
          :key="index"
          :class="$style.listItem"
        >
          <repository-card style="width: 100%;" :item="project" />
        </li>
      </ul>
    </k-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KContainer from '@/components/atoms/KContainer/index.vue';
import RepositoryCard from '@/components/molecules/RepositoryCard/index.vue';

@Component({
  components: {
    KContainer,
    RepositoryCard
  }
})
export default class ProjectsSection extends Vue {
  data() {
    return {
      projects: [
        {
          title: 'faas-rancher',
          url: 'https://github.com/kenfdev/faas-rancher',
          description:
            '[DEPRECATED] Enable Rancher as a backend for Functions as a Service (OpenFaaS) https://github.com/alexellis/faas',
          stats: {
            language: 'Go',
            stars: 29,
            forks: 1
          }
        },
        {
          title: 'rancher-scaleway',
          url: 'https://github.com/kenfdev/rancher-scaleway',
          description:
            'Deploy Kubernetes on Scaleway with Rancher and Terraform',
          stats: {
            language: 'HCL',
            stars: 20,
            forks: 3
          }
        },
        {
          title: 'kubernetes-the-hard-way-vagrant',
          url: 'https://github.com/kenfdev/kubernetes-the-hard-way-vagrant',
          description: 'Study kubernetes the hard way with vagrant.',
          stats: {
            language: 'Shell',
            stars: 19,
            forks: 1
          }
        },
        {
          title: 'openfaas-graphql-blog',
          url: 'https://github.com/kenfdev/openfaas-graphql-blog',
          description: 'A Serverless GraphQL Blog using OpenFaaS',
          stats: {
            language: 'JavaScript',
            stars: 18,
            forks: 5
          }
        }
      ]
    };
  }
}
</script>

<style lang="scss" module>
.projectsSection {
  ul {
    margin: 0;
    padding: 0;
  }
  .projectList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;

    .listItem {
      margin-bottom: 16px;
      display: flex;
      width: calc(50% - 8px);
      flex-direction: row;
      align-items: normal;
      @include sm {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>
