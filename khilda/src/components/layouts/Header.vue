<template>
  <header class="header">
    <div class="header-wrap">
      <h1 class="logo">
        <a href="../common/index.html"
          ><img
            src="../../../resources/web/images/common/img_logo.svg"
            alt="대림D&I"
        /></a>
      </h1>
      <aside class="gnb">
        <a href="../company/company.html" class="item is-active">Company</a>
        <a href="../business/business.html" class="item">Business</a>
        <a href="../brand/lucidhaus.html" class="item">LUCID HAUS</a>
        <a href="../brand/lucidavenue.html" class="item">LUCID AVENUE</a>
        <a href="../media/list.html" class="item">Media</a>
        <a href="../common/contactus.html" class="item">Contact Us</a>
      </aside>
      <div class="lang">
        <a
          href="../../../../ko/html/web/common/index.html"
          class="item is-active"
          >KR</a
        >
        <a href="../../../../en/html/web/common/index.html" class="item">EN</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top:0;
  border-bottom: 1px solid $grey-f0;
  background-color: $white;
  width: 100%;
  z-index: 10;
  @include wrap(){
    display: flex;
    justify-content: space-between;
    font-size: 0;
  }
  .logo{
    display: inline-block;
    >a{
      display: block;
      width: 84px;
      height: 36px;
      margin: 30px 0;
    }
  }
  .gnb{
    display: inline-flex;
    justify-content: space-between;
    width: 840px;
    margin: 0 72px 0 135px;
    .item{
      padding: 5px 20px;
    }
  }
  .item{
    align-self: center;
    display: block;
    &.is-active{
      font-weight: 600;
    }
  }
  .lang{
    display: inline-flex;
    width: 63px;
    justify-content: space-between;
    .item{
      font-size: 15px;
      opacity: .2;
      &.is-active{
        opacity: 1;
      }
    }
  }
}
</style>