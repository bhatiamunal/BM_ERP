const CommonModule = require("../../../common/module");
module.exports = function (CTPAModule) {
    CTPAModule.prototype.readConfig = function (req, res) {
        let configFile  = CommonModule.readFile(req.body.fileName)
        if(configFile.errorCode==0){
           let data  = JSON.parse(configFile.data)
           data.header .navbar.forEach(element => {
            if(element.hasOwnProperty("submenu")){
                element.submenu.forEach(element1 => {
                    CommonModule.createFile(`${element1.id}.json`)
                });
            }
            
         });
         res.json(data)
        }
       // let configFile  = JSON.parse(CommonModule.readFile('config.json'))
        
        
    }
    CTPAModule.prototype.insertOperation = function (req, res) {
    }
    CTPAModule.prototype.deleteOperation = function (req, res) {
    }
    CTPAModule.prototype.updateOperation = function (req, res) {
    }
    CTPAModule.prototype.viewOperation = function (req, res) {
        let configFile  = CommonModule.readFile(req.body.fileName)
        if(configFile.errorCode==0){
           let data  = JSON.parse(configFile.data)
            res.json(data)
        }
       
    }
}