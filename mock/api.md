# DZCOM API 文档


**简介**:DZCOM API 文档


**HOST**:http://localhost:8511


**联系人**:技术团队


**Version**:0.1.0


**接口路径**:/v3/api-docs/default


[TOC]






# 本人账户


## 修改本人密码


**接口地址**:`/api/users/me/password`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>使用当前密码验证后设置新密码，成功后撤销相关会话以保证安全。新密码遵循注册时的强度规则。</p>



**请求示例**:


```javascript
{
  "currentPassword": "OldP@ssw0rd",
  "newPassword": "NewP@ssw0rd123"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|changePasswordRequest|修改密码请求：提供当前密码和新密码|body|true|ChangePasswordRequest|ChangePasswordRequest|
|&emsp;&emsp;currentPassword|当前密码||true|string||
|&emsp;&emsp;newPassword|新密码，8-72 字符且包含字母和数字||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|密码修改成功（Result<Void>）|ResultVoid|
|400|参数校验失败或新密码不合法|ResultVoid|
|401|当前密码错误或未登录|ResultVoid|
|500|系统错误|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


## 删除本人偏好


**接口地址**:`/api/users/me/preferences/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>逻辑删除当前用户指定的偏好键。</p>



**请求示例**:


```javascript
{
  "key": "ui.theme"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|preferenceKeyRequest|按偏好键删除本人偏好的请求|body|true|PreferenceKeyRequest|PreferenceKeyRequest|
|&emsp;&emsp;key|偏好键||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|删除成功（Result<Void>）|ResultVoid|
|400|偏好键不合法|ResultVoid|
|401|未登录或会话失效|ResultVoid|
|500|系统错误|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


## 查询本人偏好


**接口地址**:`/api/users/me/preferences/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前登录用户全部有效偏好，返回数组。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回偏好列表|ResultListPreferenceResponse|
|401|未登录或会话失效|ResultListPreferenceResponse|
|500|系统错误|ResultListPreferenceResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"key": "ui.theme",
			"valueType": "string",
			"value": {},
			"updatedAt": ""
		}
	]
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"key": "ui.theme",
			"valueType": "string",
			"value": {},
			"updatedAt": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"key": "ui.theme",
			"valueType": "string",
			"value": {},
			"updatedAt": ""
		}
	]
}
```


## 设置本人偏好


**接口地址**:`/api/users/me/preferences/set`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>新增或覆盖当前用户的指定偏好。value 直接接收 JSON 基础类型、数组或对象，不需要把 JSON 二次编码为字符串。</p>



**请求示例**:


```javascript
{
  "key": "theme",
  "value": {}
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|preferenceRequest|设置用户偏好请求，value 可为 JSON 基础类型、数组或对象|body|true|PreferenceRequest|PreferenceRequest|
|&emsp;&emsp;key|偏好键，必须属于服务端允许的白名单||true|string||
|&emsp;&emsp;value|偏好值，可直接提交字符串、数字、布尔值、数组或对象||true|JsonNode|JsonNode|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回保存后的偏好响应|ResultPreferenceResponse|
|400|偏好键或偏好值不合法|ResultPreferenceResponse|
|401|未登录或会话失效|ResultPreferenceResponse|
|500|系统错误|ResultPreferenceResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PreferenceResponse|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"key": "ui.theme",
		"valueType": "string",
		"value": {},
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PreferenceResponse|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"key": "ui.theme",
		"valueType": "string",
		"value": {},
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PreferenceResponse|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"key": "ui.theme",
		"valueType": "string",
		"value": {},
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PreferenceResponse|PreferenceResponse|
|&emsp;&emsp;key|偏好键|string||
|&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;value|任意 JSON 偏好值|JsonNode|JsonNode|
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"key": "ui.theme",
		"valueType": "string",
		"value": {},
		"updatedAt": ""
	}
}
```


## 更新本人邮箱和手机号


**接口地址**:`/api/users/me/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新当前登录用户的 email 与 phone，并做唯一性校验。</p>



**请求示例**:


```javascript
{
  "email": "alice@example.com",
  "phone": "+8613800000000"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateUserRequest|更新用户邮箱和手机号请求|body|true|UpdateUserRequest|UpdateUserRequest|
|&emsp;&emsp;email|邮箱||false|string(email)||
|&emsp;&emsp;phone|手机号，含国家码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回更新后的当前用户响应|ResultUserResponse|
|400|参数校验失败或登录标识冲突|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


# 产品与行情


## 查询产品详情


**接口地址**:`/api/products/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据产品业务标识查询产品的详细信息（生命周期、交易参数、说明、扩展属性等）。</p>



**请求示例**:


```javascript
{
  "bizId": "prd_01Hxxxx"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productBizIdRequest|按产品业务标识执行操作的请求|body|true|ProductBizIdRequest|ProductBizIdRequest|
|&emsp;&emsp;bizId|产品业务标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回产品响应|ResultProductResponse|
|404|产品不存在|ResultProductResponse|
|500|系统错误|ResultProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询产品目录


**接口地址**:`/api/products/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据筛选条件分页查询产品目录。分页默认 page=1,size=20, sort=createdAt,direction=desc。</p>



**请求示例**:


