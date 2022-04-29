<template>
  <main>
    <div id="header">Dashboard</div>
    <!-- <v-btn class="primary adddoctor" router to="/">Add Doctors</v-btn> -->
    <div id="cards-wrap">
      <div id="cards">
        <div class="card">
          <h3>40</h3>
          <p>Total Complaints Registered</p>
        </div>
        <div class="card">
          <h3>13</h3>
          <p>Total Complaints Solved</p>
        </div>
        <div class="card">
          <h3>18</h3>
          <p>Total Complaints Unsolved</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
//
export default {
  name: "dashboard",
};
</script>

<style lang="scss" scoped>
#header {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
}
#cards-wrap {
  display: flex;
  width: 93vw;
  justify-content: center;
  align-items: center;
}
#cards {
  max-width: 80vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 100px;
  background-color: rgb(0, 150, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

@media (max-width: 768px) {
}
</style>
