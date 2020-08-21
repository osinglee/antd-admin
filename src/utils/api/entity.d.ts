export interface CameraOpenAliveDTO {
	rtmp?: string;
	stream?: string;
}
export interface CameraOpenAliveInputDTO {
	cameraId?: number;
	token?: string;
}
export interface File {
	absolute?: boolean;
	absoluteFile?: File;
	absolutePath?: string;
	canonicalFile?: File;
	canonicalPath?: string;
	directory?: boolean;
	executable?: boolean;
	file?: boolean;
	freeSpace?: number;
	hidden?: boolean;
	lastModified?: number;
	name?: string;
	parent?: string;
	parentFile?: File;
	path?: string;
	readable?: boolean;
	totalSpace?: number;
	usableSpace?: number;
	writable?: boolean;
}
export interface InputStream {}
export interface JSONResult {}
export interface JSONResultCameraOpenAliveDTO {}
export interface JSONResultListWebCallBaseCommentsDTO {}
export interface JSONResultListWebCallBaseContentsDTO {}
export interface JSONResultListWebCallBaseHandleRecordsDTO {}
export interface JSONResultListWebCallBaseListDTO {}
export interface JSONResultListWebCallBaseLogsDTO {}
export interface JSONResultListWebRepairBaseHandleRecordsDTO {}
export interface JSONResultListWebRepairBaseListDTO {}
export interface JSONResultListWebStatisticBaseCallDTO {}
export interface JSONResultListWebStatisticBaseCallTypeDTO {}
export interface JSONResultListWebStatisticBaseCameraDTO {}
export interface JSONResultListWebStatisticBaseUserDTO {}
export interface JSONResultMessage {}
export interface JSONResultWebCallBaseDetailDTO {}
export interface JSONResultWebRepairBaseDetailDTO {}
export interface Message {
	entity?: any[];
	key?: string;
}
export interface Resource {
	description?: string;
	file?: File;
	filename?: string;
	inputStream?: InputStream;
	open?: boolean;
	readable?: boolean;
	uri?: URI;
	url?: URL;
}
export interface URI {
	absolute?: boolean;
	authority?: string;
	fragment?: string;
	host?: string;
	opaque?: boolean;
	path?: string;
	port?: number;
	query?: string;
	rawAuthority?: string;
	rawFragment?: string;
	rawPath?: string;
	rawQuery?: string;
	rawSchemeSpecificPart?: string;
	rawUserInfo?: string;
	scheme?: string;
	schemeSpecificPart?: string;
	userInfo?: string;
}
export interface URL<T = any> {
	authority?: string;
	content?: T;
	defaultPort?: number;
	deserializedFields?: URLStreamHandler;
	file?: string;
	host?: string;
	path?: string;
	port?: number;
	protocol?: string;
	query?: string;
	ref?: string;
	serializedHashCode?: number;
	userInfo?: string;
}
export interface URLStreamHandler {}
export interface WebArticleHelpManageChangeStatusInputDTO {
	id?: number;
	status?: number;
	token?: string;
}
export interface WebArticleHelpManageUpdateInputDTO {
	content?: string;
	id?: number;
	token?: string;
}
export interface WebBaseCallCategoryAddInputDTO {
	name?: string;
	token?: string;
}
export interface WebBaseCallCategoryDeleteInputDTO {
	id?: number;
	token?: string;
}
export interface WebBaseCallCategoryUpdateInputDTO {
	id?: number;
	name?: string;
	token?: string;
}
export interface WebBaseCameraAddInputDTO {
	accessServerInnerIp?: string;
	accessServerOuterIp?: string;
	address?: string;
	channelNum?: number;
	code?: string;
	gpsLatitude?: number;
	gpsLongitude?: number;
	mediaServerInnerIp?: string;
	mediaServerOuterIp?: string;
	name?: string;
	organizationId?: number;
	rtsp?: string;
	token?: string;
}
export interface WebBaseCameraDeleteInputDTO {
	id?: number;
	token?: string;
}
export interface WebBaseCameraUpdateInputDTO {
	accessServerInnerIp?: string;
	accessServerOuterIp?: string;
	address?: string;
	channelNum?: number;
	code?: string;
	gpsLatitude?: number;
	gpsLongitude?: number;
	id?: number;
	mediaServerInnerIp?: string;
	mediaServerOuterIp?: string;
	name?: string;
	organizationId?: number;
	rtspTemplate?: string;
	token?: string;
}
export interface WebBaseCoInputS01DTO {
	hive?: number;
	id?: number;
	token?: string;
}
export interface WebBaseCodeTableAddInputDTO {
	canDelete?: boolean;
	canEdit?: boolean;
	code?: string;
	createdAt?: string;
	deletedAt?: string;
	name?: string;
	parentId?: number;
	token?: string;
	updatedAt?: string;
	value?: string;
}
export interface WebBaseCodeTableUpdateInputDTO {
	canDelete?: boolean;
	canEdit?: boolean;
	code?: string;
	id?: string;
	name?: string;
	parentId?: number;
	token?: string;
	value?: string;
}
export interface WebBaseConfigManagerAddInputDTO {
	account?: string;
	name?: string;
	password?: string;
	remark?: string;
	token?: string;
}
export interface WebBaseConfigManagerDeleteInputDTO {
	id?: number;
	token?: string;
}
export interface WebBaseConfigManagerEditPermissionInputDTO {
	id?: number;
	list?: WebBaseCoInputS01DTO[];
	token?: string;
}
export interface WebBaseConfigManagerUpdateInputDTO {
	gender?: number;
	id?: number;
	name?: string;
	password?: string;
	phone?: string;
	remark?: string;
	status?: number;
	token?: string;
}
export interface WebCallBaseCommentsDTO {
	attachments?: WebCallBaseCommentsS01DTO[];
	content?: string;
	createdAt?: string;
	dangerCallId?: number;
	id?: number;
	userAvatar?: string;
	userCategory?: number;
	userCategoryName?: string;
	userId?: number;
	userName?: string;
}
export interface WebCallBaseCommentsS01DTO {
	id?: number;
	name?: string;
	size?: number;
	type?: string;
	url?: string;
}
export interface WebCallBaseContentsDTO {
	attachments?: WebCallBaseContentsS01DTO[];
	callAt?: string;
	content?: string;
	createdAt?: string;
	dangerCallId?: number;
	id?: number;
	position?: string;
	positionLatitude?: number;
	positionLongitude?: number;
}
export interface WebCallBaseContentsS01DTO {
	id?: number;
	name?: string;
	size?: number;
	type?: string;
	url?: string;
}
export interface WebCallBaseDetailDTO {
	assignOvertime?: number;
	attachments?: WebCallBaseDetailS01DTO[];
	callAt?: string;
	callType?: number;
	callTypeName?: string;
	callWay?: number;
	callWayName?: string;
	cameraId?: number;
	cameraName?: string;
	complishedAt?: string;
	content?: string;
	createdAt?: string;
	currentHandleAvatar?: string;
	currentHandleId?: number;
	currentHandleName?: string;
	currentOrganizationId?: number;
	handInStatus?: number;
	handInStatusName?: string;
	handleOvertime?: number;
	id?: number;
	level?: number;
	levelName?: string;
	organizationId?: number;
	organizationName?: string;
	phone?: string;
	position?: string;
	positionLatitude?: number;
	positionLongitude?: number;
	receiveOvertime?: number;
	receivedAt?: string;
	status?: number;
	statusName?: string;
	totalTime?: number;
	updatedAt?: string;
	userId?: number;
	userName?: string;
}
export interface WebCallBaseDetailS01DTO {
	id?: number;
	name?: string;
	size?: number;
	type?: string;
	url?: string;
}
export interface WebCallBaseHandleRecordsDTO {
	attachments?: WebCallBaseHandleRecordsS01DTO[];
	comments?: WebCallBaseHandleRecordsS02DTO[];
	content?: string;
	currentHandleId?: number;
	currentHandleName?: string;
	handleAt?: string;
	id?: number;
	overtimeType?: number;
	overtimeTypeName?: string;
	status?: number;
	statusName?: string;
	targetHandleId?: number;
	targetHandleName?: string;
	targetHandleType?: number;
}
export interface WebCallBaseHandleRecordsS01DTO {
	id?: number;
	name?: string;
	size?: number;
	type?: string;
	url?: string;
}
export interface WebCallBaseHandleRecordsS02DTO {
	content?: string;
	createdAt?: string;
	id?: number;
	userId?: number;
	userName?: string;
}
export interface WebCallBaseListDTO {
	assignOvertime?: number;
	callAt?: string;
	callType?: number;
	callTypeName?: string;
	callWay?: number;
	callWayName?: string;
	cameraId?: number;
	currentHandleId?: number;
	currentHandleName?: string;
	currentOrganizationId?: number;
	handInStatus?: number;
	handInStatusName?: string;
	handleOvertime?: number;
	id?: number;
	level?: number;
	levelName?: string;
	organizationId?: number;
	organizationName?: string;
	phone?: string;
	receiveOvertime?: number;
	status?: number;
	statusName?: string;
	totalTime?: number;
	userId?: number;
	userName?: string;
}
export interface WebCallBaseLogsDTO {
	category?: number;
	categoryName?: string;
	content?: string;
	createdAt?: string;
	id?: number;
}
export interface WebCallDealAssignInputDTO {
	dangerCallId?: number;
	officerId?: number;
	token?: string;
}
export interface WebCallDealCommentHandleInputDTO {
	content?: string;
	dangerCallHandleId?: number;
	token?: string;
}
export interface WebLoginInputDTO {
	account?: string;
	captcha?: string;
	password?: string;
	token?: string;
}
export interface WebOrganizationDefenseSetInputDTO {
	dutyDate?: string;
	id?: number;
	organizationId?: number;
	timePhase?: string;
	timePhaseCode?: string;
	token?: string;
	userId?: number;
}
export interface WebOrganizationManageAddInputDTO {
	code?: string;
	guangdianCode?: string;
	name?: string;
	organizationType?: number;
	parentId?: number;
	parentName?: string;
	token?: string;
}
export interface WebOrganizationManageDeleteInputDTO {
	id?: number;
	token?: string;
}
export interface WebOrganizationManageUpdateInputDTO {
	code?: string;
	guangdianCode?: string;
	id?: number;
	name?: string;
	organizationType?: number;
	parentId?: number;
	parentName?: string;
	token?: string;
}
export interface WebOrganizationUserAddInputDTO {
	organizationId?: string;
	token?: string;
	userId?: string;
}
export interface WebOrganizationUserDeleteInputDTO {
	orgId?: number;
	token?: string;
	userId?: number;
}
export interface WebOrganizationUserSetRoleInputDTO {
	category?: number;
	check?: boolean;
	orgId?: number;
	token?: string;
	userId?: number;
}
export interface WebRepairBaseDetailDTO {
	attachments?: WebRepairBaseDetailS01DTO[];
	cameraId?: number;
	cameraName?: string;
	cameraOrganizationId?: number;
	cameraOrganizationName?: string;
	createdAt?: string;
	id?: number;
	operatorId?: number;
	operatorName?: string;
	reason?: string;
	reportorId?: number;
	reportorName?: string;
	reportorPhone?: string;
	status?: number;
	statusName?: string;
	tags?: WebRepairBaseDetailS02DTO[];
	updatedAt?: string;
}
export interface WebRepairBaseDetailS01DTO {
	id?: number;
	name?: string;
	size?: number;
	type?: string;
	url?: string;
}
export interface WebRepairBaseDetailS02DTO {
	id?: number;
	problemTag?: string;
	problemTagName?: string;
}
export interface WebRepairBaseHandleRecordsDTO {
	attachments?: WebRepairBaseHandleRecordsS01DTO[];
	cameraRepairId?: number;
	content?: string;
	handleAt?: string;
	handlerId?: number;
	handlerName?: string;
	id?: number;
	status?: number;
	statusName?: string;
}
export interface WebRepairBaseHandleRecordsS01DTO {
	id?: number;
	name?: string;
	size?: number;
	type?: string;
	url?: string;
}
export interface WebRepairBaseListDTO {
	cameraId?: number;
	cameraName?: string;
	cameraOrganizationId?: number;
	cameraOrganizationName?: string;
	createdAt?: string;
	id?: number;
	operatorId?: number;
	operatorName?: string;
	reason?: string;
	reportorId?: number;
	reportorName?: string;
	reportorPhone?: string;
	status?: number;
	statusName?: string;
	updatedAt?: string;
}
export interface WebRepairDealAssignInputDTO {
	handlerId?: number;
	id?: number;
	token?: string;
}
export interface WebStatisticBaseCallDTO {
	count?: number;
	orgType?: number;
	organizationId?: number;
	organizationName?: string;
	percent?: number;
}
export interface WebStatisticBaseCallTypeDTO {
	count?: number;
	orgType?: number;
	organizationId?: number;
	organizationName?: string;
	percent?: number;
	types?: WebStatisticBaseCallTypeS01DTO[];
}
export interface WebStatisticBaseCallTypeS01DTO {
	callType?: number;
	callTypeName?: string;
	count?: number;
	percent?: number;
}
export interface WebStatisticBaseCameraDTO {
	count?: number;
	orgType?: number;
	organizationId?: number;
	organizationName?: string;
	percent?: number;
}
export interface WebStatisticBaseUserDTO {
	count?: number;
	orgType?: number;
	organizationId?: number;
	organizationName?: string;
	percent?: number;
}
export interface WebSystemAppVersionDeleteInputDTO {
	id?: number;
	token?: string;
}
export interface WebUserManageAddInputDTO {
	file?: any[];
	name?: string;
	organizaitonRoles?: WebUserManageAddInputS01DTO[];
	password?: string;
	phone?: string;
	source?: string;
	token?: string;
	tvId?: string;
}
export interface WebUserManageAddInputS01DTO {
	categories?: any[];
	organizationId?: number;
	token?: string;
}
export interface WebUserManageConfigCameraPermissionInputDTO {
	organizationIds?: any[];
	token?: string;
	userId?: number;
}
export interface WebUserManageDeleteInputDTO {
	token?: string;
	userId?: number;
}
export interface WebUserManageUpdateInputDTO {
	file?: any[];
	id?: number;
	name?: string;
	organizaitonRoles?: WebUserManageUpdateInputS01DTO[];
	password?: string;
	phone?: string;
	source?: string;
	token?: string;
	tvId?: string;
}
export interface WebUserManageUpdateInputS01DTO {
	categories?: any[];
	organizationId?: number;
	token?: string;
}
export interface WebUserRegistAuditInputDTO {
	auditorId?: number;
	auditorName?: string;
	auditorPhone?: string;
	auditorReason?: string;
	status?: number;
	token?: string;
	userOrganizationRoleId?: number;
}
