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
|&emsp;&emsp;productType|产品类型,可用值:STOCK,FUND,BOND,ETF||false|string||
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
|&emsp;&emsp;productType|产品类型,可用值:STOCK,FUND,BOND,ETF||true|string||
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
|&emsp;&emsp;modelCode|模型稳定编码；为空时使用 local-rule-analysis||false|string||
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
|&emsp;&emsp;sort|排序字段：generatedAt/createdAt/providerCode/modelCode/themeCode/status||false|string||
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
|&emsp;&emsp;parameters|任务参数；收益、动量和资讯热度任务默认只处理 CN_MAINLAND||false|object||
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
|&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/FAILED||false|string||
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
|&emsp;&emsp;&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/FAILED|string||
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
|&emsp;&emsp;&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/FAILED|string||
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
|&emsp;&emsp;&emsp;&emsp;status|执行状态：RUNNING/SUCCEEDED/FAILED|string||
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
|&emsp;&emsp;parameters|本次手动触发覆盖参数；为空时使用配置默认参数||false|object||


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
		"updatedAt": ""
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
		"updatedAt": ""
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
		"updatedAt": ""
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
		"updatedAt": ""
	}
}
```