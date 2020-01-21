module.exports = (api) => {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                },
                modules: false
            }
        ]
    ];
    const plugins = [
        'transform-runtime',
        {
            regenerator: true
        }
    ];

    return {
        babelrcRoots: ['.', 'packages/**'],
        presets,
        plugins,
        env: {
            test: {
                plugins: ['transform-runtime', '@babel/plugin-transform-modules-commonjs']
            }
        }
    };
};
