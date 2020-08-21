import {
	WebLoginInputDTO,
	WebArticleHelpManageChangeStatusInputDTO,
	WebArticleHelpManageUpdateInputDTO,
	WebBaseCallCategoryAddInputDTO,
	WebBaseCallCategoryDeleteInputDTO,
	WebBaseCallCategoryUpdateInputDTO,
	WebBaseCameraAddInputDTO,
	WebBaseCameraDeleteInputDTO,
	WebBaseCameraUpdateInputDTO,
	WebBaseCodeTableAddInputDTO,
	WebBaseCodeTableUpdateInputDTO,
	WebBaseConfigManagerAddInputDTO,
	WebBaseConfigManagerDeleteInputDTO,
	WebBaseConfigManagerEditPermissionInputDTO,
	WebBaseConfigManagerUpdateInputDTO,
	WebCallDealAssignInputDTO,
	WebCallDealCommentHandleInputDTO,
	CameraOpenAliveInputDTO,
	WebOrganizationManageAddInputDTO,
	WebOrganizationManageDeleteInputDTO,
	WebOrganizationManageUpdateInputDTO,
	WebOrganizationUserAddInputDTO,
	WebOrganizationUserDeleteInputDTO,
	WebOrganizationUserSetRoleInputDTO,
	WebRepairDealAssignInputDTO,
	WebSystemAppVersionDeleteInputDTO,
	WebUserManageAddInputDTO,
	WebUserManageConfigCameraPermissionInputDTO,
	WebUserManageDeleteInputDTO,
	WebUserManageUpdateInputDTO,
	WebUserRegistAuditInputDTO,
} from './entity';
import {
	GEtUsingGET,
	LIstUsingGET,
	GEtUsingGET1,
	LIstUsingGET1,
	GEtUsingGET2,
	LIstUsingGET2,
	GEtUsingGET3,
	LIstUsingGET3,
	PArentListUsingGET,
	GEtUsingGET4,
	GEtPermissionUsingGET,
	GEtPermissionTreeUsingGET,
	LIstUsingGET4,
	COmmentsUsingGET,
	COntentsUsingGET,
	DEtailUsingGET,
	HAndleRecordsUsingGET,
	LIstUsingGET5,
	LOgsUsingGET,
	GEtListUsingGET,
	GEtUsingGET5,
	LIstUsingGET6,
	GetDefenceMemberByOrgByQueryUsingGET,
	GetDefenceTimePhaseUsingGET,
	LIstUsingGET7,
	GEtUsingGET6,
	GEtTreeUsingGET,
	GEtUpOrganizationUsingGET,
	LIstUsingGET8,
	FIndUsingGET,
	LIstUsingGET9,
	DEtailUsingGET1,
	HAndleRecordsUsingGET1,
	LIstUsingGET10,
	CAllUsingGET,
	CAllTypeUsingGET,
	CAmeraUsingGET,
	USerUsingGET,
	LIstUsingGET11,
	EXportUsingGET1,
	GEtUsingGET7,
	GEtConfigCameraPermissionUsingGET,
	LIstUsingGET12,
	GEtUsingGET8,
	LIstUsingGET13,
} from './dto';
/**
 * XL api
 * XL API工具
 * Thu Aug 20 2020 15:08:49 GMT+0800 (China Standard Time)
 */
