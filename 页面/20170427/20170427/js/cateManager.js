/**
 * @file    分类管理
 * @authors Kevin Chen (chj@8cuo.net)
 * @date    2017-04-26 01:53:56
 * @version $Id$
 */

$(function() {
	// 新增大分类
	$('.addCateLevel').on('click', function(){
		var newLevel = $('#cateList').find('.cateLevel').length + 1;
		var newLevelCN = newLevel.toCN();
		var cateLevelTmpl = ['<div class="cateLevel" data-level='+newLevel+'>',
					'<h3 class="title2">'+newLevelCN+'级分类</h3>',
					'<div class="cate-option text-right"><a href="javascript:;" class="addCate">&plus; 新增</a> <a href="javascript:;" class="actionCate">&times; 禁用</a></div>',
					'<div class="table-box">',
						'<table style="margin-bottom:0;">',
							'<thead>',
								'<tr>',
									'<th style="width:50px;"><input type="checkbox" style="display: none;"></th>',
									'<th class="text-left">分类编号</th>',
									'<th class="text-left">分类名称</th>'];
		if(newLevel > 1) {
			cateLevelTmpl.push('<th class="text-left">上一级分类编号</th><th class="text-left">上一级分类名称</th>')
		}
		cateLevelTmpl.push('<th class="text-left" width="34%">备注</th></tr></thead><tbody><tr class="empty"><td colspan="' + (newLevel > 1 ? 6 : 4) + '"> <p class="empty-table">请先新增信息</p> </td></tr></tbody></tbody></table></div></div>');
		$('#cateList').append(cateLevelTmpl.join(''));

		// 添加成功提示 并 1秒后移除提示
		$(this).after('<span class="tip"><i>&#10003</i> 已成功新增' + newLevelCN + '级分类</span>').siblings('.tip').delay(1000).fadeOut('fast', function(){
			$(this).remove();
		});
	});

	// 添加分类信息
	$('#cateList').on('click', '.addCate', function(){
		if($(this).hasClass('disabled')){
			return false;
		}
		var level = $(this).parents('.cateLevel').data('level');
		if(level === 1) {
			addTopCate();
		} else {
			addLevelCate(level);
		}
		
	});
	$(document).on('click', '.editTopCate', function(){
		var info = $(this).data('info');
		editTopCate(info);
	});

	$(document).on('click', '.addTopCateSave', function(){
		var data = $(this).parents('form').serializeObject();
		console.log(data);
		data.no = '24678'
		var html = '<tr><td><input type="checkbox" style="display: none;"></td><td class="text-left">'+data.no+'</td><td class="text-left">'+data.cateName+'</td><td class="text-left">'+data.remarks+'</td></tr>';
		$('.cateLevel[data-level="1"]').find('.empty').remove();
		$('.cateLevel[data-level="1"]').find('tbody').append(html);

		$(this).parents('.popWin').fadeOut('fast',function(){
			$(this).remove();
		});
		$('.mask').fadeOut('fast');
	});

	$(document).on('click', '.editLevelCate', function(){
		var info = $(this).data('info');
		editLevelCate(info);
	});
	$(document).on('click', '.addLevelCateSave', function(){
		var data = $(this).parents('form').serializeObject();
		console.log(data);
		data.no = '24678';
		data.upperNo = '23233';
		var html = '<tr><td><input type="checkbox" style="display: none;"></td><td class="text-left">'+data.no+'</td><td class="text-left">'+data.cateName+'</td><td class="text-left">'+data.upperNo+'</td><td class="text-left">'+data.upperName+'</td><td class="text-left">'+data.remarks+'</td></tr>';
		$('.cateLevel[data-level="'+ data.level +'"]').find('.empty').remove();
		$('.cateLevel[data-level="'+ data.level +'"]').find('tbody').append(html);

		$(this).parents('.popWin').fadeOut('fast',function(){
			$(this).remove();
		});
		$('.mask').fadeOut('fast');
	});
	// 禁用分类
	$('#cateList').on('click', '.actionCate' ,function(){
		if($(this).hasClass('disabled')){
			return false;
		}
		if($(this).hasClass('active')){
			var $cateLevel = $(this).parents('.cateLevel');
			$cateLevel.find('input').prop('disabled', false).hide();
			// 完成
			if ($cateLevel.find('thead').find('input[type=checkbox]').is(':checked')) {
				$cateLevel.addClass('disabled');
				$cateLevel.find('.cate-option a').addClass('disabled');
				// $cateLevel.find('.actionCate').removeClass('active').html('&times; 禁用');
				$cateLevel.find('h3').prepend('<a href="javascript:;" class="unlockCate"><i class="icon-lock"></i></a><span class="arrowTip">单击解禁</span>');
				$cateLevel.find('input').prop('disabled', true);
			} else {
				$cateLevel.find('tbody').find('input[type=checkbox]:checked').each(function(){
					var text = $(this).parents('tr').addClass('disabled').find('td').last().text();
					$(this).parents('tr').addClass('disabled').find('td').last().html('<div class="disabledCate">'+text+'<a class="unlockCateItem" href="javascript:"><i class="icon-lock"></i></a><span class="arrowTip">单击解禁</span></div>');
					$(this).parents('tr').find('input').prop('disabled', true);
					$(this).parents('tr').find('.arrowTip').delay(1000).fadeOut('fast', function(){
						$(this).remove();
					});
				})
			}
			$cateLevel.find('.actionCate').removeClass('active').html('&times; 禁用');

		} else {
			if($(this).data('hassubcate')) {
				showWarn();
			} else {
				$(this).addClass('active').text('完成');
				$(this).parents('.cateLevel').find('input[type="checkbox"]').prop('disabled', false).show();
			}
			
		}
	});


	$('#cateList').on('click', '.unlockCate', function(){
		var $cateLevel = $(this).parents('.cateLevel');
		$cateLevel.find('input').prop('checked', false);
		$cateLevel.removeClass('disabled');
		$cateLevel.find('.cate-option a').removeClass('disabled');
		
		$cateLevel.find('h3').find('.arrowTip').remove();
		$(this).remove();
	});
	$('#cateList').on('click', '.unlockCateItem', function(){
		var $tr = $(this).parents('tr');
		$tr.removeClass('disabled');
		$tr.find('input').prop('checked', false)
		$tr.find('.arrowTip').remove();
		$(this).remove();
		var text = $(this).parents('td').text();
		$(this).parents('td').html(text);
	});
});

