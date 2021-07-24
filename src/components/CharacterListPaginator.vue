<template>
  <div class="character-list-paginator">
    <button @click="firstPage">&lt;&lt;</button>
    <button @click="previousPage">&lt;</button>
    <button @click="nextPage">&gt;</button>
    <button @click="lastPage">&gt;&gt;</button>
  </div>
</template>

<script>
export default {
  props: {
    pagination: Object,
  },
  methods: {
    firstPage() {
      if(this.pagination.first) {
        this.$emit('changePage', this.pagination.first)
      }
    },
    previousPage() {
      if(this.pagination.prev) {
        this.$emit('changePage', this.pagination.prev)
      }
    },
    nextPage() {
      if(this.pagination.next) {
        this.$emit('changePage', this.pagination.next)
      }
    },
    lastPage() {
      if(this.pagination.last) {
        this.$emit('changePage', this.pagination.last)
      }
    },
  },
}
</script>

<style>
.character-list-paginator {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.character-list-paginator button {
  padding: .5rem;
  margin: .5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: bolder;
  color: darkblue;
  background-color: white;
  cursor: pointer;
}

.character-list-paginator button:hover {
  color: white;
  background-color: darkblue;
}
</style>