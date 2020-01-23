module.exports = (api) => {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
                // modules: false
            }
        ]
    ];
    const plugins = [];

    return {
        babelrcRoots: ['.'],
        presets
        // plugins,
        // env: {
        //     test: {
        //         plugins: ['@babel/plugin-transform-modules-commonjs']
        //     }
        // }
    };
};
