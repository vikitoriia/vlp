<template>
  <nav aria-label="Pagination">
    <ul class="pagination">
      <li v-for="pageNumber in pages" :class="{current : (activePage == pageNumber) }">
        <span v-if="activePage == pageNumber">
          <span class="show-for-sr">You're on page</span> {{pageNumber}}
        </span>
        <a v-else
		     v-on:click.prevent="$emit('changePage', pageNumber)"
		  	  href="#" aria-label="Page">{{pageNumber}}</a>
      </li>
    </ul>
	 Toal {{totalPages}}
  </nav>
</template>

<script>
export default {
  props: ["totalPages", "activePage"],
  data() {
    return {};
  },
  computed: {
    pages() {
      let pagesArr = [];
      for (let index = 1; index <= this.totalPages + 1; index++) {
        pagesArr.push(index);
      }
      return pagesArr;
    }
  }
};
</script>

