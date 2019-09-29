{"filter":false,"title":"countries-information.js","tooltip":"/js/countries-information.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":135,"column":0},"end":{"row":135,"column":1},"action":"insert","lines":["/"],"id":2193},{"start":{"row":135,"column":1},"end":{"row":135,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":135,"column":2},"end":{"row":135,"column":3},"action":"insert","lines":[" "],"id":2194},{"start":{"row":135,"column":3},"end":{"row":136,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":136,"column":0},"end":{"row":138,"column":19},"action":"insert","lines":["<div>","                var weatherData = $.getJSON(`https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/${user.latlng}`)","            </div> "],"id":2195}],[{"start":{"row":138,"column":19},"end":{"row":139,"column":0},"action":"insert","lines":["",""],"id":2196},{"start":{"row":139,"column":0},"end":{"row":139,"column":12},"action":"insert","lines":["            "]},{"start":{"row":139,"column":12},"end":{"row":139,"column":13},"action":"insert","lines":["*"]}],[{"start":{"row":139,"column":13},"end":{"row":139,"column":14},"action":"insert","lines":["/"],"id":2197}],[{"start":{"row":97,"column":36},"end":{"row":97,"column":43},"action":"remove","lines":["country"],"id":2198},{"start":{"row":97,"column":36},"end":{"row":97,"column":37},"action":"insert","lines":["w"]},{"start":{"row":97,"column":37},"end":{"row":97,"column":38},"action":"insert","lines":["e"]},{"start":{"row":97,"column":38},"end":{"row":97,"column":39},"action":"insert","lines":["a"]},{"start":{"row":97,"column":39},"end":{"row":97,"column":40},"action":"insert","lines":["t"]},{"start":{"row":97,"column":40},"end":{"row":97,"column":41},"action":"insert","lines":["h"]},{"start":{"row":97,"column":41},"end":{"row":97,"column":42},"action":"insert","lines":["e"]},{"start":{"row":97,"column":42},"end":{"row":97,"column":43},"action":"insert","lines":["r"]}],[{"start":{"row":97,"column":70},"end":{"row":97,"column":96},"action":"insert","lines":["body.daily.data[0].summary"],"id":2199}],[{"start":{"row":97,"column":66},"end":{"row":97,"column":75},"action":"remove","lines":["Databody."],"id":2200}],[{"start":{"row":97,"column":66},"end":{"row":97,"column":67},"action":"insert","lines":["."],"id":2201}],[{"start":{"row":97,"column":67},"end":{"row":97,"column":71},"action":"insert","lines":["Attr"],"id":2202}],[{"start":{"row":97,"column":70},"end":{"row":97,"column":71},"action":"remove","lines":["r"],"id":2203},{"start":{"row":97,"column":69},"end":{"row":97,"column":70},"action":"remove","lines":["t"]},{"start":{"row":97,"column":68},"end":{"row":97,"column":69},"action":"remove","lines":["t"]},{"start":{"row":97,"column":67},"end":{"row":97,"column":68},"action":"remove","lines":["A"]}],[{"start":{"row":97,"column":66},"end":{"row":97,"column":88},"action":"remove","lines":[".daily.data[0].summary"],"id":2204}],[{"start":{"row":97,"column":66},"end":{"row":97,"column":67},"action":"insert","lines":["D"],"id":2205},{"start":{"row":97,"column":67},"end":{"row":97,"column":68},"action":"insert","lines":["a"]},{"start":{"row":97,"column":68},"end":{"row":97,"column":69},"action":"insert","lines":["t"]},{"start":{"row":97,"column":69},"end":{"row":97,"column":70},"action":"insert","lines":["a"]}],[{"start":{"row":42,"column":25},"end":{"row":42,"column":26},"action":"insert","lines":["."],"id":2206}],[{"start":{"row":42,"column":26},"end":{"row":42,"column":48},"action":"insert","lines":[".daily.data[0].summary"],"id":2207}],[{"start":{"row":42,"column":26},"end":{"row":42,"column":27},"action":"remove","lines":["."],"id":2208}],[{"start":{"row":93,"column":102},"end":{"row":93,"column":104},"action":"insert","lines":["[]"],"id":2209}],[{"start":{"row":93,"column":103},"end":{"row":93,"column":104},"action":"insert","lines":["0"],"id":2210}],[{"start":{"row":92,"column":5},"end":{"row":92,"column":6},"action":"insert","lines":["."],"id":2211}],[{"start":{"row":135,"column":0},"end":{"row":139,"column":14},"action":"remove","lines":["/* ","<div>","                var weatherData = $.getJSON(`https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/${user.latlng}`)","            </div> ","            */"],"id":2212}],[{"start":{"row":134,"column":0},"end":{"row":135,"column":0},"action":"remove","lines":["",""],"id":2213}],[{"start":{"row":92,"column":3},"end":{"row":106,"column":19},"action":"remove","lines":[" $.when(","        $.getJSON(`https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/${userData.latlng[0]}`)","    ).then(","        function (secondResponse) {","            var weatherData = secondResponse[0];","            $(\"#gh-user-data\").html(weatherInformationHTML(weatherData));","                }, function(errorResponse) {","                    if (errorResponse.status === 404) {","                         $(\"#gh-user-data\").html(`<h2>No weather info found for ${username}</h2>`);","                     } else {","                        console.log(errorResponse);","                         $(\"#gh-user-data\").html(","                        `<h2>Error ${errorResponse.responseJSON.message}</h2>`);","                    }","                });"],"id":2214}],[{"start":{"row":95,"column":0},"end":{"row":96,"column":0},"action":"insert","lines":["",""],"id":2215}],[{"start":{"row":95,"column":0},"end":{"row":109,"column":19},"action":"insert","lines":[" $.when(","        $.getJSON(`https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/${userData.latlng[0]}`)","    ).then(","        function (secondResponse) {","            var weatherData = secondResponse[0];","            $(\"#gh-user-data\").html(weatherInformationHTML(weatherData));","                }, function(errorResponse) {","                    if (errorResponse.status === 404) {","                         $(\"#gh-user-data\").html(`<h2>No weather info found for ${username}</h2>`);","                     } else {","                        console.log(errorResponse);","                         $(\"#gh-user-data\").html(","                        `<h2>Error ${errorResponse.responseJSON.message}</h2>`);","                    }","                });"],"id":2216}],[{"start":{"row":94,"column":1},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":2217},{"start":{"row":95,"column":0},"end":{"row":95,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":95,"column":0},"end":{"row":95,"column":1},"action":"remove","lines":[" "],"id":2218}],[{"start":{"row":95,"column":0},"end":{"row":95,"column":1},"action":"insert","lines":["f"],"id":2219},{"start":{"row":95,"column":1},"end":{"row":95,"column":2},"action":"insert","lines":["u"]},{"start":{"row":95,"column":2},"end":{"row":95,"column":3},"action":"insert","lines":["n"]},{"start":{"row":95,"column":3},"end":{"row":95,"column":4},"action":"insert","lines":["c"]},{"start":{"row":95,"column":4},"end":{"row":95,"column":5},"action":"insert","lines":["t"]},{"start":{"row":95,"column":5},"end":{"row":95,"column":6},"action":"insert","lines":["i"]},{"start":{"row":95,"column":6},"end":{"row":95,"column":7},"action":"insert","lines":["o"]},{"start":{"row":95,"column":7},"end":{"row":95,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":95,"column":8},"end":{"row":95,"column":9},"action":"insert","lines":[" "],"id":2220}],[{"start":{"row":95,"column":9},"end":{"row":95,"column":10},"action":"insert","lines":["f"],"id":2221},{"start":{"row":95,"column":10},"end":{"row":95,"column":11},"action":"insert","lines":["e"]},{"start":{"row":95,"column":11},"end":{"row":95,"column":12},"action":"insert","lines":["t"]},{"start":{"row":95,"column":12},"end":{"row":95,"column":13},"action":"insert","lines":["c"]},{"start":{"row":95,"column":13},"end":{"row":95,"column":14},"action":"insert","lines":["h"]}],[{"start":{"row":95,"column":14},"end":{"row":95,"column":15},"action":"insert","lines":[" "],"id":2222}],[{"start":{"row":95,"column":14},"end":{"row":95,"column":15},"action":"remove","lines":[" "],"id":2223}],[{"start":{"row":95,"column":14},"end":{"row":95,"column":15},"action":"insert","lines":["W"],"id":2224},{"start":{"row":95,"column":15},"end":{"row":95,"column":16},"action":"insert","lines":["e"]},{"start":{"row":95,"column":16},"end":{"row":95,"column":17},"action":"insert","lines":["a"]},{"start":{"row":95,"column":17},"end":{"row":95,"column":18},"action":"insert","lines":["t"]},{"start":{"row":95,"column":18},"end":{"row":95,"column":19},"action":"insert","lines":["h"]},{"start":{"row":95,"column":19},"end":{"row":95,"column":20},"action":"insert","lines":["e"]},{"start":{"row":95,"column":20},"end":{"row":95,"column":21},"action":"insert","lines":["r"]}],[{"start":{"row":95,"column":21},"end":{"row":95,"column":22},"action":"insert","lines":["I"],"id":2225},{"start":{"row":95,"column":22},"end":{"row":95,"column":23},"action":"insert","lines":["n"]},{"start":{"row":95,"column":23},"end":{"row":95,"column":24},"action":"insert","lines":["f"]},{"start":{"row":95,"column":24},"end":{"row":95,"column":25},"action":"insert","lines":["o"]},{"start":{"row":95,"column":25},"end":{"row":95,"column":26},"action":"insert","lines":["r"]},{"start":{"row":95,"column":26},"end":{"row":95,"column":27},"action":"insert","lines":["m"]},{"start":{"row":95,"column":27},"end":{"row":95,"column":28},"action":"insert","lines":["a"]},{"start":{"row":95,"column":28},"end":{"row":95,"column":29},"action":"insert","lines":["t"]},{"start":{"row":95,"column":29},"end":{"row":95,"column":30},"action":"insert","lines":["i"]},{"start":{"row":95,"column":30},"end":{"row":95,"column":31},"action":"insert","lines":["o"]}],[{"start":{"row":95,"column":31},"end":{"row":95,"column":32},"action":"insert","lines":["n"],"id":2226}],[{"start":{"row":95,"column":32},"end":{"row":95,"column":33},"action":"insert","lines":[" "],"id":2227}],[{"start":{"row":95,"column":33},"end":{"row":95,"column":35},"action":"insert","lines":["()"],"id":2228}],[{"start":{"row":95,"column":34},"end":{"row":95,"column":35},"action":"insert","lines":["e"],"id":2229},{"start":{"row":95,"column":35},"end":{"row":95,"column":36},"action":"insert","lines":["v"]},{"start":{"row":95,"column":36},"end":{"row":95,"column":37},"action":"insert","lines":["e"]},{"start":{"row":95,"column":37},"end":{"row":95,"column":38},"action":"insert","lines":["n"]},{"start":{"row":95,"column":38},"end":{"row":95,"column":39},"action":"insert","lines":["t"]}],[{"start":{"row":95,"column":40},"end":{"row":95,"column":41},"action":"insert","lines":[" "],"id":2230},{"start":{"row":95,"column":41},"end":{"row":95,"column":42},"action":"insert","lines":["{"]}],[{"start":{"row":95,"column":42},"end":{"row":97,"column":1},"action":"insert","lines":["","    ","}"],"id":2231}],[{"start":{"row":96,"column":4},"end":{"row":96,"column":5},"action":"insert","lines":["v"],"id":2232},{"start":{"row":96,"column":5},"end":{"row":96,"column":6},"action":"insert","lines":["a"]},{"start":{"row":96,"column":6},"end":{"row":96,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":96,"column":7},"end":{"row":96,"column":8},"action":"insert","lines":[" "],"id":2233},{"start":{"row":96,"column":8},"end":{"row":96,"column":9},"action":"insert","lines":["u"]},{"start":{"row":96,"column":9},"end":{"row":96,"column":10},"action":"insert","lines":["s"]},{"start":{"row":96,"column":10},"end":{"row":96,"column":11},"action":"insert","lines":["e"]},{"start":{"row":96,"column":11},"end":{"row":96,"column":12},"action":"insert","lines":["r"]},{"start":{"row":96,"column":12},"end":{"row":96,"column":13},"action":"insert","lines":["n"]},{"start":{"row":96,"column":13},"end":{"row":96,"column":14},"action":"insert","lines":["a"]},{"start":{"row":96,"column":14},"end":{"row":96,"column":15},"action":"insert","lines":["m"]}],[{"start":{"row":96,"column":15},"end":{"row":96,"column":16},"action":"insert","lines":["e"],"id":2234}],[{"start":{"row":96,"column":16},"end":{"row":96,"column":17},"action":"insert","lines":[" "],"id":2235},{"start":{"row":96,"column":17},"end":{"row":96,"column":18},"action":"insert","lines":["="]}],[{"start":{"row":96,"column":18},"end":{"row":96,"column":19},"action":"insert","lines":[" "],"id":2236},{"start":{"row":96,"column":19},"end":{"row":96,"column":20},"action":"insert","lines":["$"]}],[{"start":{"row":96,"column":20},"end":{"row":96,"column":21},"action":"insert","lines":["\""],"id":2237}],[{"start":{"row":96,"column":21},"end":{"row":96,"column":22},"action":"insert","lines":["#"],"id":2238}],[{"start":{"row":96,"column":21},"end":{"row":96,"column":22},"action":"remove","lines":["#"],"id":2239},{"start":{"row":96,"column":20},"end":{"row":96,"column":21},"action":"remove","lines":["\""]}],[{"start":{"row":96,"column":20},"end":{"row":96,"column":22},"action":"insert","lines":["()"],"id":2240}],[{"start":{"row":96,"column":21},"end":{"row":96,"column":23},"action":"insert","lines":["\"\""],"id":2241}],[{"start":{"row":96,"column":22},"end":{"row":96,"column":23},"action":"insert","lines":["#"],"id":2242}],[{"start":{"row":96,"column":23},"end":{"row":96,"column":24},"action":"insert","lines":["g"],"id":2243},{"start":{"row":96,"column":24},"end":{"row":96,"column":25},"action":"insert","lines":["h"]},{"start":{"row":96,"column":25},"end":{"row":96,"column":26},"action":"insert","lines":["-"]},{"start":{"row":96,"column":26},"end":{"row":96,"column":27},"action":"insert","lines":["u"]},{"start":{"row":96,"column":27},"end":{"row":96,"column":28},"action":"insert","lines":["s"]},{"start":{"row":96,"column":28},"end":{"row":96,"column":29},"action":"insert","lines":["e"]},{"start":{"row":96,"column":29},"end":{"row":96,"column":30},"action":"insert","lines":["r"]},{"start":{"row":96,"column":30},"end":{"row":96,"column":31},"action":"insert","lines":["n"]},{"start":{"row":96,"column":31},"end":{"row":96,"column":32},"action":"insert","lines":["a"]},{"start":{"row":96,"column":32},"end":{"row":96,"column":33},"action":"insert","lines":["m"]},{"start":{"row":96,"column":33},"end":{"row":96,"column":34},"action":"insert","lines":["e"]}],[{"start":{"row":96,"column":36},"end":{"row":96,"column":37},"action":"insert","lines":["."],"id":2244},{"start":{"row":96,"column":37},"end":{"row":96,"column":38},"action":"insert","lines":["v"]},{"start":{"row":96,"column":38},"end":{"row":96,"column":39},"action":"insert","lines":["a"]},{"start":{"row":96,"column":39},"end":{"row":96,"column":40},"action":"insert","lines":["l"]}],[{"start":{"row":96,"column":40},"end":{"row":96,"column":42},"action":"insert","lines":["()"],"id":2245}],[{"start":{"row":96,"column":42},"end":{"row":96,"column":43},"action":"insert","lines":[";"],"id":2246}],[{"start":{"row":96,"column":43},"end":{"row":97,"column":0},"action":"insert","lines":["",""],"id":2247},{"start":{"row":97,"column":0},"end":{"row":97,"column":4},"action":"insert","lines":["    "]},{"start":{"row":97,"column":4},"end":{"row":97,"column":5},"action":"insert","lines":["i"]},{"start":{"row":97,"column":5},"end":{"row":97,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":97,"column":5},"end":{"row":97,"column":6},"action":"remove","lines":["f"],"id":2248},{"start":{"row":97,"column":4},"end":{"row":97,"column":5},"action":"remove","lines":["i"]}],[{"start":{"row":97,"column":4},"end":{"row":100,"column":17},"action":"insert","lines":[" $(\"#gh-user-data\").html(","        `<div id=\"loader\">","        <img src=\"assets/css/loader.gif\" alt=\"loading... />","        </div>`);"],"id":2249}],[{"start":{"row":96,"column":43},"end":{"row":97,"column":0},"action":"insert","lines":["",""],"id":2250},{"start":{"row":97,"column":0},"end":{"row":97,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":102,"column":0},"end":{"row":102,"column":3},"action":"remove","lines":["}  "],"id":2251}],[{"start":{"row":118,"column":0},"end":{"row":118,"column":3},"action":"insert","lines":["}  "],"id":2252}],[{"start":{"row":118,"column":3},"end":{"row":119,"column":0},"action":"insert","lines":["",""],"id":2253}],[{"start":{"row":103,"column":1},"end":{"row":103,"column":4},"action":"insert","lines":["   "],"id":2254}],[{"start":{"row":74,"column":70},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":2255},{"start":{"row":75,"column":0},"end":{"row":75,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":75,"column":12},"end":{"row":75,"column":70},"action":"insert","lines":["$(\"#gh-user-data\").html(countryInformationHTML(userData));"],"id":2256}],[{"start":{"row":75,"column":36},"end":{"row":75,"column":54},"action":"remove","lines":["countryInformation"],"id":2257},{"start":{"row":75,"column":36},"end":{"row":75,"column":37},"action":"insert","lines":["f"]},{"start":{"row":75,"column":37},"end":{"row":75,"column":38},"action":"insert","lines":["e"]},{"start":{"row":75,"column":38},"end":{"row":75,"column":39},"action":"insert","lines":["t"]},{"start":{"row":75,"column":39},"end":{"row":75,"column":40},"action":"insert","lines":["c"]},{"start":{"row":75,"column":40},"end":{"row":75,"column":41},"action":"insert","lines":["h"]},{"start":{"row":75,"column":41},"end":{"row":75,"column":42},"action":"insert","lines":["W"]}],[{"start":{"row":75,"column":42},"end":{"row":75,"column":43},"action":"insert","lines":["e"],"id":2258},{"start":{"row":75,"column":43},"end":{"row":75,"column":44},"action":"insert","lines":["a"]},{"start":{"row":75,"column":44},"end":{"row":75,"column":45},"action":"insert","lines":["t"]},{"start":{"row":75,"column":45},"end":{"row":75,"column":46},"action":"insert","lines":["h"]},{"start":{"row":75,"column":46},"end":{"row":75,"column":47},"action":"insert","lines":["e"]},{"start":{"row":75,"column":47},"end":{"row":75,"column":48},"action":"insert","lines":["r"]}],[{"start":{"row":75,"column":48},"end":{"row":75,"column":49},"action":"insert","lines":["I"],"id":2259},{"start":{"row":75,"column":49},"end":{"row":75,"column":50},"action":"insert","lines":["n"]}],[{"start":{"row":75,"column":50},"end":{"row":75,"column":51},"action":"insert","lines":["f"],"id":2260},{"start":{"row":75,"column":51},"end":{"row":75,"column":52},"action":"insert","lines":["o"]},{"start":{"row":75,"column":52},"end":{"row":75,"column":53},"action":"insert","lines":["r"]},{"start":{"row":75,"column":53},"end":{"row":75,"column":54},"action":"insert","lines":["m"]},{"start":{"row":75,"column":54},"end":{"row":75,"column":55},"action":"insert","lines":["a"]},{"start":{"row":75,"column":55},"end":{"row":75,"column":56},"action":"insert","lines":["t"]},{"start":{"row":75,"column":56},"end":{"row":75,"column":57},"action":"insert","lines":["i"]},{"start":{"row":75,"column":57},"end":{"row":75,"column":58},"action":"insert","lines":["o"]},{"start":{"row":75,"column":58},"end":{"row":75,"column":59},"action":"insert","lines":["n"]}],[{"start":{"row":75,"column":62},"end":{"row":75,"column":63},"action":"remove","lines":["L"],"id":2261},{"start":{"row":75,"column":61},"end":{"row":75,"column":62},"action":"remove","lines":["M"]},{"start":{"row":75,"column":60},"end":{"row":75,"column":61},"action":"remove","lines":["T"]},{"start":{"row":75,"column":59},"end":{"row":75,"column":60},"action":"remove","lines":["H"]}],[{"start":{"row":96,"column":34},"end":{"row":96,"column":39},"action":"remove","lines":["event"],"id":2262},{"start":{"row":96,"column":34},"end":{"row":96,"column":35},"action":"insert","lines":["u"]},{"start":{"row":96,"column":35},"end":{"row":96,"column":36},"action":"insert","lines":["s"]},{"start":{"row":96,"column":36},"end":{"row":96,"column":37},"action":"insert","lines":["e"]},{"start":{"row":96,"column":37},"end":{"row":96,"column":38},"action":"insert","lines":["r"]},{"start":{"row":96,"column":38},"end":{"row":96,"column":39},"action":"insert","lines":["D"]},{"start":{"row":96,"column":39},"end":{"row":96,"column":40},"action":"insert","lines":["a"]},{"start":{"row":96,"column":40},"end":{"row":96,"column":41},"action":"insert","lines":["t"]},{"start":{"row":96,"column":41},"end":{"row":96,"column":42},"action":"insert","lines":["r"]},{"start":{"row":96,"column":42},"end":{"row":96,"column":43},"action":"insert","lines":["e"]}],[{"start":{"row":96,"column":42},"end":{"row":96,"column":43},"action":"remove","lines":["e"],"id":2263},{"start":{"row":96,"column":41},"end":{"row":96,"column":42},"action":"remove","lines":["r"]}],[{"start":{"row":96,"column":41},"end":{"row":96,"column":42},"action":"insert","lines":["e"],"id":2264}],[{"start":{"row":96,"column":41},"end":{"row":96,"column":42},"action":"remove","lines":["e"],"id":2265}],[{"start":{"row":96,"column":41},"end":{"row":96,"column":42},"action":"insert","lines":["a"],"id":2266}],[{"start":{"row":97,"column":4},"end":{"row":103,"column":8},"action":"remove","lines":["var username = $(\"#gh-username\").val();","    ","     $(\"#gh-user-data\").html(","        `<div id=\"loader\">","        <img src=\"assets/css/loader.gif\" alt=\"loading... />","        </div>`);","        "],"id":2267}],[{"start":{"row":101,"column":18},"end":{"row":101,"column":24},"action":"remove","lines":["second"],"id":2268}],[{"start":{"row":102,"column":30},"end":{"row":102,"column":36},"action":"remove","lines":["second"],"id":2269}],[{"start":{"row":75,"column":12},"end":{"row":75,"column":71},"action":"remove","lines":["$(\"#gh-user-data\").html(fetchWeatherInformation(userData));"],"id":2270}],[{"start":{"row":97,"column":4},"end":{"row":97,"column":31},"action":"insert","lines":["$(\"gh-user-data\").html(\"\");"],"id":2271}],[{"start":{"row":97,"column":31},"end":{"row":98,"column":0},"action":"insert","lines":["",""],"id":2272},{"start":{"row":98,"column":0},"end":{"row":98,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":98,"column":4},"end":{"row":102,"column":5},"action":"insert","lines":["var username = $(\"#gh-username\").val();","    if (!username) {","        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);","        return;","    }"],"id":2273}],[{"start":{"row":100,"column":52},"end":{"row":100,"column":59},"action":"remove","lines":["GitHub "],"id":2274}],[{"start":{"row":104,"column":102},"end":{"row":104,"column":105},"action":"remove","lines":["[0]"],"id":2275}],[{"start":{"row":104,"column":91},"end":{"row":104,"column":95},"action":"remove","lines":["Data"],"id":2276},{"start":{"row":104,"column":91},"end":{"row":104,"column":92},"action":"insert","lines":["n"]},{"start":{"row":104,"column":92},"end":{"row":104,"column":93},"action":"insert","lines":["a"]},{"start":{"row":104,"column":93},"end":{"row":104,"column":94},"action":"insert","lines":["m"]},{"start":{"row":104,"column":94},"end":{"row":104,"column":95},"action":"insert","lines":["e"]}],[{"start":{"row":104,"column":102},"end":{"row":104,"column":104},"action":"insert","lines":["[]"],"id":2277}],[{"start":{"row":104,"column":103},"end":{"row":104,"column":104},"action":"insert","lines":["0"],"id":2278}],[{"start":{"row":104,"column":105},"end":{"row":104,"column":106},"action":"insert","lines":[","],"id":2279}],[{"start":{"row":104,"column":106},"end":{"row":104,"column":107},"action":"insert","lines":[" "],"id":2280},{"start":{"row":104,"column":107},"end":{"row":104,"column":108},"action":"insert","lines":["u"]},{"start":{"row":104,"column":108},"end":{"row":104,"column":109},"action":"insert","lines":["s"]},{"start":{"row":104,"column":109},"end":{"row":104,"column":110},"action":"insert","lines":["e"]},{"start":{"row":104,"column":110},"end":{"row":104,"column":111},"action":"insert","lines":["r"]}],[{"start":{"row":104,"column":110},"end":{"row":104,"column":111},"action":"remove","lines":["r"],"id":2281},{"start":{"row":104,"column":109},"end":{"row":104,"column":110},"action":"remove","lines":["e"]},{"start":{"row":104,"column":108},"end":{"row":104,"column":109},"action":"remove","lines":["s"]},{"start":{"row":104,"column":107},"end":{"row":104,"column":108},"action":"remove","lines":["u"]},{"start":{"row":104,"column":106},"end":{"row":104,"column":107},"action":"remove","lines":[" "]},{"start":{"row":104,"column":105},"end":{"row":104,"column":106},"action":"remove","lines":[","]}],[{"start":{"row":104,"column":106},"end":{"row":104,"column":127},"action":"insert","lines":["${username.latlng[0]}"],"id":2282}],[{"start":{"row":104,"column":124},"end":{"row":104,"column":125},"action":"remove","lines":["0"],"id":2283},{"start":{"row":104,"column":124},"end":{"row":104,"column":125},"action":"insert","lines":["1"]}],[{"start":{"row":107,"column":42},"end":{"row":108,"column":0},"action":"insert","lines":["",""],"id":2284},{"start":{"row":108,"column":0},"end":{"row":108,"column":12},"action":"insert","lines":["            "]},{"start":{"row":108,"column":12},"end":{"row":108,"column":13},"action":"insert","lines":["c"]},{"start":{"row":108,"column":13},"end":{"row":108,"column":14},"action":"insert","lines":["o"]},{"start":{"row":108,"column":14},"end":{"row":108,"column":15},"action":"insert","lines":["n"]},{"start":{"row":108,"column":15},"end":{"row":108,"column":16},"action":"insert","lines":["s"]},{"start":{"row":108,"column":16},"end":{"row":108,"column":17},"action":"insert","lines":["o"]},{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"insert","lines":["l"]},{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["e"]},{"start":{"row":108,"column":19},"end":{"row":108,"column":20},"action":"insert","lines":["."]},{"start":{"row":108,"column":20},"end":{"row":108,"column":21},"action":"insert","lines":["l"]}],[{"start":{"row":108,"column":21},"end":{"row":108,"column":22},"action":"insert","lines":["o"],"id":2285},{"start":{"row":108,"column":22},"end":{"row":108,"column":23},"action":"insert","lines":["g"]}],[{"start":{"row":108,"column":23},"end":{"row":108,"column":24},"action":"insert","lines":[" "],"id":2286}],[{"start":{"row":108,"column":24},"end":{"row":108,"column":26},"action":"insert","lines":["()"],"id":2287}],[{"start":{"row":108,"column":25},"end":{"row":108,"column":26},"action":"insert","lines":["w"],"id":2288},{"start":{"row":108,"column":26},"end":{"row":108,"column":27},"action":"insert","lines":["e"]},{"start":{"row":108,"column":27},"end":{"row":108,"column":28},"action":"insert","lines":["a"]},{"start":{"row":108,"column":28},"end":{"row":108,"column":29},"action":"insert","lines":["t"]},{"start":{"row":108,"column":29},"end":{"row":108,"column":30},"action":"insert","lines":["h"]},{"start":{"row":108,"column":30},"end":{"row":108,"column":31},"action":"insert","lines":["e"]},{"start":{"row":108,"column":31},"end":{"row":108,"column":32},"action":"insert","lines":["r"]}],[{"start":{"row":108,"column":32},"end":{"row":108,"column":33},"action":"insert","lines":["D"],"id":2289},{"start":{"row":108,"column":33},"end":{"row":108,"column":34},"action":"insert","lines":["a"]},{"start":{"row":108,"column":34},"end":{"row":108,"column":35},"action":"insert","lines":["t"]},{"start":{"row":108,"column":35},"end":{"row":108,"column":36},"action":"insert","lines":["a"]}],[{"start":{"row":108,"column":37},"end":{"row":108,"column":38},"action":"insert","lines":[";"],"id":2290}],[{"start":{"row":104,"column":102},"end":{"row":104,"column":105},"action":"remove","lines":["[0]"],"id":2291}],[{"start":{"row":104,"column":104},"end":{"row":104,"column":124},"action":"remove","lines":["{username.latlng[1]}"],"id":2292},{"start":{"row":104,"column":103},"end":{"row":104,"column":104},"action":"remove","lines":["$"]}],[{"start":{"row":104,"column":85},"end":{"row":104,"column":103},"action":"remove","lines":["${username.latlng}"],"id":2293},{"start":{"row":104,"column":85},"end":{"row":104,"column":86},"action":"insert","lines":["5"]},{"start":{"row":104,"column":86},"end":{"row":104,"column":87},"action":"insert","lines":["1"]},{"start":{"row":104,"column":87},"end":{"row":104,"column":88},"action":"insert","lines":[","]},{"start":{"row":104,"column":88},"end":{"row":104,"column":89},"action":"insert","lines":["9"]}]]},"ace":{"folds":[],"scrolltop":1200,"scrollleft":0,"selection":{"start":{"row":68,"column":12},"end":{"row":68,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":71,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1569708465277,"hash":"b981cb971dce265bb951d6ce17b911e8c0fdcb62"}