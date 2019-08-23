
            function getQueryVariable(r) {
                for (var l = window.location.search.substring(1).split(&quot;&amp;&quot;), e = 0; e &lt; l.length; e++) {
                    var t = l[e].split(&quot;=&quot;);
                    if (t[0] == r) return t[1]
                }
                return !1
            }
            function saringtags(r, l) {
                for (var e = r.split(&quot;&lt;&quot;), t = 0; t &lt; e.length; t++) - 1 != e[t].indexOf(&quot;&gt;&quot;) &amp;&amp; (e[t] = e[t].substring(e[t].indexOf(&quot;&gt;&quot;) + 1, e[t].length));
                return e = e.join(&quot;&quot;), e = e.substring(0, l - 1)
            }
            var simg = getQueryVariable(&quot;si&quot;),
                rsimg = (simg == false) ? &quot;/s72-c/&quot; : &quot;/&quot; + simg + &quot;/&quot;;
            function relpostimgcuplik(r) {
                for (var l = 0; l &lt; r.feed.entry.length; l++) {
                    var e = r.feed.entry[l];
                    reljudul[relnojudul] = e.title.$t, postcontent = &quot;&quot;, &quot;content&quot; in e ? postcontent = e.content.$t : &quot;summary&quot; in e &amp;&amp; (postcontent = e.summary.$t), relcuplikan[relnojudul] = saringtags(postcontent, numchars), postimg = &quot;media$thumbnail&quot; in e ? e.media$thumbnail.url.replace(/.*?:///g, &quot;//&quot;).replace(//s[0-9]+(-c)?//, rsimg) : &quot;https://1.bp.blogspot.com/-LGEolwXn4BM/WS9-g9OMA_I/AAAAAAAAAU4/LWkMJrn8RI8m56N1U-10ZuLdAuFFJqTxQCLcB/s72/No%2BImage.png&quot;, relgambar[relnojudul] = postimg;
                    for (var t = 0; t &lt; e.link.length; t++)
                        if (&quot;alternate&quot; == e.link[t].rel) {
                            relurls[relnojudul] = e.link[t].href;
                            break
                        }
                    relnojudul++
                }
            }
            function contains(r, l) {
                for (var e = 0; e &lt; r.length; e++)
                    if (r[e] == l) return !0;
                return !1
            }
            function artikelterkait() {
                for (var r = new Array(0), l = new Array(0), e = new Array(0), t = new Array(0), a = 0; a &lt; relurls.length; a++) contains(r, relurls[a]) || (r.length += 1, r[r.length - 1] = relurls[a], l.length += 1, l[l.length - 1] = reljudul[a], e.length += 1, e[e.length - 1] = relcuplikan[a], t.length += 1, t[t.length - 1] = relgambar[a]);
                for (reljudul = l, relurls = r, relcuplikan = e, relgambar = t, a = 0; a &lt; reljudul.length; a++) {
                    var n = Math.floor((reljudul.length - 1) * Math.random()),
                        u = reljudul[a],
                        i = relurls[a],
                        s = relcuplikan[a],
                        o = relgambar[a];
                    reljudul[a] = reljudul[n], relurls[a] = relurls[n], relcuplikan[a] = relcuplikan[n], relgambar[a] = relgambar[n], reljudul[n] = u, relurls[n] = i, relcuplikan[n] = s, relgambar[n] = o
                }
                for (var g, c = 0, p = Math.floor((reljudul.length - 1) * Math.random()), m = p, d = getQueryVariable(&quot;pos&quot;); c &lt; relmaxtampil &amp;&amp; (relurls[p] == d || (g = &quot;&lt;li class=&#39;news-title clearfix&#39;&gt;&quot;, g += &quot;&lt;a href=&#39;&quot; + relurls[p] + &quot;&#39; rel=&#39;nofollow&#39; target=&#39;_blank&#39; title=&#39;&quot; + reljudul[p] + &quot;&#39;&gt;&lt;img src=&#39;&quot; + relgambar[p] + &quot;&#39; /&gt;&lt;/a&gt;&quot;, g += &quot;&lt;a class=&#39;relinkjdulx&#39; href=&#39;&quot; + relurls[p] + &quot;&#39; target=&#39;_blank&#39;&gt;&quot; + reljudul[p] + &quot;&lt;/a&gt;&quot;, g += &quot;&lt;span class=&#39;news-text&#39;&gt;&quot; + relcuplikan[p] + &quot; ... &lt;/span&gt;&quot;, g += &quot;&lt;/li&gt;&quot;, document.write(g), ++c != relmaxtampil)) &amp;&amp; (p &lt; reljudul.length - 1 ? p++ : p = 0, p != m););
            }
            for (var labels = getQueryVariable(&quot;labels&quot;), relmaxtampil = getQueryVariable(&quot;num&quot;), url = getQueryVariable(&quot;url&quot;), res = labels.split(&quot;,&quot;), i = 0, text = &quot;&quot;; res[i];) text += &#39;&lt;script src=&quot;&#39; + url + &quot;/feeds/posts/default/-/&quot; + res[i] + &#39;?alt=json&amp;amp;callback=relpostimgcuplik&amp;amp;max-results=50&quot;&gt;&lt;/script&gt;&#39;, i++;
            var relnojudul = 0,
                numchars = 120,
                reljudul = new Array,
                relurls = new Array,
                relcuplikan = new Array,
                relgambar = new Array;
            document.write(text + &#39;&lt;script&gt;artikelterkait();&lt;/script&gt;&#39;);
