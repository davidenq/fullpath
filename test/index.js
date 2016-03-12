'use strict';

const Code = require('code');
const Lab = require('lab');
const Path = require('path');
const FullPath = require('../lib/index');
//const Hoek = require('hoek');

const lab = exports.lab = Lab.script();
//const beforeEach = lab.beforeEach;
const describe = lab.experiment;
const expect = Code.expect;
const it = lab.test;


describe('Validated all options:', () => {

    describe('result:', () => {

        it('throw error with message "Search must be instantiated usign new" when you dont specified a new instance', (done) => {

            expect(() => {

                FullPath.Search(
                    {
                        'path': '/example',
                        'dirname': __dirname,
                        'type': 'both', //optional
                        'allFiles': true //optional
                    }
                );

            }).to.throw('Search must be instantiated usign new');
            done();
        });

        it('throw error with message "The folder path must be specified." when you dont specified path', (done) => {

            expect(() => {

                new FullPath.Search({
                    'dirname': __dirname,
                    'type': 'both', //optional
                    'allFiles': true //optional
                });

            }).to.throw('The folder path must be specified.');
            done();
        });

        it('throw error with message "The project root name must be specified." when you dont specified dirname', (done) => {

            expect(() => {

                new FullPath.Search({
                    'path': '/example',
                    'type': 'both', //optional
                    'allFiles': true //optional
                });

            }).to.throw('The project root name must be specified.');
            done();
        });

        it('throw error with message "You must specify a validated directory name." when you dont specified dirname name', (done) => {

            expect(() => {

                new FullPath.Search({
                    'path': '',
                    'dirname': __dirname,
                    'type': 'both', //optional
                    'allFiles': true //optional
                });

            }).to.throw('You must specify a validated directory name.');
            done();
        });

        it('throw error with message "You must specify a validated project root name." when you dont specified path name', (done) => {

            expect(() => {

                new FullPath.Search({
                    'path': '/example',
                    'dirname': '',
                    'type': 'both', //optional
                    'allFiles': true //optional
                });

            }).to.throw('You must specify a validated project root name.');
            done();
        });

        it('should be an array with de full path of files when you dont specified type ("folders", "files", "both") and allFiles (true or false)', (done) => {

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname
            });

            expect(fullPaths).to.be.an.array();
            done();
        });
    });
});

describe('There are nested directories and nested files', () => {

    describe('Result',() => {

        it('should be an array when the third parameter is "folders"', (done) => {

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname,
                'type': 'folders'
            });

            expect(fullPaths).to.be.an.array();
            done();
        });

        it('should be an array when the third parameter is "files"', (done) => {

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname,
                'type': 'files'
            });

            expect(fullPaths).to.be.an.array();
            done();
        });

        it('should be an object when the type is "both"', (done) => {

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname,
                'type': 'both'
            });

            expect(fullPaths).to.be.an.object();
            done();
        });

        it('should be an object that contain two nested arrays with key "pathFolder" and "pathFiles" when type is "both"', (done) => {

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname,
                'type': 'both'
            });

            expect(fullPaths.pathFolders).to.be.an.array();
            expect(fullPaths.pathFiles).to.be.an.array();
            done();
        });

        it('should contain full paths of files with any extension when the third parameter is "files" and allFiles is true ', (done) => {

            const result = false;

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname,
                'type': 'files',
                'allFiles': true
            });

            fullPaths.forEach( (paths) => {

                if (~Path.basename(paths).indexOf('.')) {

                    expect(!result).to.be.a.true();
                }
                else {

                    expect(result).to.be.a.true();
                }
            });
            done();
        });

        it('should contain only full paths of files with .js and .json extension when the third parameter is "files" and fourth parameter is false ', (done) => {

            const result = false;

            const fullPaths = new FullPath.Search({
                'path': '/example',
                'dirname': __dirname,
                'type': 'files',
                'allFiles': false
            });

            fullPaths.forEach( (paths) => {

                if (~Path.basename(paths).indexOf('.json') || ~Path.basename(paths).indexOf('.js')) {
                    expect(!result).to.be.a.true();
                }
                else {
                    expect(result).to.be.a.true();
                }
            });

            done();
        });
    });
});
