<template>
  <div class="appointment">
    <div class="appointment-img">
      <img src="../assets/images/appointment/appointment-img.jpg" alt="" />
    </div>
    <div class="appointment-form-wrap">
      <form action="" class="appointment-form">
        <div class="form-content">
          <div class="form-input">
            <input placeholder="NAME" type="text" name="" id="" />
            <input placeholder="EMAIL ADDRESS" type="text" name="" id="" />
          </div>
          <div class="form-input">
            <select name="" id="">
              <option value="">Normal service</option>
              <option value="">vip service</option>
            </select>
            <input placeholder="PHONE NUMBER" type="text" name="" id="" />
          </div>
          <div class="form-input">
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
          </div>
          <div class="form-input">
            <textarea
              placeholder="YOUR NOTE"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="form-btn">
            <button>MAKE AN APPOINTMENT</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* APPOINTMENT */
.appointment {
  display: flex;
  background-color: var(--footer-bg-color);
  margin: 6rem 0;
}
.appointment-img {
  width: 40%;
}
.appointment-img img {
  width: 100%;
  height: 100%;
}
.appointment-form-wrap {
  width: 60%;
  padding-left: 10rem;
  max-width: 65rem;
  margin: auto auto auto 0;
}
.appointment-form {
  width: 65rem;
}
.form-input {
  display: flex;
  justify-content: space-between;
}
.form-input input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--border-appointment-color);
  color: #999;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem 0.5rem;
  margin-bottom: 3rem;
  width: 49%;
}
.form-input input:focus {
  border-radius: 0.5rem;
}

select {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d4d3d3;
  color: #999;
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem 0;
  margin-bottom: 3rem;
  width: 49%;
  text-transform: uppercase;
}
/* select::selection {
  outline: 1px solid var(--sub-text-color);
} */
.form-input textarea {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d4d3d3;
  color: #999;
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem 0;
  margin-bottom: 3rem;
  width: 100%;
  text-transform: uppercase;
  height: 7rem;
  padding-left: 0.5rem;
}
.form-btn button {
  display: block;
  text-align: center;
  background-color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 0.8;
  text-transform: uppercase;
  min-width: 17rem;
  padding: 2rem 1.5rem;
  color: var(--white-color);
  border-radius: 5rem;
  outline: none;
  border: none;
  cursor: pointer;
}
.form-btn button:hover {
  color: var(--btn-appointment-color);
}
</style>
