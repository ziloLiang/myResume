require.config({
  baseUrl: "js/",
  paths: {
    "angular": "lib/angular",
    "angular-route": "lib/angular-route",
    "app": "app"
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


