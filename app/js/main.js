var App = require('./component/App');

function initApp() {
    require("styles");
    App.run();
}
initApp();

/*
if (module.hot) {
    module.hot.accept(initApp);
}*/
