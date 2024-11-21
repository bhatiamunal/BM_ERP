const CommonModule = require("../../../common/module");
module.exports = function (CTPAModule) {
    CTPAModule.prototype.readConfig = function (req, res) {
        let configFile  = CommonModule.readFile('config.json')
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
    CTPAModule.prototype.insertAllDataOperation = function (req, res) {
        /*
        {
            "fileName":"inv-category",
            "data":[
                {
                    "category_id": "cat_101",
                    "category_name": "cat1",
                    "category_desc": "this is desc"
                },
                {
                    "category_id": "cat_102",
                    "category_name": "cat2",
                    "category_desc": "this is desc"
                },
                {
                    "category_id": "cat_103",
                    "category_name": "cat3",
                    "category_desc": "this is desc"
                }
            ]
        }
        */
        let rowData = req.body.data;
        let id =-1;
        let updatedData = rowData.map(item => {
            item.id = ++id;
            return item; // Return the item unchanged if the category_id doesn't match
        });
        let resData = CommonModule.addDataToFile(req.body.fileName+'.json',updatedData)
        if(resData.errorCode == 0){
            res.json(resData )
        }
    }
    CTPAModule.prototype.insertOperation = function (req, res) {
        /*
        {
    "fileName":"inv-category",
    "data":[
        {
            "category_id": "cat_104",
            "category_name": "cat4",
            "category_desc": "this is desc"
        },
        {
            "category_id": "cat_105",
            "category_name": "cat5",
            "category_desc": "this is desc"
        },
        {
            "category_id": "cat_106",
            "category_name": "cat6",
            "category_desc": "this is desc"
        }
    ]
}
        */
        let configFile  = CommonModule.readFile(req.body.fileName+'.json')
        if(configFile.errorCode==0){
            let rowData = req.body.data;

           let storeData  = JSON.parse(configFile.data)
           let id = storeData.reduce((max, item) => {
            return item.id > max ? item.id : max;
            }, -Infinity);
           let updatedData = rowData.map(item => {
               item.id = ++id;
               return item; // Return the item unchanged if the category_id doesn't match
           });
           let mergedArray = storeData.concat(updatedData);
           let resData = CommonModule.addDataToFile(req.body.fileName+'.json',mergedArray)
           if(resData.errorCode == 0){
               res.json(resData )
           }
        }
       
    }
    CTPAModule.prototype.deleteOperation = function (req, res) {
        /*
        {
            "fileName":"inv-category",
            "matchingData":{
              "key":"category_desc",
              "value":"cat desc"
            }
        }
            */
        let configFile  = CommonModule.readFile(req.body.fileName+'.json')
        if(configFile.errorCode==0){
           let data  = req.body.matchingData
           let saveData = JSON.parse(configFile.data)
         
           let updatedData = saveData.filter(item => {
                if (item[data.key] != data.value ) {
                   
                    return item;
                }
               
            });

            let resData = CommonModule.addDataToFile(req.body.fileName+'.json',updatedData)
           if(resData.errorCode == 0){
               res.json(resData )
           }

        }
    }
    CTPAModule.prototype.updateOperation = function (req, res) {
        /*
        {
            "fileName":"inv-category",
            "matchingData":{
              "key":"category_desc",
              "object":{
              "category_id":"cat_1",
              "category_name":"cat 1 ",
              "category_desc":"cat4 desc4"}
            }
            
        }
        */
        let configFile  = CommonModule.readFile(req.body.fileName+'.json')
        if(configFile.errorCode==0){
           let data  = req.body.matchingData
           let saveData = JSON.parse(configFile.data)
         
           let updatedData = saveData.map(item => {
                if (item[data.key] === data.object[data.key] ) {
                    data.object.id =item.id
                    return data.object;
                }
                return item; // Return the item unchanged if the category_id doesn't match
            });

            let resData = CommonModule.addDataToFile(req.body.fileName+'.json',updatedData)
           if(resData.errorCode == 0){
               res.json(resData )
           }
    
        }
    }
    CTPAModule.prototype.viewOperation = function (req, res) {
        /*
        {     "fileName":"inv-category"}
        */
        let configFile  = CommonModule.readFile(req.body.fileName+'.json')
        if(configFile.errorCode==0){
           let data  = JSON.parse(configFile.data)
            res.json(data)
        }
       
    }
    CTPAModule.prototype.viewOperationUsingId = function (req, res) {
        /*
        {     "fileName":"inv-category"}
        */
        let configFile  = CommonModule.readFile(req.body.fileName+'.json')
        if(configFile.errorCode==0){
           let data  = JSON.parse(configFile.data)
           let key = req.body.key
           let value = req.body.value
           let updatedData = data.filter(item=>{
            if(item[key]==value){
                return true
            }
           })
            res.json(updatedData)
        }
       
    }
}