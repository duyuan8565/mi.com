// JavaScript Document
$(function(){
	//表单事件
	$('.text1').focus(function(){
		$(this).val('');
	})
	$('.sjh_text').focus(function(){
		$(this).val('');
		$(this).css('border','1px solid #F84858');
	})
	$('.sjh_text').blur(function(){
		$(this).val('移动,联通,电信');
		$(this).css('border','1px solid #E6E9ED');
	})
	$(':radio').eq(0).click(function(){
		num=$(this).index();
		$('.sjh_98').find('b').html('29.55元起');
	})
	$(':radio').eq(1).click(function(){
		num=$(this).index();
		$('.sjh_98').find('b').html(' 49.2元起');
	})
	$(':radio').eq(2).click(function(){
		num=$(this).index();
		$('.sjh_98').find('b').html('98.4元起');
	})
	// 导航区二级菜单开始
	// 第一个
	$('.daohang ul li:eq(1)').mouseover(function(){
		$('#jq_daohang01').show();
		$('.daohang ul li:eq(1)').css('background','#ED5466')
		})
	$('.daohang ul li:eq(1)').mouseout(function(){
		$('#jq_daohang01').hide();
		$('.daohang ul li:eq(1)').css('background','#DD4250')
		})
	//第二个
	$('.daohang ul li:eq(2)').mouseover(function(){
		$('.hongmi').show();
		$('.daohang ul li:eq(2)').css('background','#ED5466')
		})
	$('.daohang ul li:eq(2)').mouseout(function(){
		$('.hongmi').hide();
		$('.daohang ul li:eq(2)').css('background','#DD4250')
		})

	// 导航区二级菜单结束

	//登陆注册区域开始
	$('.ul1 .li1').hover(function(){
		$('#eng').stop().slideDown(50);///400/fast
	},function(){
		$('#eng').stop().slideUp(0);
	})


	$('.zhuce .ul1 li.li4').mouseover(function(){
		$('li.li4 .gouwuche').show();
		$('.zhuce .ul1 li.li4 p').show();
	})
	$('.zhuce .ul1 li.li4').mouseout(function(){
		$('li.li4 .gouwuche').hide();
		$('.zhuce .ul1 li.li4 p').hide();
	})
	//登陆注册区域结束

	//树形导航区域
	// 第一个
	$('.lunbo_r .luopo_li').eq(1).mouseover(function(){
		$('#hezi').show();
		$('.lunbo_r .luopo_li').eq(1).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(1).mouseout(function(){
		$('#hezi').hide();
		$('.lunbo_r .luopo_li').eq(1).css('background','#FFFBEA');
	})
	// 第二个
	$('.lunbo_r .luopo_li').eq(2).mouseover(function(){
		$('.hougai').eq(0).show();
		$('.lunbo_r .luopo_li').eq(2).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(2).mouseout(function(){
		$('.hougai').eq(0).hide();
		$('.lunbo_r .luopo_li').eq(2).css('background','#FFFBEA');
	})
	// 第三个
	$('.lunbo_r .luopo_li').eq(3).mouseover(function(){
		$('.tiemo').show();
		$('.lunbo_r .luopo_li').eq(3).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(3).mouseout(function(){
		$('.tiemo').hide();
		$('.lunbo_r .luopo_li').eq(3).css('background','#FFFBEA');
	})
	// 第四个
	$('.lunbo_r .luopo_li').eq(4).mouseover(function(){
		$('.dianchi').show();
		$('.lunbo_r .luopo_li').eq(4).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(4).mouseout(function(){
		$('.dianchi').hide();
		$('.lunbo_r .luopo_li').eq(4).css('background','#FFFBEA');
	})
	// 第五个
	$('.lunbo_r .luopo_li').eq(5).mouseover(function(){
		$('.ersai').show();
		$('.lunbo_r .luopo_li').eq(5).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(5).mouseout(function(){
		$('.ersai').hide();
		$('.lunbo_r .luopo_li').eq(5).css('background','#FFFBEA');
	})
	//第六个
	$('.lunbo_r .luopo_li').eq(6).mouseover(function(){
		$('.luyou').show();
		$('.lunbo_r .luopo_li').eq(6).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(6).mouseout(function(){
		$('.luyou').hide();
		$('.lunbo_r .luopo_li').eq(6).css('background','#FFFBEA');
	})
	// 第七个
	$('.lunbo_r .luopo_li').eq(7).mouseover(function(){
		$('.mitu').show();
		$('.lunbo_r .luopo_li').eq(7).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(7).mouseout(function(){
		$('.mitu').hide();
		$('.lunbo_r .luopo_li').eq(7).css('background','#FFFBEA');
	})
	// 第八个
	$('.lunbo_r .luopo_li').eq(8).mouseover(function(){
		$('.fangshi').show();
		$('.lunbo_r .luopo_li').eq(8).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(8).mouseout(function(){
		$('.fangshi').hide();
		$('.lunbo_r .luopo_li').eq(8).css('background','#FFFBEA');
	})
	// 第九个
	$('.lunbo_r .luopo_li').eq(9).mouseover(function(){
		$('.cunchu').show();
		$('.lunbo_r .luopo_li').eq(9).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(9).mouseout(function(){
		$('.cunchu').hide();
		$('.lunbo_r .luopo_li').eq(9).css('background','#FFFBEA');
	})
	// 第十个
	$('.lunbo_r .luopo_li').eq(10).mouseover(function(){
		$('.youhui').show();
		$('.lunbo_r .luopo_li').eq(10).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(10).mouseout(function(){
		$('.youhui').hide();
		$('.lunbo_r .luopo_li').eq(10).css('background','#FFFBEA');
	})
	// 第十一个
	$('.lunbo_r .luopo_li').eq(11).mouseover(function(){
		$('.peijian').show();
		$('.lunbo_r .luopo_li').eq(11).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(11).mouseout(function(){
		$('.peijian').hide();
		$('.lunbo_r .luopo_li').eq(11).css('background','#FFFBEA');
	})
	// 第十二个
	$('.lunbo_r .luopo_li').eq(12).mouseover(function(){
		$('.temai_s').show();
		$('.lunbo_r .luopo_li').eq(12).css('background','#FCF5DE');
	})
	$('.lunbo_r .luopo_li').eq(12).mouseout(function(){
		$('.temai_s').hide();
		$('.lunbo_r .luopo_li').eq(12).css('background','#FFFBEA');
	})
	// 树形导航区域结束

	//轮播区域开始
	var timer=null;
	var num=0;
	function yudong(){
		timer=setInterval(function(){
		num++;
		if(num==5){
			num=0;
		}
		$('.datu_top a').eq(num).fadeIn().siblings('.datu_top a').css('display','none');

		},3000)
	}
	yudong();
	$('.datu_top').mouseover(function(){
		clearInterval(timer);
		$('.datu_top .youjiantou').show();
		$('.datu_top .zuojiantou').show();

	})
	$('.datu_top').mouseout(function(){
		yudong();
		$('.datu_top .youjiantou').hide();
		$('.datu_top .zuojiantou').hide();
	})
	$('.datu_top .youjiantou').mouseover(function(){
		$('.datu_top .yingcang').show();
	})
	$('.datu_top .youjiantou').mouseout(function(){
		$('.datu_top .yingcang').hide();
	})
	$('.datu_top .zuojiantou').mouseover(function(){
		$('.datu_top .zuoyingcang').show();
	})
	$('.datu_top .zuojiantou').mouseout(function(){
		$('.datu_top .zuoyingcang').hide();
	})
	$('.datu_top .youjiantou').click(function(){
		num+=1
		if(num==5){
			num=0;
		}
		$('.datu_top a').eq(num).fadeIn().siblings('.datu_top a').css('display','none');

	})
	$('.datu_top .zuojiantou').click(function(){
		if(num==0){
			num=5;
		}
		num=num-1
		$('.datu_top a').eq(num).fadeIn().siblings('.datu_top a').css('display','none');

	})
	// 轮播区域结束

	// 图片hover属性
	// var biankuang=$('.biankuang');
	var biank=$('.biank');
	biank.hover(function() {
		$(this).children('.biankuang').show();
	}, function() {
		$(this).children('.biankuang').hide();
	});
	
	// 图片hover属性结束



})