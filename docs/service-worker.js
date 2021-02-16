
// PWA Fire Bundle
                      
        // after a service worker is installed and the user navigates to a different page or 
        // refreshes,the service worker will begin to receive fetch events
                          
        self.addEventListener('fetch', function(event) {
        event.respondWith(caches.open('cache').then(function(cache) {
        return cache.match(event.request).then(function(response) {
        console.log("cache request: " + event.request.url);
        var fetchPromise = fetch(event.request).then(function(networkResponse) {           
        // if we got a response from the cache, update the cache                   
        console.log("fetch completed: " + event.request.url, networkResponse);
        if (networkResponse) {
            console.debug("updated cached page: " + event.request.url, networkResponse);
              cache.put(event.request, networkResponse.clone());}
              return networkResponse;
                  }, function (event) {   
        // rejected promise - just ignore it, we're offline!   
                  console.log("Error in fetch()", event);
                  event.waitUntil(
                  caches.open('cache').then(function(cache) { 
        // our cache is named *cache* in the caches.open() above
                  return cache.addAll
                  ([            
        //cache.addAll(), takes a list of URLs, then fetches them from the server
        // and adds the response to the cache.           
        // add your entire site to the cache- as in the code below; for offline access
        // If you have some build process for your site, perhaps that could 
        // generate the list of possible URLs that a user might load.               
                './', // do not remove this
               // '.', 
                './index.html', //default
               // 'index.html',
                './index.html?homescreen=1', //default
                './?homescreen=1', //default
                './assets/css/style.acss',// configure as by your site ; just an example
                './index2.html',
                './inhaltsverzeichnis.html',
                './kap01.html',
                './kap02.html',
                './kap03.html',
                './kap04.html',
                './kap05.html',
                './kap06.html',
                './kap07.html',
                './kap08.html',
                './kap09.html',
                './kap10.html',
                './kap11.html',
                './kap12.html',
                './kap13.html',
                './kap14.html',
                './kap15.html',
                './kap16.html',
                './kap17.html',
                './anhang_a1.html',
                './anhang_a2.html',
                './anhang_b.html',
                './anhang_c.html',
                './anhang_d.html',
                './pics/*.{png,jpg,jpeg,JPG}',// choose images to keep offline; just an example
        // Do not replace/delete/edit the manifest.js paths below
        //These are links to the extenal social media buttons that should be cached;
        // we have used twitter's as an example
       //       'https://platform.twitter.com/widgets.js',       
                ]);
                })
                );
                });
        // respond from the cache, or the network
          return response || fetchPromise;
        });
        }));
        });
        
        self.addEventListener('install', function(event) {
          // The promise that skipWaiting() returns can be safely ignored.
          self.skipWaiting();
          console.log("Latest version installed!");
        });
