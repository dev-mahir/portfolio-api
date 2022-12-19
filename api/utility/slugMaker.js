


/**
 * Slug Maker
 * @param {*} name 
 * @returns slug
 */

export const slugMaker = (name) => { 
    return name.toLowerCase().split(" ").join("_");
}


