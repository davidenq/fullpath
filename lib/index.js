'use strict';

// Load module
const Fs = require('fs');
const Path = require('path');
const Hoek = require('hoek');

const internals = {};

exports = module.exports = internals;

/*API public*/
internals.Search = function (options) {

    Hoek.assert(this instanceof internals.Search, 'Search must be instantiated usign new');

    this._folderContent = [];
    this._pathFolders = [];
    this._pathFiles = [];
    this._allFiles = null;

    if (options.path === undefined) {
        throw new Error('The folder path should be specified.');
    }

    if (options.dirname === undefined) {
        throw new Error('The main directory name should be specified.');
    }

    if (options.type === undefined) {
        options.type = 'files';
    }

    if (options.allFiles === undefined) {

        this._allFiles = false;
    }

    else {

        this._allFiles = options.allFiles;
    }

    const absolutePath = options.dirname + options.path;
    const nameFolders = Fs.readdirSync(absolutePath);

    nameFolders.forEach((content) => {

        this._folderContent.push(absolutePath + '/' + content);
    });

    searchFolders(this._folderContent[0], this);

    if (options.type === 'folders') {

        return this._pathFolders;

    }

    else if (options.type === 'files') {

        return this._pathFiles;

    }

    return {
        'pathFolders': this._pathFolders,
        'pathFiles': this._pathFiles
    };
};

/*API private*/
const searchFolders = function (pathName, obj) {

    if (obj._folderContent.length) {

        if (Fs.lstatSync(pathName).isDirectory()) {

            const content = Fs.readdirSync(pathName);

            if (content.length) {

                content.forEach((filename) => {

                    obj._folderContent.push(pathName + '/' + filename);
                });
            }

            obj._pathFolders.push(pathName);
            obj._folderContent.shift();

            searchFolders(obj._folderContent[0], obj);
        }

        else {

            if (obj._allFiles) {
                obj._pathFiles.push(pathName);
            }

            else {

                if (~Path.basename(pathName).indexOf('.js') || ~Path.basename(pathName).indexOf('.json')) {

                    obj._pathFiles.push(pathName);
                }
            }

            obj._folderContent.shift();
            searchFolders(obj._folderContent[0], obj);
        }
    }

    return;
};
