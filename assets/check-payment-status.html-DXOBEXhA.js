import{_ as s,c as a,a as e,o as t}from"./app-Dmg8qoQ-.js";const p={};function l(i,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="check-payment-status-api" tabindex="-1"><a class="header-anchor" href="#check-payment-status-api"><span>Check Payment Status API</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>An API to check payment request status of LINE Pay. The merchant should regularly check user payment confirm status <strong>without using the ConfirmURL</strong> and decide if it is possible to complete the payment.</p><ul><li><a href="#send"><code>send</code></a></li><li><a href="#addhandler"><code>addHandler</code></a></li><li><a href="#addhandlers"><code>addHandlers</code></a></li></ul><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send"><span>send</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">send</span><span class="token punctuation">(</span>checkPaymentStatusRequestConfig<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>Promise&lt;ApiResponse&lt;CheckPaymentStatusResponseBody&gt;&gt;</code></p><h3 id="request-config" tabindex="-1"><a class="header-anchor" href="#request-config"><span>Request Config</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">CheckPaymentStatusRequestParams</span> <span class="token operator">=</span> EmptyObject</span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">CheckPaymentStatusRequestConfig</span> <span class="token operator">=</span> GeneralRequestConfig <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment transaction ID generated by LINE Pay</span>
<span class="line">   */</span></span>
<span class="line">  transactionId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Request parameters of payment detail API</span>
<span class="line">   */</span></span>
<span class="line">  params<span class="token operator">:</span> CheckPaymentStatusRequestParams</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-body" tabindex="-1"><a class="header-anchor" href="#response-body"><span>Response Body</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Shipping</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping method ID selected by user</span>
<span class="line">   */</span></span>
<span class="line">  methodId<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping fee</span>
<span class="line">   */</span></span>
<span class="line">  feeAmount<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Info</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Shipping information</span>
<span class="line">   */</span></span>
<span class="line">  shipping<span class="token operator">?</span><span class="token operator">:</span> Shipping</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">CheckPaymentStatusResponseBody</span> <span class="token operator">=</span> GeneralResponseBody <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Payment information</span>
<span class="line">   */</span></span>
<span class="line">  info<span class="token operator">?</span><span class="token operator">:</span> Info<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return-code" tabindex="-1"><a class="header-anchor" href="#return-code"><span>Return Code</span></a></h3><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success"><span>Success</span></a></h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">0000</td><td style="text-align:left;">Before authorization</td></tr><tr><td style="text-align:center;">0110</td><td style="text-align:left;">Completed authorization - Able to call the Confirm API</td></tr><tr><td style="text-align:center;">0121</td><td style="text-align:left;">Payment canceled by user or because of timeout (20min). - Completed status</td></tr><tr><td style="text-align:center;">0122</td><td style="text-align:left;">Payment failed - Completed status</td></tr><tr><td style="text-align:center;">0123</td><td style="text-align:left;">Payment completed - Completed status</td></tr></tbody></table><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>Error</span></a></h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">1104</td><td style="text-align:left;">Non-existing merchant</td></tr><tr><td style="text-align:center;">1105</td><td style="text-align:left;">The merchant cannot use the LINE Pay.</td></tr><tr><td style="text-align:center;">9000</td><td style="text-align:left;">An internal error</td></tr></tbody></table><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><h4 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>Request</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient<span class="token punctuation">.</span>checkPaymentStatus</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    transactionId<span class="token operator">:</span> <span class="token string">&#39;2021121600698709510&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    params<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="response" tabindex="-1"><a class="header-anchor" href="#response"><span>Response</span></a></h4><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;returnCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;returnMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reserved transaction.&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addhandler" tabindex="-1"><a class="header-anchor" href="#addhandler"><span>addHandler</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">addHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>CheckPaymentStatusClient</code></p><p>Example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">client<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> type<span class="token punctuation">,</span> req<span class="token punctuation">,</span> next<span class="token punctuation">,</span> httpClient <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token comment">// checkPaymentStatus</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addhandlers" tabindex="-1"><a class="header-anchor" href="#addhandlers"><span>addHandlers</span></a></h2><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">addHandlers</span><span class="token punctuation">(</span><span class="token operator">...</span>handlers<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Returns <code>CheckPaymentStatusClient</code></p><p>Example:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">client<span class="token punctuation">.</span><span class="token function">addHandlers</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const o=s(p,[["render",l],["__file","check-payment-status.html.vue"]]),r=JSON.parse('{"path":"/api-reference/check-payment-status.html","title":"Check Payment Status API","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"send","slug":"send","link":"#send","children":[{"level":3,"title":"Request Config","slug":"request-config","link":"#request-config","children":[]},{"level":3,"title":"Response Body","slug":"response-body","link":"#response-body","children":[]},{"level":3,"title":"Return Code","slug":"return-code","link":"#return-code","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"addHandler","slug":"addhandler","link":"#addhandler","children":[]},{"level":2,"title":"addHandlers","slug":"addhandlers","link":"#addhandlers","children":[]}],"git":{"updatedTime":1654753430000,"contributors":[{"name":"Sean Lin","email":"sean.enylin@gmail.com","commits":6},{"name":"Po-Wei Chen","email":"erase2004@gmail.com","commits":1}]},"filePathRelative":"api-reference/check-payment-status.md"}');export{o as comp,r as data};
