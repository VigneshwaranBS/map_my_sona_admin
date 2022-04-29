<template>
  <form @submit.prevent="addproduct">
    <div class="container ma-12">
      <v-card width="600">
        <v-card-title>Add New Products</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Unique ID"
                v-model="uniqueid"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Serial No"
                v-model="serialno"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field label="Make" v-model="make" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Model No"
                v-model="modelno"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Procurement Date"
                v-model="procuredate"
                filled
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Power Rating"
                v-model="powerrating"
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Warrenty Rating"
                v-model="warrentyperiod"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Warrenty Expiry Date"
                v-model="warrentyexpirydate"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Installed Date"
                v-model="installeddate"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Installed By"
                v-model="instaledby"
                filled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Department of Product"
                v-model="departmentofproduct"
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Mobile No"
                v-model="mobileno"
                filled
              ></v-text-field>
            </v-col>

            <!-- <v-col cols="12" sm="6">
              <v-text-field
                label="Location"
                v-model="location"
                filled
              ></v-text-field>
            </v-col> -->
          </v-row>
          <v-autocomplete
            v-model="location"
            :items="location"
            dense
            filled
            label="Location"
          ></v-autocomplete>
          <v-btn color="primary" type="submit"> Add Product </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </form>
</template>

<script>
export default {
  name: "addproduct",
  data: () => ({
    location: ["foo", "bar", "fizz", "buzz"],
  }),
  //   methods: {
  //     async addDoctor() {
  //       console.log("hello");
  //       const doctors = {
  //         name: this.name,
  //         experience: this.experience,
  //         degree: this.degree,
  //         phonenumber: this.phonenumber,
  //         specialization: this.specialization,
  //       };

  //       await doctorService
  //         .add(doctors)
  //         .then(() => {
  //           alert("Doctors added successfully");
  //           this.name = null;
  //           this.experience = null;
  //           this.degree = null;
  //           this.phonenumber = null;
  //           this.specialization = null;
  //         })
  //         .catch((error) => {
  //           alert("unable to add ");
  //           console.log(error);
  //         });
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
</style>