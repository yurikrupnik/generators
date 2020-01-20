const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current'
            }
            // loose: true,
            // modules: false
        }
    ],
    ['@babel/preset-react']
];
const plugins = ['@babel/plugin-syntax-object-rest-spread'];

module.exports = (api) => {
    api.cache(true);

    return {
        babelrcRoots: [
            '.',
            'packages/*',
            'packages/ui/*',
            'packages/node/*',
            'packages/webservers/*',
            'packages/gateways/*',
            'packages/services/*'
        ],
        presets,
        plugins,
        env: {
            test: {
                plugins: [
                    // "transform-es2015-modules-commonjs"
                ]
            }
        }
    };
};
