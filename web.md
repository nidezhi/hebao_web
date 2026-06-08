# DZCOM API 文档


**简介**:DZCOM API 文档


**HOST**:http://localhost:8511


**联系人**:技术团队


**Version**:0.1.0


**接口路径**:/v3/api-docs/default


[TOC]






# 本人账户


## 更新本人邮箱和手机号


**接口地址**:`/api/users/me`


**请求方式**:`PATCH`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "email": "",
  "phone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateUserRequest|UpdateUserRequest|body|true|UpdateUserRequest|UpdateUserRequest|
|&emsp;&emsp;email|||false|string(email)||
|&emsp;&emsp;phone|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 修改本人密码


**接口地址**:`/api/users/me/password`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "currentPassword": "",
  "newPassword": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|changePasswordRequest|ChangePasswordRequest|body|true|ChangePasswordRequest|ChangePasswordRequest|
|&emsp;&emsp;currentPassword|||true|string||
|&emsp;&emsp;newPassword|||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultVoid|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||string||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {}
}
```


## 查询本人偏好


**接口地址**:`/api/users/me/preferences`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListPreferenceView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||array|PreferenceView|
|&emsp;&emsp;key||string||
|&emsp;&emsp;valueType||string||
|&emsp;&emsp;value||JsonNode|JsonNode|
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": [
		{
			"key": "",
			"valueType": "",
			"value": {},
			"updatedAt": ""
		}
	]
}
```


## 设置本人偏好


**接口地址**:`/api/users/me/preferences/{key}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "value": {}
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|key||path|true|string||
|preferenceRequest|PreferenceRequest|body|true|PreferenceRequest|PreferenceRequest|
|&emsp;&emsp;value|||true|JsonNode|JsonNode|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPreferenceView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||PreferenceView|PreferenceView|
|&emsp;&emsp;key||string||
|&emsp;&emsp;valueType||string||
|&emsp;&emsp;value||JsonNode|JsonNode|
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"key": "",
		"valueType": "",
		"value": {},
		"updatedAt": ""
	}
}
```


## 删除本人偏好


**接口地址**:`/api/users/me/preferences/{key}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|key||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultVoid|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||string||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {}
}
```


# 产品与行情


## 分页查询产品目录


