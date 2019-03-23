// import ArtsModel from "../models/Arts"
let ArtsModel = require("../models").Arts
const formidable = require('formidable');
const { service, validatorUtil, siteFunc } = require('../../../utils');
const validator = require('validator')
class Arts {
    constructor(){}
    async addArt(req,res,next){
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            try {
                checkFormData(req, res, fields);
            } catch (err) {
                console.log(err.message, err);
                res.send(siteFunc.renderApiErr(req, res, 500, err, 'checkform'));
            }
            
            const artObj = {
                name:'art1',
                uri:'http://www.baidu.com',
                description:'art描述'
            }
            const newArts = new ArtsModel(artObj);
            try {
                await newArts.save();
                res.send(siteFunc.renderApiData(res, 200, 'ads', { id: newArts._id }, 'save'))
            } catch (err) {
                res.send(siteFunc.renderApiErr(req, res, 500, err, 'save'));
            }
        })
       
    }
}
function checkFormData(req, res, fields) {
    let errMsg = '';
    if (fields._id && !siteFunc.checkCurrentId(fields._id)) {
        errMsg = res.__("validate_error_params");
    }
    if (!validator.isLength(fields.name, 2, 15)) {
        errMsg = res.__("validate_rangelength", { min: 2, max: 15, label: res.__("label_ads_name") });
    }
    if (!validator.isLength(fields.comments, 5, 30)) {
        errMsg = res.__("validate_rangelength", { min: 5, max: 30, label: res.__("label_comments") });
    }
    if (errMsg) {
        throw new siteFunc.UserException(errMsg);
    }
}

module.exports = new Arts();