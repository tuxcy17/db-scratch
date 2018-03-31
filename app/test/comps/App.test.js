"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("../../src/comps/App");
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(<App_1.App />, div);
});
