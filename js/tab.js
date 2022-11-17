const portfolioDB=[
    {
        titleImg : "./portfolio/img/main/ad/1.jpg",
        thumbImg : [
            './portfolio/img/thumb/ad/1.jpg',
             './portfolio/img/thumb/ad/2.jpg',
              './portfolio/img/thumb/ad/3.jpg'],
        descriptionH2 : "리엑트소개페이지",
        description : "깃에서 다운로드받아서 소스로 npm start하든가",
        p_linkinfo : ['사이트주소', '깃주소', '피그마주소']
    }, {
        titleImg : "./portfolio/big/ad/1.jpg",
        thumbImg : [
            './portfolio/thumb/ad/1.jpg',
             './portfolio/thumb/ad/2.jpg',
              './portfolio/thumb/ad/3.jpg'],
        descriptionH2 : "애플광고전단지",
        description : "AirPods Pro  2세대<br>AirPods  2세대<br> AirPods  3세대<br>AirPods Max",
        p_linkinfo : ['사이트주소', '깃주소', '피그마주소']
    },{
        titleImg : "./portfolio/big2/ad/1.jpg",
        thumbImg : [
            './portfolio/thumb2/ad/1.jpg',
             './portfolio/thumb2/ad/2.jpg',
              './portfolio/thumb2/ad/3.jpg'],
        descriptionH2 : "어떤 iPhone이 당신에게 맞을까요?",
        description : "iPhone14 Pro 궁극의 아이폰<br>iPhone14 막강한 성능<br>iPhone13 여전한 놀라움<br>iPhoneSe 파워도제대로.실속도제대로",
        p_linkinfo : ['사이트주소', '깃주소', '피그마주소']
    }
];

$(function(){
    //callback함수 만들기
    var loadNum = $('.p_tabNm .active').index();

        portLoad(loadNum); //화면 열리자마자 실행
    
        $('.p_tabNm li').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            portLoad($(this).index())
        })

    function portLoad(startNum){
    $('#portfolio .description h2').html(portfolioDB[startNum].descriptionH2)
    $('#portfolio .description p').html(portfolioDB[startNum].description)
    $('#portfolio .titleImg img').attr('src',portfolioDB[startNum].titleImg)

    //태그중심
    $('#portfolio .thumbImg img').each( (index,item) => {
        $(item).attr('src',portfolioDB[startNum].thumbImg[index])
    })
    //DB중심
    var linkinfo = ''; //다른곳이랑 겹칠수도 있으니 변수만들기
    $.each(portfolioDB[startNum].p_linkinfo, (index,item) => {
         // for(let i in portfolioDB[startNum].p_linkinfo)
        linkinfo += `<li><a>${portfolioDB[startNum].p_linkinfo[index]}</a></li>`;
    })
    $('.p_linkinfo').html(linkinfo)
    }
})



/*
$(function(){
    $('.titleImg img').attr('src',portfolioDB[0].titleImg)
    $('.thumbImg img').each((index,item) => {
        $(item).attr('src',portfolioDB[0].thumbImg[index])
    })
    $('.description h2').html(portfolioDB[0].descriptionH2)
    $('.description p').html(portfolioDB[0].description)
    $('.p_linkinfo a').each((index,item) => {
        $(item).attr('href',portfolioDB[0].p_linkinfo[index])
    })
})
*/