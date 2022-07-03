<template>
    <div class="container contactus">
      <nav class="navi">
        <a href="../common/index.html" class="navi-depth">대림D&I</a>
        <span class="navi-depth">Contact Us</span>
      </nav>
      <!-- page header -->
      <header class="page-header">
        <h2 class="page-tit">Contact Us</h2>
        <p class="txt">궁금하신 사항이 있으시면 저희 대림D&I가 답변드리겠습니다.</p>
      </header>
      <!-- form -->
      <form class="form">
        <div class="form-group is-error">
          <label for="name" class="form-group-tit req" >성명</label>
          <input type="text" id="name" placeholder="성명을 입력해 주세요." />
          <span class="form-group-txt">한글/영문만 입력 가능합니다.</span>
        </div>
        <div class="form-group is-error">
          <label for="emailID" class="form-group-tit req">이메일</label>
          <figure class="form-inline">
            <input type="text" id="emailID" placeholder="email id" /><em>@</em>
            <input type="email" id="emailAdress" placeholder="email.com" disabled />
            <div class="dropdown">
              <button class="dropdown-btn" type="button"><em class="dropdown-txt">선택</em><i class="ico-triangle-bottom"></i></button>
              <div class="dropdown-list">
                <button type="button" class="item" value="write">직접입력</button>
                <button type="button" class="item" value="naver.com">naver.com</button>
                <button type="button" class="item" value="gmail.com">gmail.com</button>
                <button type="button" class="item" value="daum.net">daum.net</button>
              </div>
            </div>
          </figure>
          <span class="form-group-txt">특수문자는 입력이 불가능합니다.</span>
        </div>
        <div class="form-group">
          <label for="title" class="form-group-tit req">문의 내용</label>
          <input type="text" id="title" placeholder="제목을 입력해 주세요." />
          <textarea cols="30" rows="1" placeholder="문의 내용을 입력해 주세요."></textarea>
        </div>
        <div class="form-group">
          <label for="file" class="form-group-tit">파일 첨부</label>
          <figure class="form-file">
            <input type="text" id="file" disabled/>
            <label for="fileIp" class="btn">찾아보기</label>
            <input type="file" id="fileIp" />
          </figure>
          <span class="file-txt">파일 용량은 최대 5MB를 초과할 수 없습니다. (doc, docx, pdf, jpg, jpeg, mp4)</span>
        </div>       
        <!-- 개인정보수집이용 아코디언 -->
        <figure class="chk-privacy">
          <div class="chk-privacy-tit form-chk">
            <input type="checkbox" id="chk00" />
            <label for="chk00" class="req"><i class="chk"></i><em>개인정보 수집 및 이용 동의</em></label>
          </div> 
          <div class="chk-privacy-content">
            <dl class="privacy-list">
              <dt>1. 개인 정보의 수집·이용 목적</dt>
              <dd>불만 처리 의사소통 경로 확보, 기타 원활한 의사 소통의 경로 확보, 문의 접수, 상담 및 처리 결과 회신</dd>
            </dl>
            <dl class="privacy-list">
              <dt>2. 개인 정보의 항목</dt>
              <dd>이름, 이메일 주소</dd>
            </dl>
            <dl class="privacy-list">
              <dt>3. 개인 정보의 보유·이용 기간</dt>
              <dd>소비자의 불만 및 분쟁 처리에 관한 법령에 따라 3년 보관</dd>
              <dd>* 개인 정보 외 상담 내용 등은 통계 및 서비스 개선 목적으로 개인을 식별할 수 없는 형태로 보관될 수 있습니다.</dd>
            </dl>
            <dl class="privacy-list">
              <dt>4. 동의 거부 권리에 대한 사항</dt>
              <dd>귀하는 본 개인 정보 수집 및 이용 동의를 거부할 권리가 있으나, 동의를 거부 시 문의하기 서비스를 이용할 수 없습니다.</dd>
            </dl>
            <dl class="privacy-list">
              <dt class="hidden"></dt>
              <dd>※ 기타사항은 대림D&I 고객센터(02-553-3483)로 문의해 주시기 바랍니다</dd>
            </dl>
          </div>
        </figure>
        <button type="submit" class="btn">문의하기</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'contactUs'

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/page/contactus';
</style>