**接口地址**:`/api/products`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|keyword||query|false|string||
|productType|可用值:STOCK,FUND,BOND,ETF|query|false|string||
|tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|query|false|string||
|riskLevel||query|false|integer(int32)||
|currency||query|false|string||
|page||query|false|integer(int32)||
|size||query|false|integer(int32)||
|sort||query|false|string||
|direction||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResultProductView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||PageResultProductView|PageResultProductView|
|&emsp;&emsp;items||array|ProductView|
|&emsp;&emsp;&emsp;&emsp;bizId||string||
|&emsp;&emsp;&emsp;&emsp;productNo||string||
|&emsp;&emsp;&emsp;&emsp;productCode||string||
|&emsp;&emsp;&emsp;&emsp;productName||string||
|&emsp;&emsp;&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF|string||
|&emsp;&emsp;&emsp;&emsp;marketCode||string||
|&emsp;&emsp;&emsp;&emsp;currency||string||
|&emsp;&emsp;&emsp;&emsp;tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;minInvestAmount||number||
|&emsp;&emsp;&emsp;&emsp;amountStep||number||
|&emsp;&emsp;&emsp;&emsp;quantityStep||number||
|&emsp;&emsp;&emsp;&emsp;feeRate||number||
|&emsp;&emsp;&emsp;&emsp;listingDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;delistingDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;description||string||
|&emsp;&emsp;&emsp;&emsp;attributes||array|ProductAttributeView|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;key||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;valueType||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;jsonValue||string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;effectiveDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;&emsp;&emsp;createdAt||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedAt||string(date-time)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;page||integer(int32)||
|&emsp;&emsp;size||integer(int32)||
|&emsp;&emsp;totalPages||integer(int32)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"items": [
			{
				"bizId": "",
				"productNo": "",
				"productCode": "",
				"productName": "",
				"productType": "",
				"marketCode": "",
				"currency": "",
				"tradeStatus": "",
				"riskLevel": 0,
				"minInvestAmount": 0,
				"amountStep": 0,
				"quantityStep": 0,
				"feeRate": 0,
				"listingDate": "",
				"delistingDate": "",
				"description": "",
				"attributes": [
					{
						"key": "",
						"valueType": "",
						"jsonValue": "",
						"effectiveDate": "",
						"sourceCode": ""
					}
				],
				"createdAt": "",
				"updatedAt": ""
			}
		],
		"total": 0,
		"page": 0,
		"size": 0,
		"totalPages": 0
	}
}
```


## 查询产品详情


**接口地址**:`/api/products/{bizId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||ProductView|ProductView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productNo||string||
|&emsp;&emsp;productCode||string||
|&emsp;&emsp;productName||string||
|&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF|string||
|&emsp;&emsp;marketCode||string||
|&emsp;&emsp;currency||string||
|&emsp;&emsp;tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;minInvestAmount||number||
|&emsp;&emsp;amountStep||number||
|&emsp;&emsp;quantityStep||number||
|&emsp;&emsp;feeRate||number||
|&emsp;&emsp;listingDate||string(date)||
|&emsp;&emsp;delistingDate||string(date)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;attributes||array|ProductAttributeView|
|&emsp;&emsp;&emsp;&emsp;key||string||
|&emsp;&emsp;&emsp;&emsp;valueType||string||
|&emsp;&emsp;&emsp;&emsp;jsonValue||string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;createdAt||string(date-time)||
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productNo": "",
		"productCode": "",
		"productName": "",
		"productType": "",
		"marketCode": "",
		"currency": "",
		"tradeStatus": "",
		"riskLevel": 0,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "",
				"valueType": "",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 查询产品历史行情


**接口地址**:`/api/products/{bizId}/quotes`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|from||query|true|string(date-time)||
|to||query|true|string(date-time)||
|interval||query|false|string||
|sourceCode||query|false|string||
|limit||query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultListMarketQuoteView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||array|MarketQuoteView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productBizId||string||
|&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;interval||string||
|&emsp;&emsp;quoteTime||string(date-time)||
|&emsp;&emsp;openPrice||number||
|&emsp;&emsp;highPrice||number||
|&emsp;&emsp;lowPrice||number||
|&emsp;&emsp;closePrice||number||
|&emsp;&emsp;previousClosePrice||number||
|&emsp;&emsp;volume||number||
|&emsp;&emsp;turnoverAmount||number||
|&emsp;&emsp;status|可用值:INVALID,VALID,CORRECTED|string||
|&emsp;&emsp;receivedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": [
		{
			"bizId": "",
			"productBizId": "",
			"sourceCode": "",
			"interval": "",
			"quoteTime": "",
			"openPrice": 0,
			"highPrice": 0,
			"lowPrice": 0,
			"closePrice": 0,
			"previousClosePrice": 0,
			"volume": 0,
			"turnoverAmount": 0,
			"status": "",
			"receivedAt": ""
		}
	]
}
```


## 查询产品最新有效行情


**接口地址**:`/api/products/{bizId}/quotes/latest`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|interval||query|false|string||
|sourceCode||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMarketQuoteView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||MarketQuoteView|MarketQuoteView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productBizId||string||
|&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;interval||string||
|&emsp;&emsp;quoteTime||string(date-time)||
|&emsp;&emsp;openPrice||number||
|&emsp;&emsp;highPrice||number||
|&emsp;&emsp;lowPrice||number||
|&emsp;&emsp;closePrice||number||
|&emsp;&emsp;previousClosePrice||number||
|&emsp;&emsp;volume||number||
|&emsp;&emsp;turnoverAmount||number||
|&emsp;&emsp;status|可用值:INVALID,VALID,CORRECTED|string||
|&emsp;&emsp;receivedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productBizId": "",
		"sourceCode": "",
		"interval": "",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "",
		"receivedAt": ""
	}
}
```


# 管理端产品与行情


