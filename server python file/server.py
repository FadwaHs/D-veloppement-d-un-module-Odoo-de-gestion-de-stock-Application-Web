from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import json
import requests

app = Flask(__name__)
api = Api(app)

CORS(app)

odoo_url = "http://pcvm3-1.instageni.uvm.edu:8069"
data = "{\"jsonrpc\": \"2.0\", \"params\":{\"db\":\"odoo\", \"login\":\"admin\", \"password\":\"admin\"}}"
dataProducts = "{\"jsonrpc\": \"2.0\", \"params\":{}}"
headers = {'Content-Type': 'application/json'}

session_details = requests.post(url=odoo_url + '/web/session/authenticate', data=data, headers=headers)
session_id = str(session_details.cookies.get('session_id'))

cookies = {
# 'username': 'admin',
# 'password': 'admin',
'session_id': session_id
}

# products = requests.post(url=odoo_url + '/get_Products', data=dataProducts, headers=headers, cookies=cookies)
# json_products = json.loads(products.text)

# warehouses = requests.post(url=odoo_url + '/get_ReorderingRules', data=dataProducts, headers=headers, cookies=cookies)
# json_warehouses = json.loads(warehouses.text)

transfers = requests.post(url=odoo_url + '/get_Transfers', data=dataProducts, headers=headers, cookies=cookies)
json_transfers = json.loads(transfers.text)

# Inventory = requests.post(url=odoo_url + '/get_Inventory', data=dataProducts, headers=headers, cookies=cookies)
# json_Inventory = json.loads(Inventory.text)

Scrap = requests.post(url=odoo_url + '/get_Scrap', data=dataProducts, headers=headers, cookies=cookies)
json_Scrap = json.loads(Scrap.text)

Report= requests.post(url=odoo_url + '/get_Report', data=dataProducts, headers=headers, cookies=cookies)
json_Report= json.loads(Report.text)

StockMoves= requests.post(url=odoo_url + '/get_StockMoves', data=dataProducts, headers=headers, cookies=cookies)
json_StockMoves= json.loads(StockMoves.text)

StockMovesDone= requests.post(url=odoo_url + '/get_StockMovesDone', data=dataProducts, headers=headers, cookies=cookies)
json_StockMovesDone= json.loads(StockMovesDone.text)

StockMovesWA= requests.post(url=odoo_url + '/get_StockMovesWA', data=dataProducts, headers=headers, cookies=cookies)
json_StockMovesWA= json.loads(StockMovesWA.text)

StockMovesA= requests.post(url=odoo_url + '/get_StockMovesA', data=dataProducts, headers=headers, cookies=cookies)
json_StockMovesA= json.loads(StockMovesA.text)

StockMovesNew= requests.post(url=odoo_url + '/get_StockMovesNew', data=dataProducts, headers=headers, cookies=cookies)
json_StockMovesNew= json.loads(StockMovesNew.text)

warehouse= requests.post(url=odoo_url + '/get_warehouse', data=dataProducts, headers=headers, cookies=cookies)
json_warehouse= json.loads(warehouse.text)

picking= requests.post(url=odoo_url + '/get_picking', data=dataProducts, headers=headers, cookies=cookies)
json_picking= json.loads(picking.text)

# productcategory= requests.post(url=odoo_url + '/get_productcategory', data=dataProducts, headers=headers, cookies=cookies)
# json_productcategory= json.loads(productcategory.text)

ReportProduct= requests.post(url=odoo_url + '/get_ReportProduct', data=dataProducts, headers=headers, cookies=cookies)
json_ReportProduct= json.loads(ReportProduct.text)

nameproductonetime= requests.post(url=odoo_url + '/get_nameproductonetime', data=dataProducts, headers=headers, cookies=cookies)
json_nameproductonetime= json.loads(nameproductonetime.text)

Reportnegative = requests.post(url=odoo_url + '/get_Reportnegative', data=dataProducts, headers=headers, cookies=cookies)
json_Reportnegative = json.loads(Reportnegative.text)


statistics= requests.post(url=odoo_url + '/get_statistics', data=dataProducts, headers=headers, cookies=cookies)
json_statistics= json.loads(statistics.text)

listOperations=requests.post(url=odoo_url + '/get_pickingId', data=dataProducts, headers=headers, cookies=cookies)
json_listOperations= json.loads(listOperations.text)

numOperationsParMois=requests.post(url=odoo_url + '/get_numOperations', data=dataProducts, headers=headers, cookies=cookies)
json_numOperationsParMois= json.loads(numOperationsParMois.text)

detailsOperation = requests.post(url=odoo_url + '/get_detailsOperation', data=dataProducts, headers=headers, cookies=cookies)
json_detailsOperation = json.loads(detailsOperation.text)


@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

class Employees(Resource):
    def get(self):

        products = requests.post(url=odoo_url + '/get_Products', data=dataProducts, headers=headers, cookies=cookies)
        json_products = json.loads(products.text)

        return json_products


api.add_resource(Employees, '/products') # Route_1

class Employees2(Resource):
    def get(self):

        warehouses = requests.post(url=odoo_url + '/get_ReorderingRules', data=dataProducts, headers=headers, cookies=cookies)
        json_warehouses = json.loads(warehouses.text)

        return json_warehouses   


api.add_resource(Employees2, '/warehouses') # Route_2

class Employees3(Resource):
    def get(self):
        return json_transfers   


