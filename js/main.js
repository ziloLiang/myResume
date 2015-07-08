require.config({
  baseUrl: "",
  paths: {
    "angular": "js/lib/angular",
    "angular-route": "js/lib/angular-route",
    "jquery": "js/lib/jquery-1.11.1.min",
    "app": "js/app"
  },
  
  shim: {
    "angular":{
        exports:"angular"
    },
    "angular-route":{
        deps: ["angular"]
    }
  },
  
  deps: ["app"]
  
});


