<!-- omit in toc -->
# line-pay-merchant

LINE Pay V3 Online APIs library for Node.js

<!-- omit in toc -->
# Quick start

```
npm install line-pay-merchant
```

<!-- omit in toc -->
## Basic example

Request:
```ts
import { createLinePayClient } from 'line-pay-merchant'

const linePayClient = createLinePayClient({
  channelId: '1479113123',
  channelSecretKey: '1f021e50f28fb3f40b7a9c5e758b0a19',
  env: 'development' // env can be 'development' or 'production'
})

try {
  const res = await linePayClient.request.send({
    body: {
      amount: 1000,
      currency: 'TWD',
      orderId: '20211209003',
      packages: [
        {
          id: 'c99abc79-3b29-4f40-8851-bc618ca57856',
          amount: 1000,
          products: [
            {
              name: 'Product Name',
              quantity: 2,
              price: 500
            }
          ]
        }
      ],
      redirectUrls: {
        confirmUrl: 'https://myshop.com/confirmUrl',
        cancelUrl: 'https://myshop.com/cancelUrl'
      }
    }
  })

  console.log(res)
} catch (e) {
  console.log('error', e)
}
```

Response:
```ts
{
  body: {
    returnCode: '0000',
    returnMessage: 'Success.',
    info: {
      paymentUrl: {
        web: 'https://sandbox-web-pay.line.me/web/payment/wait?transactionReserveId=MGG5dXZZaatkK3Y0NlFmTVVCdXVpTWtyYlp1SEhVQUwwRnkzRkhTTXBQRjZRV0pkUEFJbGhWdzNiU0M2ZlBFTA',
        app: 'line://pay/payment/MGY5dXZZaitkK3Y0NlFmTVVCdXVpTWtzYlp1SEhVQUwwRnkzRkhTTXBQRjZRV0pkUEFJcGhWdzNiU0M2ZlBFTA'
      },
      transactionId: '2021120900898162210',
      paymentAccessToken: '361925937255'
    }
  },
  comments: {}
}
```

<!-- omit in toc -->
# Table of Contents

- [Features](#features)
- [APIs](#apis)
- [Error handling](#error-handling)
  - [Error](#error)
  - [Handler](#handler)
    - [Built-in handler](#built-in-handler)
    - [Custom handler](#custom-handler)
- [Further details](#further-details)
  - [TypeScript support](#typescript-support)
  - [Transaction ID](#transaction-id)
- [Resources](#resources)


# Features

- Auto-generated LINE Pay API V3 authentication header
- Built-in API request and response [handler](#built-in-handler)
- Fully customizable API request and response [handler](#custom-handler)
- [TypeScript](http://typescript.net/) support
- Handles transaction ID parsing (see [Transaction ID](#transaction-id))

# APIs

See [API Reference](https://enylin.github.io/line-pay-merchant/api-reference/request.html) for more details.

# Error handling

## Error

- FormatError: Request format incorrect
- HttpError: HTTP error (ex. 400, 403, 404, 500)
- TimeoutError: HTTP request timeout.
- LinePayError: LINE Pay API returns non-0000 return code.

## Handler

### Built-in handler

Request:
```ts
import { createLinePayClient, handler, error } from 'line-pay-merchant'

const linePayClient = createLinePayClient(config)

try {
  const res = await linePayClient.confirm
    .addHandlers(
      handler.createTimeoutRetryHandler(),
      handler.createPaymentDetailsRecoveryHandler(handler.toConfirmResponse)
    )
    .send({
      transactionId: '2021121300698360310',
      body: {
        currency: 'TWD',
        amount: 1000
      }
    })

  console.log('res = ', JSON.stringify(res, null, 2))
} catch (e) {
  if (e instanceof error.LinePayApiError) {
    console.log('LinePayApiError = ', e)
  } else if (e instanceof error.HttpError) {
    console.log('HttpError = ', e)
  } else if (e instanceof error.TimeoutError) {
    console.log('TimeoutError = ', e)
  }
}
```

### Custom handler

Request:
```ts
const res = await linePayClient.refund
  .addHandler(async ({ req, next }) => {
    console.log('before first handler')
    const result = await next(req)
    console.log('after first handler')
    return result
  })
  .addHandlers(
    async ({ req, next }) => {
      console.log('before second handler')
      const result = await next(req)
      const result2 = await next(req)
      console.log('after second handler')
      return result
    },
    async ({ req, next }) => {
      console.log('before third handler')
      const result = await next(req)
      console.log('after third handler')
      return result
    }
  )
  .send({
    transactionId: '2021120900898162210',
    body: {
      refundAmount: 20
    }
  })
```

Output:
```
before third handler
before second handler
before first handler
after first handler
before first handler
after first handler
after second handler
after third handler
```

# Further details

## TypeScript support

This library is written in TypeScript. Users can get type definitions without installing additional libraries.

## Transaction ID

JavaScript numbers are double-precision floating-point numbers.
LINE Pay Transaction ID is a number larger than the largest integer JavaScript can be precisely stored (which is 2^53, 9007199254740992).
This may cause the transaction ID received from LINE Pay APIs to be recognized incorrectly. For example, the transaction ID number 2021121300698360310 may be converted to 2021121300698360300 by default parser.
This library handles the behavior by converting the transaction ID number to string format before the default parser (`JSON.parse`) parses the response received from LINE Pay APIs.

# Resources

- [LINE Pay Online APIs](https://pay.line.me/tw/developers/apis/onlineApis?locale=en_US)