## 创建产品


**接口地址**:`/api/admin/products`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productCode": "",
  "productName": "",
  "productType": "",
  "marketCode": "",
  "currency": "",
  "riskLevel": 0,
  "minInvestAmount": 0,
  "amountStep": 0,
  "quantityStep": 0,
  "feeRate": 0,
  "listingDate": "",
  "delistingDate": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|createProductRequest|CreateProductRequest|body|true|CreateProductRequest|CreateProductRequest|
|&emsp;&emsp;productCode|||true|string||
|&emsp;&emsp;productName|||true|string||
|&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF||true|string||
|&emsp;&emsp;marketCode|||true|string||
|&emsp;&emsp;currency|||true|string||
|&emsp;&emsp;riskLevel|||false|integer(int32)||
|&emsp;&emsp;minInvestAmount|||true|number||
|&emsp;&emsp;amountStep|||true|number||
|&emsp;&emsp;quantityStep|||true|number||
|&emsp;&emsp;feeRate|||true|number||
|&emsp;&emsp;listingDate|||false|string(date)||
|&emsp;&emsp;delistingDate|||false|string(date)||
|&emsp;&emsp;description|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||ProductView|ProductView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productNo||string||
|&emsp;&emsp;productCode||string||
|&emsp;&emsp;productName||string||
|&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF|string||
|&emsp;&emsp;marketCode||string||
|&emsp;&emsp;currency||string||
|&emsp;&emsp;tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;minInvestAmount||number||
|&emsp;&emsp;amountStep||number||
|&emsp;&emsp;quantityStep||number||
|&emsp;&emsp;feeRate||number||
|&emsp;&emsp;listingDate||string(date)||
|&emsp;&emsp;delistingDate||string(date)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;attributes||array|ProductAttributeView|
|&emsp;&emsp;&emsp;&emsp;key||string||
|&emsp;&emsp;&emsp;&emsp;valueType||string||
|&emsp;&emsp;&emsp;&emsp;jsonValue||string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;createdAt||string(date-time)||
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productNo": "",
		"productCode": "",
		"productName": "",
		"productType": "",
		"marketCode": "",
		"currency": "",
		"tradeStatus": "",
		"riskLevel": 0,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "",
				"valueType": "",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 更新产品可变资料


**接口地址**:`/api/admin/products/{bizId}`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "productName": "",
  "riskLevel": 0,
  "minInvestAmount": 0,
  "amountStep": 0,
  "quantityStep": 0,
  "feeRate": 0,
  "listingDate": "",
  "delistingDate": "",
  "description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|updateProductRequest|UpdateProductRequest|body|true|UpdateProductRequest|UpdateProductRequest|
|&emsp;&emsp;productName|||true|string||
|&emsp;&emsp;riskLevel|||false|integer(int32)||
|&emsp;&emsp;minInvestAmount|||true|number||
|&emsp;&emsp;amountStep|||true|number||
|&emsp;&emsp;quantityStep|||true|number||
|&emsp;&emsp;feeRate|||true|number||
|&emsp;&emsp;listingDate|||false|string(date)||
|&emsp;&emsp;delistingDate|||false|string(date)||
|&emsp;&emsp;description|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||ProductView|ProductView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productNo||string||
|&emsp;&emsp;productCode||string||
|&emsp;&emsp;productName||string||
|&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF|string||
|&emsp;&emsp;marketCode||string||
|&emsp;&emsp;currency||string||
|&emsp;&emsp;tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;minInvestAmount||number||
|&emsp;&emsp;amountStep||number||
|&emsp;&emsp;quantityStep||number||
|&emsp;&emsp;feeRate||number||
|&emsp;&emsp;listingDate||string(date)||
|&emsp;&emsp;delistingDate||string(date)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;attributes||array|ProductAttributeView|
|&emsp;&emsp;&emsp;&emsp;key||string||
|&emsp;&emsp;&emsp;&emsp;valueType||string||
|&emsp;&emsp;&emsp;&emsp;jsonValue||string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;createdAt||string(date-time)||
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productNo": "",
		"productCode": "",
		"productName": "",
		"productType": "",
		"marketCode": "",
		"currency": "",
		"tradeStatus": "",
		"riskLevel": 0,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "",
				"valueType": "",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 逻辑删除产品


