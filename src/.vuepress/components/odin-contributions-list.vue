<template>
  <div class="odin-list-contributors">
    <div class="odin-list-contributors__item" v-for="contributor in contributors" :key="contributor.id">
      <a :href="contributor.html_url" :title="'@' + contributor.login" target="_blank">
        <img :src="contributor.avatar_url" :alt="'Avatar @' + contributor.login" width="70" height="70" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contributors: []
    };
  },

  mounted() {
    this.getContributors();
  },

  methods: {
    getContributors: async function() {
      this.contributors = await fetch(
        "https://api.github.com/repos/wpbrasil/odin/contributors"
      )
        .then(res => res.json())
        .then(data => data);
    }
  }
};
</script>

<style>
.odin-list-contributors {
  margin: 15px auto;
  display: flex;
  flex-wrap: wrap;
}

.odin-list-contributors .odin-list-contributors__item img {
  width: 70px;
  height: 70px;
  margin-right: 15px;
  margin-bottom: 10px;
  border-radius: 50px;
  background: white;
  border: 1px solid #eee;
  padding: 5px;
}
</style>