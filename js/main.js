require.config({
  baseUrl: "",
  paths: {
    "angular": "js/lib/angular",
    "angular-route": "js/lib/angular-route",
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


