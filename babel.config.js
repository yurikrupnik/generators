module.exports = function (api) {
    api.cache(true);
    const presets = [
        ['@babel/preset-env', {
            // rootMode: 'upward',
            targets: {
                node: 'current'
            },
            // modules: false,
            // loose: true
        }],
        // ['@babel/preset-react']
    ];
    const plugins = [
        // '@babel/plugin-syntax-object-rest-spread',
        // '@babel/plugin-syntax-dynamic-import',
        // 'react-loadable/babel'
    ];

    return {
        babelrcRoots: [
            '.',
            'packages/*'
        ],
        presets,
        plugins,
        env: {
            test: {
                plugins: [
                    '@babel/plugin-transform-modules-commonjs'
                ]
            }
        }
    };
};
