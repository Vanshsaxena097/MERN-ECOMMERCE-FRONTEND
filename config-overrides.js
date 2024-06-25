 module.exports=function override(config){
    const fallback =config.resolve.fallback || {};

    Object.assign(fallback,{
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
        "util": require.resolve("util/"),
        "assert": require.resolve("assert/"),
        
        net:false,
        fs:false,



    });
    config.resolve.fallback = fallback;
    return config;


};