/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.aedfe0a.css","96cdc0b2b2e4ef19a8a75a90c14e8488"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.6f0a763.ttf","6f0a76321d30f3c8120915e57f7bd77e"],["/static/js/0.04bf890.js","6cdcc4bbe93c04a01548bb6fafb4cc70"],["/static/js/1.cc2e9bf.js","f65d04bb730c23cda4da96bed3fb91d6"],["/static/js/10.acd5cc3.js","e79c14be3a16128038a108a0e0017395"],["/static/js/11.8721caf.js","e6283a35ce68f3b221d54f058aaacc2c"],["/static/js/12.b7e1781.js","56d6eb9e09c2f6c19ede870ff4e16417"],["/static/js/13.73a82ec.js","a227d5184f29163b09dab21a51739323"],["/static/js/14.cdcd830.js","4ee44c102ba4a958be1adecad0b72f68"],["/static/js/15.7630e98.js","a1599833102d57c388fd6eb3952af7d0"],["/static/js/16.008e138.js","2a46271c3951e3bf8814a8d1abbdfdd6"],["/static/js/17.413d211.js","927bc9b3e8377d1684c328882ce7fd07"],["/static/js/18.4d8f329.js","494b76d81306b77f1da7c5f93641e015"],["/static/js/19.423c514.js","c855b459efe5ecee7863d7aa64f91097"],["/static/js/2.1fa2c7d.js","e90d5f4b0d0acc52a073349cf0cbbeb9"],["/static/js/20.cb5968d.js","b99fdfe00ac8152a2e5d663f6993062b"],["/static/js/21.db3ec19.js","536f0835d48d45fa43f28105a8fb296e"],["/static/js/22.7ec7eee.js","9b47a284d8ce2255447fe8545a38529e"],["/static/js/23.8e83fb1.js","8326602c607a01b89b5cd7ebfd3b9201"],["/static/js/24.34fa221.js","a98fa7c84063dc17a1a7747fb0e678fe"],["/static/js/25.c35f269.js","edcdb71624c9a12626ec1892487405f1"],["/static/js/26.a61b112.js","8b0546710508286e3d4705d1e3ac928c"],["/static/js/27.df3fd45.js","f17391b9e00d2070d736ddf36b8ce90a"],["/static/js/28.7b68ea6.js","905b7ed5ce8fe2f41c8060fa2a1554b0"],["/static/js/29.fd303c1.js","e5b593d981632a9e6c0fc213c8277bfc"],["/static/js/3.1a1dd25.js","ebff607c5f5e56c487d365b9db085326"],["/static/js/30.03a52db.js","99741ddeb9390a780a4b08931dc98720"],["/static/js/31.fc2a738.js","c37bcb7c37b7031f6297e1dcc40304f4"],["/static/js/32.262a6f6.js","5cdd493fa8b8131037d50101aec59691"],["/static/js/33.d31f549.js","ad0980e152c99f8ecc54722fad0261c2"],["/static/js/34.72630a4.js","6e5efb3719109759307bdb3d3e9ca7f3"],["/static/js/35.13d253a.js","373acf92f9a9206d674a0d7813f94095"],["/static/js/36.db0c06c.js","028fa3d0c92c54af5ffeb40f85a5ae49"],["/static/js/37.0023d2c.js","706d0b42a98093be39fb61d6f87c436b"],["/static/js/38.d4f99b4.js","2635842e26ef5bad206fd80ddb2c134b"],["/static/js/39.ca1d2ba.js","710002289514a4f6a38e7b7f66716bd1"],["/static/js/4.e309832.js","9c49268ee899a479fc6a0ed31ac3fb5c"],["/static/js/40.b2b5014.js","74b5b69292160e9cee84539a036360c5"],["/static/js/41.eae340c.js","ddac81780480fde07ad82539e3a644a0"],["/static/js/42.061717b.js","3bd24d708260acf1283ddbe24cb72197"],["/static/js/43.2c92e4b.js","843f67b0ea6e59d9ac601f87ab9f3000"],["/static/js/44.9cb17f8.js","7bd5f61e4b47b1847f9510b2c9176f40"],["/static/js/45.11abc98.js","6d40338a18b45c257c00dab4486a797b"],["/static/js/46.981f381.js","8b95a7f0e1c3b32751e1adc23d33584f"],["/static/js/47.5d5d292.js","70daccf72245d4fcfe700d0cdd3a2974"],["/static/js/48.1bb8f5d.js","045f37a7270f8b6f4f4f8163bef95d83"],["/static/js/49.30abe31.js","15c419690941c3067d8a21ae8e8df838"],["/static/js/5.8e427cb.js","48c2665f3a831350156c440559636a76"],["/static/js/50.e959e23.js","728802c66b3b5006a9615c7636d15817"],["/static/js/51.6b066d5.js","7101b222c581329b2851ed023de9adcf"],["/static/js/52.2dc1393.js","23a55ea1aa807f9a27c28c4cc3b3f098"],["/static/js/53.e1df1f4.js","23b2cdf988f40c04106122fcf2fa5188"],["/static/js/54.445681d.js","d554cac9e5982b76bc5ea005c2f6fac9"],["/static/js/55.0981ec5.js","b0aebdfc7916ea5938aa0b5c7edacfc1"],["/static/js/56.47ce601.js","166b03f8256947793a45039264f87d6c"],["/static/js/57.eac55d1.js","82c2abf449e05996d71080b02573479b"],["/static/js/58.5a28624.js","bf6fc55ff42c113f140adac61c688721"],["/static/js/59.43cf6d9.js","76c35e2fdd063c53f8ccc82a1615fa1f"],["/static/js/6.735cd95.js","70d1595e0642bc3ce2de9c2b9beeb4aa"],["/static/js/60.9bc85de.js","b236fde5a55f8dee0e7e478e91a94d98"],["/static/js/61.a46ba46.js","fe841b805f3526b8128d15b387032af4"],["/static/js/7.8f1f307.js","cf4c1d214df4bcf57b1a6ba08b7ac39e"],["/static/js/8.50f4eae.js","7f5ec4c2ccd69f4d00438fec0748418c"],["/static/js/9.94318df.js","de9e0eb5cbfc7c4ada0c6da52c1c2a36"],["/static/js/admin.823eac3.js","0d843fac7c511b76183572bc2cb2a187"],["/static/js/manifest.6107f1b.js","ddeb676c666e67b0d98beeb60a0c5d19"],["/static/js/vendor.142392f.js","bebf9e58107b696ade339b3b62daac8a"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







