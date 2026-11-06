module.exports = {
    default: {
        paths: ["features/**/*.feature"],
        require: [
            "step-definitions/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        publishQuiet: true
    }
};