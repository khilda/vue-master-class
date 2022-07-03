<template>
  <footer class="footer">
    <div class="footer-wrap">
      <h1 class="logo">
        <img
          src="@/static/images/common/img_footer_logo.svg"
          alt="대림D&I"
        />
      </h1>
      <div class="sitemap">
        <button data-popup="sitemap" class="item">사이트맵</button>
        <a href="../common/privacy.html" class="item">개인정보처리방침</a>
        <a href="../common/contactus.html" class="item">Contact Us</a>
      </div>
      <address>
        <p class="item">서울특별시 강남구 테헤란로 521 파르나스타워 20층</p>
        <p class="item">사업자등록번호 206-81-20622</p>
      </address>
      <p class="copyright">© DAELIM Development & Investment Co.,Ltd.</p>
    </div>
    <aside id="sitemap" class="popup sitemap">
      <section class="popup-header">
        <h2 class="tit">사이트맵</h2>
        <button class="pop-close">Close</button>
      </section>
      <figure class="popup-content">
        <div class="sitemap-block">
          <dl class="sitemap-list">
            <dt>
              <a href="../company/company.html" class="sitemap-link">Company</a>
            </dt>
            <dd>
              <a
                href="../company/company.html#introduction"
                class="sitemap-sub-link"
                >회사소개</a
              >
            </dd>
            <dd>
              <a
                href="../company/company.html#designStory"
                class="sitemap-sub-link"
                >디자인 스토리</a
              >
            </dd>
            <dd>
              <a href="../company/company.html#CI" class="sitemap-sub-link"
                >CI</a
              >
            </dd>
          </dl>
          <a href="../media/list.html" class="sitemap-link">Media</a>
          <a href="../common/privacy.html" class="sitemap-link"
            >개인정보처리방침</a
          >
        </div>
        <div class="sitemap-block">
          <dl class="sitemap-list">
            <dt>
              <a href="../business/business.html" class="sitemap-link"
                >Business</a
              >
            </dt>
            <dd>
              <a
                href="../business/business.html#RealEstate"
                class="sitemap-sub-link"
                >부동산 개발</a
              >
            </dd>
            <dd>
              <a
                href="../business/business.html#WithLandowner"
                class="sitemap-sub-link"
                >지주공동 개발</a
              >
            </dd>
            <dd>
              <a
                href="../business/business.html#SpaceDesign"
                class="sitemap-sub-link"
                >공간 디자인</a
              >
            </dd>
          </dl>
          <a href="../common/contactus.html" class="sitemap-link">Contact Us</a>
        </div>
        <div class="sitemap-block">
          <dl class="sitemap-list">
            <dt>
              <a href="../brand/lucidhaus.html" class="sitemap-link"
                >LUCID HAUS</a
              >
            </dt>
            <dd>
              <a href="../brand/lucidhaus.html#intro" class="sitemap-sub-link"
                >소개</a
              >
            </dd>
            <dd>
              <a
                href="../brand/lucidhaus.html#location"
                class="sitemap-sub-link"
                >입지환경</a
              >
            </dd>
            <dd>
              <a href="../brand/lucidhaus.html#feature" class="sitemap-sub-link"
                >특장점</a
              >
            </dd>
            <dd>
              <a href="../brand/lucidhaus.html#artist" class="sitemap-sub-link"
                >아티스트</a
              >
            </dd>
          </dl>
        </div>
        <div class="sitemap-block">
          <dl class="sitemap-list">
            <dt>
              <a href="../brand/lucidavenue.html" class="sitemap-link"
                >LUCID AVENUE</a
              >
            </dt>
            <dd>
              <a href="../brand/lucidavenue.html#intro" class="sitemap-sub-link"
                >소개</a
              >
            </dd>
            <dd>
              <a
                href="../brand/lucidavenue.html#location"
                class="sitemap-sub-link"
                >입지환경</a
              >
            </dd>
            <dd>
              <a
                href="../brand/lucidavenue.html#feature"
                class="sitemap-sub-link"
                >특장점</a
              >
            </dd>
            <dd>
              <a
                href="../brand/lucidavenue.html#artist"
                class="sitemap-sub-link"
                >아티스트</a
              >
            </dd>
          </dl>
        </div>
      </figure>
    </aside>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer{
  background: $color-primary-grey;
  padding: 38px 0;
  margin-top: 160px;
  @include wrap(){
    position: relative;
    padding-left: 240px;
  };
  .logo{
    position: absolute;
    left: 0;
    width: 130px;
    padding: 3px 0;
  }
  .item{
    display: inline-block;
    font-size: 14px;
    color: $color-primary;
    +.item:before{
      content: '';
      display: inline-block;
      background: $color-primary;
      width: 1px;
      height: 13px;
      margin: 0 25px;
    }
  }
  .sitemap{
    font-size: 0;
  }
  address{
    display: flex;
    margin: 11px 0 4px;
    .item+.item:before{
      margin: 0 15px;
    }
  }
  .copyright{
    font-size: 13px;
    color: $color-primary;
  }
}
</style>