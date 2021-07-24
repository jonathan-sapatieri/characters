<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search..."
    />
    <button @click="handleClick">search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    handleClick() {
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>

<style>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem;
  background-color: black;
  background-image: url('../assets/img/search_bar_bkg.jpg');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

.search-bar input {
  width: 35%;
  padding: 0.7rem;
  margin-bottom: 1rem ;
  font-size: 1.2rem;
  outline-color: darkblue;
}

.search-bar button {
  width: 10%;
  padding: 0.7rem 0.5rem;
  border: none;
  font-size: inherit;
  font-weight: bolder;
  color: white;
  background-color: darkblue;
}

.search-bar button:hover {
  cursor: pointer;
}

.search-bar button:active {
  box-shadow: 6px 5px 9px 1px rgba(0, 0, 0, 0.24);
  transform: translateY(2px);
}
</style>
