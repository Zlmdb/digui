/**
 * @file    物品管理
 * @authors Kevin Chen (chj@8cuo.net)
 * @date    2017-04-23 15:27:01
 * @version $Id$
 */

$(function() {
	// console.log($(".filterBox .clearfix .storeList").find(".input-checkbox")[4].innerText);
	var $filterBox = $('.filterBox');
	// var filterData = {
	// 	'面部': ['面部保湿', '面部祛痘', '面部补水', '面部塑形'],
	// 	'足部': ['足部1', '足部2', '足部3', '足部4'],
	// 	'胸部': ['胸部1', '胸部2', '胸部3', '胸部4']
	// }
	var partments={

		"status": 200,
		"data": {
			"entitys": [
				{
					"id": 0,
					"del": "n",
					"code": "00000",
					"name": "部门0",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 1,
					"del": "n",
					"code": "00001",
					"name": "部门1",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 2,
					"del": "n",
					"code": "00002",
					"name": "部门2",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 3,
					"del": "n",
					"code": "00003",
					"name": "部门3",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 4,
					"del": "n",
					"code": "00004",
					"name": "部门4",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 5,
					"del": "n",
					"code": "00005",
					"name": "部门5",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 6,
					"del": "n",
					"code": "00006",
					"name": "部门6",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 7,
					"del": "n",
					"code": "00007",
					"name": "部门7",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 8,
					"del": "n",
					"code": "00008",
					"name": "部门8",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 9,
					"del": "n",
					"code": "00009",
					"name": "部门9",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 10,
					"del": "n",
					"code": "000010",
					"name": "部门10",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 11,
					"del": "n",
					"code": "000011",
					"name": "部门11",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 12,
					"del": "n",
					"code": "000012",
					"name": "部门12",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 13,
					"del": "n",
					"code": "000013",
					"name": "部门13",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 14,
					"del": "n",
					"code": "000014",
					"name": "部门14",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 15,
					"del": "n",
					"code": "000015",
					"name": "部门15",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 16,
					"del": "n",
					"code": "000016",
					"name": "部门16",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 17,
					"del": "n",
					"code": "000017",
					"name": "部门17",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 18,
					"del": "n",
					"code": "000018",
					"name": "部门18",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 19,
					"del": "n",
					"code": "000019",
					"name": "部门19",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 20,
					"del": "n",
					"code": "000020",
					"name": "部门20",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 21,
					"del": "n",
					"code": "000021",
					"name": "部门21",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 22,
					"del": "n",
					"code": "000022",
					"name": "部门22",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 23,
					"del": "n",
					"code": "000023",
					"name": "部门23",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 24,
					"del": "n",
					"code": "000024",
					"name": "部门24",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 25,
					"del": "n",
					"code": "000025",
					"name": "部门25",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 26,
					"del": "n",
					"code": "000026",
					"name": "部门26",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 27,
					"del": "n",
					"code": "000027",
					"name": "部门27",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 28,
					"del": "n",
					"code": "000028",
					"name": "部门28",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				},
				{
					"id": 29,
					"del": "n",
					"code": "000029",
					"name": "部门29",
					"area_name": "杭州",
					"is_gate": "否",
					"createTime": 1493789741519
				}
			],
			"pageSize": 30,
			"totalCount": 470,
			"currentPage": 1,
			"totalPage": 16
		},
		"msg": "操作成功"

	};
	// 请求到的归类数据
	var filterData ={

		"status": 200,
		"data": {
			"id": 0,
			"name": "root",
			"level": 0,
			"children": [
				{
					"id": 1,
					"name": "父节点1",
					"level": 1,
					"children": [
						{
							"id": 11,
							"name": "子节点1-1",
							"level": 2,
							"children": [
								{
									"id": 110,
									"name": "子节点1-1-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 111,
									"name": "子节点1-1-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 112,
									"name": "子节点1-1-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 114,
									"name": "子节点1-1-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 12,
							"name": "子节点1-2",
							"level": 2,
							"children": [
								{
									"id": 120,
									"name": "子节点1-2-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 121,
									"name": "子节点1-2-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 122,
									"name": "子节点1-2-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 124,
									"name": "子节点1-2-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 13,
							"name": "子节点1-3",
							"level": 2,
							"children": [
								{
									"id": 130,
									"name": "子节点1-3-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 131,
									"name": "子节点1-3-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 132,
									"name": "子节点1-3-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 134,
									"name": "子节点1-3-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						}
					],
					"defectLevel": null
				},
				{
					"id": 2,
					"name": "父节点2",
					"level": 1,
					"children": [
						{
							"id": 21,
							"name": "子节点2-1",
							"level": 2,
							"children": [
								{
									"id": 210,
									"name": "子节点2-1-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 211,
									"name": "子节点2-1-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 212,
									"name": "子节点2-1-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 214,
									"name": "子节点2-1-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 22,
							"name": "子节点2-2",
							"level": 2,
							"children": [
								{
									"id": 220,
									"name": "子节点2-2-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 221,
									"name": "子节点2-2-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 222,
									"name": "子节点2-2-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 224,
									"name": "子节点2-2-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 23,
							"name": "子节点2-3",
							"level": 2,
							"children": [
								{
									"id": 230,
									"name": "子节点2-3-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 231,
									"name": "子节点2-3-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 232,
									"name": "子节点2-3-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 234,
									"name": "子节点2-3-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						}
					],
					"defectLevel": null
				},
				{
					"id": 3,
					"name": "父节点3",
					"level": 1,
					"children": [
						{
							"id": 31,
							"name": "子节点3-1",
							"level": 2,
							"children": [
								{
									"id": 310,
									"name": "子节点3-1-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 311,
									"name": "子节点3-1-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 312,
									"name": "子节点3-1-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 314,
									"name": "子节点3-1-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 32,
							"name": "子节点3-2",
							"level": 2,
							"children": [
								{
									"id": 320,
									"name": "子节点3-2-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 321,
									"name": "子节点3-2-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 322,
									"name": "子节点3-2-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 324,
									"name": "子节点3-2-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 33,
							"name": "子节点3-3",
							"level": 2,
							"children": [
								{
									"id": 330,
									"name": "子节点3-3-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 331,
									"name": "子节点3-3-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 332,
									"name": "子节点3-3-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 334,
									"name": "子节点3-3-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						}
					],
					"defectLevel": null
				},
				{
					"id": 4,
					"name": "父节点4",
					"level": 1,
					"children": [
						{
							"id": 41,
							"name": "子节点4-1",
							"level": 2,
							"children": [
								{
									"id": 410,
									"name": "子节点4-1-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 411,
									"name": "子节点4-1-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 412,
									"name": "子节点4-1-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 414,
									"name": "子节点4-1-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 42,
							"name": "子节点4-2",
							"level": 2,
							"children": [
								{
									"id": 420,
									"name": "子节点4-2-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 421,
									"name": "子节点4-2-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 422,
									"name": "子节点4-2-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 424,
									"name": "子节点4-2-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 43,
							"name": "子节点4-3",
							"level": 2,
							"children": [
								{
									"id": 430,
									"name": "子节点4-3-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 431,
									"name": "子节点4-3-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 432,
									"name": "子节点4-3-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 434,
									"name": "子节点4-3-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						}
					],
					"defectLevel": null
				},
				{
					"id": 5,
					"name": "父节点5",
					"level": 1,
					"children": [
						{
							"id": 51,
							"name": "子节点5-1",
							"level": 2,
							"children": [
								{
									"id": 510,
									"name": "子节点5-1-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 511,
									"name": "子节点5-1-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 512,
									"name": "子节点5-1-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 514,
									"name": "子节点5-1-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 52,
							"name": "子节点5-2",
							"level": 2,
							"children": [
								{
									"id": 520,
									"name": "子节点5-2-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 521,
									"name": "子节点5-2-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 522,
									"name": "子节点5-2-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 524,
									"name": "子节点5-2-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						},
						{
							"id": 53,
							"name": "子节点5-3",
							"level": 2,
							"children": [
								{
									"id": 530,
									"name": "子节点5-3-0",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 531,
									"name": "子节点5-3-1",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 532,
									"name": "子节点5-3-2",
									"level": 3,
									"children": null,
									"defectLevel": null
								},
								{
									"id": 534,
									"name": "子节点5-3-4",
									"level": 3,
									"children": null,
									"defectLevel": null
								}
							],
							"defectLevel": null
						}
					],
					"defectLevel": null
				}
			],
			"defectLevel": null
		},
		"msg": "操作成功"

	};
	var table_things={

		"status": 200,
		"data": {
			"entitys": [
				{
					"id": 0,
					"del": "n",
					"code": "0000",
					"name": "物品0",
					"size": "50ml",
					"sale_price": null,
					"face_price": "0",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 1,
					"del": "n",
					"code": "0001",
					"name": "物品1",
					"size": "50ml",
					"sale_price": null,
					"face_price": "1",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 2,
					"del": "n",
					"code": "0002",
					"name": "物品2",
					"size": "50ml",
					"sale_price": null,
					"face_price": "2",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 3,
					"del": "n",
					"code": "0003",
					"name": "物品3",
					"size": "50ml",
					"sale_price": null,
					"face_price": "3",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 4,
					"del": "n",
					"code": "0004",
					"name": "物品4",
					"size": "50ml",
					"sale_price": null,
					"face_price": "4",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 5,
					"del": "n",
					"code": "0005",
					"name": "物品5",
					"size": "50ml",
					"sale_price": null,
					"face_price": "5",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 6,
					"del": "n",
					"code": "0006",
					"name": "物品6",
					"size": "50ml",
					"sale_price": null,
					"face_price": "6",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 7,
					"del": "n",
					"code": "0007",
					"name": "物品7",
					"size": "50ml",
					"sale_price": null,
					"face_price": "7",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 8,
					"del": "n",
					"code": "0008",
					"name": "物品8",
					"size": "50ml",
					"sale_price": null,
					"face_price": "8",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 9,
					"del": "n",
					"code": "0009",
					"name": "物品9",
					"size": "50ml",
					"sale_price": null,
					"face_price": "9",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 10,
					"del": "n",
					"code": "00010",
					"name": "物品10",
					"size": "50ml",
					"sale_price": null,
					"face_price": "10",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 11,
					"del": "n",
					"code": "00011",
					"name": "物品11",
					"size": "50ml",
					"sale_price": null,
					"face_price": "11",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 12,
					"del": "n",
					"code": "00012",
					"name": "物品12",
					"size": "50ml",
					"sale_price": null,
					"face_price": "12",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 13,
					"del": "n",
					"code": "00013",
					"name": "物品13",
					"size": "50ml",
					"sale_price": null,
					"face_price": "13",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 14,
					"del": "n",
					"code": "00014",
					"name": "物品14",
					"size": "50ml",
					"sale_price": null,
					"face_price": "14",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 15,
					"del": "n",
					"code": "00015",
					"name": "物品15",
					"size": "50ml",
					"sale_price": null,
					"face_price": "15",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 16,
					"del": "n",
					"code": "00016",
					"name": "物品16",
					"size": "50ml",
					"sale_price": null,
					"face_price": "16",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 17,
					"del": "n",
					"code": "00017",
					"name": "物品17",
					"size": "50ml",
					"sale_price": null,
					"face_price": "17",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 18,
					"del": "n",
					"code": "00018",
					"name": "物品18",
					"size": "50ml",
					"sale_price": null,
					"face_price": "18",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 19,
					"del": "n",
					"code": "00019",
					"name": "物品19",
					"size": "50ml",
					"sale_price": null,
					"face_price": "19",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 20,
					"del": "n",
					"code": "00020",
					"name": "物品20",
					"size": "50ml",
					"sale_price": null,
					"face_price": "20",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 21,
					"del": "n",
					"code": "00021",
					"name": "物品21",
					"size": "50ml",
					"sale_price": null,
					"face_price": "21",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 22,
					"del": "n",
					"code": "00022",
					"name": "物品22",
					"size": "50ml",
					"sale_price": null,
					"face_price": "22",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 23,
					"del": "n",
					"code": "00023",
					"name": "物品23",
					"size": "50ml",
					"sale_price": null,
					"face_price": "23",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 24,
					"del": "n",
					"code": "00024",
					"name": "物品24",
					"size": "50ml",
					"sale_price": null,
					"face_price": "24",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 25,
					"del": "n",
					"code": "00025",
					"name": "物品25",
					"size": "50ml",
					"sale_price": null,
					"face_price": "25",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 26,
					"del": "n",
					"code": "00026",
					"name": "物品26",
					"size": "50ml",
					"sale_price": null,
					"face_price": "26",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 27,
					"del": "n",
					"code": "00027",
					"name": "物品27",
					"size": "50ml",
					"sale_price": null,
					"face_price": "27",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 28,
					"del": "n",
					"code": "00028",
					"name": "物品28",
					"size": "50ml",
					"sale_price": null,
					"face_price": "28",
					"is_discount": "否",
					"status": "审核通过"
				},
				{
					"id": 29,
					"del": "n",
					"code": "00029",
					"name": "物品29",
					"size": "50ml",
					"sale_price": null,
					"face_price": "29",
					"is_discount": "否",
					"status": "审核通过"
				}
			],
			"pageSize": 30,
			"totalCount": 470,
			"currentPage": 1,
			"totalPage": 16
		},
		"msg": "操作成功"

	};


	// 分类里的数据初始化进去
	var init={
		insert:function(){
			var child1=filterData.data.children;
			var partsArr=[];
			for(i in child1){
				partsArr.push('<a href="javascript:;">'+child1[i].name+'</a>');
			}
			$('.cateFilter .cate .parts').html(partsArr.join(''));


		}

	}
	init.insert();


	$filterBox.on('click', '.tab-hd a' ,function(){
		var target = $(this).data('target');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.tab-hd').siblings('.' + target).show().siblings('.tab-bd').hide();
	});
	// 递归调用
	// var foo=function (arr) {
	// 	var html='';
    //
	// 	for(var i=0;i<arr.length;i++){
    //
	// 		html+=`
	// 			<a href="###">${arr[i].name}</a>
	// 	`;
    //
	// 	}
	// 	var div=document.createElement("div");
	// 	div.innerHTML=html;
	// 	// console.log(div);
	// 	$('.cateFilter').on('click', '.cate  a', function () {
	// 		// var parent=this.parentNode.parentNode;
	// 		// //反复: 只要当前select不是parent的lastChild
	// 		// while(this.parentNode!=parent.lastChild){
	// 		// 	//删除parent下的lastChild
	// 		// 	parent.removeChild(parent.lastChild);
	// 		// }
	// 		var part1 = $(this).text();
	// 		var par=$(this).parent().find("a");
	// 		console.log(par);
	// 		// console.log(part1);
	// 		// console.log(arr.length+1);
	// 		for(var j=0;j<par.length;j++){
	// 			if(par[j].innerText===part1){
	// 				// alert("dfsd");
	// 				break;
	// 			}
	// 		}
	// 		console.log(j);
	// 		if(arr[j].children){
	// 			foo(arr[j].children);
	// 		}
	// 	});
    //
	// 	$('.cateFilter .cate ').append(div);
	// }
	// var child1=filterData.data.children;
	// foo(filterData.data.children);


	/*
	* 把每一层的数据都存在单独的数组里面
	* */
	// var arr1=filterData.data.children;
	// var arr2=[];
	// // var arr3=[];
	// for(i in arr1){
	// 	console.log(arr1[i].children);
	// 	// if(arr1[i].children){
	// 		arr2.push(arr1[i].children);
	// 	// }
	// }
	// var arr3="";
	// var arr33=[];
	// console.log(arr2);
	// for(x in arr2){
	// 	arr3=arr2[x];
	// 	for(j in arr3){
	// 		arr33.push(arr3[j].name);
	// 	}
	// 	// arr33.push("&");
	// 	console.log(arr33);
	// }
	// var le=arr2.length;
	// var tt=[];
	// for(var t=0;t<le;t++){
	// 	var i=0;
	// 	tt.push(arr33.splice(i,3));
	// 	i+=3;
	// }
	// // console.log(tt);
    //
	// // children
	// var arrc=[];
	// for(x in arr2){
	// 	arr3=arr2[x];
	// 	for(j in arr3){
	// 		arrc.push(arr3[j].children);
	// 	}
	// 	// arr33.push("&");
    //
	// }
	// console.log(arrc);
	// var arr4="";
	// var arr44=[];
	// for(y in arrc){
	// 	arr4=arrc[y];
	// 	for(u in arr4){
	// 		arr44.push(arr4[u].name);
	// 		console.log(arr4[u].name);
	// 	}
	// }
	// var ttt=[];
	// for(var r=0;r<le;r++){
	// 	var i=0;
	// 	tt.push(arr33.splice(i,3));
	// 	i+=3;
	// }

	// var arr4="";
	// for(y in )
	// console.log(arr2);
	// console.log(arr2);
	// for(j in arr2){
	// 	if(arr2[j].children){
	// 		arr3.push(arr2[j].children);
	// 	}
	// }
	// console.log(arr3);

	// for的欠嵌套
	// 归类第一级事件
	$('.cateFilter').on('click', '.cate .parts a', function () {

		$(".item").hide();
		// var cate=$(this).parent().parent();
		// if($(this).parent()!=parent.last()){
		// 	$(this).parent() .nextAll().remove();
		// }

		var part1 = $(this).text();
		$(this).addClass('active').siblings('a').removeClass('active');
		var items1 = [];
		var child1=filterData.data.children;
		for(var i = 0; i < child1.length; i ++ ) {
			if(child1[i].name===part1){
				var child2=child1[i].children;
				for(j in child2){
					items1.push('<a href="javascript:;">' + child2[j].name + '</a>')
				}
			}
		}
		$('.cateFilter').find('.item1').html(items1.join(''));
		$(".item1").show();
	});
	// 归类第二级事件
	$('.cateFilter').on('click', '.cate .item1 a', function () {



		var part1 = $(this).text();
		console.log(part1);
		$(this).addClass('active').siblings('a').removeClass('active');
		var items1 = [];
		var child1=filterData.data.children;
		for(var i = 0; i < child1.length; i ++ ) {
			var  child2=child1[i].children;
			for(x in child2){
				if(child2[x].name===part1){
					var child3=child2[x].children;
					for(j in child3){
						items1.push('<a href="javascript:;">' + child3[j].name + '</a>');
					}
				}
			}
		}
		$('.cateFilter').find('.item').html(items1.join(''));
		$(".item").show();
	});
	// 把最后一层的数据添加到顶部的div里面
	$('.cateFilter').on('click', '.cate .item a', function () {
		if($(this).hasClass('active')){
			return false;
		} else {
			var text = $('.cateFilter .parts').find('.active').text() + ':' + $(this).text();
			$(this).addClass('active');
			$filterBox.find('.result').append(itemTmpl(text));
		}
	});
	// 品牌分类点击
	$('.cateFilter').on('click', '.brand a', function () {
		if($(this).hasClass('active')){
			return false;
		} else {
			var text = $(this).text();
			$(this).addClass('active');
			$filterBox.find('.result').append(itemTmpl(text));
		}
	});
	// 顶部的删除当前元素
	$filterBox.on('click', '.result a', function(){
		$(this).parents('span').remove();
	});

	// 部门管理初始化数据
	var branch=partments.data.entitys;
	var entrity_html='';
	for(var i in branch){
		// console.log($(".filterBox .clearfix .storeList").find(".input-checkbox")[4].innerText);
		entrity_html+=`
					<label class="input-checkbox" style="width: 160px;"><input type="checkbox"><i></i>${branch[i].name}</label>
		`;
	}
	$(".storeList").html(entrity_html);
	// 表格初始化
	var table_con=table_things.data.entitys;
	var html='';
	for(var j in table_con){
		html+=`
			<tr>
				<td>${table_con[i].id}</td>
				<td>${table_con[i].name}</td>
				<td>${table_con[i].size}</td>
				<td>${table_con[i].face_price}</td>
				<td>${table_con[i].sale_price}</td>
				<td>${table_con[i].is_discount}</td>
				<td>${table_con[i].status}</td>
			</tr>
		`;
	}
	$('.table-box table tbody').html(html);



	// 箭头隐藏与显示切换
	$('.btn-collapse').on('click',function(){
		$(this).toggleClass('open').parents('.filterBox').find('.collapse').toggle();
	})

	$('.goodform').on('click', '.toggleBox', function(){
		$(this).toggleClass('active').parents('dl').find('dd').toggle();
	});
// 关闭弹出窗

	$('body').on('click', '.pwClose', function () {
		if($(this).data('target')) {
			$($(this).data('target')).fadeOut('fast',function(){
			$(this).remove();
		});
		} else {
			$(this).parents('.popWin').fadeOut('fast',function(){
				$(this).remove();
			});
			$('.mask').fadeOut('fast');
		}
	});

	// 数据排序
	$(document).on('click', '.sortFilter', function(){
		var $this = $(this);
		var type = $this.data('sort');
		var sort = '';
		$this.siblings('.sortFilter').removeClass('asc, desc');
		if($this.hasClass('asc')){
			// 降序
			sort = 'desc';
			$(this).addClass('desc').removeClass('asc');
		} else if($this.hasClass('desc')) {
			// 升序
			sort = 'asc';
			$(this).addClass('asc').removeClass('desc');
		} else {
			sort = 'desc';
			$(this).addClass('desc').removeClass('asc');
		}
		console.log(type +':'+ sort);
	});


	// 价格浮动
	$(document).on('click', '.priceFluctuation', function(){
		var param = $(this).data('param');
		if(param.type === 2) {
			// 采购价
			purchasePriceFluctuation(param);
		} else {
			priceFluctuation(param);
		}
	})

});
// 表单筛选 显示模板
function itemTmpl(text) {
	return '<span>' + text + '<a href="javascript:;">&#10005;</a></span>'
}

function noBuyAccount(){
		var tmpl =['<div class="popWin goods-popwin" id="pwnoBuAccount">',
			'<div class="pw-hd">不可购买账户<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
				'<form>',
					'<div class="form-wrap col-3">',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 生美充值余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 生美赠送余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 生美流转余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 医美充值余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 医美赠送余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 医美流转余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 物品折算余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 物品赠送余额</label></p>',
						'<p class="form-item"><label class="label"><input type="checkbox" name="name" value="1"> 物品流转余额</label></p>',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1" style="margin-right: 120px;">确认添加</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
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

// 价格浮动
function priceFluctuation(param) {
		var tmpl =['<div class="popWin price-popwin" id="pwPriceFluctuation">',
			'<div class="pw-bd"><a href="javascript:;" class="pwClose icon-close"></a>',
				'<div class="table-box">',
					'<table>',
						'<thead>',
							'<tr>',
								'<th style="width:25%;" class="text-left">调整时间</th>',
								'<th style="width:20%;" class="text-left">调整后价格/(元)</th>',
								'<th style="width:15%;" class="text-left">上升/下降</th>',
								'<th style="width:20%;" class="text-left">调整人编号</th>',
								'<th style="width:20%;" class="text-left">调整人姓名</th>',
							'</tr>',
						'</thead>',
						'<tbody>',
							'<tr>',
								'<td style="width:25%;" class="text-left">2017-11-03 12:12:12</td>',
								'<td style="width:20%;" class="text-left">1234</td>',
								'<td style="width:15%;" class="text-left">&#8593</td>',
								'<td style="width:20%;" class="text-left">1234</td>',
								'<td style="width:20%;" class="text-left">杨洋</td>',
							'</tr>',
							'<tr>',
								'<td style="width:25%;" class="text-left">2017-11-03 12:12:12</td>',
								'<td style="width:20%;" class="text-left">1234</td>',
								'<td style="width:15%;" class="text-left">&#8593</td>',
								'<td style="width:20%;" class="text-left">1234</td>',
								'<td style="width:20%;" class="text-left">杨洋</td>',
							'</tr>',
						'</tbody>',
					'</table>',
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
// 采购价格浮动
function purchasePriceFluctuation(param) {
		var tmpl =['<div class="popWin price-popwin" id="pwPpurchasePriceFluctuation">',
			'<div class="pw-bd"><a href="javascript:;" class="pwClose icon-close"></a>',
				'<div class="table-box">',
					'<table>',
						'<thead>',
							'<tr>',
								'<th style="width:40%;" class="text-left">调整时间</th>',
								'<th style="width:40%;" class="text-left">调整后价格/(元)</th>',
								'<th style="" class="text-left">趋势</th>',
							'</tr>',
						'</thead>',
						'<tbody>',
							'<tr>',
								'<td style="width:40%;" class="text-left">2017-11-03 12:12:12</td>',
								'<td style="width:40%;" class="text-left">1234</td>',
								'<td class="text-left">&#8593</td>',
							'</tr>',
							'<tr>',
								'<td style="width:40%;" class="text-left">2017-11-03 12:12:12</td>',
								'<td style="width:40%;" class="text-left">1234</td>',
								'<td class="text-left">&#8595</td>',
							'</tr>',
						'</tbody>',
					'</table>',
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

function copyConfirm(){
		var tmpl =['<div class="popWin confirm-popwin" id="pwCopyDialog">',
			'<div class="pw-hd">提示<a href="javascript:;" class="pwClose icon-close"></a></div>',
			'<div class="pw-bd">',
					'<div class="box">',
							'<p>是否需要复制该物品信息<br>并粘贴到新增物品资料中？</p>',
							'<div><label><input type="checkbox" > 不再显示该提醒信息</label></div>',
					'</div>',
					'<p class="text-center option"><a href="javascript:;" class="btn s1" style="margin-right: 40px;">确认</a><a href="javascript:;" class="btn s1 pwClose">取消</a></p>',
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
* 添加不可取货部门 && 添加不可销售部门
* type = 1 不可销售部门
* type = 2 不可取货部门
**/
function addDepartment(type){
	var title = type === 1 ? '添加不可销售部门' : '添加不可取货部门'
	$(window).scrollTop(0);
	// var top  = $(window).scrollTop() + 50;
	var tmpl =['<div class="pw-warp" id="pwAdddepartment"><div class="popWin pw-department">',
		'<div class="pw-hd">' + title + '<a href="javascript:;" class="pwClose icon-close" data-target="#pwAdddepartment"></a></div>',
		'<div class="pw-bd">',
				'<div class="card filterBox2">',
						'<div class="form-wrap">',
							'<p class="form-item">',
									'<label class="label">部门编号：</label><input type="text" class="input-text" placeholder="输入" name="goodsNo">',
							'</p>',
							'<p class="form-item">',
									'<label class="label">所属区域：</label><input type="text" class="input-text" placeholder="输入" name="goodsNo">',
							'</p>',
							'<p class="form-item">',
									'<label class="label">是否门店：</label><select name="" id="" class="select">',
								'<option value="是">是</option>',
								'<option value="否">否</option>',
							'</select>',
							'</p>',
							'<p class="form-item">',
									'<label class="label">部门名称：</label><input type="text" class="input-text" placeholder="输入" name="goodsNo">',
							'</p>',
							'<p class="form-item" style="width: 100%">',
									'<label class="label">成立时间：</label><input type="text" class="input-text input-date" name="" placeholder="" style="width: 28%"> 至 <input type="text" class="input-text input-date" name="" placeholder="" style="width: 28%">',
							'</p>',
						'</div>',
						'<div class="option text-right">',
							'<a href="javascript:;" class="btn s1 doSearch"><i class="icon-search"></i></a>',
						'</div>',
				'</div>',
				'<div class="table-box">',
					'<table>',
						'<thead>',
							'<tr>',
								'<th style="width:50px;"><input type="checkbox" class="selectAll"></th>',
								'<th class="text-left">部门编号</th>',
								'<th class="text-left">部门名称</th>',
								'<th class="text-left">所属区域</th>',
								'<th class="text-left">是否门店</th>',
								'<th>成立时间</th>',
							'</tr>',
						'</thead>',
						'<tbody>',
							'<tr>',
								'<td colspan="6"><p class="empty-table">请先查询，才能看到信息哟！</p></td>',
							'</tr>',
						'</tbody>',
					'</table>',
				'</div>',
				'<p class="text-center option"><a href="javascript:;" class="btn s1" style="margin-right: 20px;">确认添加</a><a href="javascript:;" class="btn s1 pwClose" data-target="#pwAdddepartment">取消</a></p>',
		'</div>',
	'</div></div>'].join('');

	$('body').append(tmpl);
}

$(function(){
	$(document).on('click', '#pwAdddepartment .doSearch', function(){
		var listHtml = [];
		for (var i = 0; i < 30; i ++ ) {
			listHtml.push('<tr><td style="width: 50px;"><input type="checkbox" value="'+i+'"></td><td class="text-left">' + (i + 1) + '</td><td class="text-left">武林店</td><td class="text-left">上城区</td><td class="text-left">门店</td><td>16-11-09</td></tr>');
		}
		$('#pwAdddepartment').find('.table-box tbody').html(listHtml.join(''));
	})
});


/**
* 添加不可购卡等级
**/
function addCardLevel(){
	$(window).scrollTop(0);
	// var top  = $(window).scrollTop() + 50;
	var tmpl =['<div class="pw-warp" id="pwAddCardLevel"><div class="popWin pw-department">',
		'<div class="pw-hd">添加不可购卡等级<a href="javascript:;" class="pwClose icon-close" data-target="#pwAddCardLevel"></a></div>',
		'<div class="pw-bd">',
				'<div class="card filterBox2">',
						'<div class="form-wrap">',
							'<p class="form-item">',
									'<label class="label">卡等级：</label><input type="text" class="input-text" placeholder="输入" name="goodsNo">',
							'</p>',
							'<p class="form-item">',
									'<label class="label">卡价值：</label><input type="text" class="input-text" placeholder="输入" name="goodsNo">',
							'</p>',
							'<p class="form-item">',
									'<label class="label">是否停售：</label><select name="" id="" class="select">',
								'<option value="是">是</option>',
								'<option value="否">否</option>',
							'</select>',
							'</p>',
						'</div>',
						'<div class="option text-right">',
							'<a href="javascript:;" class="btn s1 doSearch"><i class="icon-search"></i></a>',
						'</div>',
				'</div>',
				'<div class="table-box">',
					'<table>',
						'<thead>',
							'<tr>',
								'<th style="width:50px;"><input type="checkbox" class="selectAll"></th>',
								'<th style="width:21%;" class="text-left">卡等级</th>',
								'<th style="width:21%;" class="text-left">卡价值/(元)</th>',
								'<th style="width:21%;" class="text-left">最低余额/(元)</th>',
								'<th>销售起止日期</th>',
							'</tr>',
						'</thead>',
						'<tbody>',
							'<tr>',
								'<td colspan="5"><p class="empty-table">请先查询，才能看到信息哟！</p></td>',
							'</tr>',
						'</tbody>',
					'</table>',
				'</div>',
				'<p class="text-center option"><a href="javascript:;" class="btn s1" style="margin-right: 20px;">确认添加</a><a href="javascript:;" class="btn s1 pwClose" data-target="#pwAddCardLevel">取消</a></p>',
		'</div>',
	'</div></div>'].join('');

	$('body').append(tmpl);
}

$(function(){
	$(document).on('click', '#pwAddCardLevel .doSearch', function(){
		var listHtml = [];
		for (var i = 0; i < 30; i ++ ) {
			listHtml.push('<tr><td style="width:50px;"><input type="checkbox" value="'+i+'"></td><td class="text-left">启动卡</td><td class="text-left">12000</td><td class="text-left">12000</td><td>2016.11.09 - 2017.10.31</td></tr>');
		}
		$('#pwAddCardLevel').find('.table-box tbody').html(listHtml.join(''));
	})
});


