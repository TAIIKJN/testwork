<template>
  <div>
    <b-card class="con" style="background-color: #00b4d8">
      <font color="#FFFFF"><h5>หน้าหลัก</h5></font>
    </b-card>
    <b-container fluid style="margin-top: 10px" v-if="items">
      <b-row style="margin-bottom: 10px">
        <b-col cols="4">
          <b-button href="/addperson" variant="primary"
            >เพิ่มข้อมูลสมาชิก</b-button
          >
        </b-col>
        <b-col cols="5">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="ค้นหา"
          ></b-form-input>
        </b-col>
        <b-col cols="3">
          <div align="left" style="margin-left: 20px">
            <h6>จำนวนสมาชิกทั้งหมด : {{ items.length }} คน</h6>
          </div>
        </b-col>
      </b-row>

      <b-table
        striped
        hover
        :filter="filter"
        :items="items"
        :fields="fields"
        :filterIncludedFields="filterOn"
      >
        <template v-slot:cell(more)="row">
          <!-- แก้ไข -->
          <b-button
            style="margin-right: 10px"
            variant="info"
            @click="info(row.item, row.index, $event.target)"
            >แก้ไข</b-button
          >
          <!-- ลบ -->
          <b-button variant="danger" @click="Delperson">ลบ</b-button>
        </template>
      </b-table>
      <!-- Info modal -->
      <b-modal
        :id="infoModal.id"
        ref="modal-1"
        :title="infoModal.title"
        hide-footer
      >
        <b-container fluid>
          <!-- ชื่อ-นามสกุล -->
          <b-row>
            <b-col cols="12">
              <label falign="left" style="margin-left: 5px"
                >ชื่อ - นามสกุล</label
              >
            </b-col>
            <b-col cols="6">
              <b-input type="text" v-model="items[editpro].name"></b-input>
            </b-col>
            <b-col cols="6">
              <b-input type="text" v-model="items[editpro].lastname"></b-input>
            </b-col>
          </b-row>
          <!-- Email -->
          <b-row>
            <b-col cols="12">
              <label for="input-small" align="center">อีเมล</label>
              <b-form-input
                id="input-small"
                v-model="items[editpro].email"
              ></b-form-input>
            </b-col>
          </b-row>
          <!-- อายุ -->
          <b-row>
            <b-col cols="12">
              <label for="input-small" align="center">อีเมล</label>
              <b-form-input
                id="input-small"
                v-model="items[editpro].age"
              ></b-form-input>
            </b-col>
          </b-row>
          <!-- เพศ -->
          <b-row>
            <b-col cols="12">
              <label for="input-small" align="center">เพศ</label>
              <b-form-input
                id="input-small"
                v-model="items[editpro].sex"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <b-button class="mt-3" variant="success" block @click="editprofile"
          >แก้ไขข้อมูล</b-button
        >
        <b-button class="mt-3" variant="danger" block @click="backeditprofile"
          >ยกเลิก</b-button
        >
      </b-modal>
    </b-container>
    <!-- <div v-else>
      <b-spinner
        variant="success"
        style="width: 3rem; height: 3rem"
        label="Spinning"
      ></b-spinner>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
const api_url = "http://localhost:3000";
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      age: "",
      sex: "",
      fields: [
        { label: "ชื่อ-นามสกุล", key: "FULLNAME", sortable: true },
        { label: "อายุ", key: "age", sortable: true },
        { label: "เพศ", key: "sex", sortable: false },
        { label: "Email", key: "email", sortable: false },
        { label: "เพิ่มเติ่ม", key: "MORE", sortable: false },
      ],
      items: null,
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      editpro: 0,
    };
  },

  mounted() {
    axios.post(`${api_url}/selectperson`).then((response) => {
      this.items = response.data;
      console.log(this.items);
    });
  },

  methods: {
    Delperson(items) {
      console.log(this.items[this.editpro].ID);
      axios
        .post(`${api_url}/deleteperson`, {
          ID: this.items[this.editpro].ID,
        })
        .then((response) => {
          this.resetlistpd(response);
          console.log(response);
        });
    },
     editprofile() {
      console.log(this.items[this.editpro].ID);
      var data = {
        NAME: this.items[this.editpro].name,
        LASTNAME: this.items[this.editpro].lastname,
        EMAIL: this.items[this.editpro].email,
        AGE: this.items[this.editpro].age,
        SEX: this.items[this.editpro].sex,
        ID: this.items[this.editpro].ID
      };
      axios.post(`${api_url}/updataperson`, data).then((response) => {
        console.log(response);
        this.$refs["modal-1"].hide();
        axios.post(`${api_url}/selectperson`).then((response2) => {
          this.items = response2.data;
          console.log(this.items);
        });
      });
    },
    resetlistpd() {
      axios.post(`${api_url}/selectperson`).then((response) => {
        this.items = response.data;
        console.log(this.items);
      });
    },
    info(item, index, button) {
      this.editpro = index;
      console.log(index);
      this.infoModal.title = item.name;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    backeditprofile() {
      this.$refs["modal-1"].hide();
    },
  },
};
</script>
