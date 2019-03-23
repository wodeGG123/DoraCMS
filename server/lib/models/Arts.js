/**
 * Created by Administrator on 2017/4/15.
 * 作品管理
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;

var ArtsSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    uri:String,
    name:String,
    description:String
    
});

ArtsSchema.set('toJSON', { getters: true, virtuals: true });
ArtsSchema.set('toObject', { getters: true, virtuals: true });


var Arts = mongoose.model("Arts", ArtsSchema);
module.exports = Arts;

