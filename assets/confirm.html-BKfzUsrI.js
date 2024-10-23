import{_ as s,c as a,a as e,o as t}from"./app-Dmg8qoQ-.js";const l={};function i(p,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="confirm-api" tabindex="-1"><a class="header-anchor" href="#confirm-api"><span>Confirm API</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>An API for the merchant to complete the payment when the user approves with the <a href="https://pay.line.me/documents/online_v3_en.html?shell#confirmurl-spec" target="_blank" rel="noopener noreferrer">ConfirmURL</a> or <a href="https://pay.line.me/documents/online_v3_en.html?shell#check-payment-status-api" target="_blank" rel="noopener noreferrer">Check Payment Status API</a>. Status of a payment where authorization and purchase are separated because &#39;options.payment.confirm&#39; of the Request API is set as <code>false</code> will be in purchase standby (Authentication) even after it is completed. To complete the purchase, an additional purchase process is required through the <a href="https://pay.line.me/documents/online_v3_en.html?shell#confirm-api" target="_blank" rel="noopener noreferrer">Confirm API</a>.</p><ul><li><a href="#send"><code>send</code></a></li><li><a href="#addhandler"><code>addHandler</code></a></li><li><a href="#addhandlers"><code>addHandlers</code></a></li></ul><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send"><span>send</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">send</span><span class="token punctuation">(</span>confirmRequestConfig<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>Promise&lt;ApiResponse&lt;ConfirmResponseBody&gt;&gt;</code></p><h3 id="request-config" tabindex="-1"><a class="header-anchor" href="#request-config"><span>Request Config</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ConfirmRequestBody</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment amount</span>
<span class="line">   */</span></span>
<span class="line">  amount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment currency ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217))\\</span>
<span class="line">   * Supported currencies are as follows.</span>
<span class="line">   * - USD</span>
<span class="line">   * - JPY</span>
<span class="line">   * - TWD</span>
<span class="line">   * - THB</span>
<span class="line">   */</span></span>
<span class="line">  currency<span class="token operator">:</span> Currency</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ConfirmRequestConfig</span> <span class="token operator">=</span> GeneralRequestConfig <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * ID of the transaction</span>
<span class="line">   */</span></span>
<span class="line">  transactionId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Request body of confirm API</span>
<span class="line">   */</span></span>
<span class="line">  body<span class="token operator">:</span> ConfirmRequestBody</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-body" tabindex="-1"><a class="header-anchor" href="#response-body"><span>Response Body</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PayInfo</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A payment method used for payment</span>
<span class="line">   * - Credit card: CREDIT_CARD</span>
<span class="line">   * - Balance: BALANCE</span>
<span class="line">   * - Discount: DISCOUNT</span>
<span class="line">   */</span></span>
<span class="line">  method<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment amount</span>
<span class="line">   */</span></span>
<span class="line">  amount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Credit card nickname for automatic payment</span>
<span class="line">   * - Credit card name managed at LINE Pay. It is the name registered when registered to LINE Pay.</span>
<span class="line">   * - If LINE Pay user does not set a nickname, an empty string will be sent.</span>
<span class="line">   * - The nickname can be changed upon user&#39;s request and the change history will not be shared with the merchant.</span>
<span class="line">   */</span></span>
<span class="line">  creditCardNickname<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Credit card brand used for automatic payment</span>
<span class="line">   * - VISA</span>
<span class="line">   * - MASTER</span>
<span class="line">   * - AMEX</span>
<span class="line">   * - DINERS</span>
<span class="line">   * - JCB</span>
<span class="line">   */</span></span>
<span class="line">  creditCardBrand<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Masked credit card number (Send only for Taiwan merchants. Able to use the feature when requesting to the merchant center manager. Not sending in payment details API).</span>
<span class="line">   * - Format: **** **** **** 1234</span>
<span class="line">   */</span></span>
<span class="line">  maskedCreditCardNumber<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Package</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * An unique ID of package list</span>
<span class="line">   */</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Name of the sales products</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Total amount of products per package\\</span>
<span class="line">   * \`=sum(products[].quantity * products[].price)\`</span>
<span class="line">   */</span></span>
<span class="line">  amount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * User fee: Sent as a respond if a list of fee is found within the payment amount.</span>
<span class="line">   */</span></span>
<span class="line">  userFeeAmount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Shipping</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * An ID of shipping method selected by user</span>
<span class="line">   */</span></span>
<span class="line">  methodId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping fee</span>
<span class="line">   */</span></span>
<span class="line">  feeAmount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping address</span>
<span class="line">   */</span></span>
<span class="line">  address<span class="token operator">:</span> Address</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Info</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * An unique order ID of the merchant sent upon requesting the payment.</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  orderId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Transaction ID</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  transactionId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Authentication expiration date and time (ISO 8601)</span>
<span class="line highlighted">   * - Send if the payment proceeded only up to authentication (capture=false)</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  authorizationExpireDate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * A key for automatic payment (15 digits)</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  regKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Payment information</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  payInfo<span class="token operator">:</span> PayInfo<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Package information</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  packages<span class="token operator">:</span> Package<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Shipping information</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  shipping<span class="token operator">?</span><span class="token operator">:</span> Shipping</span>
<span class="line highlighted"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ConfirmResponseBody</span> <span class="token operator">=</span> GeneralResponseBody <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Payment information</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  info<span class="token operator">:</span> Info</span>
<span class="line highlighted"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return-code" tabindex="-1"><a class="header-anchor" href="#return-code"><span>Return Code</span></a></h3><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success"><span>Success</span></a></h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">0000</td><td style="text-align:left;">Success</td></tr></tbody></table><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>Error</span></a></h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">1101</td><td style="text-align:left;">Not a LINE Pay member</td></tr><tr><td style="text-align:center;">1102</td><td style="text-align:left;">The member is unable to proceed the transaction.</td></tr><tr><td style="text-align:center;">1104</td><td style="text-align:left;">Non-existing merchant</td></tr><tr><td style="text-align:center;">1105</td><td style="text-align:left;">The merchant cannot use the LINE Pay.</td></tr><tr><td style="text-align:center;">1106</td><td style="text-align:left;">A header info error</td></tr><tr><td style="text-align:center;">1110</td><td style="text-align:left;">Unacceptable credit card</td></tr><tr><td style="text-align:center;">1124</td><td style="text-align:left;">Amount info error (scale)</td></tr><tr><td style="text-align:center;">1141</td><td style="text-align:left;">A payment account error</td></tr><tr><td style="text-align:center;">1142</td><td style="text-align:left;">Low balance</td></tr><tr><td style="text-align:center;">1150</td><td style="text-align:left;">Cannot find the transaction history</td></tr><tr><td style="text-align:center;">1152</td><td style="text-align:left;">There is a history of transactions with the same transactionId.</td></tr><tr><td style="text-align:center;">1153</td><td style="text-align:left;">The payment amount is different than the requested amount.</td></tr><tr><td style="text-align:center;">1159</td><td style="text-align:left;">Payment request information is not found.</td></tr><tr><td style="text-align:center;">1169</td><td style="text-align:left;">Must select a payment method and password authentication at the LINE Pay.</td></tr><tr><td style="text-align:center;">1170</td><td style="text-align:left;">Balance of the member&#39;s account has been changed.</td></tr><tr><td style="text-align:center;">1172</td><td style="text-align:left;">A record of transaction with the same order number already exists.</td></tr><tr><td style="text-align:center;">1180</td><td style="text-align:left;">The payment has been expired.</td></tr><tr><td style="text-align:center;">1198</td><td style="text-align:left;">API call request has been duplicated.</td></tr><tr><td style="text-align:center;">1199</td><td style="text-align:left;">Internal request error</td></tr><tr><td style="text-align:center;">1280</td><td style="text-align:left;">A temporary error occurred while processing the credit card payment.</td></tr><tr><td style="text-align:center;">1281</td><td style="text-align:left;">A credit card payment error</td></tr><tr><td style="text-align:center;">1282</td><td style="text-align:left;">A credit card authorization error</td></tr><tr><td style="text-align:center;">1283</td><td style="text-align:left;">The payment was refused due to suspected fraud.</td></tr><tr><td style="text-align:center;">1284</td><td style="text-align:left;">The credit card payment has temporarily stopped.</td></tr><tr><td style="text-align:center;">1285</td><td style="text-align:left;">Missing credit card payment information</td></tr><tr><td style="text-align:center;">1286</td><td style="text-align:left;">Wrong credit card payment information</td></tr><tr><td style="text-align:center;">1287</td><td style="text-align:left;">The credit card has been expired</td></tr><tr><td style="text-align:center;">1288</td><td style="text-align:left;">The credit card has low balance</td></tr><tr><td style="text-align:center;">1289</td><td style="text-align:left;">Exceeded the credit card limit</td></tr><tr><td style="text-align:center;">1290</td><td style="text-align:left;">Exceeded the limit of the credit card per payment</td></tr><tr><td style="text-align:center;">1291</td><td style="text-align:left;">The card has been reported as a stolen card.</td></tr><tr><td style="text-align:center;">1292</td><td style="text-align:left;">The card has been suspended.</td></tr><tr><td style="text-align:center;">1293</td><td style="text-align:left;">A CVN input error</td></tr><tr><td style="text-align:center;">1294</td><td style="text-align:left;">The card is listed on the blacklist.</td></tr><tr><td style="text-align:center;">1295</td><td style="text-align:left;">A wrong credit card number</td></tr><tr><td style="text-align:center;">1296</td><td style="text-align:left;">Unable to proceed the amount</td></tr><tr><td style="text-align:center;">1298</td><td style="text-align:left;">The card has been declined.</td></tr><tr><td style="text-align:center;">9000</td><td style="text-align:left;">An internal error</td></tr></tbody></table><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><h4 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>Request</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient<span class="token punctuation">.</span>confirm</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    transactionId<span class="token operator">:</span> <span class="token string">&#39;2021121600698709510&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    body<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      currency<span class="token operator">:</span> <span class="token string">&#39;TWD&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      amount<span class="token operator">:</span> <span class="token number">1000</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response" tabindex="-1"><a class="header-anchor" href="#response"><span>Response</span></a></h4><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;returnCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;returnMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Success.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;transactionId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021121600698709510&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;orderId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20211216002&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;payInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CREDIT_CARD&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;packages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c99abc79-3b29-4f40-8851-bc618ca57857&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;userFeeAmount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">&quot;products&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Demo Product&quot;</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;quantity&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">500</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addhandler" tabindex="-1"><a class="header-anchor" href="#addhandler"><span>addHandler</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">addHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>ConfirmClient</code></p><p>Example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">client<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> type<span class="token punctuation">,</span> req<span class="token punctuation">,</span> next<span class="token punctuation">,</span> httpClient <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token comment">// confirm</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addhandlers" tabindex="-1"><a class="header-anchor" href="#addhandlers"><span>addHandlers</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">addHandlers</span><span class="token punctuation">(</span><span class="token operator">...</span>handlers<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>ConfirmClient</code></p><p>Example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">client<span class="token punctuation">.</span><span class="token function">addHandlers</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const o=s(l,[["render",i],["__file","confirm.html.vue"]]),r=JSON.parse('{"path":"/api-reference/confirm.html","title":"Confirm API","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"send","slug":"send","link":"#send","children":[{"level":3,"title":"Request Config","slug":"request-config","link":"#request-config","children":[]},{"level":3,"title":"Response Body","slug":"response-body","link":"#response-body","children":[]},{"level":3,"title":"Return Code","slug":"return-code","link":"#return-code","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"addHandler","slug":"addhandler","link":"#addhandler","children":[]},{"level":2,"title":"addHandlers","slug":"addhandlers","link":"#addhandlers","children":[]}],"git":{"updatedTime":1641720579000,"contributors":[{"name":"Sean Lin","email":"sean.enylin@gmail.com","commits":6}]},"filePathRelative":"api-reference/confirm.md"}');export{o as comp,r as data};
