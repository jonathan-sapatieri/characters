<template>
  <div>
    <header class="header">
      <h1>Characters</h1>
    </header>
    <search-bar @search="handleSearch" />

    <main v-show="characters.length > 0" class="content">
      <div class="character-list">
        <input
          class="character-filter"
          type="text"
          placeholder="Filter..."
          v-model="filter"
        />
        <ul>
          <character-list-item
            v-for="character in filteredCharacters"
            :key="character.id"
            :character="character"
            @readMore="handleReadMore"
          />
        </ul>
        <character-list-paginator
          :pagination="pagination"
          @changePage="handleChangePage"
        />
      </div>
      <character-details
        v-if="selectedCharacter"
        :character="selectedCharacter"
      />
    </main>

    <!-- <footer class="footer">
      <p>&copy; 2021 Characters</p>
    </footer> -->
  </div>
</template>

<script>
import DataService from './services/DataService';
import SearchBar from './components/SearchBar.vue';
import CharacterListItem from './components/CharacterListItem.vue';
import CharacterListPaginator from './components/CharacterListPaginator.vue';
import CharacterDetails from './components/CharacterDetails.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    CharacterListItem,
    CharacterListPaginator,
    CharacterDetails,
  },
  data() {
    return {
      characters: [],
      filter: '',
      pagination: {},
      selectedCharacter: null,
    };
  },
  computed: {
    filteredCharacters() {
      if (this.filter) {
        return this.characters.filter((character) =>
          character.attributes.name.includes(this.filter)
        );
      }
      return this.characters;
    },
  },
  methods: {
    setData(characters, pagination) {
      this.characters = characters;
      this.pagination = pagination;
    },
    cleanData() {
      this.filter = '';
    },
    async getFilteredData(category, filter, term) {
      const res = await DataService.getFilteredData(category, filter, term);
      this.setData(res.data, res.links);
    },
    async handleSearch(searchTerm) {
      await this.getFilteredData('characters', 'name', searchTerm);
    },
    async handleReadMore(character) {
      character.medias = await DataService.getMedias(
        character.relationships.mediaCharacters.links.related
      );
      this.selectedCharacter = character;
    },
    async handleChangePage(pageUrl) {
      const res = await DataService.getData(pageUrl);
      this.cleanData();
      this.setData(res.data, res.links);
    },
  },
};
</script>

<style>
@import url('./assets/css/reset.css');

body {
  width: 100%;
  font-family: sans-serif;
  font-size: 1rem;
}

.header h1 {
  width: 100%;
  padding: 1rem;
  text-align: center;
  text-transform: lowercase;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  background-color: darkblue;
}

.content {
  display: flex;
  justify-content: space-between;
  padding: 4rem 8rem;
}

.character-filter {
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
}

.character-filter:focus {
  outline-color: darkblue;
}

.character-list {
  width: 100%;
  max-height: 1000px;
}

.character-list ul {
  width: 100%;
  max-height: 900px;
  overflow-y: scroll;
  padding: 2rem;
}

.footer p {
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  background-color: darkblue;
}
@media only screen and (max-width: 1026px) {
  html {
    font-size: 12px;
  }
  .hidden {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
  html {
    font-size: 10px;
  }

  .hidden {
    display: none;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
}
</style>
