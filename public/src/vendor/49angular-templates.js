angular.module("templates-main", ["server/dummy.html"]);

angular.module("server/dummy.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("server/dummy.html",
    "");
}]);
