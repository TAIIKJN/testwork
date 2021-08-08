<template>
  <div class="home">
    <b-container fluid>
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
      >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      </b-table>
      <!-- Info modal -->
      <b-modal
        :id="infoModal.id"
        :title="infoModal.title"
      >
       <b-container fluid>
           <b-row>
            <b-col cols="12">
              <img
         
                style="width:100px;height:100px"
                class="rounded-circle"
              />
              <b-form-file
                @change="previewImage"
                accept="image/*"
                placeholder="อัพโหลดไฟล์"
                plain
              ></b-form-file>
            </b-col>
          </b-row>
       </b-container>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          isActive: true,
          age: 40,
          name: { first: "Dickerson", last: "Macdonald" },
        },
        { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
          _rowVariant: "success",
        },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
        { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
        { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
          _cellVariants: { age: "danger", isActive: "warning" },
        },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
        {
          isActive: false,
          age: 22,
          name: { first: "Genevieve", last: "Wilson" },
        },
        { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
        { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } },
      ],
      fields: [
        {key: "NAME",label: "ชื่อ-นามสกุล",class: "text-center"},
        {key: "EMAILE",label: "emaile",class: "text-center"},
        {key: "AGE",
          label: "Is Active",
          formatter: (value, key, item) => {
            return value ? "Yes" : "No";
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "Actions" },
      ],
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      },
    };
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
  },
};
</script>
