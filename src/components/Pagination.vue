<template>
  <div class="overflow-auto">
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="numberOfPages"
        :base-url="baseUrl"
        first-number
        last-number
        align="center"
      ></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    props: ['numberOfPages','currentPage','baseUrl'],
  }
</script>