module.exports = (api) => {
    api.cache(true);
    return {
        env: {
            test: {
                plugins: ['@babel/plugin-transform-modules-commonjs']
            }
        }
    };
};
