<template>
  <div class="character-details">
    <article class="character-details__article">
      <header class="character-details__header">
        <img
          :src="character.attributes.image.original"
          :alt="character.attributes.name"
        />
        <h1>{{ character.attributes.name }}</h1>
      </header>

      <section>
        <h1>Description</h1>
        <p v-html="character.attributes.description"></p>
      </section>

      <section>
        <h1>Medias</h1>
        <table class="character-media-list">
          <tr>
            <th style="width: 25%;">Poster</th>
            <th>Title</th>
            <th style="width: 25%;">Rating</th>
          </tr>
          <media-list-item
            v-for="media in character.medias"
            :key="media.id"
            :media="media"
          />
        </table>
      </section>
    </article>
  </div>
</template>

<script>
import MediaListItem from './MediaListItem.vue';
export default {
  props: {
    character: Object,
  },
  components: { MediaListItem },
};
</script>

<style scoped>
.character-details {
  width: 100%;
  max-height: 1000px;
  padding: 0 3rem 3rem 3rem;
  background-color: white;
  overflow-y: scroll;
}

.character-details__article section p {
  line-height: 1.3rem;
  font-size: 1.1rem;
  text-align: justify;
}

.character-details__article section h1 {
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: bold;
}

.character-details__header {
  display: flex;
  width: 100%;
}

.character-details__header img {
  width: 45%;
}

.character-details__header h1 {
  width: 55%;
  padding: 2rem;
  font-size: 2rem;
  font-weight: bolder;
}

.character-media-list {
  border-collapse: collapse;
  width: 100%;
}

.character-media-list th {
  padding: 1rem;
  border-right: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
  background-color: #909090;
  color: white;
}

.character-media-list tr:nth-child(odd) {
  background-color: #E6E6E6;
}
</style>
