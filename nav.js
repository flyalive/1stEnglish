
// 	<li> <a href="index.html"> 1st </a> </li>
// 	<li> <a href="2.html"> 2nd </a> </li>
// 	<li> <a href="3.html"> 3rd </a> </li>
// 	<li> <a href="4.html"> 4th </a> </li>
// 	<li> <a href="5.html"> 5th </a> </li>
// 	<li> <a href="6.html"> 6th </a> </li>
// 	<li> <a href="7.html"> 7th </a> </li>
// 	<li> <a href="8.html"> 8th </a> </li>
// 	<li> <a href="9.html"> 9th </a> </li>
// 	<li> <a href="10.html"> 10th </a> </li>
// 	<li> <a href="11.html"> 11th </a> </li>
// 	<li> <a href="12.html"> 12th </a> </li>
// 	<li> <a href="13.html"> 13th </a> </li>
// 	<li> <a href="14.html"> 14th </a> </li>
// 	<li> <a href="15.html"> 15th </a> </li>
// 	<li> <a href="16.html"> 16th </a> </li>
// 	<li> <a href="17.html"> 17th </a> </li>
// 	<li> <a href="18.html"> 18th </a> </li>
// 	<li> <a href="19.html"> 19th </a> </li>
// 	<li> <a href="20.html"> 20th </a> </li>
// 	<li> <a href="21.html"> 21th </a> </li>
// 	<li> <a href="22.html"> 22th </a> </li>


$(document).ready(function()
	{
		init();
	});

function init()
	{
		$("#nav").append('<li> <a href="index.html"> 1st </a></li>');
		$("#nav").append('<li> <a href="2.html"> 2nd </a> </li>');
		$("#nav").append('<li> <a href="3.html"> 3rd </a> </li>');

		for (i=4; i<=30; i++)
			{
				$("#nav").append('<li> <a href="' + i + '.html"> ' + i + ' th </a> </li>');
			}
	};


// jquery 기초 사용법 : $(선택자).수행()
// class는 .클래서명, id는 #id으로 표시한다.


// $("*")					모든 요소를 선택	Try it
// $(this)					현재 선택된 html요소
// $("p.intro")				intro 클래스의 모든 요소를 선택
// $("p:first")				첫번째 <p>를 선택
// $("ul li:first")			첫번째 <ul>의 첫번째 <li>를 선택
// $("ul li:first-child")	모든 <ul>의 첫번째 <li>를 선택
// $("[href]")				href 속성이 있는 모든 요소를 선택
// $("a[target='_blank']")	모든 <a>의 target속성이 _blank인 요소 선택
// $("a[target!='_blank']")	모든 <a>의 target속성이 _blank이 아닌 요소 선택
// $(":button")				<button>와 <input>의 type이 button인 요소 선택
// $("tr:even")				모든 짝수 <tr>
// $("tr:odd")				모든 홀수 <tr>
