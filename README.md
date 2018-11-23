# Flowroute Messaging API
Simple API for communicating with the Flowroute Messaging service (both SMS & MMS).

## Other Projects  
This project is only *part* of the entire Flowroute API.  Other projects are:

|  Project  |  Description  |
|-----------|---------------|
|  [`flowroute-sms-api`](https://github.com/FredLackey/flowroute-sms-api)  |  SMS Messaging  |
|  [`flowroute-mms-api`](https://github.com/FredLackey/flowroute-mms-api)  |  MMS Messaging  |
|  [`flowroute-messaging-api`](https://github.com/FredLackey/flowroute-messaging-api)  |  SMS & MMS Messaging  |

## Installation  
```
npm i --save flowroute-messaging-api
```

## Variables  
|  Name  |  Data Type / Format  |  Required  |Description  |
|--------|-------------|---------------|-----|
|  `from`  |  `String('nnnnnnnnnnn')`  |  **YES**  |  Sender DID in E.164 format  |
|  `to`  |  `String('nnnnnnnnnnn')`  |  **YES**  |  Recipient DID in E.164 format  |
|  `body`  |  `String`  |  **YES**  |  160 ASCII characters or 70 extended ASCII characters  |
|  `links`  |  `[String]`  |  NO  |  Array of URLs to hosted media items  |
|  `callbackUrl`  |  `String`  |  NO  |  URL of server receiving ack messages  |
|  `accessKey`  |  `String('n*')`  |  **YES**  |  Provided by Flowroute API Preferencess page.  |
|  `secretKey`  |  `String`  |  **YES**  |  Provided by Flowroute API Preferencess page.  |


## Example  
```
const flowroute = require('flowroute-messaging-api');
const params = require('./params.json');

const { to, from, body, links, callbackUrl, accessKey, secretKey } = params;

flowroute.send(to, from, body, links, callbackUrl, accessKey, secretKey, (err, info) => {
  if (err) { throw err; }
  console.log(JSON.stringify(info, null, 2));
})

```


## Successful Response  
```
{
  "id": "mdr2-32889a4a82e011e78f288637582574e3"
}
```

##  Optional Variables  
Two optional variables exist for the `send` method:

|  Variable  |  Purpose  |
|------------|-----------|
|  `links`  |  If supplied, must be an array of valid URLs pointing to hosted images, media files, or other attachments.  |
|  `callbackUrl`  |  If supplied, must be a valid URL of a service endpoint listening for Flowroute's status callback.  |

## Author Info  
This project has been created for my personal use.  **It is maintained.**  Feel free to use it at your leisure.  If you need help, either open an [issue](https://github.com/FredLackey/flowroute-sms-api/issues) or get in touch directly:  

**Fred Lackey**  
[fred.lackey@gmail.com](mailto://fred.lackey@gmail.com)  
[www.fredlackey.com](http://www.fredlackey.com)