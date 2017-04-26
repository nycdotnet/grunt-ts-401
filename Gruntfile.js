module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ['**/*.ts',
                    '!page_fragments/element_types.pfrag.ts',
                    '!node_modules/**/*.ts']
            },
            options: {
                target: "es5",
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};