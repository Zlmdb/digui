/**
 * @file    用户信息相关JS
 * @authors Kevin Chen (chj@8cuo.net)
 * @date    2017-04-19 23:57:41
 * @version $Id$
 */

var testData = {
	name: '刘珍',
	no: '0121212',
	phone: '18888888888',
	account: 03858,
	role: '店长',
	store: '西湖花园店'
};
var testTodolistData = [{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
},{
	content: '有一条美容师购买采购单待审核',
	time:'2017.01.02 10:09:09'
}]
var userInfo = {
	show: function(){
		// 用户信息 显示
		var tmpl = ['<div class="popWin user-popwin" id="pwUserInfo">',
			'<div class="pw-hd">基本信息 <a href="javascript:userInfo.edit();" class="icon-edit">编辑</a><a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<div class="form-wrap col-2">',
					'<p class="form-item"><span class="label">姓名：</span>' + testData.name + '</p>',
					'<p class="form-item"><span class="label">编号：</span>' + testData.no + '</p>',
					'<p class="form-item"><span class="label">手机号：</span>' + testData.phone + '</p>',
					'<p class="form-item"><span class="label">账号：</span>' + testData.account + '</p>',
					'<p class="form-item"><span class="label">角色：</span>' + testData.role + '</p>',
					'<p class="form-item"><span class="label">所属门店：</span>' + testData.store + '</p>',
					'<p class="option"><a href="javascript:userInfo.changePassword();">修改密码</a><a href="javascript:userInfo.editPhone();">修改手机号</a></p>',
				'</div>',
			'</div>',
		'</div>'].join('');
		if($('body').find('.mask').length === 0 ) {
			$('body').append('<div class="mask"></div>').find('.mask').show();
		} else {
			$('body').find('.mask').show();
		}
		if($('body').find('#pwUserInfo').length !== 0){
			$('#pwUserInfo').remove();
		}
		$('body').append(tmpl);
	},
	edit: function(){
		// 用户信息 编辑
		var tmpl =['<div class="popWin user-popwin" id="pwUserInfoEdit">',
			'<div class="pw-hd">基本信息<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-2">',
						'<p class="form-item"><span class="label">姓名：</span><input type="text" class="input-text" name="name" value="' + testData.name+ '"></p>',
						'<p class="form-item"><span class="label">编号：</span>' + testData.no + '</p>',
						'<p class="form-item"><span class="label">手机号：</span>' + testData.phone + '</p>',
						'<p class="form-item"><span class="label">账号：</span>' + testData.account + '</p>',
						'<p class="form-item"><span class="label">角色：</span>' + testData.role + '</p>',
						'<p class="form-item"><span class="label">所属门店：</span>' + testData.store + '</p>',
					'</div>',
					'<p class="text-center"><a href="javascript:userInfo.save();" class="btn s1">保存</a></p>',
				'</form>',
			'</div>',
		'</div>'].join('');
		if($('body').find('.mask').length === 0 ) {
			$('body').append('<div class="mask"></div>').find('.mask').show();
		} else {
			$('body').find('.mask').show();
		}
		if($('body').find('.popWin').length !== 0){
			$('.popWin').remove();
		}
		$('body').append(tmpl);
	},
	save: function(){
		// 用户信息 保存
		var name = $('#pwUserInfoEdit').find('input').val();
		alert(name);
	},
	editPhone: function(){
		//  编辑手机号
		var tmpl = ['<div class="popWin user-popwin" id="pwUserInfoEditPhone">',
			'<div class="pw-hd">修改手机号<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-1">',
						'<p class="form-item"><span class="label">新手机号：</span><input type="password" class="input-text" name="" value="" placeholder="请输入"> <a href="javascript:sendVerifyCode();">发送验证码</a></p>',
						'<p class="form-item"><span class="label">验证码：</span><input type="password" class="input-text" name="" value="" placeholder="请输入"></p>',
					'</div>',
					'<p class="text-center"><a href="javascript:userInfo.savePhone();" class="btn s1" style="margin-right:80px;">确认</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
				'</form>',
			'</div>',
		'</div>'].join('');
		if($('body').find('.mask').length === 0 ) {
			$('body').append('<div class="mask"></div>').find('.mask').show();
		} else {
			$('body').find('.mask').show();
		}
		if($('body').find('.popWin').length !== 0){
			$('.popWin').remove();
		}
		$('body').append(tmpl);

	},
	savePhone: function(){
		// 保存密码
		console.log('保存手机成功');
	},
	changePassword: function(){
		// 修改密码
		var tmpl = ['<div class="popWin user-popwin" id="pwUserInfoChangePwd">',
			'<div class="pw-hd">修改密码<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-1">',
						'<p class="form-item"><span class="label">原密码：</span><input type="password" class="input-text" name="oldpwd" value=""></p>',
						'<p class="form-item"><span class="label">新密码：</span><input type="password" class="input-text" name="nespwd" value=""></p>',
						'<p class="form-item"><span class="label">确认密码：</span><input type="password" class="input-text" name="confirmpwd" value=""></p>',
					'</div>',
					'<p class="text-center"><a href="javascript:userInfo.savePwd();" class="btn s1" style="margin-right:80px;">确认</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
				'</form>',
			'</div>',
		'</div>'].join('');
		if($('body').find('.mask').length === 0 ) {
			$('body').append('<div class="mask"></div>').find('.mask').show();
		} else {
			$('body').find('.mask').show();
		}
		if($('body').find('.popWin').length !== 0){
			$('.popWin').remove();
		}
		$('body').append(tmpl);
	},
	todolist: function(){
		// 代办事项
		var data = testTodolistData;
		var todoItem = [];
		for(var i = 0; i < data.length; i ++){
			todoItem.push('<li><span class="content">' + data[i].content + '</span><span class="time">' + data[i].time + '</span><a href="#">处理</a></li>');
		}
		var tmpl = ['<div class="popWin user-popwin" id="pwUserInfoTodolist">',
			'<div class="pw-hd text-left">代办事项 <span style="font-size:12px; color:#db4c4c;">共' + data.length + '条</span><a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<ul class="todolist">' + todoItem.join('') +  '</div>',
		'</div>'].join('');
		if($('body').find('.mask').length === 0 ) {
			$('body').append('<div class="mask"></div>').find('.mask').show();
		} else {
			$('body').find('.mask').show();
		}
		if($('body').find('.popWin').length !== 0){
			$('.popWin').remove();
		}
		$('body').append(tmpl);
	},
	savePwd: function(){
		// 保存密码
		console.log('保存密码成功');
	},
	logout: function(){
		// 退出
		alert('退出成功')
	}
}

// 关闭弹出窗
$(function(){
	$('body').on('click', '.pwClose', function () {
		$(this).parents('.popWin').fadeOut('fast',function(){
			$(this).remove();
		});
		$('.mask').fadeOut('fast');
	})
});




