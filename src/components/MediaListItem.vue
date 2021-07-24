<template>
  <tr class="media-list-item">
    <td><img :src="media.attributes.posterImage.tiny" alt=""></td>
    <td>{{ media.attributes.canonicalTitle }}</td>
    <td>{{ media.attributes.averageRating }}</td>
  </tr>
</template>

<script>
export default {
  created() {
    console.log(this.media)
  },
  props: {
    media: Object,
  },
};
</script>

<style scoped>
.media-list-item td{
  padding: 1rem;
  font-size: 1.1rem;
  vertical-align: middle;
}

@media only screen and (max-width: 1026px) {
  .media-list-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
}
</style>
