/* <span id="faq-title">자주 묻는 질문(FAQ)</span>
<div class="faq-content">
  <button class="question" id="que-1"><span id="que-1-toggle">+</span><span>'HTML'이란 무엇인가요?</span></button>
  <div class="answer" id="ans-1">하이퍼텍스트 마크업 언어(HyperText Markup Language)입니다.</div>
</div>
<div class="faq-content">
  <button class="question" id="que-2"><span id="que-2-toggle">+</span><span>'CSS'란 무엇인가요?</span></button>
  <div class="answer" id="ans-2">캐스케이딩 스타일 시트(Cascading Style Sheets)입니다.</div>
</div>
<div class="faq-content">
  <button class="question" id="que-3"><span id="que-3-toggle">+</span><span>'JavaScript'란 무엇인가요?</span></button>
  <div class="answer" id="ans-3">자바스크립트는 객체(Object)를 기초로 하는 스크립트 프로그래밍 언어입니다.</div>
</div> */

// const items = document.querySelectorAll('.question');

//   function openCloseAnswer() {
//     const answerId = this.id.replace('que', 'ans');

//     if(document.getElementById(answerId).style.display === 'block') {
//       document.getElementById(answerId).style.display = 'none';
//       document.getElementById(this.id + '-toggle').textContent = '+';
//     } else {
//       document.getElementById(answerId).style.display = 'block';
//       document.getElementById(this.id + '-toggle').textContent = '-';
//     }
//   }
//   items.forEach(item => item.addEventListener('click', openCloseAnswer));


// const itemss = document.querySelectorAll('.menu_btn');

function openClose(){
    const answerIdd = this.id.replace('ab', 'cd')

    if(document.getElementById(answerIdd).style.display === 'block') {
        document.getElementById(answerIdd).style.display = 'none';
      } else {
        document.getElementById(answerIdd).style.display = 'block';
      }
    }
itemss.forEach(item => item.addEventListener('click', openClose));