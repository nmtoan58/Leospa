<template>
  <div class="contact">
    <div class="container">
      <div class="contact-container">
        <div class="contact-title">
          <h3>Get In Touch</h3>
          <p>
            To doesn't his appear replenish together called he of mad place
            won't wherein blessed second every wherein were meat kind wherein
            and martcin
          </p>
        </div>
        <div class="contact-input">
          <div class="contact-information">
            <div class="contact-infor-list">
              <div class="contact-info-item">
                <div class="contact-logo">
                  <i class="ti-map-alt"></i>
                </div>
                <div class="contact-info">
                  <span>
                    848 E 28th ST, BROOKLYN <br />
                    NEW YORK, USa
                  </span>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-logo">
                  <i class="ti-email"></i>
                </div>
                <div class="contact-info">
                    <p>
                        example@leospa.com
                    </p>
                     <p>
                        example@leospa.com
                    </p>
                  
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-logo">
                  <i class="ti-tablet"></i>
                </div>
                <div class="contact-info">
                  <p>
                    tel:+02 365 2365 3265 (02)
                  </p>
                  <p>
                    +01 365 2365 3265 (04)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form class="contact-input-text">
            <input placeholder="Name" type="text">
            <input placeholder="Email" type="text">
            <textarea placeholder="Write comment" name="" id="" cols="30" rows="10"></textarea>
            <button>SUBMIT NOW</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contact {
  font-family: "Roboto";
  padding-bottom: 5rem;
}
.contact-title {
  width: 66%;
  margin: 0 auto;
  text-align: center;
}
.contact-title h3 {
  color: var(--title-color);
  font-size: 4.2rem;
  margin-bottom: 3.2rem;
  font-weight: 300;
  font-family: "Rufina";
  line-height: 5.2rem;
}
.contact-title p {
  color: var(--sub-text-color);
  margin-bottom: 7rem;
}
.contact-info {
    margin-left: 3.2rem;
   
}
.contact-info p,span{
    margin: 0;
    line-height: 2.7rem;
    color: var(--sub-text-color);
}
.contact-info-item {
  display: flex;
  align-items: center;
   margin-bottom: 2.5rem;
}

.contact-logo {
  width: 5rem;
  height: 5rem;
  background-color: var(--primary-color);
  border-radius: 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-logo i {
  color: var(--white-color);
}
.contact-input {
    display: flex;
    align-items:flex-start;
  justify-content: center;
  padding: 0 10rem;
}
.contact-input-text {
        width: 60%;
      margin-left: 11rem;
}
.contact-input-text input,textarea {
    width: 100%;
    border: 1px solid var(--border-appointment-color);
    line-height: 2.7rem;
}
.contact-input-text input {
    padding: 1rem 2rem;
    margin-bottom: 3rem;
}
textarea {
    font-family: 'Roboto';
    padding: 1rem 2rem;
    height: 7.6rem;
}
button {
    background-color: var(--primary-color);
    border-radius: 0;
    color: #fff;
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 0.8;
    text-transform: uppercase;
    min-width: 17rem;
    padding: 2rem 1.5rem;
    outline: none;
    border-radius: 5rem;
    border: none;
    margin-top: 2.5rem;
    cursor: pointer;
}
button:hover {
    color: var(--black-color);
}
</style>