/**
* 添加一级分类
* 
**/
function addTopCate(){
	// console.log(level);
	var title = '新增一级分类';
	// if(type === 'add') {
	// 	title = ''
	// } else if (type === 'detial') {
	// 	title = '详情 <a href="javascript:;"><i class="icon-edit"></i></a>'
	// } else {
	// 	title = '详情'
	// }

	var tmpl =['<div class="popWin cate-popwin" id="pwCateAdd">',
			'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-1">',
						'<p class="form-item"><label class="label">分类名称：</label><input type="text" name="cateName" class="input-text" placeholder="请输入"></p>',
						'<p class="form-item"><label class="label">分类编号：</label><span>自动分配</span></p>',
						'<div class="form-item"><label class="label">备注：</label><div class="textarea-wrap"><textarea name="remarks" placeholder="请输入"></textarea><p class="word-count">0/500</p></div></</div>',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1 addTopCateSave" style="margin-right: 100px;">确认</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
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
}

function showTopCate(info){
	var title = '详情 <a href="javascript:;" class="editTopCate" data-info=\'' + JSON.stringify(info) + '\'><i class="icon-edit"></i></a>'
	var tmpl =['<div class="popWin cate-popwin" id="pwCateAdd">',
			'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
					'<div class="form-wrap col-1">',
						'<p class="form-item"><label class="label">分类名称：</label><span class="text">'+info.name+'</span></p>',
						'<p class="form-item"><label class="label">分类编号：</label><span class="text">'+info.no+'</span></p>',
						'<div class="form-item"><label class="label">备注：</label><div class="textarea-wrap">'+info.remarks+'</div></</div>',
					'</div>',
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
}


function editTopCate(info){
	var title = '详情'
	var tmpl =['<div class="popWin cate-popwin" id="pwCateAdd">',
			'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-1">',
						'<p class="form-item"><label class="label">分类名称：</label><input type="text" name="cateName" class="input-text" value="'+info.name+'" placeholder="请输入"></p>',
						'<p class="form-item"><label class="label">分类编号：</label><span class="text">'+info.no+'</span></p>',
						'<div class="form-item"><label class="label">备注：</label><div class="textarea-wrap"><textarea name="remarks" placeholder="请输入">'+info.remarks+'</textarea><p class="word-count">0/500</p></div></</div>',
					'</div>',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1" style="margin-right: 100px;">保存</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
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
}


/**
* 添加次级分类
* 
**/
function addLevelCate(level){
	// console.log(level);
	var title = '新增' + level.toCN() + '级分类';
	// if(type === 'add') {
	// 	title = ''
	// } else if (type === 'detial') {
	// 	title = '详情 <a href="javascript:;"><i class="icon-edit"></i></a>'
	// } else {
	// 	title = '详情'
	// }

	var tmpl =['<div class="popWin cate-popwin" id="pwCateAdd">',
			'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<input type="hidden" name="level" value="'+level+'">',
					'<div class="form-wrap col-1" style="width: 320px;">',
						'<p class="form-item"><label class="label" style="width:8em;">分类名称：</label><input type="text" name="cateName" class="input-text" placeholder="请输入"></p>',
						'<p class="form-item"><label class="label" style="width:8em;">分类编号：</label><span>自动分配</span></p>',
						'<p class="form-item"><label class="label" style="width:8em;">上一级分类名称：</label><select name="upperName" class="select"><option value="面部">面部</option><option value="头部">头部</option></select></p>',
						'<p class="form-item"><label class="label" style="width:8em;">上一级分类编号：</label><span>2468</span></p>',
						'<div class="form-item"><label class="label" style="width:8em;">备注：</label><div class="textarea-wrap"><textarea name="remarks" placeholder="请输入"></textarea><p class="word-count">0/500</p></div></</div>',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1 addLevelCateSave" style="margin-right: 100px;">确认</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
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
}

function showLevelCate(info){
	var title = '详情 <a href="javascript:;" class="editLevelCate" data-info=\'' + JSON.stringify(info) + '\'><i class="icon-edit"></i></a>'
	var tmpl =['<div class="popWin cate-popwin" id="pwCateAdd">',
			'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
					'<div class="form-wrap col-1" style="width: 320px;">',
						'<p class="form-item"><label class="label" style="width:8em;">分类名称：</label><span class="text">'+info.name+'</span></p>',
						'<p class="form-item"><label class="label" style="width:8em;">分类编号：</label><span class="text">'+info.no+'</span></p>',
						'<p class="form-item"><label class="label" style="width:8em;">上一级分类名称：</label><span class="text">'+info.uppername+'</span></p>',
						'<p class="form-item"><label class="label" style="width:8em;">上一级分类编号：</label><span class="text">'+info.upperno+'</span></p>',
						'<div class="form-item"><label class="label" style="width:8em;">备注：</label><div class="textarea-wrap">'+info.remarks+'</div></</div>',
					'</div>',
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
}


function editLevelCate(info){
	var title = '详情'
	var tmpl =['<div class="popWin cate-popwin" id="pwCateAdd">',
			'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-1" style="width: 320px;">',
						'<p class="form-item"><label class="label" style="width:8em;">分类名称：</label><input type="text" name="cateName" class="input-text" value="'+info.name+'" placeholder="请输入"></p>',
						'<p class="form-item"><label class="label" style="width:8em;">分类编号：</label><span class="text">'+info.no+'</span></p>',
						'<p class="form-item"><label class="label" style="width:8em;">上一级分类名称：</label><select class="select"><option value="24678">面部</option><option value="24679" selected>头部</option></select></p>',
						'<p class="form-item"><label class="label" style="width:8em;">上一级分类编号：</label><span class="text">'+info.upperno+'</span></p>',
						'<div class="form-item"><label class="label" style="width:8em;">备注：</label><div class="textarea-wrap"><textarea name="remarks" placeholder="请输入">'+info.remarks+'</textarea><p class="word-count">0/500</p></div></</div>',
					'</div>',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1" style="margin-right: 100px;">保存</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
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
}

function showWarn(){
	var tmpl =['<div class="popWin cate-popwin" id="pwWarn" style="width: 360px;">',
			'<div class="pw-bd">',
					'<div class="warn-box">',
						'<span class="icon-warn"></span>当前级别拥有下属分类<br>不能直接禁用！',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1 pwClose">知道了</a></p>',
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
}