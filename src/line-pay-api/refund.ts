import { GeneralResponseBody } from './type'
import { HttpClient } from './type'

export type RefundRequestBody = {
  /**
   * Refund amount
   * - Full refund if not returned
   */
  refundAmount: number
}

export type RefundRequestConfig = {
  /**
   * ID of the transaction
   */
  transactionId: string
  /**
   * Request body of refund API
   */
  body: RefundRequestBody
}

export type Info = {
  /**
   * Refund transaction ID (Newly issued, 19 digits)
   */
  refundTransactionId: number
  /**
   * Refund transaction date (ISO 8601)
   */
  refundTransactionDate: string
}

export type RefundResponseBody = GeneralResponseBody & {
  /**
   * Refund information
   */
  info: Info
}

export const refundWithClient =
  (httpClient: HttpClient) =>
  async ({ transactionId, body }: RefundRequestConfig) => {
    const { data } = await httpClient.post<
      RefundRequestBody,
      RefundResponseBody
    >(`/v3/payments/${transactionId}/refund`, body)

    return data
  }