```javascript
{
  "keyword": "Apple",
  "productType": "",
  "tradeStatus": "",
  "riskLevel": 3,
  "currency": "USD",
  "page": 1,
  "size": 20,
  "sort": "createdAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productListRequest|产品目录分页查询请求，支持产品条件筛选、分页与排序|body|true|ProductListRequest|ProductListRequest|
|&emsp;&emsp;keyword|产品编码或名称关键字||false|string||
|&emsp;&emsp;productType|产品类型,可用值:STOCK,FUND,BOND,ETF,BANK_WMP||false|string||
|&emsp;&emsp;tradeStatus|交易状态,可用值:DISABLED,TRADABLE,SUSPENDED||false|string||
|&emsp;&emsp;riskLevel|风险等级，允许值 1-5||false|integer(int32)||
|&emsp;&emsp;currency|币种编码||false|string||
|&emsp;&emsp;page|页码；支持 0 兼容前端零基页码，后端会转换为 1||false|integer(int32)||
|&emsp;&emsp;size|每页条数，允许值 1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段，必须属于服务端白名单||false|string||
|&emsp;&emsp;direction|排序方向，asc 或 desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回接口层产品分页响应|ResultPageResponseProductResponse|
|400|参数或分页规则不合法|ResultPageResponseProductResponse|
|500|系统错误|ResultPageResponseProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseProductResponse|PageResponseProductResponse|
|&emsp;&emsp;items|当前页数据列表|array|ProductResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "prd_01Hxxxx",
				"productNo": "P202600001",
				"productCode": "AAPL",
				"productName": "Apple Inc.",
				"productType": "STOCK",
				"marketCode": "NASDAQ",
				"currency": "USD",
				"tradeStatus": "TRADABLE",
				"riskLevel": 3,
				"minInvestAmount": 0,
				"amountStep": 0,
				"quantityStep": 0,
				"feeRate": 0,
				"listingDate": "",
				"delistingDate": "",
				"description": "",
				"attributes": [
					{
						"key": "issuer",
						"valueType": "string",
						"jsonValue": "",
						"effectiveDate": "",
						"sourceCode": "MANUAL_IMPORT"
					}
				],
				"investmentProfile": {
					"assetClass": "",
					"riskSummary": "",
					"volatilityLevel": "",
					"liquidityLevel": "",
					"maxDrawdown": 0,
					"suitableRiskLevel": 0,
					"mockTradable": true,
					"minHoldingDays": 0,
					"tradingNotes": "",
					"dataQualityScore": 0
				},
				"themeRelations": [
					{
						"relationType": "",
						"relationCode": "",
						"relationName": "",
						"relationWeight": 0,
						"sourceCode": "",
						"evidence": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseProductResponse|PageResponseProductResponse|
|&emsp;&emsp;items|当前页数据列表|array|ProductResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "prd_01Hxxxx",
				"productNo": "P202600001",
				"productCode": "AAPL",
				"productName": "Apple Inc.",
				"productType": "STOCK",
				"marketCode": "NASDAQ",
				"currency": "USD",
				"tradeStatus": "TRADABLE",
				"riskLevel": 3,
				"minInvestAmount": 0,
				"amountStep": 0,
				"quantityStep": 0,
				"feeRate": 0,
				"listingDate": "",
				"delistingDate": "",
				"description": "",
				"attributes": [
					{
						"key": "issuer",
						"valueType": "string",
						"jsonValue": "",
						"effectiveDate": "",
						"sourceCode": "MANUAL_IMPORT"
					}
				],
				"investmentProfile": {
					"assetClass": "",
					"riskSummary": "",
					"volatilityLevel": "",
					"liquidityLevel": "",
					"maxDrawdown": 0,
					"suitableRiskLevel": 0,
					"mockTradable": true,
					"minHoldingDays": 0,
					"tradingNotes": "",
					"dataQualityScore": 0
				},
				"themeRelations": [
					{
						"relationType": "",
						"relationCode": "",
						"relationName": "",
						"relationWeight": 0,
						"sourceCode": "",
						"evidence": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseProductResponse|PageResponseProductResponse|
|&emsp;&emsp;items|当前页数据列表|array|ProductResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "prd_01Hxxxx",
				"productNo": "P202600001",
				"productCode": "AAPL",
				"productName": "Apple Inc.",
				"productType": "STOCK",
				"marketCode": "NASDAQ",
				"currency": "USD",
				"tradeStatus": "TRADABLE",
				"riskLevel": 3,
				"minInvestAmount": 0,
				"amountStep": 0,
				"quantityStep": 0,
				"feeRate": 0,
				"listingDate": "",
				"delistingDate": "",
				"description": "",
				"attributes": [
					{
						"key": "issuer",
						"valueType": "string",
						"jsonValue": "",
						"effectiveDate": "",
						"sourceCode": "MANUAL_IMPORT"
					}
				],
				"investmentProfile": {
					"assetClass": "",
					"riskSummary": "",
					"volatilityLevel": "",
					"liquidityLevel": "",
					"maxDrawdown": 0,
					"suitableRiskLevel": 0,
					"mockTradable": true,
					"minHoldingDays": 0,
					"tradingNotes": "",
					"dataQualityScore": 0
				},
				"themeRelations": [
					{
						"relationType": "",
						"relationCode": "",
						"relationName": "",
						"relationWeight": 0,
						"sourceCode": "",
						"evidence": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 查询产品历史行情


**接口地址**:`/api/products/quotes/history`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定时间区间内按时间升序排列的历史行情，limit 最大 1000（默认 500）。from/to 必须同时提供且 from &lt;= to。</p>



**请求示例**:


```javascript
{
  "productBizId": "prd_01Hxxxx",
  "interval": "1D",
  "sourceCode": "EXCHANGE_A",
  "from": "2026-06-01T00:00:00",
  "to": "2026-06-15T23:59:59",
  "limit": 500
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|marketQuoteHistoryRequest|查询产品指定时间区间历史行情的请求|body|true|MarketQuoteHistoryRequest|MarketQuoteHistoryRequest|
|&emsp;&emsp;productBizId|产品业务标识||true|string||
|&emsp;&emsp;interval|行情周期；为空时默认 1D||false|string||
|&emsp;&emsp;sourceCode|行情数据源编码；为空时由服务端选择||false|string||
|&emsp;&emsp;from|查询开始时间，必须早于或等于结束时间||true|string(date-time)||
|&emsp;&emsp;to|查询结束时间||true|string(date-time)||
|&emsp;&emsp;limit|最多返回条数，默认 500，最大 1000||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回历史行情数组|ResultListMarketQuoteResponse|
|400|时间区间或查询上限不合法|ResultListMarketQuoteResponse|
|404|产品不存在|ResultListMarketQuoteResponse|
|500|系统错误|ResultListMarketQuoteResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "mq_01Hxxxx",
			"productBizId": "prd_01Hxxxx",
			"sourceCode": "EXCHANGE_A",
			"interval": "1D",
			"quoteTime": "",
			"openPrice": 0,
			"highPrice": 0,
			"lowPrice": 0,
			"closePrice": 0,
			"previousClosePrice": 0,
			"volume": 0,
			"turnoverAmount": 0,
			"status": "VALID",
			"receivedAt": ""
		}
	]
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "mq_01Hxxxx",
			"productBizId": "prd_01Hxxxx",
			"sourceCode": "EXCHANGE_A",
			"interval": "1D",
			"quoteTime": "",
			"openPrice": 0,
			"highPrice": 0,
			"lowPrice": 0,
			"closePrice": 0,
			"previousClosePrice": 0,
			"volume": 0,
			"turnoverAmount": 0,
			"status": "VALID",
			"receivedAt": ""
		}
	]
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "mq_01Hxxxx",
			"productBizId": "prd_01Hxxxx",
			"sourceCode": "EXCHANGE_A",
			"interval": "1D",
			"quoteTime": "",
			"openPrice": 0,
			"highPrice": 0,
			"lowPrice": 0,
			"closePrice": 0,
			"previousClosePrice": 0,
			"volume": 0,
			"turnoverAmount": 0,
			"status": "VALID",
			"receivedAt": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "mq_01Hxxxx",
			"productBizId": "prd_01Hxxxx",
			"sourceCode": "EXCHANGE_A",
			"interval": "1D",
			"quoteTime": "",
			"openPrice": 0,
			"highPrice": 0,
			"lowPrice": 0,
			"closePrice": 0,
			"previousClosePrice": 0,
			"volume": 0,
			"turnoverAmount": 0,
			"status": "VALID",
			"receivedAt": ""
		}
	]
}
```


## 查询产品最新有效行情


**接口地址**:`/api/products/quotes/latest`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定产品和周期的最新有效行情。若 interval 为空默认使用 1D。可指定数据源 sourceCode。</p>



**请求示例**:


```javascript
{
  "productBizId": "prd_01Hxxxx",
  "interval": "1D",
  "sourceCode": "EXCHANGE_A"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|latestMarketQuoteRequest|查询产品最新有效行情的请求|body|true|LatestMarketQuoteRequest|LatestMarketQuoteRequest|
|&emsp;&emsp;productBizId|产品业务标识||true|string||
|&emsp;&emsp;interval|行情周期；为空时默认 1D||false|string||
|&emsp;&emsp;sourceCode|行情数据源编码；为空时由服务端选择||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回最新行情响应|ResultMarketQuoteResponse|
|400|参数校验失败|ResultMarketQuoteResponse|
|404|产品或行情不存在|ResultMarketQuoteResponse|
|500|系统错误|ResultMarketQuoteResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


# 风控审计


## 分页查询风险检查


**接口地址**:`/api/risk/checks/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按业务类型、业务对象、用户、结论、风险等级和原因编码查询风控拦截记录。</p>



**请求示例**:


```javascript
{
  "businessType": "",
  "businessBizId": "",
  "userBizId": "",
  "checkResult": "",
  "riskLevel": "",
  "reasonCode": "",
  "page": 1,
  "size": 20,
  "sort": "checkedAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|riskCheckListRequest|风险检查分页查询请求|body|true|RiskCheckListRequest|RiskCheckListRequest|
|&emsp;&emsp;businessType|业务类型：ORDER/REPORT/PORTFOLIO||false|string||
|&emsp;&emsp;businessBizId|业务对象业务标识||false|string||
|&emsp;&emsp;userBizId|关联用户业务标识||false|string||
|&emsp;&emsp;checkResult|检查结论：PASS/REVIEW/REJECT/ERROR||false|string||
|&emsp;&emsp;riskLevel|风险等级：LOW/MEDIUM/HIGH/CRITICAL||false|string||
|&emsp;&emsp;reasonCode|原因编码||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：checkedAt/businessType/checkResult/riskLevel/reasonCode||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回风险检查分页响应|ResultPageResponseRiskCheckResponse|
|400|分页或排序参数不合法|ResultPageResponseRiskCheckResponse|
|500|系统错误|ResultPageResponseRiskCheckResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseRiskCheckResponse|PageResponseRiskCheckResponse|
|&emsp;&emsp;items|当前页数据列表|array|RiskCheckResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|风险检查业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;traceId|请求或业务链路追踪标识|string||
|&emsp;&emsp;&emsp;&emsp;businessType|被检查业务类型|string||
|&emsp;&emsp;&emsp;&emsp;businessBizId|被检查业务对象业务标识|string||
|&emsp;&emsp;&emsp;&emsp;userBizId|关联用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;ruleCode|规则编码快照|string||
|&emsp;&emsp;&emsp;&emsp;ruleVersion|规则版本快照|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;checkResult|检查结论|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险等级|string||
|&emsp;&emsp;&emsp;&emsp;score|风险评分|number||
|&emsp;&emsp;&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;&emsp;&emsp;detail|检查详情 JSON|string||
|&emsp;&emsp;&emsp;&emsp;checkedAt|检查时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"traceId": "",
				"businessType": "",
				"businessBizId": "",
				"userBizId": "",
				"ruleCode": "",
				"ruleVersion": 0,
				"checkResult": "",
				"riskLevel": "",
				"score": 0,
				"reasonCode": "",
				"detail": "",
				"checkedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseRiskCheckResponse|PageResponseRiskCheckResponse|
|&emsp;&emsp;items|当前页数据列表|array|RiskCheckResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|风险检查业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;traceId|请求或业务链路追踪标识|string||
|&emsp;&emsp;&emsp;&emsp;businessType|被检查业务类型|string||
|&emsp;&emsp;&emsp;&emsp;businessBizId|被检查业务对象业务标识|string||
|&emsp;&emsp;&emsp;&emsp;userBizId|关联用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;ruleCode|规则编码快照|string||
|&emsp;&emsp;&emsp;&emsp;ruleVersion|规则版本快照|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;checkResult|检查结论|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险等级|string||
|&emsp;&emsp;&emsp;&emsp;score|风险评分|number||
|&emsp;&emsp;&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;&emsp;&emsp;detail|检查详情 JSON|string||
|&emsp;&emsp;&emsp;&emsp;checkedAt|检查时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"traceId": "",
				"businessType": "",
				"businessBizId": "",
				"userBizId": "",
				"ruleCode": "",
				"ruleVersion": 0,
				"checkResult": "",
				"riskLevel": "",
				"score": 0,
				"reasonCode": "",
				"detail": "",
				"checkedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseRiskCheckResponse|PageResponseRiskCheckResponse|
|&emsp;&emsp;items|当前页数据列表|array|RiskCheckResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|风险检查业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;traceId|请求或业务链路追踪标识|string||
|&emsp;&emsp;&emsp;&emsp;businessType|被检查业务类型|string||
|&emsp;&emsp;&emsp;&emsp;businessBizId|被检查业务对象业务标识|string||
|&emsp;&emsp;&emsp;&emsp;userBizId|关联用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;ruleCode|规则编码快照|string||
|&emsp;&emsp;&emsp;&emsp;ruleVersion|规则版本快照|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;checkResult|检查结论|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险等级|string||
|&emsp;&emsp;&emsp;&emsp;score|风险评分|number||
|&emsp;&emsp;&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;&emsp;&emsp;detail|检查详情 JSON|string||
|&emsp;&emsp;&emsp;&emsp;checkedAt|检查时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"traceId": "",
				"businessType": "",
				"businessBizId": "",
				"userBizId": "",
				"ruleCode": "",
				"ruleVersion": 0,
				"checkResult": "",
				"riskLevel": "",
				"score": 0,
				"reasonCode": "",
				"detail": "",
				"checkedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


# 管理端产品与行情


## 新增或覆盖产品扩展属性


**接口地址**:`/api/admin/products/attributes/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>向产品写入扩展属性，jsonValue 必须是合法的 JSON 文本（字符串需包含引号）。</p>



**请求示例**:


```javascript
{
  "bizId": "prd_01Hxxxx",
  "key": "issuer",
  "valueType": "string",
  "jsonValue": "\"Apple Inc.\"",
  "effectiveDate": "2026-06-15",
  "sourceCode": "MANUAL"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productAttributeRequest|产品扩展属性写入请求，jsonValue 必须为合法 JSON 文本|body|true|ProductAttributeRequest|ProductAttributeRequest|
|&emsp;&emsp;bizId|产品业务标识||true|string||
|&emsp;&emsp;key|属性键||true|string||
|&emsp;&emsp;valueType|值类型||true|string||
|&emsp;&emsp;jsonValue|JSON 格式属性值；字符串值需要包含 JSON 引号||true|string||
|&emsp;&emsp;effectiveDate|属性生效日期||false|string(date)||
|&emsp;&emsp;sourceCode|属性来源编码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回包含新属性的产品响应|ResultProductResponse|
|400|参数校验失败或 jsonValue 非法|ResultProductResponse|
|401|未登录或会话失效|ResultProductResponse|
|403|无产品属性维护权限|ResultProductResponse|
|404|产品不存在|ResultProductResponse|
|500|系统错误|ResultProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 创建产品


**接口地址**:`/api/admin/products/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建产品并初始化交易参数。请求中 productCode/marketCode/currency 等字段有严格格式与数值校验。</p>



**请求示例**:


```javascript
{
  "productCode": "AAPL",
  "productName": "Apple Inc.",
  "productType": "",
  "marketCode": "NASDAQ",
  "currency": "USD",
  "riskLevel": 0,
  "minInvestAmount": 0,
  "amountStep": 0,
  "quantityStep": 0,
  "feeRate": 0,
  "listingDate": "2026-01-01",
  "delistingDate": "2028-01-01",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createProductRequest|管理端创建产品请求，包含基础交易参数|body|true|CreateProductRequest|CreateProductRequest|
|&emsp;&emsp;productCode|产品编码，唯一||true|string||
|&emsp;&emsp;productName|产品名称||true|string||
|&emsp;&emsp;productType|产品类型,可用值:STOCK,FUND,BOND,ETF,BANK_WMP||true|string||
|&emsp;&emsp;marketCode|市场编码||true|string||
|&emsp;&emsp;currency|币种||true|string||
|&emsp;&emsp;riskLevel|风险等级（1-5）||false|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额||true|number||
|&emsp;&emsp;amountStep|金额步长||true|number||
|&emsp;&emsp;quantityStep|数量步长||true|number||
|&emsp;&emsp;feeRate|费率（0-1）||true|number||
|&emsp;&emsp;listingDate|上市日期（北京时间）||false|string(date)||
|&emsp;&emsp;delistingDate|退市日期（北京时间）||false|string(date)||
|&emsp;&emsp;description|产品说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|创建成功，返回产品响应|ResultProductResponse|
|400|参数校验失败或数值不合法|ResultProductResponse|
|401|未登录或会话失效|ResultProductResponse|
|403|无产品创建权限|ResultProductResponse|
|409|产品编码冲突|ResultProductResponse|
|500|系统错误|ResultProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 逻辑删除产品


**接口地址**:`/api/admin/products/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>对指定产品执行逻辑删除。删除后常规产品查询不再返回该产品。</p>



**请求示例**:


```javascript
{
  "bizId": "prd_01Hxxxx"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productBizIdRequest|按产品业务标识执行操作的请求|body|true|ProductBizIdRequest|ProductBizIdRequest|
|&emsp;&emsp;bizId|产品业务标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|删除成功（Result<Void>）|ResultVoid|
|400|参数不合法或不允许删除|ResultVoid|
|401|未登录或会话失效|ResultVoid|
|403|无产品删除权限|ResultVoid|
|404|产品不存在|ResultVoid|
|500|系统错误|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


## 保存产品投资画像


**接口地址**:`/api/admin/products/investment-profile/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存产品风险、波动、流动性、Mock交易约束和主题关系。保存后 /api/products/detail 会返回 investmentProfile 和 themeRelations。</p>



**请求示例**:


```javascript
{
  "productBizId": "",
  "assetClass": "",
  "riskSummary": "",
  "volatilityLevel": "",
  "liquidityLevel": "",
  "maxDrawdown": 0,
  "suitableRiskLevel": 0,
  "mockTradable": true,
  "minHoldingDays": 0,
  "tradingNotes": "",
  "dataQualityScore": 0,
  "relations": [
    {
      "relationType": "",
      "relationCode": "",
      "relationName": "",
      "relationWeight": 0,
      "sourceCode": "",
      "evidence": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveProductInvestmentProfileRequest|保存产品投资画像和主题关系请求|body|true|SaveProductInvestmentProfileRequest|SaveProductInvestmentProfileRequest|
|&emsp;&emsp;productBizId|产品业务唯一标识||true|string||
|&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等||true|string||
|&emsp;&emsp;riskSummary|风险摘要，前端产品详情页展示||false|string||
|&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH||false|string||
|&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH||false|string||
|&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式||false|number||
|&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5||false|integer(int32)||
|&emsp;&emsp;mockTradable|是否允许进入 Mock 交易||false|boolean||
|&emsp;&emsp;minHoldingDays|建议最短持有天数||false|integer(int32)||
|&emsp;&emsp;tradingNotes|交易约束和注意事项||false|string||
|&emsp;&emsp;dataQualityScore|画像数据质量分，0-1||false|number||
|&emsp;&emsp;relations|产品主题、行业、指数和资产类别关系集合||false|array|RelationRequest|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS||true|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码||true|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称||true|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1||false|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码||false|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回包含投资画像的产品响应|ResultProductResponse|
|400|参数校验失败或画像规则不合法|ResultProductResponse|
|401|未登录或会话失效|ResultProductResponse|
|403|无产品画像维护权限|ResultProductResponse|
|404|产品不存在|ResultProductResponse|
|500|系统错误|ResultProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 写入或修正产品行情点


**接口地址**:`/api/admin/products/quotes/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>写入单条 OHLCV 行情点。用于修正或补写历史/实时行情数据。</p>



**请求示例**:


```javascript
{
  "productBizId": "prd_01Hxxxx",
  "sourceCode": "EXCHANGE_A",
  "interval": "1D",
  "quoteTime": "2026-06-15T00:00:00",
  "openPrice": 198.5,
  "highPrice": 201,
  "lowPrice": 197.8,
  "closePrice": 200.1,
  "previousClosePrice": 198.3,
  "volume": 1234567,
  "turnoverAmount": 246913400,
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveMarketQuoteRequest|管理端写入或修正标准 OHLCV 行情点的请求|body|true|SaveMarketQuoteRequest|SaveMarketQuoteRequest|
|&emsp;&emsp;productBizId|产品业务标识||true|string||
|&emsp;&emsp;sourceCode|行情数据源编码||true|string||
|&emsp;&emsp;interval|行情周期||true|string||
|&emsp;&emsp;quoteTime|行情时间||true|string(date-time)||
|&emsp;&emsp;openPrice|开盘价||false|number||
|&emsp;&emsp;highPrice|最高价||false|number||
|&emsp;&emsp;lowPrice|最低价||false|number||
|&emsp;&emsp;closePrice|收盘价||true|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价||false|number||
|&emsp;&emsp;volume|成交量||false|number||
|&emsp;&emsp;turnoverAmount|成交额||false|number||
|&emsp;&emsp;status|行情数据质量状态；为空时使用服务端默认值,可用值:INVALID,VALID,CORRECTED||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回保存后的行情响应|ResultMarketQuoteResponse|
|400|参数校验失败或行情数据不合法|ResultMarketQuoteResponse|
|401|未登录或会话失效|ResultMarketQuoteResponse|
|403|无行情维护权限|ResultMarketQuoteResponse|
|404|产品不存在|ResultMarketQuoteResponse|
|500|系统错误|ResultMarketQuoteResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MarketQuoteResponse|MarketQuoteResponse|
|&emsp;&emsp;bizId|行情业务标识|string||
|&emsp;&emsp;productBizId|产品业务标识|string||
|&emsp;&emsp;sourceCode|数据源编码|string||
|&emsp;&emsp;interval|行情周期|string||
|&emsp;&emsp;quoteTime|行情时间|string(date-time)||
|&emsp;&emsp;openPrice|开盘价|number||
|&emsp;&emsp;highPrice|最高价|number||
|&emsp;&emsp;lowPrice|最低价|number||
|&emsp;&emsp;closePrice|收盘价|number||
|&emsp;&emsp;previousClosePrice|前一周期收盘价|number||
|&emsp;&emsp;volume|成交量|number||
|&emsp;&emsp;turnoverAmount|成交额|number||
|&emsp;&emsp;status|数据质量状态|string||
|&emsp;&emsp;receivedAt|接收时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "mq_01Hxxxx",
		"productBizId": "prd_01Hxxxx",
		"sourceCode": "EXCHANGE_A",
		"interval": "1D",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "VALID",
		"receivedAt": ""
	}
}
```


## 变更产品交易状态


**接口地址**:`/api/admin/products/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>变更产品的交易可用状态（DISABLED/TRADABLE/SUSPENDED）。请使用此独立接口以确保生命周期规则。</p>



**请求示例**:


```javascript
{
  "bizId": "prd_01Hxxxx",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|productStatusRequest|产品交易状态变更请求|body|true|ProductStatusRequest|ProductStatusRequest|
|&emsp;&emsp;bizId|产品业务标识||true|string||
|&emsp;&emsp;status|目标交易状态,可用值:DISABLED,TRADABLE,SUSPENDED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回变更后的产品响应|ResultProductResponse|
|400|参数或状态转换不合法|ResultProductResponse|
|401|未登录或会话失效|ResultProductResponse|
|403|无产品状态变更权限|ResultProductResponse|
|404|产品不存在|ResultProductResponse|
|500|系统错误|ResultProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 更新产品可变资料


**接口地址**:`/api/admin/products/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新产品允许变更的资料与交易参数（名称、风险等级、步进、费用、上下架时间、说明等）。</p>



**请求示例**:


```javascript
{
  "bizId": "prd_01Hxxxx",
  "productName": "Apple Inc.",
  "riskLevel": 3,
  "minInvestAmount": 100,
  "amountStep": 1,
  "quantityStep": 0.0001,
  "feeRate": 0.001,
  "listingDate": "2026-01-01",
  "delistingDate": "2028-01-01",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateProductRequest|管理端更新产品可变资料和交易参数的请求|body|true|UpdateProductRequest|UpdateProductRequest|
|&emsp;&emsp;bizId|产品业务标识||true|string||
|&emsp;&emsp;productName|产品名称||true|string||
|&emsp;&emsp;riskLevel|风险等级，允许值 1-5||false|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额||true|number||
|&emsp;&emsp;amountStep|金额步长||true|number||
|&emsp;&emsp;quantityStep|数量步长||true|number||
|&emsp;&emsp;feeRate|手续费率，允许值 0-1||true|number||
|&emsp;&emsp;listingDate|上市日期||false|string(date)||
|&emsp;&emsp;delistingDate|退市日期||false|string(date)||
|&emsp;&emsp;description|产品说明，最多 5000 字符||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|更新成功，返回产品响应|ResultProductResponse|
|400|参数或业务规则不合法|ResultProductResponse|
|401|未登录或会话失效|ResultProductResponse|
|403|无产品更新权限|ResultProductResponse|
|404|产品不存在|ResultProductResponse|
|500|系统错误|ResultProductResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ProductResponse|ProductResponse|
|&emsp;&emsp;bizId|产品业务标识|string||
|&emsp;&emsp;productNo|产品编号|string||
|&emsp;&emsp;productCode|产品编码|string||
|&emsp;&emsp;productName|产品名称|string||
|&emsp;&emsp;productType|产品类型|string||
|&emsp;&emsp;marketCode|市场编码|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;tradeStatus|交易状态|string||
|&emsp;&emsp;riskLevel|风险等级|integer(int32)||
|&emsp;&emsp;minInvestAmount|最小投资金额|number||
|&emsp;&emsp;amountStep|金额步长|number||
|&emsp;&emsp;quantityStep|数量步长|number||
|&emsp;&emsp;feeRate|手续费率|number||
|&emsp;&emsp;listingDate|上市日期|string(date)||
|&emsp;&emsp;delistingDate|退市日期|string(date)||
|&emsp;&emsp;description|产品说明|string||
|&emsp;&emsp;attributes|扩展属性列表|array|ProductAttributeResponse|
|&emsp;&emsp;&emsp;&emsp;key|属性键|string||
|&emsp;&emsp;&emsp;&emsp;valueType|值类型|string||
|&emsp;&emsp;&emsp;&emsp;jsonValue|JSON 格式属性值|string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate|属性生效日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;investmentProfile|产品投资风险和交易画像；列表页可为空，详情页返回|ProductInvestmentProfileResponse|ProductInvestmentProfileResponse|
|&emsp;&emsp;&emsp;&emsp;assetClass|资产类别：STOCK/ETF/FUND/BOND/BANK_WMP/GOLD/REIT 等|string||
|&emsp;&emsp;&emsp;&emsp;riskSummary|风险摘要|string||
|&emsp;&emsp;&emsp;&emsp;volatilityLevel|波动等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;liquidityLevel|流动性等级：LOW/MEDIUM/HIGH|string||
|&emsp;&emsp;&emsp;&emsp;maxDrawdown|历史或估算最大回撤，小数形式|number||
|&emsp;&emsp;&emsp;&emsp;suitableRiskLevel|适配用户风险等级，1-5|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;mockTradable|是否允许进入 Mock 交易|boolean||
|&emsp;&emsp;&emsp;&emsp;minHoldingDays|建议最短持有天数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;tradingNotes|交易约束和注意事项|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|画像数据质量分，0-1|number||
|&emsp;&emsp;themeRelations|产品主题、行业、指数和资产类别关系集合；列表页可为空，详情页返回|array|ProductThemeRelationResponse|
|&emsp;&emsp;&emsp;&emsp;relationType|关系类型：THEME/INDUSTRY/INDEX/ASSET_CLASS|string||
|&emsp;&emsp;&emsp;&emsp;relationCode|关系稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;relationName|关系展示名称|string||
|&emsp;&emsp;&emsp;&emsp;relationWeight|关系权重，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|关系来源编码|string||
|&emsp;&emsp;&emsp;&emsp;evidence|关系证据摘要|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "prd_01Hxxxx",
		"productNo": "P202600001",
		"productCode": "AAPL",
		"productName": "Apple Inc.",
		"productType": "STOCK",
		"marketCode": "NASDAQ",
		"currency": "USD",
		"tradeStatus": "TRADABLE",
		"riskLevel": 3,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "issuer",
				"valueType": "string",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": "MANUAL_IMPORT"
			}
		],
		"investmentProfile": {
			"assetClass": "",
			"riskSummary": "",
			"volatilityLevel": "",
			"liquidityLevel": "",
			"maxDrawdown": 0,
			"suitableRiskLevel": 0,
			"mockTradable": true,
			"minHoldingDays": 0,
			"tradingNotes": "",
			"dataQualityScore": 0
		},
		"themeRelations": [
			{
				"relationType": "",
				"relationCode": "",
				"relationName": "",
				"relationWeight": 0,
				"sourceCode": "",
				"evidence": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# 管理端用户


## 管理端创建用户


**接口地址**:`/api/admin/users/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>由管理员创建用户。请求遵循公开注册的用户名/密码规则。可选设置初始账户状态（默认 ACTIVE）。</p>



**请求示例**:


```javascript
{
  "username": "alice",
  "password": "P@ssw0rd123",
  "email": "alice@example.com",
  "phone": "+8613800000000",
  "nickname": "小张",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminCreateUserRequest|管理端创建用户请求|body|true|AdminCreateUserRequest|AdminCreateUserRequest|
|&emsp;&emsp;username|用户名，4-32 字符||true|string||
|&emsp;&emsp;password|密码，8-72 字符，必须包含字母和数字||true|string||
|&emsp;&emsp;email|邮箱地址||false|string(email)||
|&emsp;&emsp;phone|手机号，含国家码||false|string||
|&emsp;&emsp;nickname|昵称||false|string||
|&emsp;&emsp;status|初始账户状态，可选，默认 ACTIVE,可用值:DISABLED,ACTIVE,LOCKED||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|创建成功，返回新建用户响应|ResultUserResponse|
|400|参数校验失败或用户名/密码不符合规则|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|操作者无权限创建用户|ResultUserResponse|
|409|用户标识冲突|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 软删除用户


**接口地址**:`/api/admin/users/delete`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>对用户执行逻辑删除，并撤销相关会话。此操作不可恢复，应由具有足够权限的管理员执行。</p>



**请求示例**:


```javascript
{
  "bizId": "usr_01Hxxx"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userBizIdRequest|按用户业务标识执行操作的请求|body|true|UserBizIdRequest|UserBizIdRequest|
|&emsp;&emsp;bizId|用户业务标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|删除成功（Result<Void>）|ResultVoid|
|400|参数校验失败|ResultVoid|
|401|未登录或会话失效|ResultVoid|
|403|无用户删除权限|ResultVoid|
|404|用户不存在|ResultVoid|
|500|系统错误|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


## 用户详情


**接口地址**:`/api/admin/users/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据用户业务标识查询完整的接口层用户响应。</p>



**请求示例**:


```javascript
{
  "bizId": "usr_01Hxxx"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userBizIdRequest|按用户业务标识执行操作的请求|body|true|UserBizIdRequest|UserBizIdRequest|
|&emsp;&emsp;bizId|用户业务标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回用户响应|ResultUserResponse|
|400|参数校验失败|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无用户详情查看权限|ResultUserResponse|
|404|用户不存在|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 更新 KYC 状态


**接口地址**:`/api/admin/users/kyc-status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>变更用户的 KYC 状态（UNVERIFIED/VERIFIED/REVIEWING/REJECTED）。</p>



**请求示例**:


```javascript
{
  "bizId": "usr_01Hxxx",
  "kycStatus": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|kycStatusRequest|管理端 KYC 状态变更请求|body|true|KycStatusRequest|KycStatusRequest|
|&emsp;&emsp;bizId|用户业务标识||true|string||
|&emsp;&emsp;kycStatus|目标 KYC 状态,可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回更新后的用户响应|ResultUserResponse|
|400|参数或状态转换不合法|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无 KYC 状态变更权限|ResultUserResponse|
|404|用户不存在|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 用户列表


**接口地址**:`/api/admin/users/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`application/json;charset=UTF-8`


**接口描述**:<p>按关键字、状态、KYC、风险等级分页查询用户。分页参数默认 page=1,size=20, sort=createdAt,direction=desc。</p>
<p>请求中 page 可为 0 用于兼容前端零基页码，会被转换为 1。</p>



**请求示例**:


```javascript
{
  "keyword": "",
  "status": "",
  "kycStatus": "",
  "riskLevel": 0,
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminUserListRequest|管理端用户分页查询请求，支持关键字、状态、KYC、风险等级与分页排序|body|true|AdminUserListRequest|AdminUserListRequest|
|&emsp;&emsp;keyword|关键字（用户名/邮箱/昵称等模糊匹配）||false|string||
|&emsp;&emsp;status|账户状态过滤,可用值:DISABLED,ACTIVE,LOCKED||false|string||
|&emsp;&emsp;kycStatus|KYC 状态过滤,可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED||false|string||
|&emsp;&emsp;riskLevel|风险等级过滤（1-5）||false|integer(int32)||
|&emsp;&emsp;page|页码（支持 0 用于前端组件兼容，会在后端转换为 1）||false|integer(int32)||
|&emsp;&emsp;size|每页大小（1-100）||false|integer(int32)||
|&emsp;&emsp;sort|排序字段，后端将检查白名单||false|string||
|&emsp;&emsp;direction|排序方向，asc 或 desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回接口层用户分页响应|ResultPageResponseUserResponse|
|400|请求参数校验失败或分页参数不合法|ResultPageResponseUserResponse|
|401|未登录或会话失效|ResultPageResponseUserResponse|
|403|无用户列表查看权限|ResultPageResponseUserResponse|
|500|系统错误|ResultPageResponseUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseUserResponse|PageResponseUserResponse|
|&emsp;&emsp;items|当前页数据列表|array|UserResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "usr_01Hxxxxx",
				"userNo": "U202600001",
				"username": "alice",
				"email": "alice@example.com",
				"phone": "+8613800000000",
				"nickname": "小张",
				"avatarUrl": "",
				"status": "ACTIVE",
				"kycStatus": "VERIFIED",
				"riskLevel": 3,
				"roles": [],
				"permissions": [],
				"registeredAt": "",
				"lastLoginAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseUserResponse|PageResponseUserResponse|
|&emsp;&emsp;items|当前页数据列表|array|UserResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "usr_01Hxxxxx",
				"userNo": "U202600001",
				"username": "alice",
				"email": "alice@example.com",
				"phone": "+8613800000000",
				"nickname": "小张",
				"avatarUrl": "",
				"status": "ACTIVE",
				"kycStatus": "VERIFIED",
				"riskLevel": 3,
				"roles": [],
				"permissions": [],
				"registeredAt": "",
				"lastLoginAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseUserResponse|PageResponseUserResponse|
|&emsp;&emsp;items|当前页数据列表|array|UserResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "usr_01Hxxxxx",
				"userNo": "U202600001",
				"username": "alice",
				"email": "alice@example.com",
				"phone": "+8613800000000",
				"nickname": "小张",
				"avatarUrl": "",
				"status": "ACTIVE",
				"kycStatus": "VERIFIED",
				"riskLevel": 3,
				"roles": [],
				"permissions": [],
				"registeredAt": "",
				"lastLoginAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseUserResponse|PageResponseUserResponse|
|&emsp;&emsp;items|当前页数据列表|array|UserResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "usr_01Hxxxxx",
				"userNo": "U202600001",
				"username": "alice",
				"email": "alice@example.com",
				"phone": "+8613800000000",
				"nickname": "小张",
				"avatarUrl": "",
				"status": "ACTIVE",
				"kycStatus": "VERIFIED",
				"riskLevel": 3,
				"roles": [],
				"permissions": [],
				"registeredAt": "",
				"lastLoginAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseUserResponse|PageResponseUserResponse|
|&emsp;&emsp;items|当前页数据列表|array|UserResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "usr_01Hxxxxx",
				"userNo": "U202600001",
				"username": "alice",
				"email": "alice@example.com",
				"phone": "+8613800000000",
				"nickname": "小张",
				"avatarUrl": "",
				"status": "ACTIVE",
				"kycStatus": "VERIFIED",
				"riskLevel": 3,
				"roles": [],
				"permissions": [],
				"registeredAt": "",
				"lastLoginAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 更新风险等级


**接口地址**:`/api/admin/users/risk-level`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置用户风险承受等级，允许值 1-5。</p>



**请求示例**:


```javascript
{
  "bizId": "usr_01Hxxx",
  "riskLevel": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|riskLevelRequest|管理端风险等级变更请求（1-5）|body|true|RiskLevelRequest|RiskLevelRequest|
|&emsp;&emsp;bizId|用户业务标识||true|string||
|&emsp;&emsp;riskLevel|风险等级（1-5）||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回更新后的用户响应|ResultUserResponse|
|400|参数非法（riskLevel 必须 1-5）|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无风险等级变更权限|ResultUserResponse|
|404|用户不存在|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 更新账户状态


**接口地址**:`/api/admin/users/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>变更用户账户状态（ACTIVE/DISABLED/LOCKED）。请使用专用接口避免绕过状态机规则。</p>



**请求示例**:


```javascript
{
  "bizId": "usr_01Hxxx",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|statusRequest|管理端账户状态变更请求|body|true|StatusRequest|StatusRequest|
|&emsp;&emsp;bizId|用户业务标识||true|string||
|&emsp;&emsp;status|目标账户状态,可用值:DISABLED,ACTIVE,LOCKED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回状态变更后的用户响应|ResultUserResponse|
|400|参数或状态转换不合法|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无用户状态变更权限|ResultUserResponse|
|404|用户不存在|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 更新用户邮箱和手机号


**接口地址**:`/api/admin/users/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据用户 bizId 更新用户的 email 与 phone。变更后会做唯一性冲突校验。</p>



**请求示例**:


```javascript
{
  "bizId": "usr_01Hxxx",
  "email": "alice@example.com",
  "phone": "+8613800000000"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminUpdateUserRequest|管理端更新指定用户登录标识的请求|body|true|AdminUpdateUserRequest|AdminUpdateUserRequest|
|&emsp;&emsp;bizId|用户业务标识||true|string||
|&emsp;&emsp;email|邮箱||false|string(email)||
|&emsp;&emsp;phone|手机号，含国家码||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回更新后的用户响应|ResultUserResponse|
|400|参数校验失败|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无用户更新权限|ResultUserResponse|
|404|用户不存在|ResultUserResponse|
|409|登录标识冲突|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


# 回测结果


## 查询回测详情


**接口地址**:`/api/backtests/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据回测业务 ID 查询回测参数、指标和状态。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|backtestBizIdRequest|回测结果业务 ID 请求|body|true|BacktestBizIdRequest|BacktestBizIdRequest|
|&emsp;&emsp;bizId|回测结果业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回回测详情|ResultBacktestResultResponse|
|403|回测结果不属于当前用户|ResultBacktestResultResponse|
|404|回测结果不存在|ResultBacktestResultResponse|
|500|系统错误|ResultBacktestResultResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 从模拟组合生成回测摘要


**接口地址**:`/api/backtests/generate-from-portfolio`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>读取 Mock 组合估值曲线，生成收益率、最大回撤和波动率等回测摘要。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": "",
  "strategyCode": "",
  "strategyVersion": "",
  "benchmarkCode": "",
  "parameters": "",
  "limit": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|generateBacktestFromPortfolioRequest|从模拟组合生成回测摘要请求|body|true|GenerateBacktestFromPortfolioRequest|GenerateBacktestFromPortfolioRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||
|&emsp;&emsp;strategyCode|策略稳定编码||true|string||
|&emsp;&emsp;strategyVersion|策略版本快照||true|string||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码||false|string||
|&emsp;&emsp;parameters|回测参数 JSON，可为空，由后端补充组合来源||false|string||
|&emsp;&emsp;limit|估值曲线点数量上限||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|生成成功，返回回测结果|ResultBacktestResultResponse|
|400|估值点不足或参数不合法|ResultBacktestResultResponse|
|403|模拟组合不属于当前用户|ResultBacktestResultResponse|
|500|系统错误|ResultBacktestResultResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询回测结果


**接口地址**:`/api/backtests/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按策略编码、版本和状态查询当前用户可见的回测结果。</p>



**请求示例**:


```javascript
{
  "strategyCode": "",
  "strategyVersion": "",
  "status": "",
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|backtestListRequest|回测结果分页查询请求|body|true|BacktestListRequest|BacktestListRequest|
|&emsp;&emsp;strategyCode|策略稳定编码||false|string||
|&emsp;&emsp;strategyVersion|策略版本快照||false|string||
|&emsp;&emsp;status|回测状态||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：createdAt/strategyCode/strategyVersion/status/startDate/endDate||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回回测分页响应|ResultPageResponseBacktestResultResponse|
|400|分页或排序参数不合法|ResultPageResponseBacktestResultResponse|
|500|系统错误|ResultPageResponseBacktestResultResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseBacktestResultResponse|PageResponseBacktestResultResponse|
|&emsp;&emsp;items|当前页数据列表|array|BacktestResultResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"ownerUserBizId": "",
				"strategyCode": "",
				"strategyVersion": "",
				"startDate": "",
				"endDate": "",
				"initialCapital": 0,
				"benchmarkCode": "",
				"parameters": "",
				"metrics": "",
				"resultUri": "",
				"status": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseBacktestResultResponse|PageResponseBacktestResultResponse|
|&emsp;&emsp;items|当前页数据列表|array|BacktestResultResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"ownerUserBizId": "",
				"strategyCode": "",
				"strategyVersion": "",
				"startDate": "",
				"endDate": "",
				"initialCapital": 0,
				"benchmarkCode": "",
				"parameters": "",
				"metrics": "",
				"resultUri": "",
				"status": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseBacktestResultResponse|PageResponseBacktestResultResponse|
|&emsp;&emsp;items|当前页数据列表|array|BacktestResultResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"ownerUserBizId": "",
				"strategyCode": "",
				"strategyVersion": "",
				"startDate": "",
				"endDate": "",
				"initialCapital": 0,
				"benchmarkCode": "",
				"parameters": "",
				"metrics": "",
				"resultUri": "",
				"status": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存回测结果


**接口地址**:`/api/backtests/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存外部回测或后台计算得到的回测任务、参数和指标摘要。</p>



**请求示例**:


```javascript
{
  "bizId": "",
  "strategyCode": "",
  "strategyVersion": "",
  "startDate": "",
  "endDate": "",
  "initialCapital": 0,
  "benchmarkCode": "",
  "parameters": "",
  "metrics": "",
  "resultUri": "",
  "status": "",
  "failureReason": "",
  "startedAt": "",
  "completedAt": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveBacktestResultRequest|保存回测结果请求|body|true|SaveBacktestResultRequest|SaveBacktestResultRequest|
|&emsp;&emsp;bizId|回测结果业务唯一标识，更新时传入||false|string||
|&emsp;&emsp;strategyCode|策略稳定编码||true|string||
|&emsp;&emsp;strategyVersion|策略版本快照||true|string||
|&emsp;&emsp;startDate|回测区间开始日期||true|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期||true|string(date)||
|&emsp;&emsp;initialCapital|初始资金||true|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码||false|string||
|&emsp;&emsp;parameters|回测参数 JSON||true|string||
|&emsp;&emsp;metrics|回测指标 JSON||false|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址||false|string||
|&emsp;&emsp;status|回测状态：PENDING/RUNNING/SUCCEEDED/FAILED/CANCELLED||false|string||
|&emsp;&emsp;failureReason|失败原因摘要||false|string||
|&emsp;&emsp;startedAt|任务开始时间||false|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回回测结果|ResultBacktestResultResponse|
|400|参数或JSON格式不合法|ResultBacktestResultResponse|
|403|更新的回测结果不属于当前用户|ResultBacktestResultResponse|
|500|系统错误|ResultBacktestResultResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|BacktestResultResponse|BacktestResultResponse|
|&emsp;&emsp;bizId|回测结果业务唯一标识|string||
|&emsp;&emsp;ownerUserBizId|任务发起用户业务标识|string||
|&emsp;&emsp;strategyCode|策略稳定编码|string||
|&emsp;&emsp;strategyVersion|策略版本快照|string||
|&emsp;&emsp;startDate|回测区间开始日期|string(date)||
|&emsp;&emsp;endDate|回测区间结束日期|string(date)||
|&emsp;&emsp;initialCapital|初始资金|number||
|&emsp;&emsp;benchmarkCode|基准指数或比较对象编码|string||
|&emsp;&emsp;parameters|回测参数 JSON|string||
|&emsp;&emsp;metrics|回测指标 JSON|string||
|&emsp;&emsp;resultUri|明细结果或报告存储地址|string||
|&emsp;&emsp;status|回测状态|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;startedAt|任务开始时间|string(date-time)||
|&emsp;&emsp;completedAt|任务完成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"ownerUserBizId": "",
		"strategyCode": "",
		"strategyVersion": "",
		"startDate": "",
		"endDate": "",
		"initialCapital": 0,
		"benchmarkCode": "",
		"parameters": "",
		"metrics": "",
		"resultUri": "",
		"status": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# 角色权限管理


## 创建角色


**接口地址**:`/api/admin/roles/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建自定义角色，roleCode 必须为大写字母开头，长度 3-64，允许数字和下划线。</p>



**请求示例**:


```javascript
{
  "roleCode": "CUSTOM_USER",
  "roleName": "自定义用户角色",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createRoleRequest|创建自定义角色请求|body|true|CreateRoleRequest|CreateRoleRequest|
|&emsp;&emsp;roleCode|角色编码，首字母大写，允许数字与下划线||true|string||
|&emsp;&emsp;roleName|角色名称||true|string||
|&emsp;&emsp;description|角色说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回新建角色响应|ResultRoleResponse|
|400|参数校验失败|ResultRoleResponse|
|401|未登录或会话失效|ResultRoleResponse|
|403|无角色创建权限|ResultRoleResponse|
|409|角色编码冲突|ResultRoleResponse|
|500|系统错误|ResultRoleResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 角色列表


**接口地址**:`/api/admin/roles/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>返回系统中全部角色及其权限集合。用于管理端角色查看与权限审计。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回角色响应数组|ResultListRoleResponse|
|401|未登录或会话失效|ResultListRoleResponse|
|403|无角色查看权限|ResultListRoleResponse|
|500|系统错误|ResultListRoleResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"roleCode": "USER",
			"roleName": "普通用户",
			"description": "",
			"roleType": "CUSTOM",
			"enabled": true,
			"permissions": [],
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"roleCode": "USER",
			"roleName": "普通用户",
			"description": "",
			"roleType": "CUSTOM",
			"enabled": true,
			"permissions": [],
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"roleCode": "USER",
			"roleName": "普通用户",
			"description": "",
			"roleType": "CUSTOM",
			"enabled": true,
			"permissions": [],
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"roleCode": "USER",
			"roleName": "普通用户",
			"description": "",
			"roleType": "CUSTOM",
			"enabled": true,
			"permissions": [],
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


## 配置角色权限


**接口地址**:`/api/admin/roles/permissions/configure`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>覆盖配置角色的权限集合。传入的 permissions 将替换现有权限集合。</p>



**请求示例**:


```javascript
{
  "roleCode": "USER",
  "permissions": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|configureRolePermissionsRequest|覆盖配置角色权限集合的请求|body|true|ConfigureRolePermissionsRequest|ConfigureRolePermissionsRequest|
|&emsp;&emsp;roleCode|角色编码||true|string||
|&emsp;&emsp;permissions|权限编码集合||true|array|string|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回更新后的角色响应|ResultRoleResponse|
|400|参数校验失败或权限格式不正确|ResultRoleResponse|
|401|未登录或会话失效|ResultRoleResponse|
|403|无角色权限配置权限|ResultRoleResponse|
|404|角色不存在|ResultRoleResponse|
|500|系统错误|ResultRoleResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 更新角色状态


**接口地址**:`/api/admin/roles/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>启用或停用指定角色（通常用于临时禁止某角色的权限）。</p>



**请求示例**:


```javascript
{
  "roleCode": "USER",
  "enabled": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleStatusRequest|启用或停用角色请求|body|true|RoleStatusRequest|RoleStatusRequest|
|&emsp;&emsp;roleCode|角色编码||true|string||
|&emsp;&emsp;enabled|是否启用||true|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回变更后的角色响应|ResultRoleResponse|
|400|参数校验失败|ResultRoleResponse|
|401|未登录或会话失效|ResultRoleResponse|
|403|无角色状态变更权限|ResultRoleResponse|
|404|角色不存在|ResultRoleResponse|
|500|系统错误|ResultRoleResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 更新角色


**接口地址**:`/api/admin/roles/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新角色名称与说明。角色编码为不可变字段。</p>



**请求示例**:


```javascript
{
  "roleCode": "USER",
  "roleName": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateRoleRequest|更新角色名称和说明请求|body|true|UpdateRoleRequest|UpdateRoleRequest|
|&emsp;&emsp;roleCode|角色编码||true|string||
|&emsp;&emsp;roleName|角色名称||true|string||
|&emsp;&emsp;description|角色说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回更新后的角色响应|ResultRoleResponse|
|400|参数校验失败|ResultRoleResponse|
|401|未登录或会话失效|ResultRoleResponse|
|403|无角色更新权限|ResultRoleResponse|
|404|角色不存在|ResultRoleResponse|
|500|系统错误|ResultRoleResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|RoleResponse|RoleResponse|
|&emsp;&emsp;roleCode|角色编码|string||
|&emsp;&emsp;roleName|角色名称|string||
|&emsp;&emsp;description|角色说明|string||
|&emsp;&emsp;roleType|角色类型|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;permissions|权限编码集合|array|string|
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|最后更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"roleCode": "USER",
		"roleName": "普通用户",
		"description": "",
		"roleType": "CUSTOM",
		"enabled": true,
		"permissions": [],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分配用户角色


**接口地址**:`/api/admin/roles/users/assign`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>给用户分配角色，可设置 effectiveTo 为角色失效时间（可选）。</p>



**请求示例**:


```javascript
{
  "userBizId": "",
  "roleCode": "",
  "effectiveTo": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userRoleAssignmentRequest|给用户分配角色的请求，可选指定角色失效时间|body|true|UserRoleAssignmentRequest|UserRoleAssignmentRequest|
|&emsp;&emsp;userBizId|用户业务标识||true|string||
|&emsp;&emsp;roleCode|角色编码||true|string||
|&emsp;&emsp;effectiveTo|角色失效时间（北京时间），可选||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回用户最新响应|ResultUserResponse|
|400|参数校验失败|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无用户角色分配权限|ResultUserResponse|
|404|用户或角色不存在|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 撤销用户角色


**接口地址**:`/api/admin/roles/users/revoke`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>撤销用户的指定角色分配。</p>



**请求示例**:


```javascript
{
  "userBizId": "",
  "roleCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userRoleRevokeRequest|撤销用户角色的请求|body|true|UserRoleRevokeRequest|UserRoleRevokeRequest|
|&emsp;&emsp;userBizId|用户业务标识||true|string||
|&emsp;&emsp;roleCode|角色编码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回用户最新响应|ResultUserResponse|
|400|参数校验失败|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|403|无用户角色撤销权限|ResultUserResponse|
|404|用户或角色不存在|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


# 模拟投资组合


## 创建模拟组合


**接口地址**:`/api/mock/portfolios/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>为当前登录用户创建 SIMULATION 类型组合，并写入初始现金估值快照，供前端展示模拟资产入口。</p>



**请求示例**:


```javascript
{
  "portfolioName": "",
  "baseCurrency": "",
  "initialCash": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createMockPortfolioRequest|创建模拟组合请求|body|true|CreateMockPortfolioRequest|CreateMockPortfolioRequest|
|&emsp;&emsp;portfolioName|模拟组合名称||true|string||
|&emsp;&emsp;baseCurrency|基础计价币种，默认 CNY||false|string||
|&emsp;&emsp;initialCash|初始模拟现金，当前阶段写入首个估值快照||false|number||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|创建成功，返回模拟组合响应|ResultMockPortfolioResponse|
|400|参数校验失败或初始现金不合法|ResultMockPortfolioResponse|
|401|未登录或会话失效|ResultMockPortfolioResponse|
|500|系统错误|ResultMockPortfolioResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 查询模拟组合详情


**接口地址**:`/api/mock/portfolios/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户指定模拟组合的基础信息、最新估值和当前持仓集合，用于前端组合详情页。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|mockPortfolioDetailRequest|模拟组合详情请求|body|true|MockPortfolioDetailRequest|MockPortfolioDetailRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回模拟组合详情|ResultMockPortfolioResponse|
|400|组合类型不支持或参数不合法|ResultMockPortfolioResponse|
|401|未登录或会话失效|ResultMockPortfolioResponse|
|403|无权查看该模拟组合|ResultMockPortfolioResponse|
|404|模拟组合不存在|ResultMockPortfolioResponse|
|500|系统错误|ResultMockPortfolioResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询我的模拟组合


**接口地址**:`/api/mock/portfolios/mine`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前登录用户名下 SIMULATION 类型组合，列表项返回最新估值快照，positions 在列表页为空。</p>



**请求示例**:


```javascript
{
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|mockPortfolioListRequest|我的模拟组合分页请求|body|true|MockPortfolioListRequest|MockPortfolioListRequest|
|&emsp;&emsp;page|页码，从 1 开始；兼容 0 表示第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：createdAt/updatedAt/portfolioNo/portfolioName||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回模拟组合分页响应|ResultPageResponseMockPortfolioResponse|
|400|分页或排序参数不合法|ResultPageResponseMockPortfolioResponse|
|401|未登录或会话失效|ResultPageResponseMockPortfolioResponse|
|500|系统错误|ResultPageResponseMockPortfolioResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseMockPortfolioResponse|PageResponseMockPortfolioResponse|
|&emsp;&emsp;items|当前页数据列表|array|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"portfolioNo": "",
				"ownerUserBizId": "",
				"portfolioName": "",
				"portfolioType": "",
				"baseCurrency": "",
				"status": 0,
				"latestValuation": {
					"valuationTime": "",
					"baseCurrency": "",
					"totalAsset": 0,
					"cashBalance": 0,
					"positionValue": 0,
					"totalCost": 0,
					"unrealizedProfit": 0,
					"realizedProfit": 0,
					"totalReturnRate": 0,
					"sourceCode": ""
				},
				"positions": [
					{
						"bizId": "",
						"productBizId": "",
						"positionSide": "",
						"quantity": 0,
						"availableQuantity": 0,
						"averageCost": 0,
						"costAmount": 0,
						"realizedProfit": 0,
						"lastTradeAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseMockPortfolioResponse|PageResponseMockPortfolioResponse|
|&emsp;&emsp;items|当前页数据列表|array|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"portfolioNo": "",
				"ownerUserBizId": "",
				"portfolioName": "",
				"portfolioType": "",
				"baseCurrency": "",
				"status": 0,
				"latestValuation": {
					"valuationTime": "",
					"baseCurrency": "",
					"totalAsset": 0,
					"cashBalance": 0,
					"positionValue": 0,
					"totalCost": 0,
					"unrealizedProfit": 0,
					"realizedProfit": 0,
					"totalReturnRate": 0,
					"sourceCode": ""
				},
				"positions": [
					{
						"bizId": "",
						"productBizId": "",
						"positionSide": "",
						"quantity": 0,
						"availableQuantity": 0,
						"averageCost": 0,
						"costAmount": 0,
						"realizedProfit": 0,
						"lastTradeAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseMockPortfolioResponse|PageResponseMockPortfolioResponse|
|&emsp;&emsp;items|当前页数据列表|array|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"portfolioNo": "",
				"ownerUserBizId": "",
				"portfolioName": "",
				"portfolioType": "",
				"baseCurrency": "",
				"status": 0,
				"latestValuation": {
					"valuationTime": "",
					"baseCurrency": "",
					"totalAsset": 0,
					"cashBalance": 0,
					"positionValue": 0,
					"totalCost": 0,
					"unrealizedProfit": 0,
					"realizedProfit": 0,
					"totalReturnRate": 0,
					"sourceCode": ""
				},
				"positions": [
					{
						"bizId": "",
						"productBizId": "",
						"positionSide": "",
						"quantity": 0,
						"availableQuantity": 0,
						"averageCost": 0,
						"costAmount": 0,
						"realizedProfit": 0,
						"lastTradeAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseMockPortfolioResponse|PageResponseMockPortfolioResponse|
|&emsp;&emsp;items|当前页数据列表|array|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"portfolioNo": "",
				"ownerUserBizId": "",
				"portfolioName": "",
				"portfolioType": "",
				"baseCurrency": "",
				"status": 0,
				"latestValuation": {
					"valuationTime": "",
					"baseCurrency": "",
					"totalAsset": 0,
					"cashBalance": 0,
					"positionValue": 0,
					"totalCost": 0,
					"unrealizedProfit": 0,
					"realizedProfit": 0,
					"totalReturnRate": 0,
					"sourceCode": ""
				},
				"positions": [
					{
						"bizId": "",
						"productBizId": "",
						"positionSide": "",
						"quantity": 0,
						"availableQuantity": 0,
						"averageCost": 0,
						"costAmount": 0,
						"realizedProfit": 0,
						"lastTradeAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 执行模拟买入


**接口地址**:`/api/mock/portfolios/orders/buy`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按产品最新1D收盘价模拟金额买入，写入订单、成交、持仓和新估值快照，不触发真实交易。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": "",
  "productBizId": "",
  "amount": 0,
  "idempotencyKey": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|executeMockBuyRequest|执行模拟买入请求|body|true|ExecuteMockBuyRequest|ExecuteMockBuyRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||
|&emsp;&emsp;productBizId|产品业务唯一标识||true|string||
|&emsp;&emsp;amount|买入金额，不含交易费用||true|number||
|&emsp;&emsp;idempotencyKey|客户端幂等键，用于避免重复提交||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|买入成功，返回模拟订单执行结果|ResultMockOrderExecutionResponse|
|400|参数不合法、产品不可Mock交易、行情缺失或现金不足|ResultMockOrderExecutionResponse|
|401|未登录或会话失效|ResultMockOrderExecutionResponse|
|403|无权操作该模拟组合|ResultMockOrderExecutionResponse|
|404|模拟组合或产品不存在|ResultMockOrderExecutionResponse|
|409|幂等订单状态异常|ResultMockOrderExecutionResponse|
|500|系统错误|ResultMockOrderExecutionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


## 根据投资分析报告执行模拟买入


**接口地址**:`/api/mock/portfolios/orders/buy-from-report`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>读取报告 investmentPlan.referenceAllocationAmount，并按报告主题或指定产品生成模拟买入订单。低质量报告和数据缺口报告会被拒绝。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": "",
  "reportBizId": "",
  "productBizId": "",
  "idempotencyKey": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|executeMockPlanFromReportRequest|从投资分析报告执行模拟买入请求|body|true|ExecuteMockPlanFromReportRequest|ExecuteMockPlanFromReportRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||
|&emsp;&emsp;reportBizId|投资分析报告业务唯一标识||true|string||
|&emsp;&emsp;productBizId|可选产品业务唯一标识；为空时按报告主题自动选择产品关系||false|string||
|&emsp;&emsp;idempotencyKey|客户端幂等键，用于避免重复提交||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|执行成功，返回模拟订单执行结果|ResultMockOrderExecutionResponse|
|400|报告质量不足、方案不可执行、产品不可Mock交易、行情缺失或现金不足|ResultMockOrderExecutionResponse|
|401|未登录或会话失效|ResultMockOrderExecutionResponse|
|403|无权操作该模拟组合|ResultMockOrderExecutionResponse|
|404|模拟组合、产品或报告不存在|ResultMockOrderExecutionResponse|
|409|幂等订单状态异常|ResultMockOrderExecutionResponse|
|500|系统错误|ResultMockOrderExecutionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


## 撤销模拟订单


**接口地址**:`/api/mock/portfolios/orders/cancel`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>撤销当前用户自己的非终态模拟订单。当前即时成交订单已是FILLED终态，会返回明确拒绝原因。</p>



**请求示例**:


```javascript
{
  "orderBizId": "",
  "cancelReason": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|cancelMockOrderRequest|撤销模拟订单请求|body|true|CancelMockOrderRequest|CancelMockOrderRequest|
|&emsp;&emsp;orderBizId|模拟订单业务唯一标识||true|string||
|&emsp;&emsp;cancelReason|撤单原因，前端展示和审计使用||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|撤单成功，返回撤销后的模拟订单|ResultMockOrderResponse|
|400|参数不合法或订单已处于终态|ResultMockOrderResponse|
|401|未登录或会话失效|ResultMockOrderResponse|
|403|无权操作该模拟订单|ResultMockOrderResponse|
|404|模拟订单不存在|ResultMockOrderResponse|
|500|系统错误|ResultMockOrderResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"orderNo": "",
		"portfolioBizId": "",
		"productBizId": "",
		"orderSide": "",
		"orderType": "",
		"currency": "",
		"requestedPrice": 0,
		"requestedQuantity": 0,
		"requestedAmount": 0,
		"executedQuantity": 0,
		"executedAmount": 0,
		"feeAmount": 0,
		"status": "",
		"completedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"orderNo": "",
		"portfolioBizId": "",
		"productBizId": "",
		"orderSide": "",
		"orderType": "",
		"currency": "",
		"requestedPrice": 0,
		"requestedQuantity": 0,
		"requestedAmount": 0,
		"executedQuantity": 0,
		"executedAmount": 0,
		"feeAmount": 0,
		"status": "",
		"completedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"orderNo": "",
		"portfolioBizId": "",
		"productBizId": "",
		"orderSide": "",
		"orderType": "",
		"currency": "",
		"requestedPrice": 0,
		"requestedQuantity": 0,
		"requestedAmount": 0,
		"executedQuantity": 0,
		"executedAmount": 0,
		"feeAmount": 0,
		"status": "",
		"completedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"orderNo": "",
		"portfolioBizId": "",
		"productBizId": "",
		"orderSide": "",
		"orderType": "",
		"currency": "",
		"requestedPrice": 0,
		"requestedQuantity": 0,
		"requestedAmount": 0,
		"executedQuantity": 0,
		"executedAmount": 0,
		"feeAmount": 0,
		"status": "",
		"completedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"orderNo": "",
		"portfolioBizId": "",
		"productBizId": "",
		"orderSide": "",
		"orderType": "",
		"currency": "",
		"requestedPrice": 0,
		"requestedQuantity": 0,
		"requestedAmount": 0,
		"executedQuantity": 0,
		"executedAmount": 0,
		"feeAmount": 0,
		"status": "",
		"completedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"orderNo": "",
		"portfolioBizId": "",
		"productBizId": "",
		"orderSide": "",
		"orderType": "",
		"currency": "",
		"requestedPrice": 0,
		"requestedQuantity": 0,
		"requestedAmount": 0,
		"executedQuantity": 0,
		"executedAmount": 0,
		"feeAmount": 0,
		"status": "",
		"completedAt": ""
	}
}
```


## 查询模拟订单事件


**接口地址**:`/api/mock/portfolios/orders/events`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前用户自己的模拟订单生命周期事件，用于前端展示订单状态追踪和交易审计。</p>



**请求示例**:


```javascript
{
  "orderBizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|mockOrderEventsRequest|查询模拟订单事件请求|body|true|MockOrderEventsRequest|MockOrderEventsRequest|
|&emsp;&emsp;orderBizId|模拟订单业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回订单事件集合|ResultListOrderEventResponse|
|400|参数不合法|ResultListOrderEventResponse|
|401|未登录或会话失效|ResultListOrderEventResponse|
|403|无权查看该模拟订单事件|ResultListOrderEventResponse|
|404|模拟订单不存在|ResultListOrderEventResponse|
|500|系统错误|ResultListOrderEventResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|OrderEventResponse|
|&emsp;&emsp;bizId|订单事件业务唯一标识|string||
|&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;fromStatus|变更前订单状态|string||
|&emsp;&emsp;toStatus|变更后订单状态|string||
|&emsp;&emsp;eventSource|事件来源|string||
|&emsp;&emsp;operatorBizId|操作者业务唯一标识|string||
|&emsp;&emsp;eventPayload|脱敏后的事件上下文 JSON|string||
|&emsp;&emsp;occurredAt|事件发生时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"orderBizId": "",
			"eventType": "",
			"fromStatus": "",
			"toStatus": "",
			"eventSource": "",
			"operatorBizId": "",
			"eventPayload": "",
			"occurredAt": ""
		}
	]
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|OrderEventResponse|
|&emsp;&emsp;bizId|订单事件业务唯一标识|string||
|&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;fromStatus|变更前订单状态|string||
|&emsp;&emsp;toStatus|变更后订单状态|string||
|&emsp;&emsp;eventSource|事件来源|string||
|&emsp;&emsp;operatorBizId|操作者业务唯一标识|string||
|&emsp;&emsp;eventPayload|脱敏后的事件上下文 JSON|string||
|&emsp;&emsp;occurredAt|事件发生时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"orderBizId": "",
			"eventType": "",
			"fromStatus": "",
			"toStatus": "",
			"eventSource": "",
			"operatorBizId": "",
			"eventPayload": "",
			"occurredAt": ""
		}
	]
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|OrderEventResponse|
|&emsp;&emsp;bizId|订单事件业务唯一标识|string||
|&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;fromStatus|变更前订单状态|string||
|&emsp;&emsp;toStatus|变更后订单状态|string||
|&emsp;&emsp;eventSource|事件来源|string||
|&emsp;&emsp;operatorBizId|操作者业务唯一标识|string||
|&emsp;&emsp;eventPayload|脱敏后的事件上下文 JSON|string||
|&emsp;&emsp;occurredAt|事件发生时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"orderBizId": "",
			"eventType": "",
			"fromStatus": "",
			"toStatus": "",
			"eventSource": "",
			"operatorBizId": "",
			"eventPayload": "",
			"occurredAt": ""
		}
	]
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|OrderEventResponse|
|&emsp;&emsp;bizId|订单事件业务唯一标识|string||
|&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;fromStatus|变更前订单状态|string||
|&emsp;&emsp;toStatus|变更后订单状态|string||
|&emsp;&emsp;eventSource|事件来源|string||
|&emsp;&emsp;operatorBizId|操作者业务唯一标识|string||
|&emsp;&emsp;eventPayload|脱敏后的事件上下文 JSON|string||
|&emsp;&emsp;occurredAt|事件发生时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"orderBizId": "",
			"eventType": "",
			"fromStatus": "",
			"toStatus": "",
			"eventSource": "",
			"operatorBizId": "",
			"eventPayload": "",
			"occurredAt": ""
		}
	]
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|OrderEventResponse|
|&emsp;&emsp;bizId|订单事件业务唯一标识|string||
|&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;fromStatus|变更前订单状态|string||
|&emsp;&emsp;toStatus|变更后订单状态|string||
|&emsp;&emsp;eventSource|事件来源|string||
|&emsp;&emsp;operatorBizId|操作者业务唯一标识|string||
|&emsp;&emsp;eventPayload|脱敏后的事件上下文 JSON|string||
|&emsp;&emsp;occurredAt|事件发生时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"orderBizId": "",
			"eventType": "",
			"fromStatus": "",
			"toStatus": "",
			"eventSource": "",
			"operatorBizId": "",
			"eventPayload": "",
			"occurredAt": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|OrderEventResponse|
|&emsp;&emsp;bizId|订单事件业务唯一标识|string||
|&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;eventType|事件类型|string||
|&emsp;&emsp;fromStatus|变更前订单状态|string||
|&emsp;&emsp;toStatus|变更后订单状态|string||
|&emsp;&emsp;eventSource|事件来源|string||
|&emsp;&emsp;operatorBizId|操作者业务唯一标识|string||
|&emsp;&emsp;eventPayload|脱敏后的事件上下文 JSON|string||
|&emsp;&emsp;occurredAt|事件发生时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"orderBizId": "",
			"eventType": "",
			"fromStatus": "",
			"toStatus": "",
			"eventSource": "",
			"operatorBizId": "",
			"eventPayload": "",
			"occurredAt": ""
		}
	]
}
```


## 执行模拟卖出


**接口地址**:`/api/mock/portfolios/orders/sell`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按产品最新1D收盘价模拟数量卖出，写入SELL订单、成交、持仓和新估值快照，不触发真实交易。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": "",
  "productBizId": "",
  "quantity": 0,
  "idempotencyKey": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|executeMockSellRequest|执行模拟卖出请求|body|true|ExecuteMockSellRequest|ExecuteMockSellRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||
|&emsp;&emsp;productBizId|产品业务唯一标识||true|string||
|&emsp;&emsp;quantity|卖出数量||true|number||
|&emsp;&emsp;idempotencyKey|客户端幂等键，用于避免重复提交||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|卖出成功，返回模拟订单执行结果|ResultMockOrderExecutionResponse|
|400|参数不合法、产品不可Mock交易、行情缺失或持仓不足|ResultMockOrderExecutionResponse|
|401|未登录或会话失效|ResultMockOrderExecutionResponse|
|403|无权操作该模拟组合|ResultMockOrderExecutionResponse|
|404|模拟组合、产品或持仓不存在|ResultMockOrderExecutionResponse|
|409|幂等订单状态异常|ResultMockOrderExecutionResponse|
|500|系统错误|ResultMockOrderExecutionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockOrderExecutionResponse|MockOrderExecutionResponse|
|&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"order": {
			"bizId": "",
			"orderNo": "",
			"portfolioBizId": "",
			"productBizId": "",
			"orderSide": "",
			"orderType": "",
			"currency": "",
			"requestedPrice": 0,
			"requestedQuantity": 0,
			"requestedAmount": 0,
			"executedQuantity": 0,
			"executedAmount": 0,
			"feeAmount": 0,
			"status": "",
			"completedAt": ""
		},
		"execution": {
			"bizId": "",
			"executionNo": "",
			"orderBizId": "",
			"executionPrice": 0,
			"executionQuantity": 0,
			"executionAmount": 0,
			"feeAmount": 0,
			"executedAt": ""
		},
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


## 查询模拟组合收益曲线


**接口地址**:`/api/mock/portfolios/performance/curve`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询组合估值历史，返回最新累计收益率、最大回撤和估值曲线点，用于前端绘制收益曲线。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": "",
  "limit": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|mockPortfolioPerformanceRequest|模拟组合收益曲线请求|body|true|MockPortfolioPerformanceRequest|MockPortfolioPerformanceRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||
|&emsp;&emsp;limit|收益曲线点数量上限，1-500，默认120||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回收益曲线响应|ResultMockPortfolioPerformanceResponse|
|400|参数不合法|ResultMockPortfolioPerformanceResponse|
|401|未登录或会话失效|ResultMockPortfolioPerformanceResponse|
|403|无权查看该模拟组合|ResultMockPortfolioPerformanceResponse|
|404|模拟组合不存在|ResultMockPortfolioPerformanceResponse|
|500|系统错误|ResultMockPortfolioPerformanceResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioPerformanceResponse|MockPortfolioPerformanceResponse|
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;latestReturnRate|最新累计收益率|number||
|&emsp;&emsp;maxDrawdown|最大回撤，小数形式|number||
|&emsp;&emsp;pointCount|收益曲线点数量|integer(int32)||
|&emsp;&emsp;valuations|估值曲线快照集合|array|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"portfolioBizId": "",
		"latestReturnRate": 0,
		"maxDrawdown": 0,
		"pointCount": 0,
		"valuations": [
			{
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			}
		]
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioPerformanceResponse|MockPortfolioPerformanceResponse|
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;latestReturnRate|最新累计收益率|number||
|&emsp;&emsp;maxDrawdown|最大回撤，小数形式|number||
|&emsp;&emsp;pointCount|收益曲线点数量|integer(int32)||
|&emsp;&emsp;valuations|估值曲线快照集合|array|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"portfolioBizId": "",
		"latestReturnRate": 0,
		"maxDrawdown": 0,
		"pointCount": 0,
		"valuations": [
			{
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			}
		]
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioPerformanceResponse|MockPortfolioPerformanceResponse|
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;latestReturnRate|最新累计收益率|number||
|&emsp;&emsp;maxDrawdown|最大回撤，小数形式|number||
|&emsp;&emsp;pointCount|收益曲线点数量|integer(int32)||
|&emsp;&emsp;valuations|估值曲线快照集合|array|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"portfolioBizId": "",
		"latestReturnRate": 0,
		"maxDrawdown": 0,
		"pointCount": 0,
		"valuations": [
			{
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			}
		]
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioPerformanceResponse|MockPortfolioPerformanceResponse|
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;latestReturnRate|最新累计收益率|number||
|&emsp;&emsp;maxDrawdown|最大回撤，小数形式|number||
|&emsp;&emsp;pointCount|收益曲线点数量|integer(int32)||
|&emsp;&emsp;valuations|估值曲线快照集合|array|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"portfolioBizId": "",
		"latestReturnRate": 0,
		"maxDrawdown": 0,
		"pointCount": 0,
		"valuations": [
			{
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			}
		]
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioPerformanceResponse|MockPortfolioPerformanceResponse|
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;latestReturnRate|最新累计收益率|number||
|&emsp;&emsp;maxDrawdown|最大回撤，小数形式|number||
|&emsp;&emsp;pointCount|收益曲线点数量|integer(int32)||
|&emsp;&emsp;valuations|估值曲线快照集合|array|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"portfolioBizId": "",
		"latestReturnRate": 0,
		"maxDrawdown": 0,
		"pointCount": 0,
		"valuations": [
			{
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			}
		]
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioPerformanceResponse|MockPortfolioPerformanceResponse|
|&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;latestReturnRate|最新累计收益率|number||
|&emsp;&emsp;maxDrawdown|最大回撤，小数形式|number||
|&emsp;&emsp;pointCount|收益曲线点数量|integer(int32)||
|&emsp;&emsp;valuations|估值曲线快照集合|array|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"portfolioBizId": "",
		"latestReturnRate": 0,
		"maxDrawdown": 0,
		"pointCount": 0,
		"valuations": [
			{
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			}
		]
	}
}
```


## 执行模拟再平衡


**接口地址**:`/api/mock/portfolios/rebalance/execute`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按目标产品权重计算当前组合差额，先模拟卖出超配产品，再模拟买入低配产品，返回每条调仓订单和最终组合。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": "",
  "targets": [
    {
      "productBizId": "",
      "targetWeight": 0
    }
  ],
  "minTradeAmount": 0,
  "idempotencyKey": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|executeMockRebalanceRequest|执行模拟再平衡请求|body|true|ExecuteMockRebalanceRequest|ExecuteMockRebalanceRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||
|&emsp;&emsp;targets|目标产品权重集合||true|array|TargetWeightRequest|
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识||true|string||
|&emsp;&emsp;&emsp;&emsp;targetWeight|目标权重，0到1之间的小数||true|number||
|&emsp;&emsp;minTradeAmount|最小调仓金额，低于该金额的差额不生成订单||false|number||
|&emsp;&emsp;idempotencyKey|客户端幂等键前缀，用于避免重复提交||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|再平衡成功，返回调仓执行结果|ResultMockRebalanceExecutionResponse|
|400|目标权重不合法、产品不可Mock交易、行情缺失、现金或持仓不足|ResultMockRebalanceExecutionResponse|
|401|未登录或会话失效|ResultMockRebalanceExecutionResponse|
|403|无权操作该模拟组合|ResultMockRebalanceExecutionResponse|
|404|模拟组合、产品或持仓不存在|ResultMockRebalanceExecutionResponse|
|409|幂等订单状态异常|ResultMockRebalanceExecutionResponse|
|500|系统错误|ResultMockRebalanceExecutionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockRebalanceExecutionResponse|MockRebalanceExecutionResponse|
|&emsp;&emsp;executions|本次调仓生成的订单执行结果|array|MockOrderExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;order|模拟订单|MockOrderResponse|MockOrderResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNo|订单展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioBizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderSide|订单方向|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderType|订单类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;currency|订单币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedPrice|委托价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedQuantity|委托数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;requestedAmount|委托金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|交易费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|订单状态|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;execution|模拟成交|TradeExecutionResponse|TradeExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|成交业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionNo|成交展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderBizId|订单业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionPrice|成交价格|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionQuantity|成交数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionAmount|成交金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;feeAmount|成交费用|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executedAt|成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;portfolio|成交后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||
|&emsp;&emsp;portfolio|调仓后的模拟组合详情|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"executions": [
			{
				"order": {
					"bizId": "",
					"orderNo": "",
					"portfolioBizId": "",
					"productBizId": "",
					"orderSide": "",
					"orderType": "",
					"currency": "",
					"requestedPrice": 0,
					"requestedQuantity": 0,
					"requestedAmount": 0,
					"executedQuantity": 0,
					"executedAmount": 0,
					"feeAmount": 0,
					"status": "",
					"completedAt": ""
				},
				"execution": {
					"bizId": "",
					"executionNo": "",
					"orderBizId": "",
					"executionPrice": 0,
					"executionQuantity": 0,
					"executionAmount": 0,
					"feeAmount": 0,
					"executedAt": ""
				},
				"portfolio": {
					"bizId": "",
					"portfolioNo": "",
					"ownerUserBizId": "",
					"portfolioName": "",
					"portfolioType": "",
					"baseCurrency": "",
					"status": 0,
					"latestValuation": {
						"valuationTime": "",
						"baseCurrency": "",
						"totalAsset": 0,
						"cashBalance": 0,
						"positionValue": 0,
						"totalCost": 0,
						"unrealizedProfit": 0,
						"realizedProfit": 0,
						"totalReturnRate": 0,
						"sourceCode": ""
					},
					"positions": [
						{
							"bizId": "",
							"productBizId": "",
							"positionSide": "",
							"quantity": 0,
							"availableQuantity": 0,
							"averageCost": 0,
							"costAmount": 0,
							"realizedProfit": 0,
							"lastTradeAt": ""
						}
					],
					"createdAt": "",
					"updatedAt": ""
				}
			}
		],
		"portfolio": {
			"bizId": "",
			"portfolioNo": "",
			"ownerUserBizId": "",
			"portfolioName": "",
			"portfolioType": "",
			"baseCurrency": "",
			"status": 0,
			"latestValuation": {
				"valuationTime": "",
				"baseCurrency": "",
				"totalAsset": 0,
				"cashBalance": 0,
				"positionValue": 0,
				"totalCost": 0,
				"unrealizedProfit": 0,
				"realizedProfit": 0,
				"totalReturnRate": 0,
				"sourceCode": ""
			},
			"positions": [
				{
					"bizId": "",
					"productBizId": "",
					"positionSide": "",
					"quantity": 0,
					"availableQuantity": 0,
					"averageCost": 0,
					"costAmount": 0,
					"realizedProfit": 0,
					"lastTradeAt": ""
				}
			],
			"createdAt": "",
			"updatedAt": ""
		}
	}
}
```


## 刷新模拟组合估值


**接口地址**:`/api/mock/portfolios/valuations/refresh`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按当前持仓和产品最新1D行情生成新的估值快照，返回刷新后的组合详情，用于前端手动刷新收益。</p>



**请求示例**:


```javascript
{
  "portfolioBizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|mockPortfolioDetailRequest|模拟组合详情请求|body|true|MockPortfolioDetailRequest|MockPortfolioDetailRequest|
|&emsp;&emsp;portfolioBizId|模拟组合业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|刷新成功，返回模拟组合详情|ResultMockPortfolioResponse|
|400|参数不合法或持仓产品缺少最新行情|ResultMockPortfolioResponse|
|401|未登录或会话失效|ResultMockPortfolioResponse|
|403|无权操作该模拟组合|ResultMockPortfolioResponse|
|404|模拟组合不存在|ResultMockPortfolioResponse|
|500|系统错误|ResultMockPortfolioResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|MockPortfolioResponse|MockPortfolioResponse|
|&emsp;&emsp;bizId|组合业务唯一标识|string||
|&emsp;&emsp;portfolioNo|组合展示编号|string||
|&emsp;&emsp;ownerUserBizId|组合所有者用户业务标识|string||
|&emsp;&emsp;portfolioName|组合名称|string||
|&emsp;&emsp;portfolioType|组合类型，当前固定为 SIMULATION|string||
|&emsp;&emsp;baseCurrency|基础计价币种|string||
|&emsp;&emsp;status|组合状态：0关闭、1正常、2冻结|integer(int32)||
|&emsp;&emsp;latestValuation|最新估值快照|PortfolioValuationResponse|PortfolioValuationResponse|
|&emsp;&emsp;&emsp;&emsp;valuationTime|估值时点（北京时间）|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;baseCurrency|估值计价币种|string||
|&emsp;&emsp;&emsp;&emsp;totalAsset|组合总资产|number||
|&emsp;&emsp;&emsp;&emsp;cashBalance|现金余额|number||
|&emsp;&emsp;&emsp;&emsp;positionValue|持仓市值|number||
|&emsp;&emsp;&emsp;&emsp;totalCost|持仓总成本|number||
|&emsp;&emsp;&emsp;&emsp;unrealizedProfit|未实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;totalReturnRate|累计收益率|number||
|&emsp;&emsp;&emsp;&emsp;sourceCode|估值来源编码|string||
|&emsp;&emsp;positions|当前持仓集合；列表页为空，详情页返回|array|PositionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|持仓业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;productBizId|产品业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;positionSide|持仓方向：LONG/SHORT|string||
|&emsp;&emsp;&emsp;&emsp;quantity|当前持仓数量|number||
|&emsp;&emsp;&emsp;&emsp;availableQuantity|当前可交易数量|number||
|&emsp;&emsp;&emsp;&emsp;averageCost|平均持仓成本|number||
|&emsp;&emsp;&emsp;&emsp;costAmount|持仓成本金额|number||
|&emsp;&emsp;&emsp;&emsp;realizedProfit|累计已实现盈亏|number||
|&emsp;&emsp;&emsp;&emsp;lastTradeAt|最近一次影响该持仓的成交时间（北京时间）|string(date-time)||
|&emsp;&emsp;createdAt|记录创建时间（北京时间）|string(date-time)||
|&emsp;&emsp;updatedAt|记录最后更新时间（北京时间）|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"portfolioNo": "",
		"ownerUserBizId": "",
		"portfolioName": "",
		"portfolioType": "",
		"baseCurrency": "",
		"status": 0,
		"latestValuation": {
			"valuationTime": "",
			"baseCurrency": "",
			"totalAsset": 0,
			"cashBalance": 0,
			"positionValue": 0,
			"totalCost": 0,
			"unrealizedProfit": 0,
			"realizedProfit": 0,
			"totalReturnRate": 0,
			"sourceCode": ""
		},
		"positions": [
			{
				"bizId": "",
				"productBizId": "",
				"positionSide": "",
				"quantity": 0,
				"availableQuantity": 0,
				"averageCost": 0,
				"costAmount": 0,
				"realizedProfit": 0,
				"lastTradeAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# 数据源治理


## AI发现数据源候选


**接口地址**:`/api/admin/data-sources/discover`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按市场、资产类别、采集方向和数据类型调用大模型生成高质量数据源候选；接口只返回候选，定时任务可配置为沉淀候选但默认不启用。</p>



**请求示例**:


```javascript
{
  "marketScope": "",
  "assetClass": "",
  "dataTypes": "",
  "topicKeywords": "",
  "collectionDirection": "",
  "skillCode": "",
  "preferredTrustLevels": "",
  "candidateLimit": 0,
  "environment": "",
  "includeDisabledCandidates": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|discoverDataSourcesRequest|AI 数据源发现请求|body|true|DiscoverDataSourcesRequest|DiscoverDataSourcesRequest|
|&emsp;&emsp;marketScope|市场范围，默认 CN_MAINLAND||false|string||
|&emsp;&emsp;assetClass|资产类别，例如 BANK_WMP/FUND/ETF/STOCK/MULTI_ASSET||false|string||
|&emsp;&emsp;dataTypes|目标数据类型，逗号分隔：MARKET_QUOTE/NEWS/ANNOUNCEMENT/RESEARCH/REGULATORY||false|string||
|&emsp;&emsp;topicKeywords|主题关键词，逗号分隔||false|string||
|&emsp;&emsp;collectionDirection|采集方向，例如 OFFICIAL_DISCLOSURE/NEWS_RESEARCH/PRODUCT_NAV/MULTI_SOURCE||false|string||
|&emsp;&emsp;skillCode|本次使用的 Skill 编码，空值按数据类型和采集方向自动选择||false|string||
|&emsp;&emsp;preferredTrustLevels|偏好的来源等级，逗号分隔：L1/L2/L3/L4/L5||false|string||
|&emsp;&emsp;candidateLimit|候选数量上限，默认取模型挂靠配置||false|integer(int32)||
|&emsp;&emsp;environment|模型挂靠配置环境，默认 DEFAULT||false|string||
|&emsp;&emsp;includeDisabledCandidates|是否包含需要授权或暂不可用的候选||false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|发现成功，返回候选数据源|ResultDataSourceDiscoveryResponse|
|400|参数或模型挂靠配置不合法|ResultDataSourceDiscoveryResponse|
|500|系统错误|ResultDataSourceDiscoveryResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceDiscoveryResponse|DataSourceDiscoveryResponse|
|&emsp;&emsp;scenarioCode|场景编码|string||
|&emsp;&emsp;modelCode|使用的模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;assetClass|资产类别|string||
|&emsp;&emsp;dataTypes|数据类型|string||
|&emsp;&emsp;topicKeywords|主题关键词|string||
|&emsp;&emsp;collectionDirection|采集方向|string||
|&emsp;&emsp;modelBindingConfig|模型挂靠配置|object||
|&emsp;&emsp;skillCode|本次发现使用的 Skill 编码|string||
|&emsp;&emsp;skillVersion|本次发现使用的 Skill 版本|string||
|&emsp;&emsp;skillInstruction|Skill 指令摘要|string||
|&emsp;&emsp;candidates|候选数据源|array|DataSourceDiscoveryCandidateResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|建议数据源编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|建议数据源名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;&emsp;&emsp;baseUrl|入口地址|string||
|&emsp;&emsp;&emsp;&emsp;fetchFrequency|建议采集频率|string||
|&emsp;&emsp;&emsp;&emsp;owner|建议负责人或维护方|string||
|&emsp;&emsp;&emsp;&emsp;description|说明|string||
|&emsp;&emsp;&emsp;&emsp;recommendedTaskType|推荐任务类型|string||
|&emsp;&emsp;&emsp;&emsp;suggestedParameters|建议任务参数|object||
|&emsp;&emsp;&emsp;&emsp;fieldMappings|建议字段映射|object||
|&emsp;&emsp;&emsp;&emsp;collectionPlan|AI 整理出的采集计划、接口说明、限制和样例|string||
|&emsp;&emsp;&emsp;&emsp;qualityPolicy|AI 整理出的质量校验规则|string||
|&emsp;&emsp;&emsp;&emsp;confidence|候选置信度|number||
|&emsp;&emsp;&emsp;&emsp;reasons|推荐理由|array|string|
|&emsp;&emsp;&emsp;&emsp;requiresReview|是否需要人工审核|boolean||
|&emsp;&emsp;reviewPolicy|审核策略|string||
|&emsp;&emsp;promptPreview|Prompt 预览|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"scenarioCode": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"marketScope": "",
		"assetClass": "",
		"dataTypes": "",
		"topicKeywords": "",
		"collectionDirection": "",
		"modelBindingConfig": {},
		"skillCode": "",
		"skillVersion": "",
		"skillInstruction": "",
		"candidates": [
			{
				"sourceCode": "",
				"sourceName": "",
				"sourceType": "",
				"trustLevel": "",
				"baseUrl": "",
				"fetchFrequency": "",
				"owner": "",
				"description": "",
				"recommendedTaskType": "",
				"suggestedParameters": {},
				"fieldMappings": {},
				"collectionPlan": "",
				"qualityPolicy": "",
				"confidence": 0,
				"reasons": [],
				"requiresReview": true
			}
		],
		"reviewPolicy": "",
		"promptPreview": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceDiscoveryResponse|DataSourceDiscoveryResponse|
|&emsp;&emsp;scenarioCode|场景编码|string||
|&emsp;&emsp;modelCode|使用的模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;assetClass|资产类别|string||
|&emsp;&emsp;dataTypes|数据类型|string||
|&emsp;&emsp;topicKeywords|主题关键词|string||
|&emsp;&emsp;collectionDirection|采集方向|string||
|&emsp;&emsp;modelBindingConfig|模型挂靠配置|object||
|&emsp;&emsp;skillCode|本次发现使用的 Skill 编码|string||
|&emsp;&emsp;skillVersion|本次发现使用的 Skill 版本|string||
|&emsp;&emsp;skillInstruction|Skill 指令摘要|string||
|&emsp;&emsp;candidates|候选数据源|array|DataSourceDiscoveryCandidateResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|建议数据源编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|建议数据源名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;&emsp;&emsp;baseUrl|入口地址|string||
|&emsp;&emsp;&emsp;&emsp;fetchFrequency|建议采集频率|string||
|&emsp;&emsp;&emsp;&emsp;owner|建议负责人或维护方|string||
|&emsp;&emsp;&emsp;&emsp;description|说明|string||
|&emsp;&emsp;&emsp;&emsp;recommendedTaskType|推荐任务类型|string||
|&emsp;&emsp;&emsp;&emsp;suggestedParameters|建议任务参数|object||
|&emsp;&emsp;&emsp;&emsp;fieldMappings|建议字段映射|object||
|&emsp;&emsp;&emsp;&emsp;collectionPlan|AI 整理出的采集计划、接口说明、限制和样例|string||
|&emsp;&emsp;&emsp;&emsp;qualityPolicy|AI 整理出的质量校验规则|string||
|&emsp;&emsp;&emsp;&emsp;confidence|候选置信度|number||
|&emsp;&emsp;&emsp;&emsp;reasons|推荐理由|array|string|
|&emsp;&emsp;&emsp;&emsp;requiresReview|是否需要人工审核|boolean||
|&emsp;&emsp;reviewPolicy|审核策略|string||
|&emsp;&emsp;promptPreview|Prompt 预览|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"scenarioCode": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"marketScope": "",
		"assetClass": "",
		"dataTypes": "",
		"topicKeywords": "",
		"collectionDirection": "",
		"modelBindingConfig": {},
		"skillCode": "",
		"skillVersion": "",
		"skillInstruction": "",
		"candidates": [
			{
				"sourceCode": "",
				"sourceName": "",
				"sourceType": "",
				"trustLevel": "",
				"baseUrl": "",
				"fetchFrequency": "",
				"owner": "",
				"description": "",
				"recommendedTaskType": "",
				"suggestedParameters": {},
				"fieldMappings": {},
				"collectionPlan": "",
				"qualityPolicy": "",
				"confidence": 0,
				"reasons": [],
				"requiresReview": true
			}
		],
		"reviewPolicy": "",
		"promptPreview": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceDiscoveryResponse|DataSourceDiscoveryResponse|
|&emsp;&emsp;scenarioCode|场景编码|string||
|&emsp;&emsp;modelCode|使用的模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;assetClass|资产类别|string||
|&emsp;&emsp;dataTypes|数据类型|string||
|&emsp;&emsp;topicKeywords|主题关键词|string||
|&emsp;&emsp;collectionDirection|采集方向|string||
|&emsp;&emsp;modelBindingConfig|模型挂靠配置|object||
|&emsp;&emsp;skillCode|本次发现使用的 Skill 编码|string||
|&emsp;&emsp;skillVersion|本次发现使用的 Skill 版本|string||
|&emsp;&emsp;skillInstruction|Skill 指令摘要|string||
|&emsp;&emsp;candidates|候选数据源|array|DataSourceDiscoveryCandidateResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|建议数据源编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|建议数据源名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;&emsp;&emsp;baseUrl|入口地址|string||
|&emsp;&emsp;&emsp;&emsp;fetchFrequency|建议采集频率|string||
|&emsp;&emsp;&emsp;&emsp;owner|建议负责人或维护方|string||
|&emsp;&emsp;&emsp;&emsp;description|说明|string||
|&emsp;&emsp;&emsp;&emsp;recommendedTaskType|推荐任务类型|string||
|&emsp;&emsp;&emsp;&emsp;suggestedParameters|建议任务参数|object||
|&emsp;&emsp;&emsp;&emsp;fieldMappings|建议字段映射|object||
|&emsp;&emsp;&emsp;&emsp;collectionPlan|AI 整理出的采集计划、接口说明、限制和样例|string||
|&emsp;&emsp;&emsp;&emsp;qualityPolicy|AI 整理出的质量校验规则|string||
|&emsp;&emsp;&emsp;&emsp;confidence|候选置信度|number||
|&emsp;&emsp;&emsp;&emsp;reasons|推荐理由|array|string|
|&emsp;&emsp;&emsp;&emsp;requiresReview|是否需要人工审核|boolean||
|&emsp;&emsp;reviewPolicy|审核策略|string||
|&emsp;&emsp;promptPreview|Prompt 预览|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"scenarioCode": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"marketScope": "",
		"assetClass": "",
		"dataTypes": "",
		"topicKeywords": "",
		"collectionDirection": "",
		"modelBindingConfig": {},
		"skillCode": "",
		"skillVersion": "",
		"skillInstruction": "",
		"candidates": [
			{
				"sourceCode": "",
				"sourceName": "",
				"sourceType": "",
				"trustLevel": "",
				"baseUrl": "",
				"fetchFrequency": "",
				"owner": "",
				"description": "",
				"recommendedTaskType": "",
				"suggestedParameters": {},
				"fieldMappings": {},
				"collectionPlan": "",
				"qualityPolicy": "",
				"confidence": 0,
				"reasons": [],
				"requiresReview": true
			}
		],
		"reviewPolicy": "",
		"promptPreview": ""
	}
}
```


## 保存数据源健康状态


**接口地址**:`/api/admin/data-sources/health/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存数据源最近成功、失败、成功率、延迟和失败原因，用于后台数据源看板。</p>



**请求示例**:


```javascript
{
  "sourceCode": "",
  "lastSuccessAt": "",
  "lastFailureAt": "",
  "successRate": 0,
  "avgLatencyMs": 0,
  "failureReason": "",
  "sampleCount": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveDataSourceHealthRequest|保存数据源健康状态请求|body|true|SaveDataSourceHealthRequest|SaveDataSourceHealthRequest|
|&emsp;&emsp;sourceCode|数据源稳定编码||true|string||
|&emsp;&emsp;lastSuccessAt|最近成功采集时间||false|string(date-time)||
|&emsp;&emsp;lastFailureAt|最近失败时间||false|string(date-time)||
|&emsp;&emsp;successRate|近期成功率，0-1||false|number||
|&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒||false|integer(int32)||
|&emsp;&emsp;failureReason|最近失败原因摘要||false|string||
|&emsp;&emsp;sampleCount|最近窗口样本数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回数据源治理响应|ResultDataSourceResponse|
|400|参数不合法|ResultDataSourceResponse|
|404|数据源不存在|ResultDataSourceResponse|
|500|系统错误|ResultDataSourceResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询数据源


**接口地址**:`/api/admin/data-sources/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按关键字、类型、来源等级和启用状态查询数据源，并返回健康状态和最新质量快照。</p>



**请求示例**:


```javascript
{
  "keyword": "",
  "sourceType": "",
  "trustLevel": "",
  "enabled": true,
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|dataSourceListRequest|数据源列表请求|body|true|DataSourceListRequest|DataSourceListRequest|
|&emsp;&emsp;keyword|关键字，匹配编码或名称||false|string||
|&emsp;&emsp;sourceType|数据源类型筛选||false|string||
|&emsp;&emsp;trustLevel|来源等级筛选||false|string||
|&emsp;&emsp;enabled|启用状态筛选||false|boolean||
|&emsp;&emsp;page|页码，从1开始||false|integer(int32)||
|&emsp;&emsp;size|每页数量||false|integer(int32)||
|&emsp;&emsp;sort|排序字段||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回数据源分页响应|ResultPageResponseDataSourceResponse|
|400|分页或筛选参数不合法|ResultPageResponseDataSourceResponse|
|500|系统错误|ResultPageResponseDataSourceResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseDataSourceResponse|PageResponseDataSourceResponse|
|&emsp;&emsp;items|当前页数据列表|array|DataSourceResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"sourceCode": "",
				"sourceName": "",
				"sourceType": "",
				"trustLevel": "",
				"baseUrl": "",
				"enabled": true,
				"fetchFrequency": "",
				"owner": "",
				"description": "",
				"health": {
					"sourceCode": "",
					"lastSuccessAt": "",
					"lastFailureAt": "",
					"successRate": 0,
					"avgLatencyMs": 0,
					"failureReason": "",
					"sampleCount": 0,
					"updatedAt": ""
				},
				"latestQuality": {
					"bizId": "",
					"sourceCode": "",
					"dataType": "",
					"qualityScore": 0,
					"missingRate": 0,
					"duplicateRate": 0,
					"freshnessScore": 0,
					"sampleCount": 0,
					"snapshotTime": "",
					"detail": ""
				},
				"qualityLevel": "",
				"displayMessage": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseDataSourceResponse|PageResponseDataSourceResponse|
|&emsp;&emsp;items|当前页数据列表|array|DataSourceResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"sourceCode": "",
				"sourceName": "",
				"sourceType": "",
				"trustLevel": "",
				"baseUrl": "",
				"enabled": true,
				"fetchFrequency": "",
				"owner": "",
				"description": "",
				"health": {
					"sourceCode": "",
					"lastSuccessAt": "",
					"lastFailureAt": "",
					"successRate": 0,
					"avgLatencyMs": 0,
					"failureReason": "",
					"sampleCount": 0,
					"updatedAt": ""
				},
				"latestQuality": {
					"bizId": "",
					"sourceCode": "",
					"dataType": "",
					"qualityScore": 0,
					"missingRate": 0,
					"duplicateRate": 0,
					"freshnessScore": 0,
					"sampleCount": 0,
					"snapshotTime": "",
					"detail": ""
				},
				"qualityLevel": "",
				"displayMessage": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseDataSourceResponse|PageResponseDataSourceResponse|
|&emsp;&emsp;items|当前页数据列表|array|DataSourceResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"sourceCode": "",
				"sourceName": "",
				"sourceType": "",
				"trustLevel": "",
				"baseUrl": "",
				"enabled": true,
				"fetchFrequency": "",
				"owner": "",
				"description": "",
				"health": {
					"sourceCode": "",
					"lastSuccessAt": "",
					"lastFailureAt": "",
					"successRate": 0,
					"avgLatencyMs": 0,
					"failureReason": "",
					"sampleCount": 0,
					"updatedAt": ""
				},
				"latestQuality": {
					"bizId": "",
					"sourceCode": "",
					"dataType": "",
					"qualityScore": 0,
					"missingRate": 0,
					"duplicateRate": 0,
					"freshnessScore": 0,
					"sampleCount": 0,
					"snapshotTime": "",
					"detail": ""
				},
				"qualityLevel": "",
				"displayMessage": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 查询数据质量快照


**接口地址**:`/api/admin/data-sources/quality/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定数据源和可选数据类型的质量快照历史，用于前端质量趋势图。</p>



**请求示例**:


```javascript
{
  "sourceCode": "",
  "dataType": "",
  "limit": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|dataQualitySnapshotListRequest|数据质量快照列表请求|body|true|DataQualitySnapshotListRequest|DataQualitySnapshotListRequest|
|&emsp;&emsp;sourceCode|数据源稳定编码||true|string||
|&emsp;&emsp;dataType|数据类型，可为空||false|string||
|&emsp;&emsp;limit|返回数量上限，默认20，最大200||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回质量快照集合|ResultListDataQualitySnapshotResponse|
|400|参数不合法|ResultListDataQualitySnapshotResponse|
|404|数据源不存在|ResultListDataQualitySnapshotResponse|
|500|系统错误|ResultListDataQualitySnapshotResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		}
	]
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		}
	]
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		}
	]
}
```


## 保存数据质量快照


**接口地址**:`/api/admin/data-sources/quality/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存数据源某类数据的质量分、缺失率、重复率、新鲜度和解释详情。</p>



**请求示例**:


```javascript
{
  "sourceCode": "",
  "dataType": "",
  "qualityScore": 0,
  "missingRate": 0,
  "duplicateRate": 0,
  "freshnessScore": 0,
  "sampleCount": 0,
  "snapshotTime": "",
  "detail": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveDataQualitySnapshotRequest|保存数据质量快照请求|body|true|SaveDataQualitySnapshotRequest|SaveDataQualitySnapshotRequest|
|&emsp;&emsp;sourceCode|数据源稳定编码||true|string||
|&emsp;&emsp;dataType|数据类型：MARKET_QUOTE/NEWS/ANNOUNCEMENT/RESEARCH/REGULATORY||true|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1||false|number||
|&emsp;&emsp;missingRate|缺失率，0-1||false|number||
|&emsp;&emsp;duplicateRate|重复率，0-1||false|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1||false|number||
|&emsp;&emsp;sampleCount|参与评估样本数||false|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间；为空时使用服务端当前时间||false|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回质量快照|ResultDataQualitySnapshotResponse|
|400|参数不合法|ResultDataQualitySnapshotResponse|
|404|数据源不存在|ResultDataQualitySnapshotResponse|
|500|系统错误|ResultDataQualitySnapshotResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"dataType": "",
		"qualityScore": 0,
		"missingRate": 0,
		"duplicateRate": 0,
		"freshnessScore": 0,
		"sampleCount": 0,
		"snapshotTime": "",
		"detail": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"dataType": "",
		"qualityScore": 0,
		"missingRate": 0,
		"duplicateRate": 0,
		"freshnessScore": 0,
		"sampleCount": 0,
		"snapshotTime": "",
		"detail": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"dataType": "",
		"qualityScore": 0,
		"missingRate": 0,
		"duplicateRate": 0,
		"freshnessScore": 0,
		"sampleCount": 0,
		"snapshotTime": "",
		"detail": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"dataType": "",
		"qualityScore": 0,
		"missingRate": 0,
		"duplicateRate": 0,
		"freshnessScore": 0,
		"sampleCount": 0,
		"snapshotTime": "",
		"detail": ""
	}
}
```


## 保存数据源


**接口地址**:`/api/admin/data-sources/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>新增或更新投资数据源注册信息，包括来源等级、类型、采集频率和启用状态。</p>



**请求示例**:


```javascript
{
  "sourceCode": "",
  "sourceName": "",
  "sourceType": "",
  "trustLevel": "",
  "baseUrl": "",
  "enabled": true,
  "fetchFrequency": "",
  "owner": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveDataSourceRequest|保存数据源请求|body|true|SaveDataSourceRequest|SaveDataSourceRequest|
|&emsp;&emsp;sourceCode|数据源稳定编码||true|string||
|&emsp;&emsp;sourceName|数据源展示名称||true|string||
|&emsp;&emsp;sourceType|数据源类型：MARKET/NEWS/ANNOUNCEMENT/RESEARCH/REGULATORY/FALLBACK||true|string||
|&emsp;&emsp;trustLevel|来源等级：L1-L5||true|string||
|&emsp;&emsp;baseUrl|数据源入口地址||false|string||
|&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式||false|string||
|&emsp;&emsp;owner|负责人或维护方||false|string||
|&emsp;&emsp;description|数据源用途说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回数据源治理响应|ResultDataSourceResponse|
|400|参数不合法|ResultDataSourceResponse|
|401|未登录或会话失效|ResultDataSourceResponse|
|500|系统错误|ResultDataSourceResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|DataSourceResponse|DataSourceResponse|
|&emsp;&emsp;bizId|数据源业务唯一标识|string||
|&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;sourceName|数据源展示名称|string||
|&emsp;&emsp;sourceType|数据源类型|string||
|&emsp;&emsp;trustLevel|来源等级|string||
|&emsp;&emsp;baseUrl|数据源入口地址|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;fetchFrequency|采集频率说明或 cron 表达式|string||
|&emsp;&emsp;owner|负责人或维护方|string||
|&emsp;&emsp;description|数据源用途说明|string||
|&emsp;&emsp;health|健康状态|DataSourceHealthResponse|DataSourceHealthResponse|
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;lastSuccessAt|最近成功采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastFailureAt|最近失败时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;successRate|近期成功率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;avgLatencyMs|平均响应耗时毫秒|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;failureReason|最近失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;sampleCount|最近窗口样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;latestQuality|最新质量快照|DataQualitySnapshotResponse|DataQualitySnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|数据质量快照业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|数据源稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;dataType|数据类型|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|综合质量分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;missingRate|缺失率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;duplicateRate|重复率，0-1|number||
|&emsp;&emsp;&emsp;&emsp;freshnessScore|新鲜度分，0-1|number||
|&emsp;&emsp;&emsp;&emsp;sampleCount|参与评估样本数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|质量快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;detail|质量评估上下文和解释 JSON|string||
|&emsp;&emsp;qualityLevel|质量等级|string||
|&emsp;&emsp;displayMessage|前端展示提示文案|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"sourceCode": "",
		"sourceName": "",
		"sourceType": "",
		"trustLevel": "",
		"baseUrl": "",
		"enabled": true,
		"fetchFrequency": "",
		"owner": "",
		"description": "",
		"health": {
			"sourceCode": "",
			"lastSuccessAt": "",
			"lastFailureAt": "",
			"successRate": 0,
			"avgLatencyMs": 0,
			"failureReason": "",
			"sampleCount": 0,
			"updatedAt": ""
		},
		"latestQuality": {
			"bizId": "",
			"sourceCode": "",
			"dataType": "",
			"qualityScore": 0,
			"missingRate": 0,
			"duplicateRate": 0,
			"freshnessScore": 0,
			"sampleCount": 0,
			"snapshotTime": "",
			"detail": ""
		},
		"qualityLevel": "",
		"displayMessage": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# 投资反馈


## 查询投资反馈详情


**接口地址**:`/api/ai/feedback/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据反馈业务 ID 查询用户动作、关联报告、Prompt、回测和备注。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|investmentFeedbackBizIdRequest|投资反馈业务 ID 请求|body|true|InvestmentFeedbackBizIdRequest|InvestmentFeedbackBizIdRequest|
|&emsp;&emsp;bizId|反馈业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回反馈详情|ResultInvestmentFeedbackResponse|
|403|反馈记录不属于当前用户|ResultInvestmentFeedbackResponse|
|404|反馈不存在|ResultInvestmentFeedbackResponse|
|500|系统错误|ResultInvestmentFeedbackResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


## 分页查询投资反馈


**接口地址**:`/api/ai/feedback/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按目标、报告、Prompt、回测和动作查询当前用户反馈历史。</p>



**请求示例**:


```javascript
{
  "targetType": "",
  "targetBizId": "",
  "reportBizId": "",
  "promptCode": "",
  "promptVersion": "",
  "backtestBizId": "",
  "feedbackAction": "",
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|investmentFeedbackListRequest|投资反馈分页查询请求|body|true|InvestmentFeedbackListRequest|InvestmentFeedbackListRequest|
|&emsp;&emsp;targetType|反馈目标类型||false|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识||false|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识||false|string||
|&emsp;&emsp;promptCode|Prompt稳定编码||false|string||
|&emsp;&emsp;promptVersion|Prompt版本||false|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识||false|string||
|&emsp;&emsp;feedbackAction|反馈动作||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：createdAt/targetType/feedbackAction/promptCode/promptVersion||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回反馈分页响应|ResultPageResponseInvestmentFeedbackResponse|
|400|分页或排序参数不合法|ResultPageResponseInvestmentFeedbackResponse|
|500|系统错误|ResultPageResponseInvestmentFeedbackResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentFeedbackResponse|PageResponseInvestmentFeedbackResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentFeedbackResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"userBizId": "",
				"targetType": "",
				"targetBizId": "",
				"reportBizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"backtestBizId": "",
				"feedbackAction": "",
				"reasonCode": "",
				"commentText": "",
				"metadata": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentFeedbackResponse|PageResponseInvestmentFeedbackResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentFeedbackResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"userBizId": "",
				"targetType": "",
				"targetBizId": "",
				"reportBizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"backtestBizId": "",
				"feedbackAction": "",
				"reasonCode": "",
				"commentText": "",
				"metadata": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentFeedbackResponse|PageResponseInvestmentFeedbackResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentFeedbackResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"userBizId": "",
				"targetType": "",
				"targetBizId": "",
				"reportBizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"backtestBizId": "",
				"feedbackAction": "",
				"reasonCode": "",
				"commentText": "",
				"metadata": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存投资反馈


**接口地址**:`/api/ai/feedback/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存用户采纳、拒绝、观察或忽略反馈，并在携带 Prompt 信息时自动生成 Prompt 评估。</p>



**请求示例**:


```javascript
{
  "targetType": "",
  "targetBizId": "",
  "reportBizId": "",
  "promptBizId": "",
  "promptCode": "",
  "promptVersion": "",
  "backtestBizId": "",
  "feedbackAction": "",
  "reasonCode": "",
  "commentText": "",
  "metadata": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveInvestmentFeedbackRequest|保存投资反馈请求|body|true|SaveInvestmentFeedbackRequest|SaveInvestmentFeedbackRequest|
|&emsp;&emsp;targetType|反馈目标类型：REPORT/RECOMMENDATION/MOCK_ORDER/MOCK_PORTFOLIO/BACKTEST/PROMPT||true|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识||true|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识||false|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识||false|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照||false|string||
|&emsp;&emsp;promptVersion|Prompt版本快照||false|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识||false|string||
|&emsp;&emsp;feedbackAction|反馈动作：ADOPT/REJECT/WATCH/IGNORE||true|string||
|&emsp;&emsp;reasonCode|原因编码||false|string||
|&emsp;&emsp;commentText|用户或人工复核备注||false|string||
|&emsp;&emsp;metadata|反馈上下文 JSON||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回反馈记录|ResultInvestmentFeedbackResponse|
|400|参数或JSON格式不合法|ResultInvestmentFeedbackResponse|
|403|关联回测结果不属于当前用户|ResultInvestmentFeedbackResponse|
|500|系统错误|ResultInvestmentFeedbackResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentFeedbackResponse|InvestmentFeedbackResponse|
|&emsp;&emsp;bizId|反馈业务唯一标识|string||
|&emsp;&emsp;userBizId|反馈用户业务标识|string||
|&emsp;&emsp;targetType|反馈目标类型|string||
|&emsp;&emsp;targetBizId|反馈目标业务标识|string||
|&emsp;&emsp;reportBizId|关联投资报告业务标识|string||
|&emsp;&emsp;promptBizId|关联Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackAction|反馈动作|string||
|&emsp;&emsp;reasonCode|原因编码|string||
|&emsp;&emsp;commentText|用户或人工复核备注|string||
|&emsp;&emsp;metadata|反馈上下文 JSON|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"userBizId": "",
		"targetType": "",
		"targetBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"feedbackAction": "",
		"reasonCode": "",
		"commentText": "",
		"metadata": "",
		"createdAt": ""
	}
}
```


# 投资分析


## 生成投资分析报告


**接口地址**:`/api/investment/analysis/generate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>调用可插拔分析提供方生成投资信息汇总、趋势、投资方案、模拟收益和前端图表数据。</p>



**请求示例**:


```javascript
{
  "providerCode": "OPENAI_COMPATIBLE",
  "modelCode": "openai-compatible-analysis",
  "marketScope": "CN_MAINLAND",
  "themeCode": "AI人工智能",
  "lookbackDays": 30,
  "initialCapital": 100000
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|generateInvestmentAnalysisRequest|生成投资分析报告请求|body|true|GenerateInvestmentAnalysisRequest|GenerateInvestmentAnalysisRequest|
|&emsp;&emsp;providerCode|可选提供方校验值；实际提供方由 ACTIVE 模型配置决定||false|string||
|&emsp;&emsp;modelCode|模型稳定编码；为空时使用 openai-compatible-analysis||false|string||
|&emsp;&emsp;marketScope|市场范围，默认仅中国大陆||false|string||
|&emsp;&emsp;themeCode|投资主题编码；为空时分析全部中国大陆主题||false|string||
|&emsp;&emsp;lookbackDays|回看天数，默认 30||false|integer(int32)||
|&emsp;&emsp;initialCapital|模拟收益初始资金，默认 100000||false|number||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回投资分析报告|ResultInvestmentAnalysisReportResponse|
|400|参数校验失败或分析提供方不存在|ResultInvestmentAnalysisReportResponse|
|500|系统错误|ResultInvestmentAnalysisReportResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentAnalysisReportResponse|InvestmentAnalysisReportResponse|
|&emsp;&emsp;bizId|报告业务 ID|string||
|&emsp;&emsp;requestId|本次分析请求 ID|string||
|&emsp;&emsp;providerCode|分析提供方编码|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;status|状态：SUCCEEDED/FAILED|string||
|&emsp;&emsp;confidenceLevel|报告可信等级：HIGH_CONFIDENCE/MEDIUM_CONFIDENCE/LOW_CONFIDENCE/UNUSABLE|string||
|&emsp;&emsp;dataQualityScore|报告输入数据质量分，0-1；前端列表页可直接展示|number||
|&emsp;&emsp;dataQualityGate|数据质量门禁 JSON 字符串。\npassed:boolean，是否通过质量门禁；\nconfidenceLevel:string，可信等级；\ndataQualityScore:number，数据质量分；\nsnapshotCount:number，快照样本数量；\nnewsCount:number，相关新闻数量；\nfallbackNewsRatio:number，兜底资讯占比；\nreasons:array，降级原因编码；\ndisplayMessage:string，前端直接展示的中文提示；\nallowedActions:array，允许动作，例如 VIEW_REPORT/SHOW_DATA_GAP/GENERATE_PROMPT/MOCK_TRADE。\n|string||
|&emsp;&emsp;investmentSummary|投资信息汇总 JSON 字符串。\nmarketScope:string，市场范围；\nthemeCode:string，主题编码；\nsampleCount:number，快照样本数；\nnewsCount:number，相关新闻数；\naverageReturn:number，平均收益率，小数形式；\naverageMomentum:number，平均动量；\naverageHeat:number，加权资讯热度；\ndataQualityScore:number，数据质量分，0-1；\ndataQualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nlatestSnapshotTime:datetime，最近快照时间，北京时间；\nrecentNews:array，近期新闻数组，每项包含 title/summary/publishTime/sourceCode。\n|string||
|&emsp;&emsp;trend|趋势分析 JSON 字符串。\ndirection:string，趋势方向，允许值 UP/NEUTRAL/DOWN；\naverageReturn:number，平均收益率；\naverageMomentum:number，平均动量；\nnewsHeat:number，相关新闻数量；\nweightedHeatScore:number，加权资讯热度分；\ndataQualityScore:number，数据质量分；\nlookbackDays:number，回看天数。\n|string||
|&emsp;&emsp;investmentPlan|投资方案 JSON 字符串。\nplanType:string，方案类型，当前为 REFERENCE_ALLOCATION；\nsuggestedAction:string，建议动作；\nreferenceAllocationRate:number，参考配置比例，0-1；\nreferenceAllocationAmount:number，参考配置金额；\ndataQualityLevel:string，数据质量等级；\nrebalanceRule:string，再平衡规则；\nriskNotice:string，风险提示。\n|string||
|&emsp;&emsp;simulatedReturn|模拟收益 JSON 字符串。\ninitialCapital:number，初始资金；\nallocationRate:number，参考配置比例；\nsimulatedPrincipal:number，参与模拟的本金；\nestimatedProfit:number，基准情景模拟收益；\nestimatedFinalCapital:number，模拟期末资金；\nreturnRate:number，使用的平均收益率；\nstressLoss:number，压力情景收益；\noptimisticProfit:number，乐观情景收益；\nassumption:string，模拟假设说明。\n|string||
|&emsp;&emsp;chartPayload|前端图表数据 JSON 字符串。\nseries:array，快照时间序列，每项包含 time/snapshotType/returnRate/momentumScore/heatScore；\nnews:array，新闻事件点，每项包含 time/title/sourceCode。\n前端可用 series 绘制收益、动量、热度折线图，用 news 叠加事件标记。\n|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;generatedAt|生成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"requestId": "",
		"providerCode": "LOCAL_RULE",
		"modelCode": "local-rule-v1",
		"marketScope": "CN_MAINLAND",
		"themeCode": "",
		"themeName": "",
		"status": "",
		"confidenceLevel": "",
		"dataQualityScore": 0,
		"dataQualityGate": "",
		"investmentSummary": "",
		"trend": "",
		"investmentPlan": "",
		"simulatedReturn": "",
		"chartPayload": "",
		"failureReason": "",
		"generatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentAnalysisReportResponse|InvestmentAnalysisReportResponse|
|&emsp;&emsp;bizId|报告业务 ID|string||
|&emsp;&emsp;requestId|本次分析请求 ID|string||
|&emsp;&emsp;providerCode|分析提供方编码|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;status|状态：SUCCEEDED/FAILED|string||
|&emsp;&emsp;confidenceLevel|报告可信等级：HIGH_CONFIDENCE/MEDIUM_CONFIDENCE/LOW_CONFIDENCE/UNUSABLE|string||
|&emsp;&emsp;dataQualityScore|报告输入数据质量分，0-1；前端列表页可直接展示|number||
|&emsp;&emsp;dataQualityGate|数据质量门禁 JSON 字符串。\npassed:boolean，是否通过质量门禁；\nconfidenceLevel:string，可信等级；\ndataQualityScore:number，数据质量分；\nsnapshotCount:number，快照样本数量；\nnewsCount:number，相关新闻数量；\nfallbackNewsRatio:number，兜底资讯占比；\nreasons:array，降级原因编码；\ndisplayMessage:string，前端直接展示的中文提示；\nallowedActions:array，允许动作，例如 VIEW_REPORT/SHOW_DATA_GAP/GENERATE_PROMPT/MOCK_TRADE。\n|string||
|&emsp;&emsp;investmentSummary|投资信息汇总 JSON 字符串。\nmarketScope:string，市场范围；\nthemeCode:string，主题编码；\nsampleCount:number，快照样本数；\nnewsCount:number，相关新闻数；\naverageReturn:number，平均收益率，小数形式；\naverageMomentum:number，平均动量；\naverageHeat:number，加权资讯热度；\ndataQualityScore:number，数据质量分，0-1；\ndataQualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nlatestSnapshotTime:datetime，最近快照时间，北京时间；\nrecentNews:array，近期新闻数组，每项包含 title/summary/publishTime/sourceCode。\n|string||
|&emsp;&emsp;trend|趋势分析 JSON 字符串。\ndirection:string，趋势方向，允许值 UP/NEUTRAL/DOWN；\naverageReturn:number，平均收益率；\naverageMomentum:number，平均动量；\nnewsHeat:number，相关新闻数量；\nweightedHeatScore:number，加权资讯热度分；\ndataQualityScore:number，数据质量分；\nlookbackDays:number，回看天数。\n|string||
|&emsp;&emsp;investmentPlan|投资方案 JSON 字符串。\nplanType:string，方案类型，当前为 REFERENCE_ALLOCATION；\nsuggestedAction:string，建议动作；\nreferenceAllocationRate:number，参考配置比例，0-1；\nreferenceAllocationAmount:number，参考配置金额；\ndataQualityLevel:string，数据质量等级；\nrebalanceRule:string，再平衡规则；\nriskNotice:string，风险提示。\n|string||
|&emsp;&emsp;simulatedReturn|模拟收益 JSON 字符串。\ninitialCapital:number，初始资金；\nallocationRate:number，参考配置比例；\nsimulatedPrincipal:number，参与模拟的本金；\nestimatedProfit:number，基准情景模拟收益；\nestimatedFinalCapital:number，模拟期末资金；\nreturnRate:number，使用的平均收益率；\nstressLoss:number，压力情景收益；\noptimisticProfit:number，乐观情景收益；\nassumption:string，模拟假设说明。\n|string||
|&emsp;&emsp;chartPayload|前端图表数据 JSON 字符串。\nseries:array，快照时间序列，每项包含 time/snapshotType/returnRate/momentumScore/heatScore；\nnews:array，新闻事件点，每项包含 time/title/sourceCode。\n前端可用 series 绘制收益、动量、热度折线图，用 news 叠加事件标记。\n|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;generatedAt|生成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"requestId": "",
		"providerCode": "LOCAL_RULE",
		"modelCode": "local-rule-v1",
		"marketScope": "CN_MAINLAND",
		"themeCode": "",
		"themeName": "",
		"status": "",
		"confidenceLevel": "",
		"dataQualityScore": 0,
		"dataQualityGate": "",
		"investmentSummary": "",
		"trend": "",
		"investmentPlan": "",
		"simulatedReturn": "",
		"chartPayload": "",
		"failureReason": "",
		"generatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentAnalysisReportResponse|InvestmentAnalysisReportResponse|
|&emsp;&emsp;bizId|报告业务 ID|string||
|&emsp;&emsp;requestId|本次分析请求 ID|string||
|&emsp;&emsp;providerCode|分析提供方编码|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;status|状态：SUCCEEDED/FAILED|string||
|&emsp;&emsp;confidenceLevel|报告可信等级：HIGH_CONFIDENCE/MEDIUM_CONFIDENCE/LOW_CONFIDENCE/UNUSABLE|string||
|&emsp;&emsp;dataQualityScore|报告输入数据质量分，0-1；前端列表页可直接展示|number||
|&emsp;&emsp;dataQualityGate|数据质量门禁 JSON 字符串。\npassed:boolean，是否通过质量门禁；\nconfidenceLevel:string，可信等级；\ndataQualityScore:number，数据质量分；\nsnapshotCount:number，快照样本数量；\nnewsCount:number，相关新闻数量；\nfallbackNewsRatio:number，兜底资讯占比；\nreasons:array，降级原因编码；\ndisplayMessage:string，前端直接展示的中文提示；\nallowedActions:array，允许动作，例如 VIEW_REPORT/SHOW_DATA_GAP/GENERATE_PROMPT/MOCK_TRADE。\n|string||
|&emsp;&emsp;investmentSummary|投资信息汇总 JSON 字符串。\nmarketScope:string，市场范围；\nthemeCode:string，主题编码；\nsampleCount:number，快照样本数；\nnewsCount:number，相关新闻数；\naverageReturn:number，平均收益率，小数形式；\naverageMomentum:number，平均动量；\naverageHeat:number，加权资讯热度；\ndataQualityScore:number，数据质量分，0-1；\ndataQualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nlatestSnapshotTime:datetime，最近快照时间，北京时间；\nrecentNews:array，近期新闻数组，每项包含 title/summary/publishTime/sourceCode。\n|string||
|&emsp;&emsp;trend|趋势分析 JSON 字符串。\ndirection:string，趋势方向，允许值 UP/NEUTRAL/DOWN；\naverageReturn:number，平均收益率；\naverageMomentum:number，平均动量；\nnewsHeat:number，相关新闻数量；\nweightedHeatScore:number，加权资讯热度分；\ndataQualityScore:number，数据质量分；\nlookbackDays:number，回看天数。\n|string||
|&emsp;&emsp;investmentPlan|投资方案 JSON 字符串。\nplanType:string，方案类型，当前为 REFERENCE_ALLOCATION；\nsuggestedAction:string，建议动作；\nreferenceAllocationRate:number，参考配置比例，0-1；\nreferenceAllocationAmount:number，参考配置金额；\ndataQualityLevel:string，数据质量等级；\nrebalanceRule:string，再平衡规则；\nriskNotice:string，风险提示。\n|string||
|&emsp;&emsp;simulatedReturn|模拟收益 JSON 字符串。\ninitialCapital:number，初始资金；\nallocationRate:number，参考配置比例；\nsimulatedPrincipal:number，参与模拟的本金；\nestimatedProfit:number，基准情景模拟收益；\nestimatedFinalCapital:number，模拟期末资金；\nreturnRate:number，使用的平均收益率；\nstressLoss:number，压力情景收益；\noptimisticProfit:number，乐观情景收益；\nassumption:string，模拟假设说明。\n|string||
|&emsp;&emsp;chartPayload|前端图表数据 JSON 字符串。\nseries:array，快照时间序列，每项包含 time/snapshotType/returnRate/momentumScore/heatScore；\nnews:array，新闻事件点，每项包含 time/title/sourceCode。\n前端可用 series 绘制收益、动量、热度折线图，用 news 叠加事件标记。\n|string||
|&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;generatedAt|生成时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"requestId": "",
		"providerCode": "LOCAL_RULE",
		"modelCode": "local-rule-v1",
		"marketScope": "CN_MAINLAND",
		"themeCode": "",
		"themeName": "",
		"status": "",
		"confidenceLevel": "",
		"dataQualityScore": 0,
		"dataQualityGate": "",
		"investmentSummary": "",
		"trend": "",
		"investmentPlan": "",
		"simulatedReturn": "",
		"chartPayload": "",
		"failureReason": "",
		"generatedAt": "",
		"createdAt": ""
	}
}
```


## 分页查询投资分析报告


**接口地址**:`/api/investment/analysis/reports/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按市场范围、主题、提供方和状态查询已生成报告，响应包含前端图表 JSON。</p>



**请求示例**:


```javascript
{
  "marketScope": "CN_MAINLAND",
  "themeCode": "AI人工智能",
  "providerCode": "LOCAL_RULE",
  "status": "SUCCEEDED",
  "page": 1,
  "size": 20,
  "sort": "generatedAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|investmentAnalysisReportListRequest|投资分析报告分页请求|body|true|InvestmentAnalysisReportListRequest|InvestmentAnalysisReportListRequest|
|&emsp;&emsp;marketScope|市场范围，默认仅中国大陆||false|string||
|&emsp;&emsp;themeCode|投资主题编码||false|string||
|&emsp;&emsp;providerCode|分析提供方编码||false|string||
|&emsp;&emsp;status|状态：SUCCEEDED/FAILED||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：generatedAt/createdAt/providerCode/modelCode/themeCode/status/confidenceLevel/dataQualityScore||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回投资分析报告分页响应|ResultPageResponseInvestmentAnalysisReportResponse|
|400|分页或排序参数不合法|ResultPageResponseInvestmentAnalysisReportResponse|
|500|系统错误|ResultPageResponseInvestmentAnalysisReportResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentAnalysisReportResponse|PageResponseInvestmentAnalysisReportResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentAnalysisReportResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|报告业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;requestId|本次分析请求 ID|string||
|&emsp;&emsp;&emsp;&emsp;providerCode|分析提供方编码|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;&emsp;&emsp;status|状态：SUCCEEDED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;confidenceLevel|报告可信等级：HIGH_CONFIDENCE/MEDIUM_CONFIDENCE/LOW_CONFIDENCE/UNUSABLE|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|报告输入数据质量分，0-1；前端列表页可直接展示|number||
|&emsp;&emsp;&emsp;&emsp;dataQualityGate|数据质量门禁 JSON 字符串。\npassed:boolean，是否通过质量门禁；\nconfidenceLevel:string，可信等级；\ndataQualityScore:number，数据质量分；\nsnapshotCount:number，快照样本数量；\nnewsCount:number，相关新闻数量；\nfallbackNewsRatio:number，兜底资讯占比；\nreasons:array，降级原因编码；\ndisplayMessage:string，前端直接展示的中文提示；\nallowedActions:array，允许动作，例如 VIEW_REPORT/SHOW_DATA_GAP/GENERATE_PROMPT/MOCK_TRADE。\n|string||
|&emsp;&emsp;&emsp;&emsp;investmentSummary|投资信息汇总 JSON 字符串。\nmarketScope:string，市场范围；\nthemeCode:string，主题编码；\nsampleCount:number，快照样本数；\nnewsCount:number，相关新闻数；\naverageReturn:number，平均收益率，小数形式；\naverageMomentum:number，平均动量；\naverageHeat:number，加权资讯热度；\ndataQualityScore:number，数据质量分，0-1；\ndataQualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nlatestSnapshotTime:datetime，最近快照时间，北京时间；\nrecentNews:array，近期新闻数组，每项包含 title/summary/publishTime/sourceCode。\n|string||
|&emsp;&emsp;&emsp;&emsp;trend|趋势分析 JSON 字符串。\ndirection:string，趋势方向，允许值 UP/NEUTRAL/DOWN；\naverageReturn:number，平均收益率；\naverageMomentum:number，平均动量；\nnewsHeat:number，相关新闻数量；\nweightedHeatScore:number，加权资讯热度分；\ndataQualityScore:number，数据质量分；\nlookbackDays:number，回看天数。\n|string||
|&emsp;&emsp;&emsp;&emsp;investmentPlan|投资方案 JSON 字符串。\nplanType:string，方案类型，当前为 REFERENCE_ALLOCATION；\nsuggestedAction:string，建议动作；\nreferenceAllocationRate:number，参考配置比例，0-1；\nreferenceAllocationAmount:number，参考配置金额；\ndataQualityLevel:string，数据质量等级；\nrebalanceRule:string，再平衡规则；\nriskNotice:string，风险提示。\n|string||
|&emsp;&emsp;&emsp;&emsp;simulatedReturn|模拟收益 JSON 字符串。\ninitialCapital:number，初始资金；\nallocationRate:number，参考配置比例；\nsimulatedPrincipal:number，参与模拟的本金；\nestimatedProfit:number，基准情景模拟收益；\nestimatedFinalCapital:number，模拟期末资金；\nreturnRate:number，使用的平均收益率；\nstressLoss:number，压力情景收益；\noptimisticProfit:number，乐观情景收益；\nassumption:string，模拟假设说明。\n|string||
|&emsp;&emsp;&emsp;&emsp;chartPayload|前端图表数据 JSON 字符串。\nseries:array，快照时间序列，每项包含 time/snapshotType/returnRate/momentumScore/heatScore；\nnews:array，新闻事件点，每项包含 time/title/sourceCode。\n前端可用 series 绘制收益、动量、热度折线图，用 news 叠加事件标记。\n|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;generatedAt|生成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"requestId": "",
				"providerCode": "LOCAL_RULE",
				"modelCode": "local-rule-v1",
				"marketScope": "CN_MAINLAND",
				"themeCode": "",
				"themeName": "",
				"status": "",
				"confidenceLevel": "",
				"dataQualityScore": 0,
				"dataQualityGate": "",
				"investmentSummary": "",
				"trend": "",
				"investmentPlan": "",
				"simulatedReturn": "",
				"chartPayload": "",
				"failureReason": "",
				"generatedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentAnalysisReportResponse|PageResponseInvestmentAnalysisReportResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentAnalysisReportResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|报告业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;requestId|本次分析请求 ID|string||
|&emsp;&emsp;&emsp;&emsp;providerCode|分析提供方编码|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;&emsp;&emsp;status|状态：SUCCEEDED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;confidenceLevel|报告可信等级：HIGH_CONFIDENCE/MEDIUM_CONFIDENCE/LOW_CONFIDENCE/UNUSABLE|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|报告输入数据质量分，0-1；前端列表页可直接展示|number||
|&emsp;&emsp;&emsp;&emsp;dataQualityGate|数据质量门禁 JSON 字符串。\npassed:boolean，是否通过质量门禁；\nconfidenceLevel:string，可信等级；\ndataQualityScore:number，数据质量分；\nsnapshotCount:number，快照样本数量；\nnewsCount:number，相关新闻数量；\nfallbackNewsRatio:number，兜底资讯占比；\nreasons:array，降级原因编码；\ndisplayMessage:string，前端直接展示的中文提示；\nallowedActions:array，允许动作，例如 VIEW_REPORT/SHOW_DATA_GAP/GENERATE_PROMPT/MOCK_TRADE。\n|string||
|&emsp;&emsp;&emsp;&emsp;investmentSummary|投资信息汇总 JSON 字符串。\nmarketScope:string，市场范围；\nthemeCode:string，主题编码；\nsampleCount:number，快照样本数；\nnewsCount:number，相关新闻数；\naverageReturn:number，平均收益率，小数形式；\naverageMomentum:number，平均动量；\naverageHeat:number，加权资讯热度；\ndataQualityScore:number，数据质量分，0-1；\ndataQualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nlatestSnapshotTime:datetime，最近快照时间，北京时间；\nrecentNews:array，近期新闻数组，每项包含 title/summary/publishTime/sourceCode。\n|string||
|&emsp;&emsp;&emsp;&emsp;trend|趋势分析 JSON 字符串。\ndirection:string，趋势方向，允许值 UP/NEUTRAL/DOWN；\naverageReturn:number，平均收益率；\naverageMomentum:number，平均动量；\nnewsHeat:number，相关新闻数量；\nweightedHeatScore:number，加权资讯热度分；\ndataQualityScore:number，数据质量分；\nlookbackDays:number，回看天数。\n|string||
|&emsp;&emsp;&emsp;&emsp;investmentPlan|投资方案 JSON 字符串。\nplanType:string，方案类型，当前为 REFERENCE_ALLOCATION；\nsuggestedAction:string，建议动作；\nreferenceAllocationRate:number，参考配置比例，0-1；\nreferenceAllocationAmount:number，参考配置金额；\ndataQualityLevel:string，数据质量等级；\nrebalanceRule:string，再平衡规则；\nriskNotice:string，风险提示。\n|string||
|&emsp;&emsp;&emsp;&emsp;simulatedReturn|模拟收益 JSON 字符串。\ninitialCapital:number，初始资金；\nallocationRate:number，参考配置比例；\nsimulatedPrincipal:number，参与模拟的本金；\nestimatedProfit:number，基准情景模拟收益；\nestimatedFinalCapital:number，模拟期末资金；\nreturnRate:number，使用的平均收益率；\nstressLoss:number，压力情景收益；\noptimisticProfit:number，乐观情景收益；\nassumption:string，模拟假设说明。\n|string||
|&emsp;&emsp;&emsp;&emsp;chartPayload|前端图表数据 JSON 字符串。\nseries:array，快照时间序列，每项包含 time/snapshotType/returnRate/momentumScore/heatScore；\nnews:array，新闻事件点，每项包含 time/title/sourceCode。\n前端可用 series 绘制收益、动量、热度折线图，用 news 叠加事件标记。\n|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;generatedAt|生成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"requestId": "",
				"providerCode": "LOCAL_RULE",
				"modelCode": "local-rule-v1",
				"marketScope": "CN_MAINLAND",
				"themeCode": "",
				"themeName": "",
				"status": "",
				"confidenceLevel": "",
				"dataQualityScore": 0,
				"dataQualityGate": "",
				"investmentSummary": "",
				"trend": "",
				"investmentPlan": "",
				"simulatedReturn": "",
				"chartPayload": "",
				"failureReason": "",
				"generatedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentAnalysisReportResponse|PageResponseInvestmentAnalysisReportResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentAnalysisReportResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|报告业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;requestId|本次分析请求 ID|string||
|&emsp;&emsp;&emsp;&emsp;providerCode|分析提供方编码|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;&emsp;&emsp;status|状态：SUCCEEDED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;confidenceLevel|报告可信等级：HIGH_CONFIDENCE/MEDIUM_CONFIDENCE/LOW_CONFIDENCE/UNUSABLE|string||
|&emsp;&emsp;&emsp;&emsp;dataQualityScore|报告输入数据质量分，0-1；前端列表页可直接展示|number||
|&emsp;&emsp;&emsp;&emsp;dataQualityGate|数据质量门禁 JSON 字符串。\npassed:boolean，是否通过质量门禁；\nconfidenceLevel:string，可信等级；\ndataQualityScore:number，数据质量分；\nsnapshotCount:number，快照样本数量；\nnewsCount:number，相关新闻数量；\nfallbackNewsRatio:number，兜底资讯占比；\nreasons:array，降级原因编码；\ndisplayMessage:string，前端直接展示的中文提示；\nallowedActions:array，允许动作，例如 VIEW_REPORT/SHOW_DATA_GAP/GENERATE_PROMPT/MOCK_TRADE。\n|string||
|&emsp;&emsp;&emsp;&emsp;investmentSummary|投资信息汇总 JSON 字符串。\nmarketScope:string，市场范围；\nthemeCode:string，主题编码；\nsampleCount:number，快照样本数；\nnewsCount:number，相关新闻数；\naverageReturn:number，平均收益率，小数形式；\naverageMomentum:number，平均动量；\naverageHeat:number，加权资讯热度；\ndataQualityScore:number，数据质量分，0-1；\ndataQualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nlatestSnapshotTime:datetime，最近快照时间，北京时间；\nrecentNews:array，近期新闻数组，每项包含 title/summary/publishTime/sourceCode。\n|string||
|&emsp;&emsp;&emsp;&emsp;trend|趋势分析 JSON 字符串。\ndirection:string，趋势方向，允许值 UP/NEUTRAL/DOWN；\naverageReturn:number，平均收益率；\naverageMomentum:number，平均动量；\nnewsHeat:number，相关新闻数量；\nweightedHeatScore:number，加权资讯热度分；\ndataQualityScore:number，数据质量分；\nlookbackDays:number，回看天数。\n|string||
|&emsp;&emsp;&emsp;&emsp;investmentPlan|投资方案 JSON 字符串。\nplanType:string，方案类型，当前为 REFERENCE_ALLOCATION；\nsuggestedAction:string，建议动作；\nreferenceAllocationRate:number，参考配置比例，0-1；\nreferenceAllocationAmount:number，参考配置金额；\ndataQualityLevel:string，数据质量等级；\nrebalanceRule:string，再平衡规则；\nriskNotice:string，风险提示。\n|string||
|&emsp;&emsp;&emsp;&emsp;simulatedReturn|模拟收益 JSON 字符串。\ninitialCapital:number，初始资金；\nallocationRate:number，参考配置比例；\nsimulatedPrincipal:number，参与模拟的本金；\nestimatedProfit:number，基准情景模拟收益；\nestimatedFinalCapital:number，模拟期末资金；\nreturnRate:number，使用的平均收益率；\nstressLoss:number，压力情景收益；\noptimisticProfit:number，乐观情景收益；\nassumption:string，模拟假设说明。\n|string||
|&emsp;&emsp;&emsp;&emsp;chartPayload|前端图表数据 JSON 字符串。\nseries:array，快照时间序列，每项包含 time/snapshotType/returnRate/momentumScore/heatScore；\nnews:array，新闻事件点，每项包含 time/title/sourceCode。\n前端可用 series 绘制收益、动量、热度折线图，用 news 叠加事件标记。\n|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因摘要|string||
|&emsp;&emsp;&emsp;&emsp;generatedAt|生成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"requestId": "",
				"providerCode": "LOCAL_RULE",
				"modelCode": "local-rule-v1",
				"marketScope": "CN_MAINLAND",
				"themeCode": "",
				"themeName": "",
				"status": "",
				"confidenceLevel": "",
				"dataQualityScore": 0,
				"dataQualityGate": "",
				"investmentSummary": "",
				"trend": "",
				"investmentPlan": "",
				"simulatedReturn": "",
				"chartPayload": "",
				"failureReason": "",
				"generatedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


# 投资任务与资讯


## 分页查询资讯主题产品关联


**接口地址**:`/api/investment/tasks/article-relations/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询新闻与投资主题、产品代码的显式关联。前端可用该接口展示资讯热度来源、命中关键词、来源质量分和关联证据。</p>



**请求示例**:


```javascript
{
  "articleBizId": "",
  "themeCode": "",
  "productCode": "",
  "relationType": "KEYWORD_MATCH",
  "page": 1,
  "size": 20,
  "sort": "relationScore",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|newsArticleRelationListRequest|资讯主题产品关联分页查询请求|body|true|NewsArticleRelationListRequest|NewsArticleRelationListRequest|
|&emsp;&emsp;articleBizId|资讯业务 ID，来自投资资讯列表返回的 bizId；为空时不按资讯筛选||false|string||
|&emsp;&emsp;themeCode|投资主题编码；例如 AI人工智能 会转换为 AI人工智能 或配置生成的稳定编码||false|string||
|&emsp;&emsp;productCode|产品代码；例如 159819、588000；为空时查询主题级和产品级关联||false|string||
|&emsp;&emsp;relationType|关联类型，允许值：KEYWORD_MATCH/MANUAL/MODEL_EXTRACTED||false|string||
|&emsp;&emsp;page|页码，从 1 开始；空值默认 1||false|integer(int32)||
|&emsp;&emsp;size|每页条数，建议 1-100；空值默认 20||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：createdAt/relationScore/sourceQualityScore/themeCode/productCode||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc；空值默认 desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回资讯主题产品关联分页响应|ResultPageResponseNewsArticleRelationResponse|
|400|分页或排序参数不合法|ResultPageResponseNewsArticleRelationResponse|
|500|系统错误|ResultPageResponseNewsArticleRelationResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseNewsArticleRelationResponse|PageResponseNewsArticleRelationResponse|
|&emsp;&emsp;items|当前页数据列表|array|NewsArticleRelationResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|关联记录业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;articleBizId|资讯业务 ID，可用于回查 /api/investment/tasks/articles/list 返回的新闻|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题展示名称|string||
|&emsp;&emsp;&emsp;&emsp;productCode|关联产品代码；空字符串表示主题级关联，不绑定具体产品|string||
|&emsp;&emsp;&emsp;&emsp;relationType|关联类型，允许值：KEYWORD_MATCH/MANUAL/MODEL_EXTRACTED|string||
|&emsp;&emsp;&emsp;&emsp;matchedKeywords|命中的关键词数组；例如 ["AI", "人工智能", "算力"]|array|string|
|&emsp;&emsp;&emsp;&emsp;sourceQualityScore|数据源质量分，0-1；监管、交易所和可信来源更高，兜底资讯更低|number||
|&emsp;&emsp;&emsp;&emsp;relationScore|综合关联分，按关键词命中数、来源质量和时效计算；越高表示该新闻越能解释主题热度|number||
|&emsp;&emsp;&emsp;&emsp;evidence|关联证据摘要，当前主要保存新闻标题|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|关联创建时间，北京时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"articleBizId": "",
				"themeCode": "",
				"themeName": "",
				"productCode": "",
				"relationType": "",
				"matchedKeywords": [],
				"sourceQualityScore": 0,
				"relationScore": 0,
				"evidence": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseNewsArticleRelationResponse|PageResponseNewsArticleRelationResponse|
|&emsp;&emsp;items|当前页数据列表|array|NewsArticleRelationResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|关联记录业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;articleBizId|资讯业务 ID，可用于回查 /api/investment/tasks/articles/list 返回的新闻|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题展示名称|string||
|&emsp;&emsp;&emsp;&emsp;productCode|关联产品代码；空字符串表示主题级关联，不绑定具体产品|string||
|&emsp;&emsp;&emsp;&emsp;relationType|关联类型，允许值：KEYWORD_MATCH/MANUAL/MODEL_EXTRACTED|string||
|&emsp;&emsp;&emsp;&emsp;matchedKeywords|命中的关键词数组；例如 ["AI", "人工智能", "算力"]|array|string|
|&emsp;&emsp;&emsp;&emsp;sourceQualityScore|数据源质量分，0-1；监管、交易所和可信来源更高，兜底资讯更低|number||
|&emsp;&emsp;&emsp;&emsp;relationScore|综合关联分，按关键词命中数、来源质量和时效计算；越高表示该新闻越能解释主题热度|number||
|&emsp;&emsp;&emsp;&emsp;evidence|关联证据摘要，当前主要保存新闻标题|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|关联创建时间，北京时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"articleBizId": "",
				"themeCode": "",
				"themeName": "",
				"productCode": "",
				"relationType": "",
				"matchedKeywords": [],
				"sourceQualityScore": 0,
				"relationScore": 0,
				"evidence": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseNewsArticleRelationResponse|PageResponseNewsArticleRelationResponse|
|&emsp;&emsp;items|当前页数据列表|array|NewsArticleRelationResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|关联记录业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;articleBizId|资讯业务 ID，可用于回查 /api/investment/tasks/articles/list 返回的新闻|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题展示名称|string||
|&emsp;&emsp;&emsp;&emsp;productCode|关联产品代码；空字符串表示主题级关联，不绑定具体产品|string||
|&emsp;&emsp;&emsp;&emsp;relationType|关联类型，允许值：KEYWORD_MATCH/MANUAL/MODEL_EXTRACTED|string||
|&emsp;&emsp;&emsp;&emsp;matchedKeywords|命中的关键词数组；例如 ["AI", "人工智能", "算力"]|array|string|
|&emsp;&emsp;&emsp;&emsp;sourceQualityScore|数据源质量分，0-1；监管、交易所和可信来源更高，兜底资讯更低|number||
|&emsp;&emsp;&emsp;&emsp;relationScore|综合关联分，按关键词命中数、来源质量和时效计算；越高表示该新闻越能解释主题热度|number||
|&emsp;&emsp;&emsp;&emsp;evidence|关联证据摘要，当前主要保存新闻标题|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|关联创建时间，北京时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"articleBizId": "",
				"themeCode": "",
				"themeName": "",
				"productCode": "",
				"relationType": "",
				"matchedKeywords": [],
				"sourceQualityScore": 0,
				"relationScore": 0,
				"evidence": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 分页查询投资资讯


**接口地址**:`/api/investment/tasks/articles/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询定时任务采集入库的资讯，可按关键字、类型、来源、语言和发布时间区间筛选。</p>



**请求示例**:


```javascript
{
  "keyword": "AI",
  "articleType": "NEWS",
  "sourceCode": "OFFICIAL_RSS",
  "languageCode": "en-US",
  "publishFrom": "2026-06-16T00:00:00",
  "publishTo": "2026-06-16T23:59:59",
  "page": 1,
  "size": 20,
  "sort": "publishTime",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|newsArticleListRequest|投资资讯分页请求|body|true|NewsArticleListRequest|NewsArticleListRequest|
|&emsp;&emsp;keyword|标题或摘要关键字||false|string||
|&emsp;&emsp;articleType|资讯类型||false|string||
|&emsp;&emsp;sourceCode|来源编码||false|string||
|&emsp;&emsp;languageCode|语言编码||false|string||
|&emsp;&emsp;publishFrom|发布时间起点||false|string(date-time)||
|&emsp;&emsp;publishTo|发布时间终点||false|string(date-time)||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：publishTime/collectedAt/createdAt/title/sourceCode||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回资讯分页响应|ResultPageResponseNewsArticleResponse|
|400|分页或排序参数不合法|ResultPageResponseNewsArticleResponse|
|500|系统错误|ResultPageResponseNewsArticleResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseNewsArticleResponse|PageResponseNewsArticleResponse|
|&emsp;&emsp;items|当前页数据列表|array|NewsArticleResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|资讯业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;externalId|外部资讯 ID|string||
|&emsp;&emsp;&emsp;&emsp;articleType|资讯类型|string||
|&emsp;&emsp;&emsp;&emsp;title|标题|string||
|&emsp;&emsp;&emsp;&emsp;summary|摘要|string||
|&emsp;&emsp;&emsp;&emsp;content|正文或清洗后的内容|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceUrl|原文链接|string||
|&emsp;&emsp;&emsp;&emsp;languageCode|语言编码|string||
|&emsp;&emsp;&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;collectedAt|采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"externalId": "",
				"articleType": "NEWS",
				"title": "",
				"summary": "",
				"content": "",
				"sourceCode": "OFFICIAL_RSS",
				"sourceUrl": "",
				"languageCode": "en-US",
				"publishTime": "",
				"collectedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseNewsArticleResponse|PageResponseNewsArticleResponse|
|&emsp;&emsp;items|当前页数据列表|array|NewsArticleResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|资讯业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;externalId|外部资讯 ID|string||
|&emsp;&emsp;&emsp;&emsp;articleType|资讯类型|string||
|&emsp;&emsp;&emsp;&emsp;title|标题|string||
|&emsp;&emsp;&emsp;&emsp;summary|摘要|string||
|&emsp;&emsp;&emsp;&emsp;content|正文或清洗后的内容|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceUrl|原文链接|string||
|&emsp;&emsp;&emsp;&emsp;languageCode|语言编码|string||
|&emsp;&emsp;&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;collectedAt|采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"externalId": "",
				"articleType": "NEWS",
				"title": "",
				"summary": "",
				"content": "",
				"sourceCode": "OFFICIAL_RSS",
				"sourceUrl": "",
				"languageCode": "en-US",
				"publishTime": "",
				"collectedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseNewsArticleResponse|PageResponseNewsArticleResponse|
|&emsp;&emsp;items|当前页数据列表|array|NewsArticleResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|资讯业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;externalId|外部资讯 ID|string||
|&emsp;&emsp;&emsp;&emsp;articleType|资讯类型|string||
|&emsp;&emsp;&emsp;&emsp;title|标题|string||
|&emsp;&emsp;&emsp;&emsp;summary|摘要|string||
|&emsp;&emsp;&emsp;&emsp;content|正文或清洗后的内容|string||
|&emsp;&emsp;&emsp;&emsp;sourceCode|来源编码|string||
|&emsp;&emsp;&emsp;&emsp;sourceUrl|原文链接|string||
|&emsp;&emsp;&emsp;&emsp;languageCode|语言编码|string||
|&emsp;&emsp;&emsp;&emsp;publishTime|发布时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;collectedAt|采集时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"externalId": "",
				"articleType": "NEWS",
				"title": "",
				"summary": "",
				"content": "",
				"sourceCode": "OFFICIAL_RSS",
				"sourceUrl": "",
				"languageCode": "en-US",
				"publishTime": "",
				"collectedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 查询投资任务配置


**接口地址**:`/api/investment/tasks/definitions`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>返回当前 YAML/环境变量生成的 investment.tasks.definitions 配置，便于前端展示任务类型、Cron、时区和参数。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回投资任务配置数组|ResultListInvestmentTaskDefinitionResponse|
|500|系统错误|ResultListInvestmentTaskDefinitionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|InvestmentTaskDefinitionResponse|
|&emsp;&emsp;code|任务编码|string||
|&emsp;&emsp;type|任务类型|string||
|&emsp;&emsp;cron|Spring Cron 表达式|string||
|&emsp;&emsp;zone|Cron 时区|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;parameters|任务参数；由不同任务处理器解释|object||
|&emsp;&emsp;description|配置说明|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"code": "investment-news-collection",
			"type": "INVESTMENT_NEWS_COLLECTION",
			"cron": "0 0/30 * * * ?",
			"zone": "Asia/Shanghai",
			"enabled": true,
			"parameters": {},
			"description": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|InvestmentTaskDefinitionResponse|
|&emsp;&emsp;code|任务编码|string||
|&emsp;&emsp;type|任务类型|string||
|&emsp;&emsp;cron|Spring Cron 表达式|string||
|&emsp;&emsp;zone|Cron 时区|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;parameters|任务参数；由不同任务处理器解释|object||
|&emsp;&emsp;description|配置说明|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"code": "investment-news-collection",
			"type": "INVESTMENT_NEWS_COLLECTION",
			"cron": "0 0/30 * * * ?",
			"zone": "Asia/Shanghai",
			"enabled": true,
			"parameters": {},
			"description": ""
		}
	]
}
```


## 保存投资任务配置


**接口地址**:`/api/investment/tasks/definitions/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>新增或更新落库的投资任务配置。保存成功后会刷新当前节点的动态 Cron 调度，参数会覆盖后续自动触发。</p>



**请求示例**:


```javascript
{
  "code": "hot-theme-return",
  "type": "HOT_THEME_RETURN",
  "cron": "30 */5 * * * *",
  "zone": "Asia/Shanghai",
  "enabled": true,
  "parameters": {},
  "description": "中国大陆热门投资方向收益汇总"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveInvestmentTaskDefinitionRequest|保存投资任务配置请求|body|true|SaveInvestmentTaskDefinitionRequest|SaveInvestmentTaskDefinitionRequest|
|&emsp;&emsp;code|稳定任务编码||true|string||
|&emsp;&emsp;type|任务处理器类型||true|string||
|&emsp;&emsp;cron|Spring Cron 表达式||true|string||
|&emsp;&emsp;zone|Cron 时区||false|string||
|&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;parameters|任务参数；支持字符串、数字、布尔、对象和数组，对象/数组会在接口层序列化为 JSON 字符串||false|object||
|&emsp;&emsp;description|配置说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回保存后的任务配置|ResultInvestmentTaskDefinitionResponse|
|400|参数校验失败|ResultInvestmentTaskDefinitionResponse|
|500|系统错误|ResultInvestmentTaskDefinitionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskDefinitionResponse|InvestmentTaskDefinitionResponse|
|&emsp;&emsp;code|任务编码|string||
|&emsp;&emsp;type|任务类型|string||
|&emsp;&emsp;cron|Spring Cron 表达式|string||
|&emsp;&emsp;zone|Cron 时区|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;parameters|任务参数；由不同任务处理器解释|object||
|&emsp;&emsp;description|配置说明|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"code": "investment-news-collection",
		"type": "INVESTMENT_NEWS_COLLECTION",
		"cron": "0 0/30 * * * ?",
		"zone": "Asia/Shanghai",
		"enabled": true,
		"parameters": {},
		"description": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskDefinitionResponse|InvestmentTaskDefinitionResponse|
|&emsp;&emsp;code|任务编码|string||
|&emsp;&emsp;type|任务类型|string||
|&emsp;&emsp;cron|Spring Cron 表达式|string||
|&emsp;&emsp;zone|Cron 时区|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;parameters|任务参数；由不同任务处理器解释|object||
|&emsp;&emsp;description|配置说明|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"code": "investment-news-collection",
		"type": "INVESTMENT_NEWS_COLLECTION",
		"cron": "0 0/30 * * * ?",
		"zone": "Asia/Shanghai",
		"enabled": true,
		"parameters": {},
		"description": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskDefinitionResponse|InvestmentTaskDefinitionResponse|
|&emsp;&emsp;code|任务编码|string||
|&emsp;&emsp;type|任务类型|string||
|&emsp;&emsp;cron|Spring Cron 表达式|string||
|&emsp;&emsp;zone|Cron 时区|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;parameters|任务参数；由不同任务处理器解释|object||
|&emsp;&emsp;description|配置说明|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"code": "investment-news-collection",
		"type": "INVESTMENT_NEWS_COLLECTION",
		"cron": "0 0/30 * * * ?",
		"zone": "Asia/Shanghai",
		"enabled": true,
		"parameters": {},
		"description": ""
	}
}
```


## 分页查询投资任务执行记录


**接口地址**:`/api/investment/tasks/executions/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按任务编码、任务类型、状态和开始时间区间查询执行记录，用于前端展示任务运行状态与失败原因。</p>



**请求示例**:


```javascript
{
  "taskCode": "investment-news-collection",
  "taskType": "INVESTMENT_NEWS_COLLECTION",
  "status": "SUCCEEDED",
  "startedFrom": "2026-06-16T00:00:00",
  "startedTo": "2026-06-16T23:59:59",
  "page": 1,
  "size": 20,
  "sort": "startedAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|taskExecutionListRequest|投资任务执行记录分页请求|body|true|TaskExecutionListRequest|TaskExecutionListRequest|
|&emsp;&emsp;taskCode|任务编码||false|string||
|&emsp;&emsp;taskType|任务类型||false|string||
|&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED||false|string||
|&emsp;&emsp;startedFrom|执行开始时间起点||false|string(date-time)||
|&emsp;&emsp;startedTo|执行开始时间终点||false|string(date-time)||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：startedAt/completedAt/createdAt/taskCode/taskType/status||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回执行记录分页响应|ResultPageResponseScheduledTaskExecutionResponse|
|400|分页或排序参数不合法|ResultPageResponseScheduledTaskExecutionResponse|
|500|系统错误|ResultPageResponseScheduledTaskExecutionResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseScheduledTaskExecutionResponse|PageResponseScheduledTaskExecutionResponse|
|&emsp;&emsp;items|当前页数据列表|array|ScheduledTaskExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|执行记录业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL|string||
|&emsp;&emsp;&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;eventId|Kafka 事件 ID|string||
|&emsp;&emsp;&emsp;&emsp;resultSummary|执行结果摘要|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因；成功时为空|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"taskCode": "investment-news-collection",
				"taskType": "INVESTMENT_NEWS_COLLECTION",
				"triggerSource": "SCHEDULE",
				"status": "SUCCEEDED",
				"eventId": "",
				"resultSummary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseScheduledTaskExecutionResponse|PageResponseScheduledTaskExecutionResponse|
|&emsp;&emsp;items|当前页数据列表|array|ScheduledTaskExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|执行记录业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL|string||
|&emsp;&emsp;&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;eventId|Kafka 事件 ID|string||
|&emsp;&emsp;&emsp;&emsp;resultSummary|执行结果摘要|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因；成功时为空|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"taskCode": "investment-news-collection",
				"taskType": "INVESTMENT_NEWS_COLLECTION",
				"triggerSource": "SCHEDULE",
				"status": "SUCCEEDED",
				"eventId": "",
				"resultSummary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseScheduledTaskExecutionResponse|PageResponseScheduledTaskExecutionResponse|
|&emsp;&emsp;items|当前页数据列表|array|ScheduledTaskExecutionResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|执行记录业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL|string||
|&emsp;&emsp;&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;eventId|Kafka 事件 ID|string||
|&emsp;&emsp;&emsp;&emsp;resultSummary|执行结果摘要|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败原因；成功时为空|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"taskCode": "investment-news-collection",
				"taskType": "INVESTMENT_NEWS_COLLECTION",
				"triggerSource": "SCHEDULE",
				"status": "SUCCEEDED",
				"eventId": "",
				"resultSummary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 分页查询投资方向快照


**接口地址**:`/api/investment/tasks/snapshots/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询热门投资方向的实时收益、市场动量和资讯热度快照，供前端展示榜单和趋势卡片。</p>



**请求示例**:


```javascript
{
  "taskCode": "hot-theme-return",
  "snapshotType": "RETURN",
  "themeCode": "AI",
  "marketScope": "CN_MAINLAND",
  "snapshotFrom": "2026-06-16T00:00:00",
  "snapshotTo": "2026-06-16T23:59:59",
  "page": 1,
  "size": 20,
  "sort": "snapshotTime",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|investmentThemeSnapshotListRequest|投资方向收益与热度快照分页请求|body|true|InvestmentThemeSnapshotListRequest|InvestmentThemeSnapshotListRequest|
|&emsp;&emsp;taskCode|任务编码||false|string||
|&emsp;&emsp;snapshotType|快照类型：RETURN/MOMENTUM/HEAT||false|string||
|&emsp;&emsp;themeCode|投资主题编码||false|string||
|&emsp;&emsp;marketScope|市场范围，默认仅中国大陆||false|string||
|&emsp;&emsp;snapshotFrom|快照时间起点||false|string(date-time)||
|&emsp;&emsp;snapshotTo|快照时间终点||false|string(date-time)||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：snapshotTime/createdAt/taskCode/snapshotType/themeCode/returnRate/momentumScore/heatScore||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回投资方向快照分页响应|ResultPageResponseInvestmentThemeSnapshotResponse|
|400|分页或排序参数不合法|ResultPageResponseInvestmentThemeSnapshotResponse|
|500|系统错误|ResultPageResponseInvestmentThemeSnapshotResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentThemeSnapshotResponse|PageResponseInvestmentThemeSnapshotResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentThemeSnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|快照业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|生成该快照的任务编码|string||
|&emsp;&emsp;&emsp;&emsp;snapshotType|快照类型：RETURN-主题收益，MOMENTUM-市场动量，NEWS_HEAT-资讯热度|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围，默认仅中国大陆|string||
|&emsp;&emsp;&emsp;&emsp;windowMinutes|统计窗口分钟数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sampleCount|样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;returnRate|窗口收益率，小数形式；0.052 表示 5.2%|number||
|&emsp;&emsp;&emsp;&emsp;momentumScore|动量分数|number||
|&emsp;&emsp;&emsp;&emsp;heatScore|资讯热度分数|number||
|&emsp;&emsp;&emsp;&emsp;topProductBizId|窗口内表现最好的产品业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;metrics|扩展指标 JSON 字符串，前端需要按 snapshotType 展开。\nRETURN 结构：\nrequestedProductCount:number，配置产品数；\nvalidReturnCount:number，有效收益样本数；\ncoverageRate:number，样本覆盖率，0-1；\nvolatility:number，主题内收益波动；\ntopContribution:number，头部产品收益贡献占比；\nqualityScore:number，收益统计质量分，0-1；\nqualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nperformances:array，产品收益样本。\nMOMENTUM 结构：\nrequestedProductCount:number；\nvalidReturnCount:number；\npositiveCount:number，正收益产品数；\npositiveBreadth:number，上涨广度，0-1；\ncoverageRate:number；\nvolatility:number；\nqualityScore:number；\nqualityLevel:string；\nperformances:array。\nNEWS_HEAT 结构：\nthemeName:string；\nkeywords:array，主题关键词；\narticleCount:number，命中新闻数；\nuniqueSourceCount:number，去重来源数；\naverageSourceQuality:number，平均来源质量分；\ndataQualityScore:number，热度数据质量分，0-1；\nqualityLevel:string；\nheatScore:number，加权热度分；\nsampleArticles:array，最多十条样本新闻，每项包含 articleBizId/title/sourceCode/publishTime。\n|string||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"taskCode": "hot-theme-return",
				"snapshotType": "RETURN",
				"themeCode": "AI",
				"themeName": "AI人工智能",
				"marketScope": "CN_MAINLAND",
				"windowMinutes": 1440,
				"sampleCount": 12,
				"returnRate": 0,
				"momentumScore": 0,
				"heatScore": 0,
				"topProductBizId": "",
				"metrics": "",
				"snapshotTime": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentThemeSnapshotResponse|PageResponseInvestmentThemeSnapshotResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentThemeSnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|快照业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|生成该快照的任务编码|string||
|&emsp;&emsp;&emsp;&emsp;snapshotType|快照类型：RETURN-主题收益，MOMENTUM-市场动量，NEWS_HEAT-资讯热度|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围，默认仅中国大陆|string||
|&emsp;&emsp;&emsp;&emsp;windowMinutes|统计窗口分钟数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sampleCount|样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;returnRate|窗口收益率，小数形式；0.052 表示 5.2%|number||
|&emsp;&emsp;&emsp;&emsp;momentumScore|动量分数|number||
|&emsp;&emsp;&emsp;&emsp;heatScore|资讯热度分数|number||
|&emsp;&emsp;&emsp;&emsp;topProductBizId|窗口内表现最好的产品业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;metrics|扩展指标 JSON 字符串，前端需要按 snapshotType 展开。\nRETURN 结构：\nrequestedProductCount:number，配置产品数；\nvalidReturnCount:number，有效收益样本数；\ncoverageRate:number，样本覆盖率，0-1；\nvolatility:number，主题内收益波动；\ntopContribution:number，头部产品收益贡献占比；\nqualityScore:number，收益统计质量分，0-1；\nqualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nperformances:array，产品收益样本。\nMOMENTUM 结构：\nrequestedProductCount:number；\nvalidReturnCount:number；\npositiveCount:number，正收益产品数；\npositiveBreadth:number，上涨广度，0-1；\ncoverageRate:number；\nvolatility:number；\nqualityScore:number；\nqualityLevel:string；\nperformances:array。\nNEWS_HEAT 结构：\nthemeName:string；\nkeywords:array，主题关键词；\narticleCount:number，命中新闻数；\nuniqueSourceCount:number，去重来源数；\naverageSourceQuality:number，平均来源质量分；\ndataQualityScore:number，热度数据质量分，0-1；\nqualityLevel:string；\nheatScore:number，加权热度分；\nsampleArticles:array，最多十条样本新闻，每项包含 articleBizId/title/sourceCode/publishTime。\n|string||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"taskCode": "hot-theme-return",
				"snapshotType": "RETURN",
				"themeCode": "AI",
				"themeName": "AI人工智能",
				"marketScope": "CN_MAINLAND",
				"windowMinutes": 1440,
				"sampleCount": 12,
				"returnRate": 0,
				"momentumScore": 0,
				"heatScore": 0,
				"topProductBizId": "",
				"metrics": "",
				"snapshotTime": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseInvestmentThemeSnapshotResponse|PageResponseInvestmentThemeSnapshotResponse|
|&emsp;&emsp;items|当前页数据列表|array|InvestmentThemeSnapshotResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|快照业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|生成该快照的任务编码|string||
|&emsp;&emsp;&emsp;&emsp;snapshotType|快照类型：RETURN-主题收益，MOMENTUM-市场动量，NEWS_HEAT-资讯热度|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|投资主题编码|string||
|&emsp;&emsp;&emsp;&emsp;themeName|投资主题名称|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围，默认仅中国大陆|string||
|&emsp;&emsp;&emsp;&emsp;windowMinutes|统计窗口分钟数|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sampleCount|样本数量|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;returnRate|窗口收益率，小数形式；0.052 表示 5.2%|number||
|&emsp;&emsp;&emsp;&emsp;momentumScore|动量分数|number||
|&emsp;&emsp;&emsp;&emsp;heatScore|资讯热度分数|number||
|&emsp;&emsp;&emsp;&emsp;topProductBizId|窗口内表现最好的产品业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;metrics|扩展指标 JSON 字符串，前端需要按 snapshotType 展开。\nRETURN 结构：\nrequestedProductCount:number，配置产品数；\nvalidReturnCount:number，有效收益样本数；\ncoverageRate:number，样本覆盖率，0-1；\nvolatility:number，主题内收益波动；\ntopContribution:number，头部产品收益贡献占比；\nqualityScore:number，收益统计质量分，0-1；\nqualityLevel:string，允许值 HIGH/MEDIUM/LOW；\nperformances:array，产品收益样本。\nMOMENTUM 结构：\nrequestedProductCount:number；\nvalidReturnCount:number；\npositiveCount:number，正收益产品数；\npositiveBreadth:number，上涨广度，0-1；\ncoverageRate:number；\nvolatility:number；\nqualityScore:number；\nqualityLevel:string；\nperformances:array。\nNEWS_HEAT 结构：\nthemeName:string；\nkeywords:array，主题关键词；\narticleCount:number，命中新闻数；\nuniqueSourceCount:number，去重来源数；\naverageSourceQuality:number，平均来源质量分；\ndataQualityScore:number，热度数据质量分，0-1；\nqualityLevel:string；\nheatScore:number，加权热度分；\nsampleArticles:array，最多十条样本新闻，每项包含 articleBizId/title/sourceCode/publishTime。\n|string||
|&emsp;&emsp;&emsp;&emsp;snapshotTime|快照时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"taskCode": "hot-theme-return",
				"snapshotType": "RETURN",
				"themeCode": "AI",
				"themeName": "AI人工智能",
				"marketScope": "CN_MAINLAND",
				"windowMinutes": 1440,
				"sampleCount": 12,
				"returnRate": 0,
				"momentumScore": 0,
				"heatScore": 0,
				"topProductBizId": "",
				"metrics": "",
				"snapshotTime": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 手动触发投资任务


**接口地址**:`/api/investment/tasks/trigger`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按任务编码发布 Kafka 任务触发事件。parameters 仅覆盖本次执行，不修改 YAML 配置。</p>



**请求示例**:


```javascript
{
  "taskCode": "investment-news-collection",
  "parameters": {}
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|triggerInvestmentTaskRequest|手动触发投资任务请求|body|true|TriggerInvestmentTaskRequest|TriggerInvestmentTaskRequest|
|&emsp;&emsp;taskCode|任务编码，必须存在于 investment.tasks.definitions 配置中||true|string||
|&emsp;&emsp;parameters|本次手动触发覆盖参数；支持字符串、数字、布尔、对象和数组，对象/数组会在接口层序列化为 JSON 字符串||false|object||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|触发成功，返回 Kafka 事件 ID|ResultInvestmentTaskTriggerResponse|
|400|参数校验失败|ResultInvestmentTaskTriggerResponse|
|404|任务配置不存在|ResultInvestmentTaskTriggerResponse|
|500|系统错误|ResultInvestmentTaskTriggerResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskTriggerResponse|InvestmentTaskTriggerResponse|
|&emsp;&emsp;eventId|Kafka 事件 ID，也是消费幂等键|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;triggerSource|触发来源|string||
|&emsp;&emsp;triggeredAt|触发时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"eventId": "",
		"taskCode": "hot-theme-return",
		"taskType": "HOT_THEME_RETURN",
		"triggerSource": "MANUAL",
		"triggeredAt": "2026-06-16T10:00:00"
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskTriggerResponse|InvestmentTaskTriggerResponse|
|&emsp;&emsp;eventId|Kafka 事件 ID，也是消费幂等键|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;triggerSource|触发来源|string||
|&emsp;&emsp;triggeredAt|触发时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"eventId": "",
		"taskCode": "hot-theme-return",
		"taskType": "HOT_THEME_RETURN",
		"triggerSource": "MANUAL",
		"triggeredAt": "2026-06-16T10:00:00"
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskTriggerResponse|InvestmentTaskTriggerResponse|
|&emsp;&emsp;eventId|Kafka 事件 ID，也是消费幂等键|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;triggerSource|触发来源|string||
|&emsp;&emsp;triggeredAt|触发时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"eventId": "",
		"taskCode": "hot-theme-return",
		"taskType": "HOT_THEME_RETURN",
		"triggerSource": "MANUAL",
		"triggeredAt": "2026-06-16T10:00:00"
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|InvestmentTaskTriggerResponse|InvestmentTaskTriggerResponse|
|&emsp;&emsp;eventId|Kafka 事件 ID，也是消费幂等键|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;taskType|任务类型|string||
|&emsp;&emsp;triggerSource|触发来源|string||
|&emsp;&emsp;triggeredAt|触发时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"eventId": "",
		"taskCode": "hot-theme-return",
		"taskType": "HOT_THEME_RETURN",
		"triggerSource": "MANUAL",
		"triggeredAt": "2026-06-16T10:00:00"
	}
}
```


# 账户认证


## 登录


**接口地址**:`/api/auth/login`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>使用用户名/邮箱/手机号 + 密码登录。成功后在响应头写入会话 Cookie (DZCOM_SESSION)。</p>



**请求示例**:


```javascript
{
  "account": "alice@example.com",
  "password": "P@ssw0rd123"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|loginRequest|登录请求：account 可为用户名/邮箱/手机号|body|true|LoginRequest|LoginRequest|
|&emsp;&emsp;account|用户名/邮箱/手机号||true|string||
|&emsp;&emsp;password|密码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登录成功，返回当前用户响应，并在 Set-Cookie 中返回会话令牌|ResultUserResponse|
|400|参数校验失败|ResultUserResponse|
|401|账号或密码错误或账户不可登录|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 登出


**接口地址**:`/api/auth/logout`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>撤销当前会话并清除会话 Cookie（设置空 token 并 max-age=0）。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登出成功（Result<Void>）|ResultVoid|
|401|未登录或会话已过期|ResultVoid|
|500|系统错误|ResultVoid|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {}
}
```


## 获取当前用户


**接口地址**:`/api/auth/me`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>返回当前登录用户信息。受会话认证拦截器保护，未登录将返回 401。</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回当前用户响应|ResultUserResponse|
|401|未登录或会话失效|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 注册用户


**接口地址**:`/api/auth/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>公开注册普通用户。用户名、密码、email 与 phone 的格式在请求边界校验。密码须包含字母和数字，长度 8-72。</p>



**请求示例**:


```javascript
{
  "username": "alice",
  "password": "P@ssw0rd123",
  "email": "alice@example.com",
  "phone": "+8613800000000",
  "nickname": "小张"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|registerRequest|公开用户注册请求|body|true|RegisterRequest|RegisterRequest|
|&emsp;&emsp;username|用户名，4-32 字符||true|string||
|&emsp;&emsp;password|密码，8-72 字符，必须包含字母和数字||true|string||
|&emsp;&emsp;email|邮箱||false|string(email)||
|&emsp;&emsp;phone|手机号，含国家码||false|string||
|&emsp;&emsp;nickname|昵称||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|201|注册成功，返回创建后的用户响应|ResultUserResponse|
|400|参数校验失败或注册规则不满足|ResultUserResponse|
|409|登录标识（username/email/phone）冲突|ResultUserResponse|
|500|系统错误|ResultUserResponse|


**响应状态码-201**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|UserResponse|UserResponse|
|&emsp;&emsp;bizId|业务唯一标识|string||
|&emsp;&emsp;userNo|平台内部用户编号|string||
|&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;email|邮箱|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;nickname|展示昵称|string||
|&emsp;&emsp;avatarUrl|头像 URL|string||
|&emsp;&emsp;status|账户状态|string||
|&emsp;&emsp;kycStatus|KYC 状态|string||
|&emsp;&emsp;riskLevel|风险承受等级|integer(int32)||
|&emsp;&emsp;roles|有效角色编码集合|array|string|
|&emsp;&emsp;permissions|有效权限编码集合|array|string|
|&emsp;&emsp;registeredAt|注册时间|string(date-time)||
|&emsp;&emsp;lastLoginAt|最近登录时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "usr_01Hxxxxx",
		"userNo": "U202600001",
		"username": "alice",
		"email": "alice@example.com",
		"phone": "+8613800000000",
		"nickname": "小张",
		"avatarUrl": "",
		"status": "ACTIVE",
		"kycStatus": "VERIFIED",
		"riskLevel": 3,
		"roles": [],
		"permissions": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


# 自动投资闭环


## 查询自动投资闭环详情


**接口地址**:`/api/investment/closed-loop/runs/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>返回单轮闭环运行详情及步骤输入摘要、输出摘要、失败或阻断原因。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|closedLoopRunDetailRequest|自动投资闭环运行详情请求|body|true|ClosedLoopRunDetailRequest|ClosedLoopRunDetailRequest|
|&emsp;&emsp;bizId|闭环运行业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回闭环运行详情|ResultClosedLoopRunResponse|
|404|闭环运行不存在|ResultClosedLoopRunResponse|
|500|系统错误|ResultClosedLoopRunResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ClosedLoopRunResponse|ClosedLoopRunResponse|
|&emsp;&emsp;bizId|闭环运行业务唯一标识|string||
|&emsp;&emsp;runNo|运行编号|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL/RETRY|string||
|&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;themeCode|主题编码|string||
|&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识|string||
|&emsp;&emsp;portfolioBizId|Mock 组合业务标识|string||
|&emsp;&emsp;reportBizId|报告业务标识|string||
|&emsp;&emsp;promptBizId|Prompt 业务标识|string||
|&emsp;&emsp;promptCode|Prompt 编码|string||
|&emsp;&emsp;promptVersion|Prompt 版本|string||
|&emsp;&emsp;backtestBizId|回测业务标识|string||
|&emsp;&emsp;qualityScore|质量分|number||
|&emsp;&emsp;gateResult|门禁结果：PENDING/PASS/BLOCK|string||
|&emsp;&emsp;summary|运行摘要 JSON|string||
|&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;steps|步骤记录|array|ClosedLoopStepResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|步骤业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;stepCode|步骤编码|string||
|&emsp;&emsp;&emsp;&emsp;stepName|步骤名称|string||
|&emsp;&emsp;&emsp;&emsp;stepOrder|步骤顺序|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stepStatus|步骤状态：SUCCEEDED/SKIPPED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;inputSummary|输入摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;outputSummary|输出摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"runNo": "",
		"taskCode": "",
		"triggerSource": "",
		"runStatus": "",
		"automationLevel": "",
		"marketScope": "",
		"themeCode": "",
		"mockUserBizId": "",
		"portfolioBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"qualityScore": 0,
		"gateResult": "",
		"summary": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"steps": [
			{
				"bizId": "",
				"stepCode": "",
				"stepName": "",
				"stepOrder": 0,
				"stepStatus": "",
				"inputSummary": "",
				"outputSummary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": ""
			}
		]
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ClosedLoopRunResponse|ClosedLoopRunResponse|
|&emsp;&emsp;bizId|闭环运行业务唯一标识|string||
|&emsp;&emsp;runNo|运行编号|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL/RETRY|string||
|&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;themeCode|主题编码|string||
|&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识|string||
|&emsp;&emsp;portfolioBizId|Mock 组合业务标识|string||
|&emsp;&emsp;reportBizId|报告业务标识|string||
|&emsp;&emsp;promptBizId|Prompt 业务标识|string||
|&emsp;&emsp;promptCode|Prompt 编码|string||
|&emsp;&emsp;promptVersion|Prompt 版本|string||
|&emsp;&emsp;backtestBizId|回测业务标识|string||
|&emsp;&emsp;qualityScore|质量分|number||
|&emsp;&emsp;gateResult|门禁结果：PENDING/PASS/BLOCK|string||
|&emsp;&emsp;summary|运行摘要 JSON|string||
|&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;steps|步骤记录|array|ClosedLoopStepResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|步骤业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;stepCode|步骤编码|string||
|&emsp;&emsp;&emsp;&emsp;stepName|步骤名称|string||
|&emsp;&emsp;&emsp;&emsp;stepOrder|步骤顺序|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stepStatus|步骤状态：SUCCEEDED/SKIPPED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;inputSummary|输入摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;outputSummary|输出摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"runNo": "",
		"taskCode": "",
		"triggerSource": "",
		"runStatus": "",
		"automationLevel": "",
		"marketScope": "",
		"themeCode": "",
		"mockUserBizId": "",
		"portfolioBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"qualityScore": 0,
		"gateResult": "",
		"summary": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"steps": [
			{
				"bizId": "",
				"stepCode": "",
				"stepName": "",
				"stepOrder": 0,
				"stepStatus": "",
				"inputSummary": "",
				"outputSummary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": ""
			}
		]
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|ClosedLoopRunResponse|ClosedLoopRunResponse|
|&emsp;&emsp;bizId|闭环运行业务唯一标识|string||
|&emsp;&emsp;runNo|运行编号|string||
|&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL/RETRY|string||
|&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK|string||
|&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;themeCode|主题编码|string||
|&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识|string||
|&emsp;&emsp;portfolioBizId|Mock 组合业务标识|string||
|&emsp;&emsp;reportBizId|报告业务标识|string||
|&emsp;&emsp;promptBizId|Prompt 业务标识|string||
|&emsp;&emsp;promptCode|Prompt 编码|string||
|&emsp;&emsp;promptVersion|Prompt 版本|string||
|&emsp;&emsp;backtestBizId|回测业务标识|string||
|&emsp;&emsp;qualityScore|质量分|number||
|&emsp;&emsp;gateResult|门禁结果：PENDING/PASS/BLOCK|string||
|&emsp;&emsp;summary|运行摘要 JSON|string||
|&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;steps|步骤记录|array|ClosedLoopStepResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|步骤业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;stepCode|步骤编码|string||
|&emsp;&emsp;&emsp;&emsp;stepName|步骤名称|string||
|&emsp;&emsp;&emsp;&emsp;stepOrder|步骤顺序|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;stepStatus|步骤状态：SUCCEEDED/SKIPPED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;inputSummary|输入摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;outputSummary|输出摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"runNo": "",
		"taskCode": "",
		"triggerSource": "",
		"runStatus": "",
		"automationLevel": "",
		"marketScope": "",
		"themeCode": "",
		"mockUserBizId": "",
		"portfolioBizId": "",
		"reportBizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"backtestBizId": "",
		"qualityScore": 0,
		"gateResult": "",
		"summary": "",
		"failureReason": "",
		"startedAt": "",
		"completedAt": "",
		"steps": [
			{
				"bizId": "",
				"stepCode": "",
				"stepName": "",
				"stepOrder": 0,
				"stepStatus": "",
				"inputSummary": "",
				"outputSummary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": ""
			}
		]
	}
}
```


## 分页查询自动投资闭环运行


**接口地址**:`/api/investment/closed-loop/runs/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询每轮自动闭环运行状态、质量门禁、报告、组合、回测和失败原因，用于前端驾驶舱。</p>



**请求示例**:


```javascript
{
  "taskCode": "auto-investment-closed-loop-orchestration",
  "runStatus": "SUCCEEDED",
  "automationLevel": "FULL_MOCK",
  "marketScope": "CN_MAINLAND",
  "themeCode": "AI人工智能",
  "mockUserBizId": "",
  "startedFrom": "2026-06-25T00:00:00",
  "startedTo": "2026-06-25T23:59:59",
  "page": 1,
  "size": 20,
  "sort": "startedAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|closedLoopRunListRequest|自动投资闭环运行分页请求|body|true|ClosedLoopRunListRequest|ClosedLoopRunListRequest|
|&emsp;&emsp;taskCode|任务编码||false|string||
|&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED||false|string||
|&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK||false|string||
|&emsp;&emsp;marketScope|市场范围||false|string||
|&emsp;&emsp;themeCode|主题编码||false|string||
|&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识||false|string||
|&emsp;&emsp;startedFrom|运行开始时间起点||false|string(date-time)||
|&emsp;&emsp;startedTo|运行开始时间终点||false|string(date-time)||
|&emsp;&emsp;page|页码，从 1 开始||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：startedAt/completedAt/updatedAt/runNo/taskCode/runStatus/automationLevel/qualityScore||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回闭环运行分页响应|ResultPageResponseClosedLoopRunResponse|
|400|分页或排序参数不合法|ResultPageResponseClosedLoopRunResponse|
|500|系统错误|ResultPageResponseClosedLoopRunResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseClosedLoopRunResponse|PageResponseClosedLoopRunResponse|
|&emsp;&emsp;items|当前页数据列表|array|ClosedLoopRunResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|闭环运行业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;runNo|运行编号|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL/RETRY|string||
|&emsp;&emsp;&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|主题编码|string||
|&emsp;&emsp;&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|Mock 组合业务标识|string||
|&emsp;&emsp;&emsp;&emsp;reportBizId|报告业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt 业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt 编码|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt 版本|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|回测业务标识|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|质量分|number||
|&emsp;&emsp;&emsp;&emsp;gateResult|门禁结果：PENDING/PASS/BLOCK|string||
|&emsp;&emsp;&emsp;&emsp;summary|运行摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;steps|步骤记录|array|ClosedLoopStepResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|步骤业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepCode|步骤编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepName|步骤名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepOrder|步骤顺序|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepStatus|步骤状态：SUCCEEDED/SKIPPED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;inputSummary|输入摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;outputSummary|输出摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"runNo": "",
				"taskCode": "",
				"triggerSource": "",
				"runStatus": "",
				"automationLevel": "",
				"marketScope": "",
				"themeCode": "",
				"mockUserBizId": "",
				"portfolioBizId": "",
				"reportBizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"backtestBizId": "",
				"qualityScore": 0,
				"gateResult": "",
				"summary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"steps": [
					{
						"bizId": "",
						"stepCode": "",
						"stepName": "",
						"stepOrder": 0,
						"stepStatus": "",
						"inputSummary": "",
						"outputSummary": "",
						"failureReason": "",
						"startedAt": "",
						"completedAt": ""
					}
				]
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseClosedLoopRunResponse|PageResponseClosedLoopRunResponse|
|&emsp;&emsp;items|当前页数据列表|array|ClosedLoopRunResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|闭环运行业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;runNo|运行编号|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL/RETRY|string||
|&emsp;&emsp;&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|主题编码|string||
|&emsp;&emsp;&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|Mock 组合业务标识|string||
|&emsp;&emsp;&emsp;&emsp;reportBizId|报告业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt 业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt 编码|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt 版本|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|回测业务标识|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|质量分|number||
|&emsp;&emsp;&emsp;&emsp;gateResult|门禁结果：PENDING/PASS/BLOCK|string||
|&emsp;&emsp;&emsp;&emsp;summary|运行摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;steps|步骤记录|array|ClosedLoopStepResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|步骤业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepCode|步骤编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepName|步骤名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepOrder|步骤顺序|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepStatus|步骤状态：SUCCEEDED/SKIPPED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;inputSummary|输入摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;outputSummary|输出摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"runNo": "",
				"taskCode": "",
				"triggerSource": "",
				"runStatus": "",
				"automationLevel": "",
				"marketScope": "",
				"themeCode": "",
				"mockUserBizId": "",
				"portfolioBizId": "",
				"reportBizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"backtestBizId": "",
				"qualityScore": 0,
				"gateResult": "",
				"summary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"steps": [
					{
						"bizId": "",
						"stepCode": "",
						"stepName": "",
						"stepOrder": 0,
						"stepStatus": "",
						"inputSummary": "",
						"outputSummary": "",
						"failureReason": "",
						"startedAt": "",
						"completedAt": ""
					}
				]
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseClosedLoopRunResponse|PageResponseClosedLoopRunResponse|
|&emsp;&emsp;items|当前页数据列表|array|ClosedLoopRunResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|闭环运行业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;runNo|运行编号|string||
|&emsp;&emsp;&emsp;&emsp;taskCode|任务编码|string||
|&emsp;&emsp;&emsp;&emsp;triggerSource|触发来源：SCHEDULE/MANUAL/RETRY|string||
|&emsp;&emsp;&emsp;&emsp;runStatus|运行状态：RUNNING/SUCCEEDED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;automationLevel|自动化等级：DATA_ONLY/MOCK_ONLY/FULL_MOCK|string||
|&emsp;&emsp;&emsp;&emsp;marketScope|市场范围|string||
|&emsp;&emsp;&emsp;&emsp;themeCode|主题编码|string||
|&emsp;&emsp;&emsp;&emsp;mockUserBizId|自动 Mock 用户业务标识|string||
|&emsp;&emsp;&emsp;&emsp;portfolioBizId|Mock 组合业务标识|string||
|&emsp;&emsp;&emsp;&emsp;reportBizId|报告业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt 业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt 编码|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt 版本|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|回测业务标识|string||
|&emsp;&emsp;&emsp;&emsp;qualityScore|质量分|number||
|&emsp;&emsp;&emsp;&emsp;gateResult|门禁结果：PENDING/PASS/BLOCK|string||
|&emsp;&emsp;&emsp;&emsp;summary|运行摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;steps|步骤记录|array|ClosedLoopStepResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|步骤业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepCode|步骤编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepName|步骤名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepOrder|步骤顺序|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;stepStatus|步骤状态：SUCCEEDED/SKIPPED/BLOCKED/FAILED|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;inputSummary|输入摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;outputSummary|输出摘要 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;failureReason|失败或阻断原因|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startedAt|开始时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;completedAt|完成时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"runNo": "",
				"taskCode": "",
				"triggerSource": "",
				"runStatus": "",
				"automationLevel": "",
				"marketScope": "",
				"themeCode": "",
				"mockUserBizId": "",
				"portfolioBizId": "",
				"reportBizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"backtestBizId": "",
				"qualityScore": 0,
				"gateResult": "",
				"summary": "",
				"failureReason": "",
				"startedAt": "",
				"completedAt": "",
				"steps": [
					{
						"bizId": "",
						"stepCode": "",
						"stepName": "",
						"stepOrder": 0,
						"stepStatus": "",
						"inputSummary": "",
						"outputSummary": "",
						"failureReason": "",
						"startedAt": "",
						"completedAt": ""
					}
				]
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


# AI Prompt评估


## 查询AI Prompt评估详情


**接口地址**:`/api/ai/prompt-evaluations/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据评估业务 ID 查询 Prompt 评分、回测、反馈和复核状态。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiPromptEvaluationBizIdRequest|AI Prompt 评估业务 ID 请求|body|true|AiPromptEvaluationBizIdRequest|AiPromptEvaluationBizIdRequest|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回 Prompt 评估详情|ResultAiPromptEvaluationResponse|
|403|Prompt评估对当前用户不可见|ResultAiPromptEvaluationResponse|
|404|Prompt评估不存在|ResultAiPromptEvaluationResponse|
|500|系统错误|ResultAiPromptEvaluationResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


## 分页查询AI Prompt评估


**接口地址**:`/api/ai/prompt-evaluations/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按 Prompt 编码、版本、场景、回测、反馈和复核状态查询评估记录。</p>



**请求示例**:


```javascript
{
  "promptCode": "",
  "promptVersion": "",
  "scenario": "",
  "backtestBizId": "",
  "feedbackBizId": "",
  "reviewStatus": "",
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiPromptEvaluationListRequest|AI Prompt 评估分页查询请求|body|true|AiPromptEvaluationListRequest|AiPromptEvaluationListRequest|
|&emsp;&emsp;promptCode|Prompt稳定编码||false|string||
|&emsp;&emsp;promptVersion|Prompt版本||false|string||
|&emsp;&emsp;scenario|使用场景||false|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识||false|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识||false|string||
|&emsp;&emsp;reviewStatus|复核状态||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：evaluatedAt/promptCode/promptVersion/scenario/score/reviewStatus||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回 Prompt 评估分页响应|ResultPageResponseAiPromptEvaluationResponse|
|400|分页或排序参数不合法|ResultPageResponseAiPromptEvaluationResponse|
|500|系统错误|ResultPageResponseAiPromptEvaluationResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiPromptEvaluationResponse|PageResponseAiPromptEvaluationResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiPromptEvaluationResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"scenario": "",
				"backtestBizId": "",
				"feedbackBizId": "",
				"score": 0,
				"scoreDetail": "",
				"reviewStatus": "",
				"evaluatorType": "",
				"evaluatorBizId": "",
				"evaluatedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiPromptEvaluationResponse|PageResponseAiPromptEvaluationResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiPromptEvaluationResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"scenario": "",
				"backtestBizId": "",
				"feedbackBizId": "",
				"score": 0,
				"scoreDetail": "",
				"reviewStatus": "",
				"evaluatorType": "",
				"evaluatorBizId": "",
				"evaluatedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiPromptEvaluationResponse|PageResponseAiPromptEvaluationResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiPromptEvaluationResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"promptBizId": "",
				"promptCode": "",
				"promptVersion": "",
				"scenario": "",
				"backtestBizId": "",
				"feedbackBizId": "",
				"score": 0,
				"scoreDetail": "",
				"reviewStatus": "",
				"evaluatorType": "",
				"evaluatorBizId": "",
				"evaluatedAt": "",
				"createdAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存AI Prompt评估


**接口地址**:`/api/ai/prompt-evaluations/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>保存人工或系统生成的 Prompt 版本评分，关联回测结果和反馈记录。</p>



**请求示例**:


```javascript
{
  "promptBizId": "",
  "promptCode": "",
  "promptVersion": "",
  "scenario": "",
  "backtestBizId": "",
  "feedbackBizId": "",
  "score": 0,
  "scoreDetail": "",
  "reviewStatus": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveAiPromptEvaluationRequest|保存 AI Prompt 评估请求|body|true|SaveAiPromptEvaluationRequest|SaveAiPromptEvaluationRequest|
|&emsp;&emsp;promptBizId|Prompt模板业务标识||false|string||
|&emsp;&emsp;promptCode|Prompt稳定编码||true|string||
|&emsp;&emsp;promptVersion|Prompt版本||true|string||
|&emsp;&emsp;scenario|使用场景||true|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识||false|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识||false|string||
|&emsp;&emsp;score|综合评分，0-1||true|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON||false|string||
|&emsp;&emsp;reviewStatus|复核状态：PENDING/APPROVED/REJECTED/ARCHIVED||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回 Prompt 评估|ResultAiPromptEvaluationResponse|
|400|参数或JSON格式不合法|ResultAiPromptEvaluationResponse|
|403|关联回测或反馈不属于当前用户|ResultAiPromptEvaluationResponse|
|500|系统错误|ResultAiPromptEvaluationResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptEvaluationResponse|AiPromptEvaluationResponse|
|&emsp;&emsp;bizId|Prompt评估业务唯一标识|string||
|&emsp;&emsp;promptBizId|Prompt模板业务标识|string||
|&emsp;&emsp;promptCode|Prompt稳定编码快照|string||
|&emsp;&emsp;promptVersion|Prompt版本快照|string||
|&emsp;&emsp;scenario|使用场景快照|string||
|&emsp;&emsp;backtestBizId|关联回测结果业务标识|string||
|&emsp;&emsp;feedbackBizId|关联反馈业务标识|string||
|&emsp;&emsp;score|综合评分|number||
|&emsp;&emsp;scoreDetail|评分详情 JSON|string||
|&emsp;&emsp;reviewStatus|复核状态|string||
|&emsp;&emsp;evaluatorType|评估来源|string||
|&emsp;&emsp;evaluatorBizId|评估人或任务业务标识|string||
|&emsp;&emsp;evaluatedAt|评估时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"backtestBizId": "",
		"feedbackBizId": "",
		"score": 0,
		"scoreDetail": "",
		"reviewStatus": "",
		"evaluatorType": "",
		"evaluatorBizId": "",
		"evaluatedAt": "",
		"createdAt": ""
	}
}
```


# AI Prompt治理


## 查询AI Prompt详情


**接口地址**:`/api/ai/prompts/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据 Prompt 业务 ID 查询模板、变量定义和输出 Schema。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiPromptBizIdRequest|AI Prompt 业务 ID 请求|body|true|AiPromptBizIdRequest|AiPromptBizIdRequest|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回 Prompt 模板详情|ResultAiPromptTemplateResponse|
|404|Prompt模板不存在|ResultAiPromptTemplateResponse|
|500|系统错误|ResultAiPromptTemplateResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


## 分页查询AI Prompt


**接口地址**:`/api/ai/prompts/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按 Prompt 编码、使用场景和状态查询 Prompt 模板版本。</p>



**请求示例**:


```javascript
{
  "promptCode": "INVESTMENT_PLAN",
  "scenario": "",
  "status": "",
  "page": 1,
  "size": 20,
  "sort": "updatedAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiPromptListRequest|AI Prompt 分页查询请求|body|true|AiPromptListRequest|AiPromptListRequest|
|&emsp;&emsp;promptCode|Prompt稳定编码||false|string||
|&emsp;&emsp;scenario|使用场景||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：updatedAt/promptCode/promptVersion/scenario/status||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|查询成功，返回 Prompt 模板分页响应|ResultPageResponseAiPromptTemplateResponse|
|400|分页、排序或筛选参数不合法|ResultPageResponseAiPromptTemplateResponse|
|500|系统错误|ResultPageResponseAiPromptTemplateResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiPromptTemplateResponse|PageResponseAiPromptTemplateResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiPromptTemplateResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新操作者|string||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"promptCode": "",
				"promptVersion": "",
				"scenario": "",
				"templateName": "",
				"templateContent": "",
				"status": "",
				"description": "",
				"variables": [
					{
						"bizId": "",
						"promptBizId": "",
						"variableName": "",
						"sourcePath": "",
						"required": true,
						"description": "",
						"createdAt": ""
					}
				],
				"outputSchemas": [
					{
						"bizId": "",
						"promptBizId": "",
						"schemaVersion": "",
						"schemaJson": "",
						"createdAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": "",
				"createdBy": "",
				"updatedBy": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiPromptTemplateResponse|PageResponseAiPromptTemplateResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiPromptTemplateResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新操作者|string||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"promptCode": "",
				"promptVersion": "",
				"scenario": "",
				"templateName": "",
				"templateContent": "",
				"status": "",
				"description": "",
				"variables": [
					{
						"bizId": "",
						"promptBizId": "",
						"variableName": "",
						"sourcePath": "",
						"required": true,
						"description": "",
						"createdAt": ""
					}
				],
				"outputSchemas": [
					{
						"bizId": "",
						"promptBizId": "",
						"schemaVersion": "",
						"schemaJson": "",
						"createdAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": "",
				"createdBy": "",
				"updatedBy": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiPromptTemplateResponse|PageResponseAiPromptTemplateResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiPromptTemplateResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新操作者|string||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"promptCode": "",
				"promptVersion": "",
				"scenario": "",
				"templateName": "",
				"templateContent": "",
				"status": "",
				"description": "",
				"variables": [
					{
						"bizId": "",
						"promptBizId": "",
						"variableName": "",
						"sourcePath": "",
						"required": true,
						"description": "",
						"createdAt": ""
					}
				],
				"outputSchemas": [
					{
						"bizId": "",
						"promptBizId": "",
						"schemaVersion": "",
						"schemaJson": "",
						"createdAt": ""
					}
				],
				"createdAt": "",
				"updatedAt": "",
				"createdBy": "",
				"updatedBy": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 预览AI Prompt


**接口地址**:`/api/ai/prompts/preview`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按业务 ID 或编码版本本地渲染 Prompt，只替换变量并校验必填项，不触发真实模型调用。</p>



**请求示例**:


```javascript
{
  "promptBizId": "",
  "promptCode": "",
  "promptVersion": "",
  "variables": {}
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiPromptPreviewRequest|AI Prompt 预览请求|body|true|AiPromptPreviewRequest|AiPromptPreviewRequest|
|&emsp;&emsp;promptBizId|Prompt模板业务唯一标识，优先使用||false|string||
|&emsp;&emsp;promptCode|Prompt稳定编码，未传业务ID时使用||false|string||
|&emsp;&emsp;promptVersion|Prompt版本，未传业务ID时使用||false|string||
|&emsp;&emsp;variables|预览变量值，键为变量名，值为替换文本||false|object||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|预览成功，返回渲染结果和缺失变量|ResultAiPromptPreviewResponse|
|400|Prompt定位参数不足|ResultAiPromptPreviewResponse|
|404|Prompt模板不存在|ResultAiPromptPreviewResponse|
|500|系统错误|ResultAiPromptPreviewResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptPreviewResponse|AiPromptPreviewResponse|
|&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;renderedPrompt|渲染后的最终Prompt|string||
|&emsp;&emsp;missingVariables|缺失变量名集合|array|string|
|&emsp;&emsp;readyForModel|预览是否可用于后续模型调用|boolean||
|&emsp;&emsp;displayMessage|预览提示信息|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"renderedPrompt": "",
		"missingVariables": [],
		"readyForModel": true,
		"displayMessage": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptPreviewResponse|AiPromptPreviewResponse|
|&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;renderedPrompt|渲染后的最终Prompt|string||
|&emsp;&emsp;missingVariables|缺失变量名集合|array|string|
|&emsp;&emsp;readyForModel|预览是否可用于后续模型调用|boolean||
|&emsp;&emsp;displayMessage|预览提示信息|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"renderedPrompt": "",
		"missingVariables": [],
		"readyForModel": true,
		"displayMessage": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptPreviewResponse|AiPromptPreviewResponse|
|&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;renderedPrompt|渲染后的最终Prompt|string||
|&emsp;&emsp;missingVariables|缺失变量名集合|array|string|
|&emsp;&emsp;readyForModel|预览是否可用于后续模型调用|boolean||
|&emsp;&emsp;displayMessage|预览提示信息|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"renderedPrompt": "",
		"missingVariables": [],
		"readyForModel": true,
		"displayMessage": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptPreviewResponse|AiPromptPreviewResponse|
|&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;renderedPrompt|渲染后的最终Prompt|string||
|&emsp;&emsp;missingVariables|缺失变量名集合|array|string|
|&emsp;&emsp;readyForModel|预览是否可用于后续模型调用|boolean||
|&emsp;&emsp;displayMessage|预览提示信息|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"promptBizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"renderedPrompt": "",
		"missingVariables": [],
		"readyForModel": true,
		"displayMessage": ""
	}
}
```


## 保存AI Prompt模板


**接口地址**:`/api/ai/prompts/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>新增或更新 Prompt 模板版本，并整体替换变量定义和输出 JSON Schema。</p>



**请求示例**:


```javascript
{
  "promptCode": "INVESTMENT_PLAN",
  "promptVersion": "v1",
  "scenario": "",
  "templateName": "",
  "templateContent": "",
  "status": "DRAFT",
  "description": "",
  "variables": [
    {
      "variableName": "reportSummary",
      "sourcePath": "report.summary",
      "required": true,
      "description": ""
    }
  ],
  "outputSchemas": [
    {
      "schemaVersion": "v1",
      "schemaJson": ""
    }
  ]
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveAiPromptTemplateRequest|保存 AI Prompt 模板请求|body|true|SaveAiPromptTemplateRequest|SaveAiPromptTemplateRequest|
|&emsp;&emsp;promptCode|Prompt稳定编码||true|string||
|&emsp;&emsp;promptVersion|Prompt版本||true|string||
|&emsp;&emsp;scenario|使用场景：INVESTMENT_REPORT/INVESTMENT_PLAN/RISK_AUDIT/BACKTEST_FEEDBACK||true|string||
|&emsp;&emsp;templateName|模板展示名称||true|string||
|&emsp;&emsp;templateContent|模板内容，变量使用 ${variableName} 占位||true|string||
|&emsp;&emsp;status|状态：DRAFT/VALIDATING/ACTIVE/RETIRED||false|string||
|&emsp;&emsp;description|模板说明||false|string||
|&emsp;&emsp;variables|变量定义集合||false|array|AiPromptVariableRequest|
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称，不包含 ${} 符号||true|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径||false|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填||false|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明||false|string||
|&emsp;&emsp;outputSchemas|输出Schema集合||false|array|AiPromptOutputSchemaRequest|
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本||true|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema字符串||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功，返回 Prompt 模板响应|ResultAiPromptTemplateResponse|
|400|参数、状态、场景、变量或 Schema 不合法|ResultAiPromptTemplateResponse|
|401|未登录或会话失效|ResultAiPromptTemplateResponse|
|500|系统错误|ResultAiPromptTemplateResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


## 变更AI Prompt状态


**接口地址**:`/api/ai/prompts/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>将 Prompt 状态变更为 DRAFT、VALIDATING、ACTIVE 或 RETIRED。</p>



**请求示例**:


```javascript
{
  "bizId": "",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiPromptStatusRequest|AI Prompt 状态变更请求|body|true|AiPromptStatusRequest|AiPromptStatusRequest|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识||true|string||
|&emsp;&emsp;status|目标状态：DRAFT/VALIDATING/ACTIVE/RETIRED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|变更成功，返回 Prompt 模板响应|ResultAiPromptTemplateResponse|
|400|状态不合法|ResultAiPromptTemplateResponse|
|404|Prompt模板不存在|ResultAiPromptTemplateResponse|
|500|系统错误|ResultAiPromptTemplateResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiPromptTemplateResponse|AiPromptTemplateResponse|
|&emsp;&emsp;bizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;promptCode|Prompt跨版本稳定编码|string||
|&emsp;&emsp;promptVersion|Prompt版本号|string||
|&emsp;&emsp;scenario|使用场景|string||
|&emsp;&emsp;templateName|模板展示名称|string||
|&emsp;&emsp;templateContent|模板内容|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;description|模板说明|string||
|&emsp;&emsp;variables|变量定义集合|array|AiPromptVariableResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|变量业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;variableName|变量名称|string||
|&emsp;&emsp;&emsp;&emsp;sourcePath|变量默认来源路径|string||
|&emsp;&emsp;&emsp;&emsp;required|是否必填|boolean||
|&emsp;&emsp;&emsp;&emsp;description|变量说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;outputSchemas|输出Schema集合|array|AiPromptOutputSchemaResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|输出Schema业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;promptBizId|Prompt模板业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;schemaVersion|Schema版本号|string||
|&emsp;&emsp;&emsp;&emsp;schemaJson|输出JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;createdBy|创建操作者|string||
|&emsp;&emsp;updatedBy|更新操作者|string||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"promptCode": "",
		"promptVersion": "",
		"scenario": "",
		"templateName": "",
		"templateContent": "",
		"status": "",
		"description": "",
		"variables": [
			{
				"bizId": "",
				"promptBizId": "",
				"variableName": "",
				"sourcePath": "",
				"required": true,
				"description": "",
				"createdAt": ""
			}
		],
		"outputSchemas": [
			{
				"bizId": "",
				"promptBizId": "",
				"schemaVersion": "",
				"schemaJson": "",
				"createdAt": ""
			}
		],
		"createdAt": "",
		"updatedAt": "",
		"createdBy": "",
		"updatedBy": ""
	}
}
```


# AI Skill管理


## 查询AI Skill详情


**接口地址**:`/api/ai/skills/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据 Skill 业务 ID 查询完整指令、Schema、评估策略和生命周期状态。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiSkillBizIdRequest|AI Skill 业务 ID 请求|body|true|AiSkillBizIdRequest|AiSkillBizIdRequest|
|&emsp;&emsp;bizId|Skill 业务 ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回 Skill 详情|ResultAiSkillResponse|
|404|Skill 不存在|ResultAiSkillResponse|
|500|系统错误|ResultAiSkillResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询AI Skill


**接口地址**:`/api/ai/skills/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按编码、类型、状态和关键词查询 AI Skill。</p>



**请求示例**:


```javascript
{
  "skillCode": "",
  "skillType": "",
  "status": "",
  "keyword": "",
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiSkillListRequest|AI Skill 列表请求|body|true|AiSkillListRequest|AiSkillListRequest|
|&emsp;&emsp;skillCode|Skill 编码||false|string||
|&emsp;&emsp;skillType|Skill 类型||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;keyword|关键词||false|string||
|&emsp;&emsp;page|页码，从 1 开始||false|integer(int32)||
|&emsp;&emsp;size|每页数量||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：updatedAt/skillCode/skillVersion/skillType/status||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回 Skill 分页响应|ResultPageResponseAiSkillResponse|
|400|分页或排序参数不合法|ResultPageResponseAiSkillResponse|
|500|系统错误|ResultPageResponseAiSkillResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiSkillResponse|PageResponseAiSkillResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiSkillResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"skillCode": "",
				"skillVersion": "",
				"skillName": "",
				"skillType": "",
				"status": "",
				"instructionContent": "",
				"inputSchema": "",
				"outputSchema": "",
				"evaluationPolicy": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiSkillResponse|PageResponseAiSkillResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiSkillResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"skillCode": "",
				"skillVersion": "",
				"skillName": "",
				"skillType": "",
				"status": "",
				"instructionContent": "",
				"inputSchema": "",
				"outputSchema": "",
				"evaluationPolicy": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiSkillResponse|PageResponseAiSkillResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiSkillResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"skillCode": "",
				"skillVersion": "",
				"skillName": "",
				"skillType": "",
				"status": "",
				"instructionContent": "",
				"inputSchema": "",
				"outputSchema": "",
				"evaluationPolicy": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存AI Skill


**接口地址**:`/api/ai/skills/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>新增或更新 AI Skill 版本、指令、输入输出 Schema 和评估策略。</p>



**请求示例**:


```javascript
{
  "skillCode": "",
  "skillVersion": "",
  "skillName": "",
  "skillType": "",
  "status": "",
  "instructionContent": "",
  "inputSchema": "",
  "outputSchema": "",
  "evaluationPolicy": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveAiSkillRequest|保存 AI Skill 请求|body|true|SaveAiSkillRequest|SaveAiSkillRequest|
|&emsp;&emsp;skillCode|Skill 编码||true|string||
|&emsp;&emsp;skillVersion|Skill 版本||true|string||
|&emsp;&emsp;skillName|Skill 名称||true|string||
|&emsp;&emsp;skillType|Skill 类型：DATA_SOURCE_DISCOVERY/PROMPT_GOVERNANCE等||true|string||
|&emsp;&emsp;status|生命周期状态：DRAFT/VALIDATING/ACTIVE/RETIRED/ARCHIVED||false|string||
|&emsp;&emsp;instructionContent|Skill 指令内容||true|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema||false|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema||false|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON||false|string||
|&emsp;&emsp;description|Skill 说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回保存后的 Skill|ResultAiSkillResponse|
|400|参数校验失败|ResultAiSkillResponse|
|500|系统错误|ResultAiSkillResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 变更AI Skill状态


**接口地址**:`/api/ai/skills/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>将 Skill 状态变更为 DRAFT、VALIDATING、ACTIVE、RETIRED 或 ARCHIVED。</p>



**请求示例**:


```javascript
{
  "bizId": "",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiSkillStatusRequest|AI Skill 状态变更请求|body|true|AiSkillStatusRequest|AiSkillStatusRequest|
|&emsp;&emsp;bizId|Skill 业务 ID||true|string||
|&emsp;&emsp;status|目标状态：DRAFT/VALIDATING/ACTIVE/RETIRED/ARCHIVED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回变更后的 Skill|ResultAiSkillResponse|
|400|参数校验失败|ResultAiSkillResponse|
|404|Skill 不存在|ResultAiSkillResponse|
|500|系统错误|ResultAiSkillResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiSkillResponse|AiSkillResponse|
|&emsp;&emsp;bizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;skillName|Skill 名称|string||
|&emsp;&emsp;skillType|Skill 类型|string||
|&emsp;&emsp;status|生命周期状态|string||
|&emsp;&emsp;instructionContent|Skill 指令内容|string||
|&emsp;&emsp;inputSchema|输入 JSON Schema|string||
|&emsp;&emsp;outputSchema|输出 JSON Schema|string||
|&emsp;&emsp;evaluationPolicy|评估策略 JSON|string||
|&emsp;&emsp;description|Skill 说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"skillCode": "",
		"skillVersion": "",
		"skillName": "",
		"skillType": "",
		"status": "",
		"instructionContent": "",
		"inputSchema": "",
		"outputSchema": "",
		"evaluationPolicy": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# AI模型挂靠配置


## 查询AI模型挂靠配置详情


**接口地址**:`/api/ai/model-bindings/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据场景编码和环境查询模型挂靠配置。</p>



**请求示例**:


```javascript
{
  "scenarioCode": "",
  "environment": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelBindingDetailRequest|AI 模型挂靠配置详情请求|body|true|AiModelBindingDetailRequest|AiModelBindingDetailRequest|
|&emsp;&emsp;scenarioCode|业务场景编码||true|string||
|&emsp;&emsp;environment|环境编码，默认 DEFAULT||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultAiModelBindingResponse|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelBindingResponse|AiModelBindingResponse|
|&emsp;&emsp;bizId|配置业务唯一标识|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;scenarioName|业务场景展示名称|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境编码|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级配置 JSON|string||
|&emsp;&emsp;description|配置说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"scenarioCode": "",
		"scenarioName": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询AI模型挂靠配置


**接口地址**:`/api/ai/model-bindings/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按场景、模型、提供方、环境和启用状态查询模型挂靠配置。</p>



**请求示例**:


```javascript
{
  "scenarioCode": "",
  "modelCode": "",
  "providerCode": "",
  "environment": "",
  "enabled": true,
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelBindingListRequest|AI 模型挂靠配置列表请求|body|true|AiModelBindingListRequest|AiModelBindingListRequest|
|&emsp;&emsp;scenarioCode|业务场景编码||false|string||
|&emsp;&emsp;modelCode|模型编码||false|string||
|&emsp;&emsp;providerCode|模型提供方||false|string||
|&emsp;&emsp;environment|环境编码||false|string||
|&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;page|页码，从 1 开始||false|integer(int32)||
|&emsp;&emsp;size|每页数量||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：updatedAt/scenarioCode/modelCode/providerCode/environment/enabled||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResponseAiModelBindingResponse|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelBindingResponse|PageResponseAiModelBindingResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|配置业务唯一标识|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;scenarioName|业务场景展示名称|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;&emsp;&emsp;environment|环境编码|string||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|配置说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"scenarioCode": "",
				"scenarioName": "",
				"modelCode": "",
				"providerCode": "",
				"environment": "",
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存AI模型挂靠配置


**接口地址**:`/api/ai/model-bindings/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按业务场景和环境保存模型挂靠配置，前端可统一配置所有需要挂靠大模型的节点。</p>



**请求示例**:


```javascript
{
  "scenarioCode": "",
  "scenarioName": "",
  "modelCode": "",
  "providerCode": "",
  "environment": "",
  "enabled": true,
  "config": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveAiModelBindingRequest|保存 AI 模型挂靠配置请求|body|true|SaveAiModelBindingRequest|SaveAiModelBindingRequest|
|&emsp;&emsp;scenarioCode|业务场景编码，例如 DATA_SOURCE_DISCOVERY/AUTO_REPORT_GENERATION||true|string||
|&emsp;&emsp;scenarioName|业务场景展示名称||true|string||
|&emsp;&emsp;modelCode|模型稳定编码||true|string||
|&emsp;&emsp;providerCode|模型提供方一致性校验编码||false|string||
|&emsp;&emsp;environment|生效环境，默认 DEFAULT||false|string||
|&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;config|场景级模型参数 JSON||false|string||
|&emsp;&emsp;description|配置说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|保存成功|ResultAiModelBindingResponse|
|400|参数不合法或模型未启用|ResultAiModelBindingResponse|
|500|系统错误|ResultAiModelBindingResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelBindingResponse|AiModelBindingResponse|
|&emsp;&emsp;bizId|配置业务唯一标识|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;scenarioName|业务场景展示名称|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境编码|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级配置 JSON|string||
|&emsp;&emsp;description|配置说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"scenarioCode": "",
		"scenarioName": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelBindingResponse|AiModelBindingResponse|
|&emsp;&emsp;bizId|配置业务唯一标识|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;scenarioName|业务场景展示名称|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境编码|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级配置 JSON|string||
|&emsp;&emsp;description|配置说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"scenarioCode": "",
		"scenarioName": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelBindingResponse|AiModelBindingResponse|
|&emsp;&emsp;bizId|配置业务唯一标识|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;scenarioName|业务场景展示名称|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;providerCode|模型提供方|string||
|&emsp;&emsp;environment|环境编码|string||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级配置 JSON|string||
|&emsp;&emsp;description|配置说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"scenarioCode": "",
		"scenarioName": "",
		"modelCode": "",
		"providerCode": "",
		"environment": "",
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# AI模型管理


## 归档AI模型


**接口地址**:`/api/ai/models/archive`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>逻辑删除 AI 模型，将状态置为 ARCHIVED 并记录停用时间。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelBizIdRequest|AI 模型业务 ID 请求|body|true|AiModelBizIdRequest|AiModelBizIdRequest|
|&emsp;&emsp;bizId|模型业务 ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回归档后的模型|ResultAiModelResponse|
|404|AI模型不存在|ResultAiModelResponse|
|500|系统错误|ResultAiModelResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


## 查询AI模型详情


**接口地址**:`/api/ai/models/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据模型业务 ID 查询模型版本、配置、指标和状态。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelBizIdRequest|AI 模型业务 ID 请求|body|true|AiModelBizIdRequest|AiModelBizIdRequest|
|&emsp;&emsp;bizId|模型业务 ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回模型详情|ResultAiModelResponse|
|404|AI模型不存在|ResultAiModelResponse|
|500|系统错误|ResultAiModelResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


## 分页查询AI模型


**接口地址**:`/api/ai/models/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按模型编码、类型、提供方和状态查询 AI 模型注册信息。</p>



**请求示例**:


```javascript
{
  "modelCode": "investment-analysis",
  "modelType": "ANALYSIS",
  "provider": "LOCAL_RULE",
  "status": "ACTIVE",
  "page": 1,
  "size": 20,
  "sort": "updatedAt",
  "direction": "desc"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelListRequest|AI 模型分页请求|body|true|AiModelListRequest|AiModelListRequest|
|&emsp;&emsp;modelCode|模型编码||false|string||
|&emsp;&emsp;modelType|模型类型||false|string||
|&emsp;&emsp;provider|提供方||false|string||
|&emsp;&emsp;status|状态||false|string||
|&emsp;&emsp;page|页码，从 1 开始；传 0 会兼容为第一页||false|integer(int32)||
|&emsp;&emsp;size|每页条数，1-100||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：updatedAt/modelCode/modelVersion/modelType/provider/status/activatedAt||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回模型分页响应|ResultPageResponseAiModelResponse|
|400|分页或排序参数不合法|ResultPageResponseAiModelResponse|
|500|系统错误|ResultPageResponseAiModelResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelResponse|PageResponseAiModelResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"modelCode": "",
				"modelVersion": "",
				"modelName": "",
				"modelType": "",
				"provider": "",
				"artifactUri": "",
				"modelConfig": "",
				"metrics": "",
				"status": "",
				"activatedAt": "",
				"retiredAt": "",
				"createdAt": "",
				"updatedAt": "",
				"skills": [
					{
						"bizId": "",
						"modelBizId": "",
						"modelCode": "",
						"modelVersion": "",
						"skillBizId": "",
						"skillCode": "",
						"skillVersion": "",
						"scenarioCode": "",
						"priority": 0,
						"enabled": true,
						"config": "",
						"description": "",
						"createdAt": "",
						"updatedAt": ""
					}
				]
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelResponse|PageResponseAiModelResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"modelCode": "",
				"modelVersion": "",
				"modelName": "",
				"modelType": "",
				"provider": "",
				"artifactUri": "",
				"modelConfig": "",
				"metrics": "",
				"status": "",
				"activatedAt": "",
				"retiredAt": "",
				"createdAt": "",
				"updatedAt": "",
				"skills": [
					{
						"bizId": "",
						"modelBizId": "",
						"modelCode": "",
						"modelVersion": "",
						"skillBizId": "",
						"skillCode": "",
						"skillVersion": "",
						"scenarioCode": "",
						"priority": 0,
						"enabled": true,
						"config": "",
						"description": "",
						"createdAt": "",
						"updatedAt": ""
					}
				]
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelResponse|PageResponseAiModelResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;&emsp;&emsp;status|状态|string||
|&emsp;&emsp;&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"modelCode": "",
				"modelVersion": "",
				"modelName": "",
				"modelType": "",
				"provider": "",
				"artifactUri": "",
				"modelConfig": "",
				"metrics": "",
				"status": "",
				"activatedAt": "",
				"retiredAt": "",
				"createdAt": "",
				"updatedAt": "",
				"skills": [
					{
						"bizId": "",
						"modelBizId": "",
						"modelCode": "",
						"modelVersion": "",
						"skillBizId": "",
						"skillCode": "",
						"skillVersion": "",
						"scenarioCode": "",
						"priority": 0,
						"enabled": true,
						"config": "",
						"description": "",
						"createdAt": "",
						"updatedAt": ""
					}
				]
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存AI模型配置


**接口地址**:`/api/ai/models/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按模型编码和版本新增或更新 AI 模型配置，包含提供方、制品地址、模型参数和评估指标。</p>



**请求示例**:


```javascript
{
  "modelCode": "investment-analysis",
  "modelVersion": "v1",
  "modelName": "投资分析模型",
  "modelType": "ANALYSIS",
  "provider": "LOCAL_RULE",
  "artifactUri": "",
  "modelConfig": "",
  "metrics": "",
  "status": "ACTIVE"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveAiModelRequest|保存 AI 模型配置请求|body|true|SaveAiModelRequest|SaveAiModelRequest|
|&emsp;&emsp;modelCode|模型稳定编码||true|string||
|&emsp;&emsp;modelVersion|模型版本||true|string||
|&emsp;&emsp;modelName|模型名称||true|string||
|&emsp;&emsp;modelType|模型类型：SIGNAL/RISK/RECOMMENDATION/NLP/ANALYSIS||true|string||
|&emsp;&emsp;provider|模型提供方||false|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址||false|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串||false|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串||false|string||
|&emsp;&emsp;status|状态：DRAFT/VALIDATING/ACTIVE/INACTIVE/ARCHIVED||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回保存后的模型配置|ResultAiModelResponse|
|400|参数校验失败|ResultAiModelResponse|
|500|系统错误|ResultAiModelResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


## 变更AI模型状态


**接口地址**:`/api/ai/models/status`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>将 AI 模型状态变更为 DRAFT、VALIDATING、ACTIVE、INACTIVE 或 ARCHIVED。</p>



**请求示例**:


```javascript
{
  "bizId": "",
  "status": "ACTIVE"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelStatusRequest|AI 模型状态变更请求|body|true|AiModelStatusRequest|AiModelStatusRequest|
|&emsp;&emsp;bizId|模型业务 ID||true|string||
|&emsp;&emsp;status|目标状态：DRAFT/VALIDATING/ACTIVE/INACTIVE/ARCHIVED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回变更后的模型|ResultAiModelResponse|
|400|参数校验失败|ResultAiModelResponse|
|404|AI模型不存在|ResultAiModelResponse|
|500|系统错误|ResultAiModelResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelResponse|AiModelResponse|
|&emsp;&emsp;bizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;modelName|模型名称|string||
|&emsp;&emsp;modelType|模型类型|string||
|&emsp;&emsp;provider|模型提供方|string||
|&emsp;&emsp;artifactUri|模型制品、提示词或配置地址|string||
|&emsp;&emsp;modelConfig|脱敏后的模型参数 JSON 字符串|string||
|&emsp;&emsp;metrics|离线评估指标 JSON 字符串|string||
|&emsp;&emsp;status|状态|string||
|&emsp;&emsp;activatedAt|启用时间|string(date-time)||
|&emsp;&emsp;retiredAt|停用时间|string(date-time)||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;skills|当前模型实例启用的 Skill 绑定|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelCode": "",
		"modelVersion": "",
		"modelName": "",
		"modelType": "",
		"provider": "",
		"artifactUri": "",
		"modelConfig": "",
		"metrics": "",
		"status": "",
		"activatedAt": "",
		"retiredAt": "",
		"createdAt": "",
		"updatedAt": "",
		"skills": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		]
	}
}
```


# AI模型Skill绑定


## 查询模型已启用Skill


**接口地址**:`/api/ai/model-skills/by-model`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询指定模型实例当前启用的 Skill 绑定，用于模型详情和复盘页展示。</p>



**请求示例**:


```javascript
{
  "modelBizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelSkillsRequest|查询模型启用 Skill 请求|body|true|AiModelSkillsRequest|AiModelSkillsRequest|
|&emsp;&emsp;modelBizId|模型业务 ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回启用绑定列表|ResultListAiModelSkillBindingResponse|
|400|参数校验失败|ResultListAiModelSkillBindingResponse|
|500|系统错误|ResultListAiModelSkillBindingResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"modelBizId": "",
			"modelCode": "",
			"modelVersion": "",
			"skillBizId": "",
			"skillCode": "",
			"skillVersion": "",
			"scenarioCode": "",
			"priority": 0,
			"enabled": true,
			"config": "",
			"description": "",
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"modelBizId": "",
			"modelCode": "",
			"modelVersion": "",
			"skillBizId": "",
			"skillCode": "",
			"skillVersion": "",
			"scenarioCode": "",
			"priority": 0,
			"enabled": true,
			"config": "",
			"description": "",
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|array|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": [
		{
			"bizId": "",
			"modelBizId": "",
			"modelCode": "",
			"modelVersion": "",
			"skillBizId": "",
			"skillCode": "",
			"skillVersion": "",
			"scenarioCode": "",
			"priority": 0,
			"enabled": true,
			"config": "",
			"description": "",
			"createdAt": "",
			"updatedAt": ""
		}
	]
}
```


## 查询模型Skill绑定详情


**接口地址**:`/api/ai/model-skills/detail`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>根据绑定业务 ID 查询模型、Skill、场景和配置。</p>



**请求示例**:


```javascript
{
  "bizId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelSkillBindingBizIdRequest|AI 模型 Skill 绑定业务 ID 请求|body|true|AiModelSkillBindingBizIdRequest|AiModelSkillBindingBizIdRequest|
|&emsp;&emsp;bizId|绑定业务 ID||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回绑定详情|ResultAiModelSkillBindingResponse|
|404|绑定不存在|ResultAiModelSkillBindingResponse|
|500|系统错误|ResultAiModelSkillBindingResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 分页查询模型Skill绑定


**接口地址**:`/api/ai/model-skills/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>按模型、Skill、业务场景和启用状态查询绑定。</p>



**请求示例**:


```javascript
{
  "modelBizId": "",
  "modelCode": "",
  "skillCode": "",
  "scenarioCode": "",
  "enabled": true,
  "page": 0,
  "size": 0,
  "sort": "",
  "direction": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aiModelSkillBindingListRequest|AI 模型 Skill 绑定列表请求|body|true|AiModelSkillBindingListRequest|AiModelSkillBindingListRequest|
|&emsp;&emsp;modelBizId|模型业务 ID||false|string||
|&emsp;&emsp;modelCode|模型编码||false|string||
|&emsp;&emsp;skillCode|Skill 编码||false|string||
|&emsp;&emsp;scenarioCode|业务场景编码||false|string||
|&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;page|页码，从 1 开始||false|integer(int32)||
|&emsp;&emsp;size|每页数量||false|integer(int32)||
|&emsp;&emsp;sort|排序字段：updatedAt/modelCode/skillCode/scenarioCode/priority/enabled||false|string||
|&emsp;&emsp;direction|排序方向：asc/desc||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回绑定分页响应|ResultPageResponseAiModelSkillBindingResponse|
|400|分页或排序参数不合法|ResultPageResponseAiModelSkillBindingResponse|
|500|系统错误|ResultPageResponseAiModelSkillBindingResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelSkillBindingResponse|PageResponseAiModelSkillBindingResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelSkillBindingResponse|PageResponseAiModelSkillBindingResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|PageResponseAiModelSkillBindingResponse|PageResponseAiModelSkillBindingResponse|
|&emsp;&emsp;items|当前页数据列表|array|AiModelSkillBindingResponse|
|&emsp;&emsp;&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt|更新时间|string(date-time)||
|&emsp;&emsp;total|数据总条数|integer(int64)||
|&emsp;&emsp;page|当前页码，从 1 开始|integer(int32)||
|&emsp;&emsp;size|每页条数|integer(int32)||
|&emsp;&emsp;totalPages|总页数|integer(int32)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"items": [
			{
				"bizId": "",
				"modelBizId": "",
				"modelCode": "",
				"modelVersion": "",
				"skillBizId": "",
				"skillCode": "",
				"skillVersion": "",
				"scenarioCode": "",
				"priority": 0,
				"enabled": true,
				"config": "",
				"description": "",
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 128,
		"page": 1,
		"size": 20,
		"totalPages": 7
	}
}
```


## 保存模型Skill绑定


**接口地址**:`/api/ai/model-skills/save`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>将模型实例绑定到指定 Skill 版本和业务场景。</p>



**请求示例**:


```javascript
{
  "modelBizId": "",
  "skillBizId": "",
  "scenarioCode": "",
  "priority": 0,
  "enabled": true,
  "config": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|saveAiModelSkillBindingRequest|保存 AI 模型 Skill 绑定请求|body|true|SaveAiModelSkillBindingRequest|SaveAiModelSkillBindingRequest|
|&emsp;&emsp;modelBizId|模型业务 ID||true|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID||true|string||
|&emsp;&emsp;scenarioCode|业务场景编码||true|string||
|&emsp;&emsp;priority|优先级，数值越小越优先||false|integer(int32)||
|&emsp;&emsp;enabled|是否启用||false|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON||false|string||
|&emsp;&emsp;description|绑定说明||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|成功，返回保存后的绑定|ResultAiModelSkillBindingResponse|
|400|参数校验失败|ResultAiModelSkillBindingResponse|
|404|模型或 Skill 不存在|ResultAiModelSkillBindingResponse|
|500|系统错误|ResultAiModelSkillBindingResponse|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|业务响应码，与 HTTP 状态语义保持一致|integer(int32)|integer(int32)|
|message|响应消息；成功时通常为 success，失败时为可读错误信息|string||
|data|业务响应数据；无返回数据时为 null|AiModelSkillBindingResponse|AiModelSkillBindingResponse|
|&emsp;&emsp;bizId|绑定业务 ID|string||
|&emsp;&emsp;modelBizId|模型业务 ID|string||
|&emsp;&emsp;modelCode|模型编码|string||
|&emsp;&emsp;modelVersion|模型版本|string||
|&emsp;&emsp;skillBizId|Skill 业务 ID|string||
|&emsp;&emsp;skillCode|Skill 编码|string||
|&emsp;&emsp;skillVersion|Skill 版本|string||
|&emsp;&emsp;scenarioCode|业务场景编码|string||
|&emsp;&emsp;priority|优先级|integer(int32)||
|&emsp;&emsp;enabled|是否启用|boolean||
|&emsp;&emsp;config|场景级绑定配置 JSON|string||
|&emsp;&emsp;description|绑定说明|string||
|&emsp;&emsp;createdAt|创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|更新时间|string(date-time)||


**响应示例**:
```javascript
{
	"code": 200,
	"message": "success",
	"data": {
		"bizId": "",
		"modelBizId": "",
		"modelCode": "",
		"modelVersion": "",
		"skillBizId": "",
		"skillCode": "",
		"skillVersion": "",
		"scenarioCode": "",
		"priority": 0,
		"enabled": true,
		"config": "",
		"description": "",
		"createdAt": "",
		"updatedAt": ""
	}
}
```