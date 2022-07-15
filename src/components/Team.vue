<template>
  <div class="team">
    <div class="container">
      <div class="team-container">
        <div class="team-title">
          <h3>Experienced Team</h3>
          <p>
            To doesn't his appear replenish together called he of mad place
            won't wherein blessed second every wherein were meat kind wherein
            and martcin
          </p>
        </div>
        <div class="team-members">
            <div class="team-member">
                <img src="../assets/images/team/1.jpg" alt="">
                <div class="team-info">
                    <h4>Joseph Austin</h4>
                    <p>Thai Message</p>
                    <div class="team-socials">
                        <a href="" class="team-link-social"><i class="ti-facebook"></i></a>
                        <a href="" class="team-link-social"><i class="ti-twitter"></i></a>
                        <a href="" class="team-link-social"><i class="ti-google"></i></a>
                        <a href="" class="team-link-social"><i class="ti-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="team-member">
                <img src="../assets/images/team/2.jpg" alt="">
                <div class="team-info">
                    <h4>David Hannan</h4>
                    <p>Thai Message</p>
                    <div class="team-socials">
                        <a href="" class="team-link-social"><i class="ti-facebook"></i></a>
                        <a href="" class="team-link-social"><i class="ti-twitter"></i></a>
                        <a href="" class="team-link-social"><i class="ti-google"></i></a>
                        <a href="" class="team-link-social"><i class="ti-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="team-member">
                <img src="../assets/images/team/3.jpg" alt="">
                <div class="team-info">
                    <h4>Cheryl Harris</h4>
                    <p>Thai Message</p>
                    <div class="team-socials">
                        <a href="" class="team-link-social"><i class="ti-facebook"></i></a>
                        <a href="" class="team-link-social"><i class="ti-twitter"></i></a>
                        <a href="" class="team-link-social"><i class="ti-google"></i></a>
                        <a href="" class="team-link-social"><i class="ti-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.team {
  font-family: "Roboto";
  padding-bottom: 5rem;
  padding: 5rem 0;
  padding-bottom: 16rem;
}
.team-title {
  width: 66%;
  margin: 0 auto;
  text-align: center;
}
.team-title h3 {
  color: var(--title-color);
  font-size: 4.2rem;
  margin-bottom: 3.2rem;
  font-weight: 300;
  font-family: "Rufina";
  line-height: 5.2rem;
}
.team-title p {
  color: var(--sub-text-color);
  margin-bottom: 7rem;
}
.team-members {
    display: flex;
}
.team-member {
        width: 33.333333%;
        position: relative;
        margin: 0 1%;
        height: 42rem;
        display: flex;
        justify-content: center;
}
.team-member:hover .team-socials {
    display: flex;
    visibility: visible;
    opacity: 1;
        transition: all .3s ease-in-out;
}
.team-socials {
    
    display: none;
    justify-content: center;
}
.team-info {
    background-color: var(--white-color);
    padding: 3rem;
    position: absolute;
    width: calc(100% - 60px);
    bottom: -15%;
    box-shadow: 0.1rem 0.4rem 1rem rgb(0 0 0 / 20%);
    text-align: center;


}
.team-info h4 {
    font-family: 'Rufina';
    font-size: 2.2rem;
    margin: 0;
}
.team-info p {
    margin: 0;
    margin-bottom: 1.5rem;
    color: var(--sub-text-color);
}
.team-socials {
    visibility: hidden;
    opacity: 0;
        transition: all .3s ease-in-out;
}
.team-link-social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--border-appointment-color);
    color: var(--btn-appointment-color);
    margin: 0 5px;
}
.team-link-social:hover {
    color: var(--white-color);
    background-color: var(--primary-color);
}
</style>