export default class RequireApi {
	/**
	 * 数据库备份
	 * -
	 */
	static WebDbBackUp(body: {}): Promise<any>;
	/**
	 * 登录
	 * -
	 */
	static WebLogin(body: WebLoginInputDTO): Promise<any>;
	/**
	 * 头像上传
	 * -
	 */
	static WebWebUserUploadAvatar(body: { files?: any[] }): Promise<any>;
	/**
	 * 帮助文档发布下架
	 * -
	 */
	static WebArticleHelpManageChangeStatus(body: WebArticleHelpManageChangeStatusInputDTO): Promise<any>;
	/**
	 * 帮助文档详情获取
	 * -
	 */
	static WebArticleHelpManageGet(query: GEtUsingGET): Promise<any>;
	/**
	 * 帮助文档列表获取
	 * -
	 */
	static WebArticleHelpManageList(query: LIstUsingGET): Promise<any>;
	/**
	 * 帮助文档编辑
	 * -
	 */
	static WebArticleHelpManageUpdate(body: WebArticleHelpManageUpdateInputDTO): Promise<any>;
	/**
	 * 案件分类新增
	 * -
	 */
	static WebBaseCallCategoryAdd(body: WebBaseCallCategoryAddInputDTO): Promise<any>;
	/**
	 * 案件分类删除
	 * -
	 */
	static WebBaseCallCategoryDelete(body: WebBaseCallCategoryDeleteInputDTO): Promise<any>;
	/**
	 * 案件分类详情获取
	 * -
	 */
	static WebBaseCallCategoryGet(query: GEtUsingGET1): Promise<any>;
	/**
	 * 案件分类列表获取（分页&查询）
	 * -
	 */
	static WebBaseCallCategoryList(query: LIstUsingGET1): Promise<any>;
	/**
	 * 案件分类编辑
	 * -
	 */
	static WebBaseCallCategoryUpdate(body: WebBaseCallCategoryUpdateInputDTO): Promise<any>;
	/**
	 * 新增摄像头
	 * -
	 */
	static WebBaseCameraAdd(body: WebBaseCameraAddInputDTO): Promise<any>;
	/**
	 * 摄像头删除
	 * -
	 */
	static WebBaseCameraDelete(body: WebBaseCameraDeleteInputDTO): Promise<any>;
	/**
	 * 摄像头详情获取
	 * -
	 */
	static WebBaseCameraGet(query: GEtUsingGET2): Promise<any>;
	/**
	 * 获取rtsp模板
	 * -
	 */
	static WebBaseCameraGetRtspTemplate(body: {}): Promise<any>;
	/**
	 * 摄像头信息导入
	 * -
	 */
	static WebBaseCameraImport(body: { file?: any }): Promise<any>;
	/**
	 * 摄像头管理列表获取（分页&查询）
	 * -
	 */
	static WebBaseCameraList(query: LIstUsingGET2): Promise<any>;
	/**
	 * 摄像头编辑
	 * -
	 */
	static WebBaseCameraUpdate(body: WebBaseCameraUpdateInputDTO): Promise<any>;
	/**
	 * 码表管理新增
	 * -
	 */
	static WebBaseCodeTableAdd(body: WebBaseCodeTableAddInputDTO): Promise<any>;
	/**
	 * 码表管理详情获取
	 * -
	 */
	static WebBaseCodeTableGet(query: GEtUsingGET3): Promise<any>;
	/**
	 * 码表管理列表获取（分页&查询）
	 * -
	 */
	static WebBaseCodeTableList(query: LIstUsingGET3): Promise<any>;
	/**
	 * 码表列表获取（父节点获取）
	 * -
	 */
	static WebBaseCodeTableParentList(query: PArentListUsingGET): Promise<any>;
	/**
	 * 码表编辑(修改)
	 * -
	 */
	static WebBaseCodeTableUpdate(body: WebBaseCodeTableUpdateInputDTO): Promise<any>;
	/**
	 * 配置管理员管理新增
	 * -
	 */
	static WebBaseConfigManagerAdd(body: WebBaseConfigManagerAddInputDTO): Promise<any>;
	/**
	 * 配置管理员管理删除
	 * -
	 */
	static WebBaseConfigManagerDelete(body: WebBaseConfigManagerDeleteInputDTO): Promise<any>;
	/**
	 * 配置管理员管理菜单权限设置
	 * -
	 */
	static WebBaseConfigManagerEditPermission(body: WebBaseConfigManagerEditPermissionInputDTO): Promise<any>;
	/**
	 * 配置管理员管理详情获取
	 * -
	 */
	static WebBaseConfigManagerGet(query: GEtUsingGET4): Promise<any>;
	/**
	 * 配置管理员管理菜单权限获取
	 * -
	 */
	static WebBaseConfigManagerGetPermission(query: GEtPermissionUsingGET): Promise<any>;
	/**
	 * 配置管理员管理菜单权限获取
	 * -
	 */
	static WebBaseConfigManagerGetPermissionTree(query: GEtPermissionTreeUsingGET): Promise<any>;
	/**
	 * 配置管理员管理列表获取（分页&查询）
	 * -
	 */
	static WebBaseConfigManagerList(query: LIstUsingGET4): Promise<any>;
	/**
	 * 配置管理员管理编辑
	 * -
	 */
	static WebBaseConfigManagerUpdate(body: WebBaseConfigManagerUpdateInputDTO): Promise<any>;
	/**
	 * 报警评论列表获取(分页&查询)
	 * -
	 */
	static WebCallBaseComments(query: COmmentsUsingGET): Promise<any>;
	/**
	 * 报警评论列表获取(分页&查询)
	 * -
	 */
	static WebCallBaseContents(query: COntentsUsingGET): Promise<any>;
	/**
	 * 报警详情数据获取
	 * -
	 */
	static WebCallBaseDetail(query: DEtailUsingGET): Promise<any>;
	/**
	 * 报警处理记录列表获取(分页&查询)
	 * -
	 */
	static WebCallBaseHandleRecords(query: HAndleRecordsUsingGET): Promise<any>;
	/**
	 * 报警列表数据获取（分页&查询）
	 * -
	 */
	static WebCallBaseList(query: LIstUsingGET5): Promise<any>;
	/**
	 * 报警日志列表获取(分页&查询)
	 * -
	 */
	static WebCallBaseLogs(query: LOgsUsingGET): Promise<any>;
	/**
	 * 分派联防人员
	 * -
	 */
	static WebCallDealAssign(body: WebCallDealAssignInputDTO): Promise<any>;
	/**
	 * 提交报警评价信息
	 * -
	 */
	static WebCallDealComment(body: { content?: string; dangerCallId?: number; files?: any[] }): Promise<any>;
	/**
	 * 评价报警处理结果
	 * -
	 */
	static WebCallDealCommentHandleRecord(body: WebCallDealCommentHandleInputDTO): Promise<any>;
	/**
	 * 提交报警处理结果
	 * -
	 */
	static WebCallDealHandle(body: {
		content?: string;
		dangerCallId?: number;
		files?: any[];
		status?: number;
	}): Promise<any>;
	/**
	 * 数据库备份列表获取
	 * -
	 */
	static WebDataBaseBackupGetList(query: GEtListUsingGET): Promise<any>;
	/**
	 * 关闭摄像头直播
	 * -
	 */
	static WebOrganizationCameraCloseAlive(body: CameraOpenAliveInputDTO): Promise<any>;
	/**
	 * 组织机构摄像详情获取
	 * -
	 */
	static WebOrganizationCameraGet(query: GEtUsingGET5): Promise<any>;
	/**
	 * 视频流保活
	 * -
	 */
	static WebOrganizationCameraKeepAlive(body: CameraOpenAliveInputDTO): Promise<any>;
	/**
	 * 组织机构摄像头列表获取（分页&查询）
	 * -
	 */
	static WebOrganizationCameraList(query: LIstUsingGET6): Promise<any>;
	/**
	 * 开启摄像头直播
	 * -
	 */
	static WebOrganizationCameraOpenAlive(body: CameraOpenAliveInputDTO): Promise<any>;
	/**
	 * 通过组织id和人员名称 查找组织下的联防人员
	 * -
	 */
	static WebOrganizationDefenseGetMember(query: GetDefenceMemberByOrgByQueryUsingGET): Promise<any>;
	/**
	 * 获取联防值班时间段
	 * -
	 */
	static WebOrganizationDefenseGetTimePhase(query: GetDefenceTimePhaseUsingGET): Promise<any>;
	/**
	 * 组织机构联防值班列表获取（分页&查询）
	 * -
	 */
	static WebOrganizationDefenseList(query: LIstUsingGET7): Promise<any>;
	/**
	 * 组织机构联防值班设置
	 * -
	 */
	static WebOrganizationDefenseSet(body: any): Promise<any>;
	/**
	 * 组织机构创建
	 * -
	 */
	static WebOrganizationManageAdd(body: WebOrganizationManageAddInputDTO): Promise<any>;
	/**
	 * 组织机构删除
	 * -
	 */
	static WebOrganizationManageDelete(body: WebOrganizationManageDeleteInputDTO): Promise<any>;
	/**
	 * 组织机构详情获取
	 * -
	 */
	static WebOrganizationManageGet(query: GEtUsingGET6): Promise<any>;
	/**
	 * 组织机构树获取
	 * -
	 */
	static WebOrganizationManageGetTree(query: GEtTreeUsingGET): Promise<any>;
	/**
	 * 上级机构获取
	 * -
	 */
	static WebOrganizationManageGetUpOrganization(query: GEtUpOrganizationUsingGET): Promise<any>;
	/**
	 * 组织机构列表获取（分页&查询）
	 * -
	 */
	static WebOrganizationManageList(query: LIstUsingGET8): Promise<any>;
	/**
	 * 组织机构编辑
	 * -
	 */
	static WebOrganizationManageUpdate(body: WebOrganizationManageUpdateInputDTO): Promise<any>;
	/**
	 * 组织机构设置人员新增
	 * -
	 */
	static WebOrganizationUserAdd(body: WebOrganizationUserAddInputDTO): Promise<any>;
	/**
	 * 组织机构设置人员删除
	 * -
	 */
	static WebOrganizationUserDelete(body: WebOrganizationUserDeleteInputDTO): Promise<any>;
	/**
	 * 组织机构设置人员查找
	 * -
	 */
	static WebOrganizationUserFind(query: FIndUsingGET): Promise<any>;
	/**
	 * 组织机构设置人员列表获取（分页&查询）
	 * -
	 */
	static WebOrganizationUserList(query: LIstUsingGET9): Promise<any>;
	/**
	 * 组织机构设置人员角色
	 * -
	 */
	static WebOrganizationUserSetRole(body: WebOrganizationUserSetRoleInputDTO): Promise<any>;
	/**
	 * 报修详情数据获取
	 * -
	 */
	static WebRepairBaseDetail(query: DEtailUsingGET1): Promise<any>;
	/**
	 * 报修处理记录列表获取(分页&查询)
	 * -
	 */
	static WebRepairBaseHandleRecords(query: HAndleRecordsUsingGET1): Promise<any>;
	/**
	 * 报修列表数据获取（分页&查询）
	 * -
	 */
	static WebRepairBaseList(query: LIstUsingGET10): Promise<any>;
	/**
	 * 派人
	 * -
	 */
	static WebRepairDealAssign(body: WebRepairDealAssignInputDTO): Promise<any>;
	/**
	 * 提交报修处理结果
	 * -
	 */
	static WebRepairDealHandle(body: {
		cameraRepairId?: number;
		content?: string;
		files?: any[];
		status?: number;
	}): Promise<any>;
	/**
	 * 报警组织数量统计
	 * -
	 */
	static WebStatisticBaseCall(query: CAllUsingGET): Promise<any>;
	/**
	 * 报警组织类型数量统计
	 * -
	 */
	static WebStatisticBaseCallType(query: CAllTypeUsingGET): Promise<any>;
	/**
	 * 摄像头组织数量统计
	 * -
	 */
	static WebStatisticBaseCamera(query: CAmeraUsingGET): Promise<any>;
	/**
	 * 人员组织数量统计
	 * -
	 */
	static WebStatisticBaseUser(query: USerUsingGET): Promise<any>;
	/**
	 * 版本新增
	 * -
	 */
	static WebSystemAppVersionAdd(body: {
		appType?: number;
		file?: any;
		keyCode?: string;
		message?: string;
	}): Promise<any>;
	/**
	 * 版本删除
	 * -
	 */
	static WebSystemAppVersionDelete(body: WebSystemAppVersionDeleteInputDTO): Promise<any>;
	/**
	 * 版本列表获取（分页&查询）
	 * -
	 */
	static WebSystemAppVersionList(query: LIstUsingGET11): Promise<any>;
	/**
	 * 版本编辑
	 * -
	 */
	static WebSystemAppVersionUpdate(body: {
		appType?: number;
		file?: any;
		id?: number;
		keyCode?: string;
		message?: string;
	}): Promise<any>;
	/**
	 * 人员新增
	 * -
	 */
	static WebUserManageAdd(body: WebUserManageAddInputDTO): Promise<any>;
	/**
	 * 摄像头权限配置
	 * -
	 */
	static WebUserManageConfigCameraPermission(body: WebUserManageConfigCameraPermissionInputDTO): Promise<any>;
	/**
	 * 人员删除
	 * -
	 */
	static WebUserManageDelete(body: WebUserManageDeleteInputDTO): Promise<any>;
	/**
	 * 人员信息导出
	 * -
	 */
	static WebUserManageExport(query: EXportUsingGET1): Promise<any>;
	/**
	 * 人员详情获取
	 * -
	 */
	static WebUserManageGet(query: GEtUsingGET7): Promise<any>;
	/**
	 * 摄像头权限配置获取
	 * -
	 */
	static WebUserManageGetConfigCameraPermission(query: GEtConfigCameraPermissionUsingGET): Promise<any>;
	/**
	 * 人员信息导入
	 * -
	 */
	static WebUserManageImport(body: { file?: any }): Promise<any>;
	/**
	 * 人员信息列表获取（分页&查询）
	 * -
	 */
	static WebUserManageList(query: LIstUsingGET12): Promise<any>;
	/**
	 * 人员编辑
	 * -
	 */
	static WebUserManageUpdate(body: WebUserManageUpdateInputDTO): Promise<any>;
	/**
	 * 注册用户审核提交
	 * -
	 */
	static WebUserRegistAudit(body: WebUserRegistAuditInputDTO): Promise<any>;
	/**
	 * 注册用户审核详情获取
	 * -
	 */
	static WebUserRegistGet(query: GEtUsingGET8): Promise<any>;
	/**
	 * 注册用户审核列表获取（分页&查询）
	 * -
	 */
	static WebUserRegistList(query: LIstUsingGET13): Promise<any>;
}
