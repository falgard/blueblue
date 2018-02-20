const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  entry: {
    auth: './auth/src/auth_lambda.js',
    backup: './backup/src/backup_lambda.js',
    bridge: './bridge/src/bridge_lambda.js',
    'cfn-lambda': './cfn-lambda/src/cfn-lambda.js',
    dashboard: './dashboard/src/dashboard_lambda.js',
    domain: './domain/src/domain_lambda.js',
    event: './event/src/event_lambda.js',
    file: './file/src/file_lambda.js',
    lora: './lora/src/lora-lambda.js',
    manifest: './manifest/src/manifest_lambda.js',
    'mqtt-fn': './mqtt-fn/src/mqtt_fn_lambda.js',
    observation: './observation/src/observation_lambda.js',
    observation_gateway:
      './observation_gateway/src/observation_gateway_lambda.js',
    resource: './resource/src/resource_lambda.js',
    rule: './rule/src/rule_lambda.js',
    rule_action: './rule_action/src/rule_action_lambda.js',
    rule_engine: './rule_engine/src/rule_engine_lambda.js',
    search: './search/src/search_lambda.js',
    search_updater: './search_updater/src/search_updater_lambda.js',
    tcp_proxy: './tcp_proxy/src/tcp_proxy_lambda.js',
    thing: './thing/src/thing_lambda.js',
    thing_batch: './thing_batch/src/thing_batch_lambda.js',
    thing_type: './thing_type/src/thing_type_lambda.js',
    user: './user/src/user_lambda.js'
  },
  output: {
    path: __dirname,
    filename: 'build/services/lib/[name]_lambda.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [nodeExternals({modulesDir: 'node_modules'})],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    node: '6.10'
                  }
                }
              ]
            ],
            plugins: [transformObjectRestSpread]
          }
        }
      }
    ]
  },
  plugins: [new UglifyJSPlugin()]
};
