<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col lg="6" class="my-1">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="ค้นหา"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-table
        :items="items"
        :filter="filter"
        :filter-included-fields="filterOn"
        stacked="md"
        show-empty
        small
        @filtered="onFiltered"
      >
        <template #cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
