const React = require("react")
const Layout = require("./src/components/layout").default
require('animate.css');


require("./src/css/main.css")

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}