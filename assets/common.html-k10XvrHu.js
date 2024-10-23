import{_ as n,c as a,a as e,o as l}from"./app-Dmg8qoQ-.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="common-types" tabindex="-1"><a class="header-anchor" href="#common-types"><span>Common Types</span></a></h1><h2 id="general-request-config" tabindex="-1"><a class="header-anchor" href="#general-request-config"><span>General Request Config</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">GeneralRequestConfig</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * API timeout</span>
<span class="line">   */</span></span>
<span class="line">  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="general-response-body" tabindex="-1"><a class="header-anchor" href="#general-response-body"><span>General Response Body</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">GeneralResponseBody</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Return code</span>
<span class="line">   */</span></span>
<span class="line">  returnCode<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Return message</span>
<span class="line">   * Return message or reason for failure. The following are examples.</span>
<span class="line">   * - Unpayable merchant</span>
<span class="line">   * - Merchant authentication information error</span>
<span class="line">   */</span></span>
<span class="line">  returnMessage<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-response" tabindex="-1"><a class="header-anchor" href="#api-response"><span>API Response</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ApiResponse<span class="token operator">&lt;</span>Body <span class="token keyword">extends</span> GeneralResponseBody<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Response body</span>
<span class="line">   */</span></span>
<span class="line">  body<span class="token operator">:</span> Body</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Additional comments may be added by handlers</span>
<span class="line">   */</span></span>
<span class="line">  comments<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="other-common-types" tabindex="-1"><a class="header-anchor" href="#other-common-types"><span>Other Common Types</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Recipient</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Recipient name</span>
<span class="line">   */</span></span>
<span class="line">  firstName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Recipient last name</span>
<span class="line">   */</span></span>
<span class="line">  lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Additional information of the recipient first name</span>
<span class="line">   */</span></span>
<span class="line">  firstNameOptional<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Additional information of the recipient last name</span>
<span class="line">   */</span></span>
<span class="line">  lastNameOptional<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Email of the recipient</span>
<span class="line">   */</span></span>
<span class="line">  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Phone number of the recipient</span>
<span class="line">   */</span></span>
<span class="line">  phoneNo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Address</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping country</span>
<span class="line">   */</span></span>
<span class="line">  country<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping postal code</span>
<span class="line">   */</span></span>
<span class="line">  postalCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping region</span>
<span class="line">   */</span></span>
<span class="line">  state<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping address</span>
<span class="line">   */</span></span>
<span class="line">  city<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping detail</span>
<span class="line">   */</span></span>
<span class="line">  detail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Additional information of the shipping address</span>
<span class="line">   */</span></span>
<span class="line">  optional<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Recipient of the shipping address</span>
<span class="line">   */</span></span>
<span class="line">  recipient<span class="token operator">?</span><span class="token operator">:</span> Recipient</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Product</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * ID of sales products of the merchant</span>
<span class="line">   */</span></span>
<span class="line">  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Name of the sales products</span>
<span class="line">   */</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Image URL of the sales products</span>
<span class="line">   */</span></span>
<span class="line">  imageUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 	Number of products</span>
<span class="line">   */</span></span>
<span class="line">  quantity<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Price of each product</span>
<span class="line">   */</span></span>
<span class="line">  price<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Original price of each product</span>
<span class="line">   */</span></span>
<span class="line">  originalPrice<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Payment currency (ISO 4217)</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Currency</span> <span class="token operator">=</span> <span class="token string">&#39;USD&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;JPY&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;TWD&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;THB&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const o=n(i,[["render",p],["__file","common.html.vue"]]),r=JSON.parse('{"path":"/api-reference/common.html","title":"Common Types","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"General Request Config","slug":"general-request-config","link":"#general-request-config","children":[]},{"level":2,"title":"General Response Body","slug":"general-response-body","link":"#general-response-body","children":[]},{"level":2,"title":"API Response","slug":"api-response","link":"#api-response","children":[]},{"level":2,"title":"Other Common Types","slug":"other-common-types","link":"#other-common-types","children":[]}],"git":{"updatedTime":1640613039000,"contributors":[{"name":"Sean Lin","email":"sean.enylin@gmail.com","commits":2}]},"filePathRelative":"api-reference/common.md"}');export{o as comp,r as data};
