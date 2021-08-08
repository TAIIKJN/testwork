<template>
  <div>
    <b-card class="con" style="background-color: chocolate">
      <font color="#FFFFF"><h5>เพิ่มข้อมูลสมาชิก</h5></font>
    </b-card>
    <b-container fluid align="center" style="margin-top: 10px">
      <b-card style="max-width: 80%">
        <!-- ชื่อ นามสกุล -->
        <b-row>
          <b-col cols="12" lg="6" style="margin-top: 10px">
            <b-row>
              <b-col cols="3">
                <div align="left"><b>ชื่อ :</b></div>
              </b-col>
              <b-col cols="9">
                <b-form-input id="input-live" v-model="name"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" style="margin-top: 10px">
            <b-row>
              <b-col cols="3">
                <div align="left"><b>นามสกุล :</b></div>
              </b-col>
              <b-col cols="9">
                <b-form-input v-model="lastname"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row style="margin-top: 10px">
          <b-col cols="12" lg="4">
            <b-row>
              <!-- email -->
              <b-col cols="3">
                <div align="left"><b>Email :</b></div>
              </b-col>
              <b-col cols="9">
                <b-form-input id="input-live" v-model="email"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <!-- อายุ -->
          <b-col lg="4" style="margin-top: 10px">
            <b-row>
              <b-col cols="3">
                <div align="left"><b>อายุ :</b></div>
              </b-col>
              <b-col cols="9">
                <b-form-input v-model="age"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <!-- เพศ -->
          <b-col lg="4" style="margin-top: 10px">
            <b-row>
              <b-col cols="3">
                <div align="left"><b>เพศ :</b></div>
              </b-col>
              <b-col cols="9">
                <b-form-input v-model="sex"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div style="margin-top: 10px">
        <b-button variant="success" @click="Addregister" block
              >ยืนยัน</b-button></div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      age: "",
      sex: ""
    };
  },
};
</script>

methods: {

}