api.add_resource(Employees3, '/transfers') # Route_3

class Employees4(Resource):
    def get(self):

        Inventory = requests.post(url=odoo_url + '/get_Inventory', data=dataProducts, headers=headers, cookies=cookies)
        json_Inventory = json.loads(Inventory.text)

        return json_Inventory  


api.add_resource(Employees4, '/Inventory') # Route_4

class Employees5(Resource):
    def get(self):
        return json_Scrap 


api.add_resource(Employees5, '/Scrap') # Route_5

class Employees6(Resource):
    def get(self):
        return json_Report 


api.add_resource(Employees6, '/Report') # Route_6

class Employees7(Resource):
    def get(self):
        return json_StockMoves 


api.add_resource(Employees7, '/StockMoves') # Route_7

class Employees8(Resource):
    def get(self):
        return json_StockMovesDone


api.add_resource(Employees8, '/StockMovesDone') # Route_8

class Employees9(Resource):
    def get(self):
        return json_StockMovesWA


api.add_resource(Employees9, '/StockMovesWA') # Route_9

class Employees10(Resource):
    def get(self):
        return json_StockMovesA


api.add_resource(Employees10, '/StockMovesA') # Route_10

class Employees11(Resource):
    def get(self):
        return json_StockMovesNew


api.add_resource(Employees11, '/StockMovesNew') # Route_11

class Employees12(Resource):
    def get(self):
        return json_warehouse


api.add_resource(Employees12, '/warehouse') # Route_12

class Employees13(Resource):
    def get(self):
        return json_picking


api.add_resource(Employees13, '/picking') # Route_13

class Employees14(Resource):
    def get(self):

        productcategory= requests.post(url=odoo_url + '/get_productcategory', data=dataProducts, headers=headers, cookies=cookies)
        json_productcategory= json.loads(productcategory.text)

        return json_productcategory


api.add_resource(Employees14, '/productcategory') # Route_14

class Employees15(Resource):
    def get(self):
        return json_ReportProduct


api.add_resource(Employees15, '/ReportProduct') # Route_15

class Employees16(Resource):
    def get(self):
        return json_nameproductonetime


api.add_resource(Employees16, '/nameproductonetime') # Route_16

class Employees17(Resource):
    def get(self):
        return json_Reportnegative


api.add_resource(Employees17, '/Reportnegative') # Route_17

class Employees18(Resource):
    def get(self):
        return json_statistics


api.add_resource(Employees18, '/statistics') # Route_18

class Employees19(Resource):
    def get(self):
        return json_listOperations


api.add_resource(Employees19, '/listOperations') # Route_19

class Employees20(Resource):
    def get(self):
        return json_numOperationsParMois


api.add_resource(Employees20, '/OperationsParMois') # Route_20


class Employees21(Resource):
    def get(self):
        return json_detailsOperation


api.add_resource(Employees21, '/DetailsOperation') # Route_21


#Create-Api:

@app.route('/Create_Product', methods=['POST'])
def create_product():

    new_product = request.json['new_product']
    Internal_reference = request.json['Internal_reference']
    barcode = request.json['barcode']
    price = request.json['price']
    cost = request.json['cost']
   

    createapi = "{\"jsonrpc\": \"2.0\", \"params\":{\"namepro\":\"" + new_product + "\", \"ir\":\"" + Internal_reference + "\", \"barcode\":\"" + barcode + "\", \"price\":\"" + price + "\", \"cost\":\"" + cost + "\"}}"
    Create_Product = requests.post(url=odoo_url + '/Create_Product', data=createapi, headers=headers, cookies=cookies)

    print(createapi)
    return createapi + " Well Done !"

@app.route('/Create_Rules', methods=['POST'])
def Create_Rules():

    new_productid = request.json['new_productid']
    minimumqty = request.json['minimumqty']
    maximumqty = request.json['maximumqty']
   

    createapi2 = "{\"jsonrpc\": \"2.0\", \"params\":{\"product\":" + new_productid + ", \"min_qty\":\"" + minimumqty 
    + "\", \"max_qty\":\"" + maximumqty + "\"}}"
    Create_Rules = requests.post(url=odoo_url + '/Create_Rules', data=createapi2, headers=headers, cookies=cookies)

    print(createapi2)
    return createapi2 + " Well Done !"

@app.route('/Create_category', methods=['POST'])
def Create_category():

    new_cat = request.json['new_cat']
    categorie_id= request.json['categorie_id']

   

    createapi3 = "{\"jsonrpc\": \"2.0\", \"params\":{\"namecat\":\"" + new_cat + "\",\"pid\":" + categorie_id + "}}"
    Create_category = requests.post(url=odoo_url + '/Create_category', data=createapi3, headers=headers, cookies=cookies)

    print(createapi3)
    return createapi3 + " Well Done !"   


@app.route('/Create_Inventory', methods=['POST'])
def Create_Inventory():

    new_inv = request.json['new_inv']
    company_id= request.json['company_id']

   

    createapi4 = "{\"jsonrpc\": \"2.0\", \"params\":{\"nameinv\":\"" + new_inv + "\",\"compid\":" + company_id + "}}"
    Create_category = requests.post(url=odoo_url + '/Create_Inventory', data=createapi4, headers=headers, cookies=cookies)

    print(createapi4)
    return createapi4 + " Well Done !" 


if __name__ == '__main__':
     app.run(port=5002)