**接口地址**:`/api/admin/products/{bizId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultVoid|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||string||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {}
}
```


## 新增或覆盖产品扩展属性


**接口地址**:`/api/admin/products/{bizId}/attributes`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "key": "",
  "valueType": "",
  "jsonValue": "",
  "effectiveDate": "",
  "sourceCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|productAttributeRequest|ProductAttributeRequest|body|true|ProductAttributeRequest|ProductAttributeRequest|
|&emsp;&emsp;key|||true|string||
|&emsp;&emsp;valueType|||true|string||
|&emsp;&emsp;jsonValue|||true|string||
|&emsp;&emsp;effectiveDate|||false|string(date)||
|&emsp;&emsp;sourceCode|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||ProductView|ProductView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productNo||string||
|&emsp;&emsp;productCode||string||
|&emsp;&emsp;productName||string||
|&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF|string||
|&emsp;&emsp;marketCode||string||
|&emsp;&emsp;currency||string||
|&emsp;&emsp;tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;minInvestAmount||number||
|&emsp;&emsp;amountStep||number||
|&emsp;&emsp;quantityStep||number||
|&emsp;&emsp;feeRate||number||
|&emsp;&emsp;listingDate||string(date)||
|&emsp;&emsp;delistingDate||string(date)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;attributes||array|ProductAttributeView|
|&emsp;&emsp;&emsp;&emsp;key||string||
|&emsp;&emsp;&emsp;&emsp;valueType||string||
|&emsp;&emsp;&emsp;&emsp;jsonValue||string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;createdAt||string(date-time)||
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productNo": "",
		"productCode": "",
		"productName": "",
		"productType": "",
		"marketCode": "",
		"currency": "",
		"tradeStatus": "",
		"riskLevel": 0,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "",
				"valueType": "",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


## 写入或修正产品行情点


