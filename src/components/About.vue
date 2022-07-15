<template>
    <div class="about">
        <div class="container">
            <div class="about-container">
                <div class="about-logo">
                    <img src="../assets/images/butterfly.png" alt="">
                    <span>About our spa center</span>
                </div>
                <div class="about-title">
                    <span>Come and you will be Inspired!</span>
                </div>
                <div class="about-description">
                    <span>It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. <br>
                        The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker</span>
                </div>
                <div class="about-btn">
                    <router-link to="/about">READMORE</router-link>
                </div>
                
            </div>
        </div>
        <img class="img-flower china-rose" src="../assets/images/china-rose.png" alt="">
                <img class="img-flower jasmin" src="../assets/images/jasmine.png" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.about {
    margin-top: 13rem;
    padding: 5rem;
    font-family: 'Roboto';
    position: relative;
}
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.img-flower {
    position: absolute;
}
.china-rose{
    left: 20%;
    top: -15%;
}
.jasmin{
    top: 50%;
    right: 13.5rem;
    transform: translateY(-50%);

}
.about-logo  {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-logo img{
    width: 8.4rem;
    height: auto;
    margin-bottom: 4rem;
} 
.about-logo span {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--sub-text-color);
}
.about-title {
    margin-bottom: 3.2rem;
    margin-top: 2.8rem;
}
.about-title span {
    font-size: 4.2rem;
    font-family: 'Rufina';
    
}
.about-description {
    font-size: 1.5rem;
    color: var(--sub-text-color);
    text-align: center;
}
.about-description span {
    padding: 0 8rem;
    display: block;
}
.about-btn {
    display: block;
  text-align: center;
  background-color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.8;
  text-transform: uppercase;
  min-width: 17rem;
  padding: 2rem 1.5rem;
  color: var(--white-color) !important;
  border-radius: 5rem;
  margin-top: 7rem;
}

.about-btn a {
    color: var(--white-color);
}
</style>