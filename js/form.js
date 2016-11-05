$(document).ready(function(){
    (function(){
            window.addEventListener('load',function(){
                function setFont(){
                    document.documentElement.style.fontSize=document.documentElement.clientWidth/15+'px';
                }
                window.addEventListener('resize',setFont,false)
                setFont();
            },false)
     })();
    
});
$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        paginationClickable: true,
        paginationType1: 'progress',
        autoHeight: true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">第' + (index + 1) + '项</span>';
        }

    });
    function check(obj,re){
        obj.parentNode.children[1].style.display='block';
        if(obj.value){
            if(re.test(obj.value)){
                obj.parentNode.children[1].innerHTML='√';
                obj.parentNode.children[1].className='color2';
                return true;
            }else{
                obj.parentNode.children[1].innerHTML='*';
                obj.parentNode.children[1].className='color';
                return false;
            }
        }else{
            obj.parentNode.children[1].innerHTML='*';
            obj.parentNode.children[1].className='color';
            return false;
        }

    }
    var re={
        name:/^[\u4e00-\u9fa5]$/img,
        legal_rep:/^[\u4e00-\u9fa5]$/img
    };
    for(var i=0;i<$('input[type=text]').length;i++){
        if(re[$('input[type=text]:eq('+i+')')[0].name]){
            $('input[type=text]:eq('+i+')')[0].onblur=function(){
                check(this,re[this.name]);
            }
        }
    }
    $('#submit').click(function(){
        alert('提交成功');
    });
    $('.swiper-pagination-bullet:eq(0)').css({'height':'1.2rem','border':'1px solid #999','borderBottom':'1px solid #fff'})
    for(var i=0;i<$('.swiper-pagination-bullet').length;i++){
        $('.swiper-pagination-bullet:eq('+i+')').click(function(){
            for(var i=0;i<$('.swiper-pagination-bullet').length;i++){
                $('.swiper-pagination-bullet:eq('+i+')').css({'border':'none','borderBottom':'1px solid #999'});
            };
            $(this).css({'border':'1px solid #999','border-bottom':'1px solid #fff'});
        });
    }
});