**接口地址**:`/api/admin/products/{bizId}/quotes`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "sourceCode": "",
  "interval": "",
  "quoteTime": "",
  "openPrice": 0,
  "highPrice": 0,
  "lowPrice": 0,
  "closePrice": 0,
  "previousClosePrice": 0,
  "volume": 0,
  "turnoverAmount": 0,
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|saveMarketQuoteRequest|SaveMarketQuoteRequest|body|true|SaveMarketQuoteRequest|SaveMarketQuoteRequest|
|&emsp;&emsp;sourceCode|||true|string||
|&emsp;&emsp;interval|||true|string||
|&emsp;&emsp;quoteTime|||true|string(date-time)||
|&emsp;&emsp;openPrice|||false|number||
|&emsp;&emsp;highPrice|||false|number||
|&emsp;&emsp;lowPrice|||false|number||
|&emsp;&emsp;closePrice|||true|number||
|&emsp;&emsp;previousClosePrice|||false|number||
|&emsp;&emsp;volume|||false|number||
|&emsp;&emsp;turnoverAmount|||false|number||
|&emsp;&emsp;status|可用值:INVALID,VALID,CORRECTED||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultMarketQuoteView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||MarketQuoteView|MarketQuoteView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productBizId||string||
|&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;interval||string||
|&emsp;&emsp;quoteTime||string(date-time)||
|&emsp;&emsp;openPrice||number||
|&emsp;&emsp;highPrice||number||
|&emsp;&emsp;lowPrice||number||
|&emsp;&emsp;closePrice||number||
|&emsp;&emsp;previousClosePrice||number||
|&emsp;&emsp;volume||number||
|&emsp;&emsp;turnoverAmount||number||
|&emsp;&emsp;status|可用值:INVALID,VALID,CORRECTED|string||
|&emsp;&emsp;receivedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productBizId": "",
		"sourceCode": "",
		"interval": "",
		"quoteTime": "",
		"openPrice": 0,
		"highPrice": 0,
		"lowPrice": 0,
		"closePrice": 0,
		"previousClosePrice": 0,
		"volume": 0,
		"turnoverAmount": 0,
		"status": "",
		"receivedAt": ""
	}
}
```


## 变更产品交易状态


**接口地址**:`/api/admin/products/{bizId}/status`


**请求方式**:`PATCH`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|productStatusRequest|ProductStatusRequest|body|true|ProductStatusRequest|ProductStatusRequest|
|&emsp;&emsp;status|可用值:DISABLED,TRADABLE,SUSPENDED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultProductView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||ProductView|ProductView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;productNo||string||
|&emsp;&emsp;productCode||string||
|&emsp;&emsp;productName||string||
|&emsp;&emsp;productType|可用值:STOCK,FUND,BOND,ETF|string||
|&emsp;&emsp;marketCode||string||
|&emsp;&emsp;currency||string||
|&emsp;&emsp;tradeStatus|可用值:DISABLED,TRADABLE,SUSPENDED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;minInvestAmount||number||
|&emsp;&emsp;amountStep||number||
|&emsp;&emsp;quantityStep||number||
|&emsp;&emsp;feeRate||number||
|&emsp;&emsp;listingDate||string(date)||
|&emsp;&emsp;delistingDate||string(date)||
|&emsp;&emsp;description||string||
|&emsp;&emsp;attributes||array|ProductAttributeView|
|&emsp;&emsp;&emsp;&emsp;key||string||
|&emsp;&emsp;&emsp;&emsp;valueType||string||
|&emsp;&emsp;&emsp;&emsp;jsonValue||string||
|&emsp;&emsp;&emsp;&emsp;effectiveDate||string(date)||
|&emsp;&emsp;&emsp;&emsp;sourceCode||string||
|&emsp;&emsp;createdAt||string(date-time)||
|&emsp;&emsp;updatedAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"productNo": "",
		"productCode": "",
		"productName": "",
		"productType": "",
		"marketCode": "",
		"currency": "",
		"tradeStatus": "",
		"riskLevel": 0,
		"minInvestAmount": 0,
		"amountStep": 0,
		"quantityStep": 0,
		"feeRate": 0,
		"listingDate": "",
		"delistingDate": "",
		"description": "",
		"attributes": [
			{
				"key": "",
				"valueType": "",
				"jsonValue": "",
				"effectiveDate": "",
				"sourceCode": ""
			}
		],
		"createdAt": "",
		"updatedAt": ""
	}
}
```


# 管理端用户


## 用户列表


