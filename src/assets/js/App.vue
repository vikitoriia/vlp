<template>
  <div id="app">
    <h1 class="text-center">Усі видання</h1>
    <div class="row align-center">
      <div class="column small-12 medium-10">
        <div class="flex-container align-justify">
          <Pagination
            :totalPages="getTotalPages()"
            :activePage="activePage"
            v-on:changePage="goToPage"
          />

          <select v-model="itemsPerPage" class="small-2">
            <option value="1">1 items</option>
            <option value="2">2 items</option>
            <option value="4">4 items</option>
            <option value="6">6 items</option>
            <option value="8">8 items</option>
          </select>
        </div>
        <!-- /.flex-container -->

        <hr />
      </div>
      <!-- /.column -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div
        class="column small-12 medium-6 large-3"
        v-for="(book, index) in productsToShow"
      >
        <article class="ba-product">
          <a :href="book.url">
            <img :src="book.img" :alt="book.title" />
          </a>
          <h3 class="ba-product__title">{{book.title}}</h3>
          <p class="ba-product__author">{{book.authors}}</p>
          <div class="ba-price">{{book.price}}</div>
          <!-- /.ba-price -->
        </article>
      </div>
      <!-- /.column -->
    </div>
    <!-- /.row -->
    <div class="row align-center">
      <div class="column small-12 medium-10">
			 <Pagination
            :totalPages="getTotalPages()"
            :activePage="activePage"
            v-on:changePage="goToPage"
          />
        <hr />
      </div>
      <!-- /.column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
// import json from '../db/data.json';

import Pagination from "./components/Pagination.vue";

export default {
  data() {
    return {
      itemsPerPage: 4,
      activePage: 1,
      products: [],
      productsToShow: []
    };
  },
  methods: {
    getTotalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    goToPage(index) {
      console.log(index);
		this.activePage = index;
		
      fetch("assets/db/data.json")
        .then(res => res.json())
        .then(list => {
			  this.productsToShow = list.splice((index-1)*this.itemsPerPage, this.itemsPerPage)
			});
    }
  },
  mounted() {
    fetch("assets/db/data.json")
      .then(res => res.json())
      .then(list => {
				this.products = list,
				this.productsToShow = list.splice(0, this.itemsPerPage);
			}
		);
  },
  components: {
    Pagination
  }
};
</script>