import { GeneralResponseBody } from './type'
import { Product, HttpClient, Address } from './type'

export type Fields = 'ALL' | 'TRANSACTION' | 'ORDER'

export type PaymentDetailsRequestParams = {
  transactionId?: string[]
  orderId?: string[]
  fields?: Fields
}

export type PaymentDetailsRequestConfig = {
  /**
   * Request parameters of payment detail API
   */
  params: PaymentDetailsRequestParams
}

export type PayInfo = {
  /**
   * A payment method used for payment
   * - Credit card: CREDIT_CARD
   * - Balance: BALANCE
   * - Discount: DISCOUNT
   */
  method: string
  /**
   * Transaction amount (Amount when generating the transaction ID)\
   * Calculating method of the final transaction amount when checking the original transaction:\
   * `sum(info[].payInfo[].amount) – sum(refundList[].refundAmount)`
   */
  amount: number
}

export type Refund = {
  /**
   * Refund transaction ID (19 digits)
   */
  refundTransactionId: number
  /**
   * Transaction options:
   * - PAYMENT_REFUND: Refund
   * - PARTIAL_REFUND: Partial refund
   */
  transactionType: string
  /**
   * Refund amount
   */
  refundAmount: number
  /**
   * Date of refund transaction ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601))
   */
  refundTransactionDate: string
}

export type Shipping = {
  /**
   * Shipping method ID selected by user
   */
  methodId: string
  /**
   * Shipping fee
   */
  feeAmount: number
  /**
   * Address of the shipping
   */
  address: Address
}

export type Package = {
  /**
   * An unique ID of package list
   */
  id: string
  /**
   * Total amount of products per package\
   * `=sum(products[].quantity * products[].price)`
   */
  amount: number
  /**
   * User fee: Respond if a commission is found within the payment amount.
   */
  userFeeAmount?: number
  /**
   * Name of the package or name of internal shops
   */
  name?: string
  /**
   * products in the package
   */
  products: Product[]
}

export type Event = {
  /**
   * Unique event code which allows only alphanumeric.
   */
  code: string
  /**
   * Amount to be applied to rate promotion.
   */
  totalAmount: number
  /**
   * 	Amount to be applied to fixed promotion.
   */
  productQuantity: number
}

export type Info = {
  /**
   * Transaction ID (19 digits)
   */
  transactionId: number
  /**
   * Transaction date([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601))
   */
  transactionDate: string
  /**
   * Transaction options:
   * - PAYMENT: Payment
   * - PAYMENT_REFUND: Refund
   * - PARTIAL_REFUND: Partial refund
   */
  transactionType: string
  /**
   * Payment status
   * - CAPTURE：capture
   * - AUTHORIZATION: Authorization
   * - VOIDED_AUTHORIZATION: Voided authorization (Called 'Void authorization API')
   * - EXPIRED_AUTHORIZATION: Expired authorization (When expiration date given to merchants by LINE Pay has been expired).
   */
  payStatus: string
  /**
   * Product name
   */
  productName: string
  /**
   * Merchant name
   */
  merchantName: string
  /**
   * Currency (ISO 4217)
   */
  currency: string
  /**
   * Expiration date of authorization ([ISO-8601](https://en.wikipedia.org/wiki/ISO_8601))
   */
  authorizationExpireDate: string
  /**
   * Payment information
   */
  payInfo: PayInfo
  /**
   * Refund list\
   * In case of checking the `Transaction` type when original and refund transactions are available
   */
  refundList?: Refund[]
  /**
   * 	Original transaction ID (19 digits)
   */
  originalTransactionId?: number
  /**
   * Package list
   */
  packages: Package[]
  /**
   * Shipping information
   */
  shipping?: Shipping
  /**
   * Event list
   */
  events?: Event[]
}

export type PaymentDetailsResponseBody = GeneralResponseBody & {
  /**
   * Refund information
   */
  info: Info
}

export const paymentDetailsWithClient =
  (httpClient: HttpClient) => async (config: PaymentDetailsRequestConfig) => {
    const { data } = await httpClient.get<
      PaymentDetailsRequestParams,
      PaymentDetailsResponseBody
    >('/v3/payments', config)

    return data
  }
