<template>
  <div class="blog">
    <div class="container">
      <div class="blog-title">
        <h3>Latest From Blog</h3>
        <p>
          To doesn't his appear replenish together called he 
          of mad place won't wherein blessed second every wherein were meat kind wherein and martcin
        </p>
      </div>
      <div class="procedures-post">
                    <div class="post-item">
                        <div class="post-item-img">
                            <img src="../assets/images/post/1.jpg" alt="">
                        </div>
                        <div class="post-item-content">
                            <div class="post-item-content-title">
                                <span>Massage Therapy</span>
                            </div>
                            <div class="post-item-content-description">
                                Living winged said you darkness you're divide gathered and bring one seasons 
                                face great dr Waters firmament place which.
                            </div>
                        </div>
                        <div class="post-item-btn">
                            <router-link to="/service">Read more</router-link>
                        </div>
                    </div>
                    <div class="post-item">
                        <div class="post-item-img">
                            <img src="../assets/images/post/2.jpg" alt="">
                        </div>
                        <div class="post-item-content">
                            <div class="post-item-content-title">
                                <span>Massage Therapy</span>
                            </div>
                            <div class="post-item-content-description">
                                Living winged said you darkness you're divide gathered and bring one seasons 
                                face great dr Waters firmament place which.
                            </div>
                        </div>
                        <div class="post-item-btn">
                            <router-link to="/service">Read more</router-link>
                        </div>
                    </div>
                    <div class="post-item">
                        <div class="post-item-img">
                            <img src="../assets/images/post/3.jpg" alt="">
                        </div>
                        <div class="post-item-content">
                            <div class="post-item-content-title">
                                <span>Massage Therapy</span>
                            </div>
                            <div class="post-item-content-description">
                                Living winged said you darkness you're divide gathered and bring one seasons 
                                face great dr Waters firmament place which.
                            </div>
                        </div>
                        <div class="post-item-btn">
                            <router-link to="/service">Read more</router-link>
                        </div>
                    </div>
                </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  components: {},
};
</script>
<style>
.blog {
    font-family: 'Roboto';
}
.blog-title {
    width: 66%;
    margin: 0 auto;
    text-align: center;
}
.blog-title h3{
    color: var(--title-color);
    font-size: 4.2rem;
    margin-bottom: 3.2rem;
    font-weight: 300;
    font-family: 'Rufina';
    line-height: 5.2rem;
}

.blog-title p {
    color: var(--sub-text-color);
    margin-bottom: 7rem;
}
.procedures-content {
    text-align: center;
    
    
}

.procedures-post {
    display: flex;

}
.post-item {
    padding: 2rem;
    margin: 0 1.5rem;
    border: 1px solid var(--procedure-border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.post-item:hover {
    box-shadow:  0 5px 20px #f0f0f0;
}
.post-item:hover .post-item-btn a {
    background-color: var(--primary-color);
}

.post-item-img {
    margin-bottom: 3.5rem;
}
.post-item-content-title {
    font-size: 2.2rem;
    color: var(--header-title-color);
    font-family: 'Rufina';
    margin-bottom: 2.2rem;
    font-weight: 600;
    text-align: center;
}
.post-item-content-description {
    color: var(--sub-text-color);
    margin-bottom: 4rem;
}
.post-item-btn {
    text-align: center;
}
.post-item-btn a {
    width: 17rem;
    padding: 1.5rem;
    display: block;
    text-align: center;
    background-color: var(--procedure-btn-color);
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 5rem;
    line-height: 0.8;
    margin-bottom: 3rem;
}
</style>
