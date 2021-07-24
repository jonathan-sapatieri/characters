<template>
  <li class="character-list-item" @click="handleClick">
    <img
      v-if="character.attributes.image"
      :src="character.attributes.image.original"
      :alt="character.attributes.name"
    />
    <div class="character-list-item__info">
      <h1>{{ character.attributes.name }}</h1>
      <p class="hidden" v-html="character.attributes.description"></p>
    </div>
  </li>
</template>

<script>
export default {
  props: { character: Object },
  methods: {
    handleClick() {
      this.$emit('readMore', this.character);
    },
  },
};
</script>

<style scoped>
.character-list-item {
  display: flex;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 5px 8px;
  cursor: pointer;
}

.character-list-item:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 3px 5px 8px;
}

.character-list-item img {
  width: 100px;
  height: 175px;
  object-fit: cover;
}

.character-list-item__info {
  width: 85%;
  flex-flow: column nowrap;
  padding: 0 1.5rem;
}

.character-list-item__info h1 {
  padding-bottom: 0.5rem;
  font-size: 2.2rem;
  font-weight: bolder;
  color: black;
}

.character-list-item__info p {
  padding-bottom: 1rem;
  line-height: 1.3rem;
  font-size: 1.1rem;
  text-align: justify;
}

@media only screen and (max-width: 1026px) {
  .character-list-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
}
</style>