**接口地址**:`/api/admin/users`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|keyword||query|false|string||
|status|可用值:DISABLED,ACTIVE,LOCKED|query|false|string||
|kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|query|false|string||
|riskLevel||query|false|integer(int32)||
|page||query|false|integer(int32)||
|size||query|false|integer(int32)||
|sort||query|false|string||
|direction||query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultPageResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||PageResultUserView|PageResultUserView|
|&emsp;&emsp;items||array|UserView|
|&emsp;&emsp;&emsp;&emsp;bizId||string||
|&emsp;&emsp;&emsp;&emsp;userNo||string||
|&emsp;&emsp;&emsp;&emsp;username||string||
|&emsp;&emsp;&emsp;&emsp;email||string||
|&emsp;&emsp;&emsp;&emsp;phone||string||
|&emsp;&emsp;&emsp;&emsp;nickname||string||
|&emsp;&emsp;&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;&emsp;&emsp;roles||array|string|
|&emsp;&emsp;&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;&emsp;&emsp;lastLoginAt||string(date-time)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;page||integer(int32)||
|&emsp;&emsp;size||integer(int32)||
|&emsp;&emsp;totalPages||integer(int32)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"items": [
			{
				"bizId": "",
				"userNo": "",
				"username": "",
				"email": "",
				"phone": "",
				"nickname": "",
				"avatarUrl": "",
				"status": "",
				"kycStatus": "",
				"riskLevel": 0,
				"roles": [],
				"registeredAt": "",
				"lastLoginAt": ""
			}
		],
		"total": 0,
		"page": 0,
		"size": 0,
		"totalPages": 0
	}
}
```


## 管理端创建用户


**接口地址**:`/api/admin/users`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "username": "",
  "password": "",
  "email": "",
  "phone": "",
  "nickname": "",
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|adminCreateUserRequest|AdminCreateUserRequest|body|true|AdminCreateUserRequest|AdminCreateUserRequest|
|&emsp;&emsp;username|||true|string||
|&emsp;&emsp;password|||true|string||
|&emsp;&emsp;email|||false|string(email)||
|&emsp;&emsp;phone|||false|string||
|&emsp;&emsp;nickname|||false|string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 用户详情


**接口地址**:`/api/admin/users/{bizId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 软删除用户


**接口地址**:`/api/admin/users/{bizId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultVoid|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||string||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {}
}
```


## 更新用户邮箱和手机号


**接口地址**:`/api/admin/users/{bizId}`


**请求方式**:`PATCH`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "email": "",
  "phone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|updateUserRequest|UpdateUserRequest|body|true|UpdateUserRequest|UpdateUserRequest|
|&emsp;&emsp;email|||false|string(email)||
|&emsp;&emsp;phone|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 更新 KYC 状态


**接口地址**:`/api/admin/users/{bizId}/kyc-status`


**请求方式**:`PATCH`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "kycStatus": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|kycStatusRequest|KycStatusRequest|body|true|KycStatusRequest|KycStatusRequest|
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 更新风险等级


**接口地址**:`/api/admin/users/{bizId}/risk-level`


**请求方式**:`PATCH`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "riskLevel": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|riskLevelRequest|RiskLevelRequest|body|true|RiskLevelRequest|RiskLevelRequest|
|&emsp;&emsp;riskLevel|||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


## 更新账户状态


**接口地址**:`/api/admin/users/{bizId}/status`


**请求方式**:`PATCH`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bizId||path|true|string||
|statusRequest|StatusRequest|body|true|StatusRequest|StatusRequest|
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```


# 账户认证


## 登录


**接口地址**:`/api/auth/login`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "account": "",
  "password": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|loginRequest|LoginRequest|body|true|LoginRequest|LoginRequest|
|&emsp;&emsp;account|||true|string||
|&emsp;&emsp;password|||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
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


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultVoid|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||string||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {}
}
```


## 获取当前用户


**接口地址**:`/api/auth/me`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
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


**接口描述**:


**请求示例**:


```javascript
{
  "username": "",
  "password": "",
  "email": "",
  "phone": "",
  "nickname": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|registerRequest|RegisterRequest|body|true|RegisterRequest|RegisterRequest|
|&emsp;&emsp;username|||true|string||
|&emsp;&emsp;password|||true|string||
|&emsp;&emsp;email|||false|string(email)||
|&emsp;&emsp;phone|||false|string||
|&emsp;&emsp;nickname|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResultUserView|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|message||string||
|data||UserView|UserView|
|&emsp;&emsp;bizId||string||
|&emsp;&emsp;userNo||string||
|&emsp;&emsp;username||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;nickname||string||
|&emsp;&emsp;avatarUrl||string||
|&emsp;&emsp;status|可用值:DISABLED,ACTIVE,LOCKED|string||
|&emsp;&emsp;kycStatus|可用值:UNVERIFIED,VERIFIED,REVIEWING,REJECTED|string||
|&emsp;&emsp;riskLevel||integer(int32)||
|&emsp;&emsp;roles||array|string|
|&emsp;&emsp;registeredAt||string(date-time)||
|&emsp;&emsp;lastLoginAt||string(date-time)||


**响应示例**:
```javascript
{
	"code": 0,
	"message": "",
	"data": {
		"bizId": "",
		"userNo": "",
		"username": "",
		"email": "",
		"phone": "",
		"nickname": "",
		"avatarUrl": "",
		"status": "",
		"kycStatus": "",
		"riskLevel": 0,
		"roles": [],
		"registeredAt": "",
		"lastLoginAt": ""
	}
}
```