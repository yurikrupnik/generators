const presets = [['@babel/preset-env', {}]];

module.exports = (api) => {
    api.cache(true);
    return {
        presets
        // plugins: [
        // 'transform-runtime',
        // {
        //     regenerator: true
        // }
        // ]
        // plugins: ['transform-runtime', '@babel/plugin-transform-modules-commonjs']
    };
};
