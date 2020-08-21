'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// @ts-ignore
var request_1 = require('../request');
/**
 * XL api
 * XL API工具
 * Thu Aug 20 2020 15:08:49 GMT+0800 (China Standard Time)
 */
var RequireApi = /** @class */ (function () {
	function RequireApi() {}
	/**
	 * 数据库备份
	 * -
	 */
	RequireApi.WebDbBackUp = function (body) {
		return request_1.default.connection('post', '/Web/DbBackUp', body);
	};
	/**
	 * 登录
	 * -
	 */
	RequireApi.WebLogin = function (body) {
		return request_1.default.connection('post', '/Web/Login', body);
	};
	/**
	 * 头像上传
	 * -
	 */
	RequireApi.WebWebUserUploadAvatar = function (body) {
		return request_1.default.connection('post', '/Web/WebUserUploadAvatar', body);
	};
	/**
	 * 帮助文档发布下架
	 * -
	 */
	RequireApi.WebArticleHelpManageChangeStatus = function (body) {
		return request_1.default.connection('post', '/WebArticleHelpManage/ChangeStatus', body);
	};
	/**
	 * 帮助文档详情获取
	 * -
	 */
	RequireApi.WebArticleHelpManageGet = function (query) {
		return request_1.default.connection('get', '/WebArticleHelpManage/Get', query);
	};
	/**
	 * 帮助文档列表获取
	 * -
	 */
	RequireApi.WebArticleHelpManageList = function (query) {
		return request_1.default.connection('get', '/WebArticleHelpManage/List', query);
	};
	/**
	 * 帮助文档编辑
	 * -
	 */
	RequireApi.WebArticleHelpManageUpdate = function (body) {
		return request_1.default.connection('post', '/WebArticleHelpManage/Update', body);
	};
	/**
	 * 案件分类新增
	 * -
	 */
	RequireApi.WebBaseCallCategoryAdd = function (body) {
		return request_1.default.connection('post', '/WebBaseCallCategory/Add', body);
	};
	/**
	 * 案件分类删除
	 * -
	 */
	RequireApi.WebBaseCallCategoryDelete = function (body) {
		return request_1.default.connection('post', '/WebBaseCallCategory/Delete', body);
	};
	/**
	 * 案件分类详情获取
	 * -
	 */
	RequireApi.WebBaseCallCategoryGet = function (query) {
		return request_1.default.connection('get', '/WebBaseCallCategory/Get', query);
	};
	/**
	 * 案件分类列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebBaseCallCategoryList = function (query) {
		return request_1.default.connection('get', '/WebBaseCallCategory/List', query);
	};
	/**
	 * 案件分类编辑
	 * -
	 */
	RequireApi.WebBaseCallCategoryUpdate = function (body) {
		return request_1.default.connection('post', '/WebBaseCallCategory/Update', body);
	};
	/**
	 * 新增摄像头
	 * -
	 */
	RequireApi.WebBaseCameraAdd = function (body) {
		return request_1.default.connection('post', '/WebBaseCamera/Add', body);
	};
	/**
	 * 摄像头删除
	 * -
	 */
	RequireApi.WebBaseCameraDelete = function (body) {
		return request_1.default.connection('post', '/WebBaseCamera/Delete', body);
	};
	/**
	 * 摄像头详情获取
	 * -
	 */
	RequireApi.WebBaseCameraGet = function (query) {
		return request_1.default.connection('get', '/WebBaseCamera/Get', query);
	};
	/**
	 * 获取rtsp模板
	 * -
	 */
	RequireApi.WebBaseCameraGetRtspTemplate = function (body) {
		return request_1.default.connection('post', '/WebBaseCamera/GetRtspTemplate', body);
	};
	/**
	 * 摄像头信息导入
	 * -
	 */
	RequireApi.WebBaseCameraImport = function (body) {
		return request_1.default.connection('post', '/WebBaseCamera/Import', body);
	};
	/**
	 * 摄像头管理列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebBaseCameraList = function (query) {
		return request_1.default.connection('get', '/WebBaseCamera/List', query);
	};
	/**
	 * 摄像头编辑
	 * -
	 */
	RequireApi.WebBaseCameraUpdate = function (body) {
		return request_1.default.connection('post', '/WebBaseCamera/Update', body);
	};
	/**
	 * 码表管理新增
	 * -
	 */
	RequireApi.WebBaseCodeTableAdd = function (body) {
		return request_1.default.connection('post', '/WebBaseCodeTable/Add', body);
	};
	/**
	 * 码表管理详情获取
	 * -
	 */
	RequireApi.WebBaseCodeTableGet = function (query) {
		return request_1.default.connection('get', '/WebBaseCodeTable/Get', query);
	};
	/**
	 * 码表管理列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebBaseCodeTableList = function (query) {
		return request_1.default.connection('get', '/WebBaseCodeTable/List', query);
	};
	/**
	 * 码表列表获取（父节点获取）
	 * -
	 */
	RequireApi.WebBaseCodeTableParentList = function (query) {
		return request_1.default.connection('get', '/WebBaseCodeTable/ParentList', query);
	};
	/**
	 * 码表编辑(修改)
	 * -
	 */
	RequireApi.WebBaseCodeTableUpdate = function (body) {
		return request_1.default.connection('post', '/WebBaseCodeTable/Update', body);
	};
	/**
	 * 配置管理员管理新增
	 * -
	 */
	RequireApi.WebBaseConfigManagerAdd = function (body) {
		return request_1.default.connection('post', '/WebBaseConfigManager/Add', body);
	};
	/**
	 * 配置管理员管理删除
	 * -
	 */
	RequireApi.WebBaseConfigManagerDelete = function (body) {
		return request_1.default.connection('post', '/WebBaseConfigManager/Delete', body);
	};
	/**
	 * 配置管理员管理菜单权限设置
	 * -
	 */
	RequireApi.WebBaseConfigManagerEditPermission = function (body) {
		return request_1.default.connection('post', '/WebBaseConfigManager/EditPermission', body);
	};
	/**
	 * 配置管理员管理详情获取
	 * -
	 */
	RequireApi.WebBaseConfigManagerGet = function (query) {
		return request_1.default.connection('get', '/WebBaseConfigManager/Get', query);
	};
	/**
	 * 配置管理员管理菜单权限获取
	 * -
	 */
	RequireApi.WebBaseConfigManagerGetPermission = function (query) {
		return request_1.default.connection('get', '/WebBaseConfigManager/GetPermission', query);
	};
	/**
	 * 配置管理员管理菜单权限获取
	 * -
	 */
	RequireApi.WebBaseConfigManagerGetPermissionTree = function (query) {
		return request_1.default.connection('get', '/WebBaseConfigManager/GetPermissionTree', query);
	};
	/**
	 * 配置管理员管理列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebBaseConfigManagerList = function (query) {
		return request_1.default.connection('get', '/WebBaseConfigManager/List', query);
	};
	/**
	 * 配置管理员管理编辑
	 * -
	 */
	RequireApi.WebBaseConfigManagerUpdate = function (body) {
		return request_1.default.connection('post', '/WebBaseConfigManager/Update', body);
	};
	/**
	 * 报警评论列表获取(分页&查询)
	 * -
	 */
	RequireApi.WebCallBaseComments = function (query) {
		return request_1.default.connection('get', '/WebCallBase/Comments', query);
	};
	/**
	 * 报警评论列表获取(分页&查询)
	 * -
	 */
	RequireApi.WebCallBaseContents = function (query) {
		return request_1.default.connection('get', '/WebCallBase/Contents', query);
	};
	/**
	 * 报警详情数据获取
	 * -
	 */
	RequireApi.WebCallBaseDetail = function (query) {
		return request_1.default.connection('get', '/WebCallBase/Detail', query);
	};
	/**
	 * 报警处理记录列表获取(分页&查询)
	 * -
	 */
	RequireApi.WebCallBaseHandleRecords = function (query) {
		return request_1.default.connection('get', '/WebCallBase/HandleRecords', query);
	};
	/**
	 * 报警列表数据获取（分页&查询）
	 * -
	 */
	RequireApi.WebCallBaseList = function (query) {
		return request_1.default.connection('get', '/WebCallBase/List', query);
	};
	/**
	 * 报警日志列表获取(分页&查询)
	 * -
	 */
	RequireApi.WebCallBaseLogs = function (query) {
		return request_1.default.connection('get', '/WebCallBase/Logs', query);
	};
	/**
	 * 分派联防人员
	 * -
	 */
	RequireApi.WebCallDealAssign = function (body) {
		return request_1.default.connection('post', '/WebCallDeal/Assign', body);
	};
	/**
	 * 提交报警评价信息
	 * -
	 */
	RequireApi.WebCallDealComment = function (body) {
		return request_1.default.connection('post', '/WebCallDeal/Comment', body);
	};
	/**
	 * 评价报警处理结果
	 * -
	 */
	RequireApi.WebCallDealCommentHandleRecord = function (body) {
		return request_1.default.connection('post', '/WebCallDeal/CommentHandleRecord', body);
	};
	/**
	 * 提交报警处理结果
	 * -
	 */
	RequireApi.WebCallDealHandle = function (body) {
		return request_1.default.connection('post', '/WebCallDeal/Handle', body);
	};
	/**
	 * 数据库备份列表获取
	 * -
	 */
	RequireApi.WebDataBaseBackupGetList = function (query) {
		return request_1.default.connection('get', '/WebDataBaseBackup/GetList', query);
	};
	/**
	 * 关闭摄像头直播
	 * -
	 */
	RequireApi.WebOrganizationCameraCloseAlive = function (body) {
		return request_1.default.connection('post', '/WebOrganizationCamera/CloseAlive', body);
	};
	/**
	 * 组织机构摄像详情获取
	 * -
	 */
	RequireApi.WebOrganizationCameraGet = function (query) {
		return request_1.default.connection('get', '/WebOrganizationCamera/Get', query);
	};
	/**
	 * 视频流保活
	 * -
	 */
	RequireApi.WebOrganizationCameraKeepAlive = function (body) {
		return request_1.default.connection('post', '/WebOrganizationCamera/KeepAlive', body);
	};
	/**
	 * 组织机构摄像头列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebOrganizationCameraList = function (query) {
		return request_1.default.connection('get', '/WebOrganizationCamera/List', query);
	};
	/**
	 * 开启摄像头直播
	 * -
	 */
	RequireApi.WebOrganizationCameraOpenAlive = function (body) {
		return request_1.default.connection('post', '/WebOrganizationCamera/OpenAlive', body);
	};
	/**
	 * 通过组织id和人员名称 查找组织下的联防人员
	 * -
	 */
	RequireApi.WebOrganizationDefenseGetMember = function (query) {
		return request_1.default.connection('get', '/WebOrganizationDefense/GetMember', query);
	};
	/**
	 * 获取联防值班时间段
	 * -
	 */
	RequireApi.WebOrganizationDefenseGetTimePhase = function (query) {
		return request_1.default.connection('get', '/WebOrganizationDefense/GetTimePhase', query);
	};
	/**
	 * 组织机构联防值班列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebOrganizationDefenseList = function (query) {
		return request_1.default.connection('get', '/WebOrganizationDefense/List', query);
	};
	/**
	 * 组织机构联防值班设置
	 * -
	 */
	RequireApi.WebOrganizationDefenseSet = function (body) {
		return request_1.default.connection('post', '/WebOrganizationDefense/Set', body);
	};
	/**
	 * 组织机构创建
	 * -
	 */
	RequireApi.WebOrganizationManageAdd = function (body) {
		return request_1.default.connection('post', '/WebOrganizationManage/Add', body);
	};
	/**
	 * 组织机构删除
	 * -
	 */
	RequireApi.WebOrganizationManageDelete = function (body) {
		return request_1.default.connection('post', '/WebOrganizationManage/Delete', body);
	};
	/**
	 * 组织机构详情获取
	 * -
	 */
	RequireApi.WebOrganizationManageGet = function (query) {
		return request_1.default.connection('get', '/WebOrganizationManage/Get', query);
	};
	/**
	 * 组织机构树获取
	 * -
	 */
	RequireApi.WebOrganizationManageGetTree = function (query) {
		return request_1.default.connection('get', '/WebOrganizationManage/GetTree', query);
	};
	/**
	 * 上级机构获取
	 * -
	 */
	RequireApi.WebOrganizationManageGetUpOrganization = function (query) {
		return request_1.default.connection('get', '/WebOrganizationManage/GetUpOrganization', query);
	};
	/**
	 * 组织机构列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebOrganizationManageList = function (query) {
		return request_1.default.connection('get', '/WebOrganizationManage/List', query);
	};
	/**
	 * 组织机构编辑
	 * -
	 */
	RequireApi.WebOrganizationManageUpdate = function (body) {
		return request_1.default.connection('post', '/WebOrganizationManage/Update', body);
	};
	/**
	 * 组织机构设置人员新增
	 * -
	 */
	RequireApi.WebOrganizationUserAdd = function (body) {
		return request_1.default.connection('post', '/WebOrganizationUser/Add', body);
	};
	/**
	 * 组织机构设置人员删除
	 * -
	 */
	RequireApi.WebOrganizationUserDelete = function (body) {
		return request_1.default.connection('post', '/WebOrganizationUser/Delete', body);
	};
	/**
	 * 组织机构设置人员查找
	 * -
	 */
	RequireApi.WebOrganizationUserFind = function (query) {
		return request_1.default.connection('get', '/WebOrganizationUser/Find', query);
	};
	/**
	 * 组织机构设置人员列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebOrganizationUserList = function (query) {
		return request_1.default.connection('get', '/WebOrganizationUser/List', query);
	};
	/**
	 * 组织机构设置人员角色
	 * -
	 */
	RequireApi.WebOrganizationUserSetRole = function (body) {
		return request_1.default.connection('post', '/WebOrganizationUser/SetRole', body);
	};
	/**
	 * 报修详情数据获取
	 * -
	 */
	RequireApi.WebRepairBaseDetail = function (query) {
		return request_1.default.connection('get', '/WebRepairBase/Detail', query);
	};
	/**
	 * 报修处理记录列表获取(分页&查询)
	 * -
	 */
	RequireApi.WebRepairBaseHandleRecords = function (query) {
		return request_1.default.connection('get', '/WebRepairBase/HandleRecords', query);
	};
	/**
	 * 报修列表数据获取（分页&查询）
	 * -
	 */
	RequireApi.WebRepairBaseList = function (query) {
		return request_1.default.connection('get', '/WebRepairBase/List', query);
	};
	/**
	 * 派人
	 * -
	 */
	RequireApi.WebRepairDealAssign = function (body) {
		return request_1.default.connection('post', '/WebRepairDeal/Assign', body);
	};
	/**
	 * 提交报修处理结果
	 * -
	 */
	RequireApi.WebRepairDealHandle = function (body) {
		return request_1.default.connection('post', '/WebRepairDeal/Handle', body);
	};
	/**
	 * 报警组织数量统计
	 * -
	 */
	RequireApi.WebStatisticBaseCall = function (query) {
		return request_1.default.connection('get', '/WebStatisticBase/Call', query);
	};
	/**
	 * 报警组织类型数量统计
	 * -
	 */
	RequireApi.WebStatisticBaseCallType = function (query) {
		return request_1.default.connection('get', '/WebStatisticBase/CallType', query);
	};
	/**
	 * 摄像头组织数量统计
	 * -
	 */
	RequireApi.WebStatisticBaseCamera = function (query) {
		return request_1.default.connection('get', '/WebStatisticBase/Camera', query);
	};
	/**
	 * 人员组织数量统计
	 * -
	 */
	RequireApi.WebStatisticBaseUser = function (query) {
		return request_1.default.connection('get', '/WebStatisticBase/User', query);
	};
	/**
	 * 版本新增
	 * -
	 */
	RequireApi.WebSystemAppVersionAdd = function (body) {
		return request_1.default.connection('post', '/WebSystemAppVersion/Add', body);
	};
	/**
	 * 版本删除
	 * -
	 */
	RequireApi.WebSystemAppVersionDelete = function (body) {
		return request_1.default.connection('post', '/WebSystemAppVersion/Delete', body);
	};
	/**
	 * 版本列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebSystemAppVersionList = function (query) {
		return request_1.default.connection('get', '/WebSystemAppVersion/List', query);
	};
	/**
	 * 版本编辑
	 * -
	 */
	RequireApi.WebSystemAppVersionUpdate = function (body) {
		return request_1.default.connection('post', '/WebSystemAppVersion/Update', body);
	};
	/**
	 * 人员新增
	 * -
	 */
	RequireApi.WebUserManageAdd = function (body) {
		return request_1.default.connection('post', '/WebUserManage/Add', body);
	};
	/**
	 * 摄像头权限配置
	 * -
	 */
	RequireApi.WebUserManageConfigCameraPermission = function (body) {
		return request_1.default.connection('post', '/WebUserManage/ConfigCameraPermission', body);
	};
	/**
	 * 人员删除
	 * -
	 */
	RequireApi.WebUserManageDelete = function (body) {
		return request_1.default.connection('post', '/WebUserManage/Delete', body);
	};
	/**
	 * 人员信息导出
	 * -
	 */
	RequireApi.WebUserManageExport = function (query) {
		return request_1.default.connection('get', '/WebUserManage/Export', query);
	};
	/**
	 * 人员详情获取
	 * -
	 */
	RequireApi.WebUserManageGet = function (query) {
		return request_1.default.connection('get', '/WebUserManage/Get', query);
	};
	/**
	 * 摄像头权限配置获取
	 * -
	 */
	RequireApi.WebUserManageGetConfigCameraPermission = function (query) {
		return request_1.default.connection('get', '/WebUserManage/GetConfigCameraPermission', query);
	};
	/**
	 * 人员信息导入
	 * -
	 */
	RequireApi.WebUserManageImport = function (body) {
		return request_1.default.connection('post', '/WebUserManage/Import', body);
	};
	/**
	 * 人员信息列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebUserManageList = function (query) {
		return request_1.default.connection('get', '/WebUserManage/List', query);
	};
	/**
	 * 人员编辑
	 * -
	 */
	RequireApi.WebUserManageUpdate = function (body) {
		return request_1.default.connection('post', '/WebUserManage/Update', body);
	};
	/**
	 * 注册用户审核提交
	 * -
	 */
	RequireApi.WebUserRegistAudit = function (body) {
		return request_1.default.connection('post', '/WebUserRegist/Audit', body);
	};
	/**
	 * 注册用户审核详情获取
	 * -
	 */
	RequireApi.WebUserRegistGet = function (query) {
		return request_1.default.connection('get', '/WebUserRegist/Get', query);
	};
	/**
	 * 注册用户审核列表获取（分页&查询）
	 * -
	 */
	RequireApi.WebUserRegistList = function (query) {
		return request_1.default.connection('get', '/WebUserRegist/List', query);
	};
	return RequireApi;
})();
exports.default = RequireApi;
