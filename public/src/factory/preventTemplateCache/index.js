(function(){
  'use strict';
  
  angular
  .module('angularApp')
  .factory('preventTemplateCache', preventTemplateCache);

  preventTemplateCache.$inject = ['$injector'];

  function preventTemplateCache($injector){
    let ENV = $injector.get('ENV');
    return {
      'request': function(config) {
        if (config.url.indexOf('template') !== -1) {
          config.url = config.url + '?t=' + ENV.SHA;
        }
        return config;
      }
    }
  }
})();