import{_ as s,c as a,a as e,o as l}from"./app-Dmg8qoQ-.js";const p={};function i(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="request-api" tabindex="-1"><a class="header-anchor" href="#request-api"><span>Request API</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>An API to request payment information to LINE Pay. User can change settings such as order information or various payment methods. Once the request is successful, a transaction ID is generated and with the ID, you can complete the payment or process refund.</p><ul><li><a href="#send"><code>send</code></a></li><li><a href="#addhandler"><code>addHandler</code></a></li><li><a href="#addhandlers"><code>addHandlers</code></a></li></ul><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send"><span>send</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">send</span><span class="token punctuation">(</span>requestRequestConfig<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>Promise&lt;ApiResponse&lt;RequestResponseBody&gt;&gt;</code></p><h3 id="request-config" tabindex="-1"><a class="header-anchor" href="#request-config"><span>Request Config</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Package</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * An unique ID of package list</span>
<span class="line">   */</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Total amount of products per package\\</span>
<span class="line">   * \`=sum(products[].quantity * products[].price)\`</span>
<span class="line">   */</span></span>
<span class="line">  amount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * User fee: Respond if a commission is found within the payment amount.</span>
<span class="line">   */</span></span>
<span class="line">  userFee<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Name of the package or name of internal shops</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * products in the package</span>
<span class="line">   */</span></span>
<span class="line">  products<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RedirectUrls</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * An information to prevent phishing while transferring between apps in Android.</span>
<span class="line">   */</span></span>
<span class="line">  appPackageName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A merchant URL user moves to after requesting the payment.</span>
<span class="line">   */</span></span>
<span class="line">  confirmUrl<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A navigation type of the ConfirmURL after user approves the payment request.</span>
<span class="line">   */</span></span>
<span class="line">  confirmUrlType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A URL that moves to the next when LINE Pay member cancels the payment from the payment page.</span>
<span class="line">   */</span></span>
<span class="line">  cancelUrl<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Payment</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Regarding automatic payment</span>
<span class="line">   * - True: Processing authorization and purchase with the Confirm API at the same time</span>
<span class="line">   * - False: Authorized with the Confirm API but need to purchase with the Capture API.</span>
<span class="line">   *</span>
<span class="line">   * Note that this field is not available by default. Users should contact LINE Pay to activate manually.</span>
<span class="line">   */</span></span>
<span class="line">  capture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment options</span>
<span class="line">   * - NORMAL</span>
<span class="line">   * - PREAPPROVED</span>
<span class="line">   */</span></span>
<span class="line">  payType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;NORMAL&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;PREAPPROVED&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Display</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Language codes of the payment standby screen. The default language is English (en).</span>
<span class="line">   * - Supported languages: en, ja, ko, th, zh_TW, zh_CN</span>
<span class="line">   */</span></span>
<span class="line">  locale<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Checking the payment browser when moving to the ConfirmURL</span>
<span class="line">   * - True : Guide user to go to the LINE Pay payment request browser if payment request browser and the ConfirmURL navigation browser are different.</span>
<span class="line">   * - False : Move the the ConfirmURL immediately without checking the browser</span>
<span class="line">   */</span></span>
<span class="line">  checkConfirmUrlBrowser<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Shipping</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping address options</span>
<span class="line">   * - NO_SHIPPING</span>
<span class="line">   * - FIXED_ADDRESS</span>
<span class="line">   * - SHIPPING</span>
<span class="line">   */</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping fee</span>
<span class="line">   */</span></span>
<span class="line">  feeAmount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A URL to check shipping method</span>
<span class="line">   */</span></span>
<span class="line">  feeInquiryUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping fee options</span>
<span class="line">   * - CONDITION : Check the shipping method (fee) when the shipping address is changed.</span>
<span class="line">   * - FIXED : If fixed, not checking the shipping address even after it is changed.</span>
<span class="line">   */</span></span>
<span class="line">  feeInquiryType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping address</span>
<span class="line">   */</span></span>
<span class="line">  address<span class="token operator">?</span><span class="token operator">:</span> Address</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AddFriend</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Service type of the friend add list</span>
<span class="line">   * - lineAt</span>
<span class="line">   */</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A list of ID by service</span>
<span class="line">   */</span></span>
<span class="line">  idList<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FamilyService</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Service type of the family service list</span>
<span class="line">   */</span></span>
<span class="line">  addFriends<span class="token operator">?</span><span class="token operator">:</span> AddFriend<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Extra</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Branch Name where the payment is requested from (Only 100 letters will be displayed if it&#39;s exceeded.)</span>
<span class="line">   */</span></span>
<span class="line">  branchName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Branch Id where the payment is requested.\\</span>
<span class="line">   * It can be support alphabets, numbers and special characters.</span>
<span class="line">   */</span></span>
<span class="line">  branchId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment options</span>
<span class="line">   */</span></span>
<span class="line">  payment<span class="token operator">?</span><span class="token operator">:</span> Payment</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Display options</span>
<span class="line">   */</span></span>
<span class="line">  display<span class="token operator">?</span><span class="token operator">:</span> Display</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping options</span>
<span class="line">   */</span></span>
<span class="line">  shipping<span class="token operator">?</span><span class="token operator">:</span> Shipping</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Family service options</span>
<span class="line">   */</span></span>
<span class="line">  familyService<span class="token operator">?</span><span class="token operator">:</span> FamilyService</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Extra options</span>
<span class="line">   */</span></span>
<span class="line">  extra<span class="token operator">?</span><span class="token operator">:</span> Extra</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestRequestBody</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Payment amount\\</span>
<span class="line highlighted">   * \`= sum(packages[].amount) + sum(packages[].userFee) + options.shipping.feeAmount\`</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  amount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Payment currency (ISO 4217)</span>
<span class="line highlighted">   * - Supported currencies: USD, JPY, TWD, THB</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  currency<span class="token operator">:</span> Currency</span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * An order ID of payment request from the merchant</span>
<span class="line highlighted">   * - An unique ID managed by the merchant</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  orderId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Package list</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  packages<span class="token operator">:</span> Package<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Redirect URLs</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  redirectUrls<span class="token operator">:</span> RedirectUrls</span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * options</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  options<span class="token operator">?</span><span class="token operator">:</span> Options</span>
<span class="line highlighted"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestRequestConfig</span> <span class="token operator">=</span> GeneralRequestConfig <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Request body of request API</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  body<span class="token operator">:</span> RequestRequestBody</span>
<span class="line highlighted"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-body" tabindex="-1"><a class="header-anchor" href="#response-body"><span>Response Body</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PaymentUrl</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * App URL to move to the payment page</span>
<span class="line">   * - Used when payment reservation is done in the app</span>
<span class="line">   * - URL to move from the merchant app to the LINE Pay.</span>
<span class="line">   */</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 	Web URL to move to the payment page</span>
<span class="line">   * - Used when payment reservation is done in the web</span>
<span class="line">   * - URL to move to the LINE Pay payment standby page</span>
<span class="line">   * - Move to URL that is delivered without particular parameter</span>
<span class="line">   * - If opening a pop-up in the desktop, follow the size: Width: 700px, Height : 546px</span>
<span class="line">   */</span></span>
<span class="line">  web<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Info</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Transaction ID</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  transactionId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * The code value entered when code is used instead of scanner in the LINE Pay.</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  paymentAccessToken<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Payment URL</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  paymentUrl<span class="token operator">:</span> PaymentUrl</span>
<span class="line highlighted"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestResponseBody</span> <span class="token operator">=</span> GeneralResponseBody <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token doc-comment comment">/**</span>
<span class="line highlighted">   * Payment information</span>
<span class="line highlighted">   */</span></span>
<span class="line highlighted">  info<span class="token operator">:</span> Info</span>
<span class="line highlighted"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return-code" tabindex="-1"><a class="header-anchor" href="#return-code"><span>Return Code</span></a></h3><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success"><span>Success</span></a></h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">0000</td><td style="text-align:left;">Success</td></tr></tbody></table><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>Error</span></a></h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">1104</td><td style="text-align:left;">Non-existing merchant</td></tr><tr><td style="text-align:center;">1105</td><td style="text-align:left;">The merchant cannot use the LINE Pay.</td></tr><tr><td style="text-align:center;">1106</td><td style="text-align:left;">A header information error</td></tr><tr><td style="text-align:center;">1124</td><td style="text-align:left;">An amount info error</td></tr><tr><td style="text-align:center;">1145</td><td style="text-align:left;">Payment in process</td></tr><tr><td style="text-align:center;">1172</td><td style="text-align:left;">A record of transaction with the same order number already exists.</td></tr><tr><td style="text-align:center;">1178</td><td style="text-align:left;">Unsupported currency</td></tr><tr><td style="text-align:center;">1183</td><td style="text-align:left;">The payment amount must be less than 0.</td></tr><tr><td style="text-align:center;">1194</td><td style="text-align:left;">The merchant cannot use the preapproved payment.</td></tr><tr><td style="text-align:center;">2101</td><td style="text-align:left;">A parameter error</td></tr><tr><td style="text-align:center;">2102</td><td style="text-align:left;">A JSON data format error</td></tr><tr><td style="text-align:center;">9000</td><td style="text-align:left;">An internal error</td></tr></tbody></table><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><h4 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>Request</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  body<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    amount<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">    currency<span class="token operator">:</span> <span class="token string">&#39;TWD&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    orderId<span class="token operator">:</span> <span class="token string">&#39;20211209003&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    packages<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        id<span class="token operator">:</span> <span class="token string">&#39;c99abc79-3b29-4f40-8851-bc618ca57857&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        amount<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span></span>
<span class="line">        products<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            name<span class="token operator">:</span> <span class="token string">&#39;Demo Product&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            quantity<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">            price<span class="token operator">:</span> <span class="token number">500</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    redirectUrls<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      confirmUrl<span class="token operator">:</span> <span class="token string">&#39;https://example.com/confirmUrl&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      cancelUrl<span class="token operator">:</span> <span class="token string">&#39;https://example.com/cancelUrl&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response" tabindex="-1"><a class="header-anchor" href="#response"><span>Response</span></a></h4><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;returnCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;returnMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Success.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;paymentUrl&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;web&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sandbox-web-pay.line.me/web/payment/wait?transactionReserveId=eVBISG5rQ09QL2JBVmJsdGdGN3RiUlBLaU0vMUtKWGEvVzhZS3o5NnBvSUlqZXdLdXk3Wlh0RXY2a0o3ZHp6Yw&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line://pay/payment/eVBISG5rQ09QL2JBVmJsdGdGN3RiUlBLaU0vMUtKWGEvVzhZS3o5NnBvSUlqZXdLdXk3Wlh0RXY2a0o3ZHp6Yw&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;transactionId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021121600698709710&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;paymentAccessToken&quot;</span><span class="token operator">:</span> <span class="token string">&quot;656097936065&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addhandler" tabindex="-1"><a class="header-anchor" href="#addhandler"><span>addHandler</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">addHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>RequestClient</code></p><p>Example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">client<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> type<span class="token punctuation">,</span> req<span class="token punctuation">,</span> next<span class="token punctuation">,</span> httpClient <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token comment">// request</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addhandlers" tabindex="-1"><a class="header-anchor" href="#addhandlers"><span>addHandlers</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">addHandlers</span><span class="token punctuation">(</span><span class="token operator">...</span>handlers<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>RequestClient</code></p><p>Example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">client<span class="token punctuation">.</span><span class="token function">addHandlers</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const o=s(p,[["render",i],["__file","request.html.vue"]]),r=JSON.parse('{"path":"/api-reference/request.html","title":"Request API","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"send","slug":"send","link":"#send","children":[{"level":3,"title":"Request Config","slug":"request-config","link":"#request-config","children":[]},{"level":3,"title":"Response Body","slug":"response-body","link":"#response-body","children":[]},{"level":3,"title":"Return Code","slug":"return-code","link":"#return-code","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"addHandler","slug":"addhandler","link":"#addhandler","children":[]},{"level":2,"title":"addHandlers","slug":"addhandlers","link":"#addhandlers","children":[]}],"git":{"updatedTime":1641720579000,"contributors":[{"name":"Sean Lin","email":"sean.enylin@gmail.com","commits":5}]},"filePathRelative":"api-reference/request.md"}');export{o as comp,r as data};
