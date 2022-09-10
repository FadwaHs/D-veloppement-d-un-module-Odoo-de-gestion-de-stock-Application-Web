# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class Inventory(http.Controller):
    @http.route('/get_Products', type='json', auth='user', cors='*')
    def get_Products(self):
        products_rec = request.env['product.template'].search([])
        products = []
        for rec in products_rec:
            vals = {
                'ir': rec.default_code,
                'names': rec.name,
                'sp': rec.list_price,
                'cost': rec.standard_price,
                'types': rec.type,
                'qt': rec.qty_available,
                'img': rec.image_1920,
                'category': rec.categ_id
            }
            products.append(vals)

        product_id = []
        product_id.append(products[0]['category'])
        i = 0
        for rec in products_rec:
            for rec2 in product_id:
                if rec.categ_id == rec2:
                    i = 1
            if i != 1:
                product_id.append(rec.categ_id)
            i = 0

        tableau_category = []
        i = 0
        for rec in product_id:
            for rec2 in products_rec:
                if rec2.categ_id == rec:
                    i = i + 1
            tableau_category.append({"category_pro": rec, "quatity": i})
            i = 0

        product_id = []
        product_id.append(products[0]['types'])
        i = 0
        for rec in products_rec:
            for rec2 in product_id:
                if rec.type == rec2:
                    i = 1
            if i != 1:
                product_id.append(rec.type)
            i = 0

        tableau_types = []
        i = 0
        for rec in product_id:
            for rec2 in products_rec:
                if rec2.type == rec:
                    i = i + 1
            tableau_types.append({"type": rec, "quatity": i})
            i = 0

        print("products list ---->", products)
        data = {'status': 200,
                'listProduct': products,
                'productsCat': tableau_category,
                'productsType': tableau_types,
                'message': 'success'}
        return data

    @http.route('/get_ReorderingRules', type='json', auth='user', cors='*')
    def get_ReorderingRules(self):
        warehouse_rec = request.env['stock.warehouse.orderpoint'].search([])
        warehouses = []
        for rec in warehouse_rec:
            vals = {
                'name': rec.name,
                'pi': rec.product_id,
                'ci': rec.company_id,
                'minq': rec.product_min_qty,
                'maxq': rec.product_max_qty
            }
            warehouses.append(vals)
        print("Reordering Rules list ---->", warehouses)
        data = {'status': 200, 'response': warehouses, 'message': 'success'}
        return data

    @http.route('/get_Transfers', type='json', auth='user', cors='*')
    def get_Transfers(self):
        transfers_rec = request.env['stock.picking'].search([])
        transfers = []
        for rec in transfers_rec:
            vals = {
                'name': rec.name,
                'date': rec.scheduled_date,
                'status': rec.state,
                'priority': rec.priority,
                'partner': rec.partner_id,
                'responsable': rec.user_id,
                'document': rec.origin,
                'backorder': rec.backorder_id,
                'opertaiontype': rec.picking_type_id,
                'company': rec.company_id
            }
            transfers.append(vals)
        print("transfers list ---->", transfers)
        data = {'status': 200, 'response': transfers, 'message': 'success'}
        return data

    @http.route('/get_Inventory', type='json', auth='user', cors='*')
    def get_Inventory(self):
        Inventory_rec = request.env['stock.inventory'].search([])
        Inventory = []
        for rec in Inventory_rec:
            vals = {
                'iv': rec.name,
                'date': rec.date,
                'status': rec.state,
                'ci': rec.company_id,
                'pid': rec.product_ids,
                'quantity': rec.prefill_counted_quantity
            }
            Inventory.append(vals)
        status = []
        status.append(Inventory[0]['status'])
        i = 0
        for rec in Inventory_rec:
            for rec2 in status:
                if rec.state == rec2:
                    i = 1
            if i != 1:
                status.append(rec.state)
            i = 0
        table_status = []
        i = 0
        for rec in status:
            for rec2 in Inventory_rec:
                if rec2.state == rec:
                    i = i + 1
            table_status.append({"status": rec, "quatity": i})
            i = 0

        print("Inventory list ---->", Inventory)
        data = {'status': 200, 'response1': Inventory, 'response2': table_status, 'message': 'success'}
        return data

    @http.route('/get_Scrap', type='json', auth='user', cors='*')
    def get_Scrap(self):
        Scrap_rec = request.env['stock.scrap'].search([])
        Scrap = []
        for rec in Scrap_rec:
            vals = {
                'sr': rec.name,
                'datedone': rec.date_done,
                'status': rec.state,
                'sqty': rec.scrap_qty,
                'pid': rec.product_id,
                'comi': rec.company_id
            }
            Scrap.append(vals)
        products = []
        products.append(Scrap[0]['pid'])
        i = 0
        for rec in Scrap_rec:
            for rec2 in products:
                if rec.product_id == rec2:
                    i = 1
            if i != 1:
                products.append(rec.product_id)
            i = 0
        table_products = []
        i = 0
        for rec in products:
            for rec2 in Scrap_rec:
                if rec2.product_id == rec:
                    i = i + 1
            table_products.append({"products": rec, "quatity": i})
            i = 0
        print("Scrap list ---->", Scrap)
        data = {'status': 200, 'response1': Scrap, 'reponse2': table_products, 'message': 'success'}
        return data

    @http.route('/get_Report', type='json', auth='user', cors='*')
    def get_Report(self):
        Report_rec = request.env['stock.quant'].search([])
        Report = []
        for rec in Report_rec:
            vals = {
                'rsvqty': rec.reserved_quantity,
                'ivnqty': rec.quantity,
                'lci': rec.location_id,
                'pid': rec.product_id,
                'comi': rec.company_id
            }
            Report.append(vals)
        print("Report list ---->", Report)
        data = {'status': 200, 'response': Report, 'message': 'success'}
        return data

    @http.route('/get_Reportnegative', type='json', auth='user', cors='*')
    def get_Reportnegative(self):
        Reportnegative_rec = request.env['stock.quant'].search([])
        Reportnegative = []
        for rec in Reportnegative_rec:
            if rec.quantity < 0:
                vals = {

                    'ivnqty': rec.quantity,
                    'pid': rec.product_id
                }
                Reportnegative.append(vals)
        print("Reports negative product list ---->", Reportnegative)
        data = {'status': 200, 'response': Reportnegative, 'message': 'success'}
        return data

    @http.route('/get_ReportProduct', type='json', auth='user', cors='*')
    def get_ReportProduct(self):
        ReportProduct_rec = request.env['product.template'].search([])
        ReportProduct = []
        for rec in ReportProduct_rec:
            if rec.qty_available > 0:
                vals = {

                    'pid': rec.name,
                    'qt': rec.qty_available,
                }
                ReportProduct.append(vals)
        print("Report list ---->", ReportProduct)
        data = {'status': 200, 'response': ReportProduct, 'message': 'success'}
        return data

    @http.route('/get_StockMoves', type='json', auth='user', cors='*')
    def get_StockMoves(self):
        StockMoves_rec = request.env['stock.move'].search([])
        StockMoves = []
        for rec in StockMoves_rec:
            vals = {
                'date': rec.date,
                'ref': rec.reference,
                'pro': rec.product_id,
                'lo': rec.location_id,
                'lodesr': rec.location_dest_id,
                'proqty': rec.product_uom_qty,
                'pi': rec.picking_type_id,
                'state': rec.state
            }
            StockMoves.append(vals)
        print("StockMoves list ---->", StockMoves)
        data = {'status': 200, 'response': StockMoves, 'message': 'success'}
        return data

    @http.route('/get_StockMovesDone', type='json', auth='user', cors='*')
    def get_StockMovesDone(self):
        StockMovesDone_rec = request.env['stock.move'].search([])
        StockMovesDone = []
        for rec in StockMovesDone_rec:
            if rec.state == 'done':
                vals = {
                    'date': rec.date,
                    'ref': rec.reference,
                    'pro': rec.product_id,
                    'proqty': rec.product_uom_qty,
                    'state': rec.state
                }
                StockMovesDone.append(vals)
        print("StockMoves Done list ---->", StockMovesDone)
        data = {'status': 200, 'response': StockMovesDone, 'message': 'success'}
        return data

    @http.route('/get_StockMovesWA', type='json', auth='user', cors='*')
    def get_StockMovesWA(self):
        StockMovesWA_rec = request.env['stock.move'].search([])
        StockMovesWA = []
        for rec in StockMovesWA_rec:
            if rec.state == 'confirmed':
                vals = {
                    'date': rec.date,
                    'ref': rec.reference,
                    'pro': rec.product_id,
                    'proqty': rec.product_uom_qty,
                    'state': rec.state
                }
                StockMovesWA.append(vals)
        print("StockMoves Waiting Availability list ---->", StockMovesWA)
        data = {'status': 200, 'response': StockMovesWA, 'message': 'success'}
        return data

    @http.route('/get_StockMovesA', type='json', auth='user', cors='*')
    def get_StockMovesA(self):
        StockMovesA_rec = request.env['stock.move'].search([])
        StockMovesA = []
        for rec in StockMovesA_rec:
            if rec.state == 'assigned':
                vals = {
                    'date': rec.date,
                    'ref': rec.reference,
                    'pro': rec.product_id,
                    'proqty': rec.product_uom_qty,
                    'state': rec.state
                }
                StockMovesA.append(vals)
        print("StockMoves Availability list ---->", StockMovesA)
        data = {'status': 200, 'response': StockMovesA, 'message': 'success'}
        return data

    @http.route('/get_StockMovesNew', type='json', auth='user', cors='*')
    def get_StockMovesNew(self):
        StockMovesNew_rec = request.env['stock.move'].search([])
        StockMovesNew = []
        for rec in StockMovesNew_rec:
            if rec.state == 'draft':
                vals = {
                    'date': rec.date,
                    'ref': rec.reference,
                    'pro': rec.product_id,
                    'proqty': rec.product_uom_qty,
                    'state': rec.state
                }
                StockMovesNew.append(vals)
        print("StockMoves New list ---->", StockMovesNew)
        data = {'status': 200, 'response': StockMovesNew, 'message': 'success'}
        return data

    @http.route('/get_warehouse', type='json', auth='user', cors='*')
    def get_warehouse(self):
        warehouse_rec = request.env['stock.warehouse'].search([])
        warehouse = []
        for rec in warehouse_rec:
            vals = {
                'name': rec.name,
                'par': rec.partner_id,
                'com': rec.company_id,
            }
            warehouse.append(vals)
        print(" Warehouses list ---->", warehouse)
        data = {'status': 200, 'response': warehouse, 'message': 'success'}
        return data

    @http.route('/get_picking', type='json', auth='user', cors='*')
    def get_picking(self):
        picking_rec = request.env['stock.picking.type'].search([])
        picking1_rec = request.env['stock.picking.type'].search([])
        picking2_rec = request.env['stock.picking'].search([])
        picking = []

        tableau1 = []
        for rec in picking1_rec:
            tableau1.append(rec)

        tableau2 = []
        for rec in picking2_rec:
            if rec.state == "assigned":
                tableau2.append(rec.picking_type_id)

        tmp = []
        tableau3 = []

        for rec1 in tableau1:
            for rec2 in tableau2:
                if rec1 == rec2:
                    tmp.append(rec2)

            tmp2 = {"typeId": rec1, "quantity": len(tmp)}
            tableau3.append(tmp2)
            tmp = []

        i = 0
        for rec in picking_rec:
            vals = {
                'name': rec.name,
                'sec': rec.sequence_id,
                'com': rec.company_id,
                'type': rec.code,
                'pickingId': rec,
                'quantity': tableau3[i]['quantity']

            }
            picking.append(vals)
            i = i + 1

        print(" Operation Types list ---->", picking)
        data = {'status': 200, 'response': picking, 'message': 'success'}
        return data

    @http.route('/get_productcategory', type='json', auth='user', cors='*')
    def get_productcategory(self):
        productcategory_rec = request.env['product.category'].search([])
        productcategory = []
        for rec in productcategory_rec:
            vals = {
                'name': rec.display_name,
            }
            productcategory.append(vals)
        print(" product category list ---->", productcategory)
        data = {'status': 200, 'response': productcategory, 'message': 'success'}
        return data

    @http.route('/get_statistics', type='json', auth='user', cors='*')
    def get_statistics(self):
        products_rec = request.env['product.template'].search([])
        Scrap_rec = request.env['stock.scrap'].search([])
        transfers_rec = request.env['stock.picking'].search([])
        picking_rec = request.env['stock.picking.type'].search([])
        products = []
        for rec in products_rec:
            vals = {
                'ir': rec.default_code,
            }

            products.append(vals)

        Scrap = []
        for rec in Scrap_rec:
            vals = {
                'sr': rec.name,
            }
            Scrap.append(vals)

        transfers = []
        for rec in transfers_rec:
            vals = {
                'name': rec.name,
            }
            transfers.append(vals)

        picking = []
        for rec in picking_rec:
            vals = {
                'type': rec.code
            }
            picking.append(vals)

        lon_products = len(products)
        lon_scrap = len(Scrap)
        lon_transfers = len(transfers)
        lon_picking = len(picking)

        data = {'status': 200, 'productLength': lon_products,
                'scarplength': lon_scrap,
                'transferslength': lon_transfers,
                'operationlength': lon_picking,
                'pickingtab': picking,
                'message': 'success'}
        return data

    @http.route('/get_numPicking', type='json', auth='user', cors='*')
    def get_numPicking(self):
        picking1_rec = request.env['stock.picking.type'].search([])
        picking2_rec = request.env['stock.picking'].search([])

        tableau1 = []
        for rec in picking1_rec:
            tableau1.append(rec)

        tableau2 = []
        for rec in picking2_rec:
            if rec.state == "assigned":
                tableau2.append(rec.picking_type_id)

        tmp = []
        tableau3 = []

        for rec1 in tableau1:
            for rec2 in tableau2:
                if rec1 == rec2:
                    tmp.append(rec2)

            tmp2 = {"typeId": rec1, "quantity": len(tmp)}
            tableau3.append(tmp2)
            tmp = []

        print(" Operation Types list ---->", tableau3)
        data = {'status': 200, 'response1': tableau3, 'message': 'success'}
        return data

    @http.route('/get_pickingId', type='json', auth='user', cors='*')
    def get_pickingId(self):
        picking1_rec = request.env['stock.picking.type'].search([])
        picking2_rec = request.env['stock.picking'].search([])
        picking = []
        tableau1 = []
        for rec in picking1_rec:
            tableau1.append(rec)

        tableau2 = []
        for rec in picking2_rec:
            tableau2.append(rec.picking_type_id)

        tmp = []
        tableau3 = []

        for rec1 in tableau1:
            for rec2 in tableau2:
                if rec1 == rec2:
                    tmp.append(rec2)

            tmp2 = {"typeId": rec1, "quantity": len(tmp)}
            tableau3.append(tmp2)
            tmp = []

        print("StockMoves list ---->", tableau3)
        data = {'status': 200, 'response': tableau3, 'message': 'success'}
        return data

    @http.route('/get_numOperations', type='json', auth='user', cors='*')
    def get_numOperations(self):
        picking1_rec = request.env['stock.picking'].search([])
        picking_rec = request.env['stock.picking.type'].search([])

        tableau1 = []
        tableau2 = []
        for rec in picking1_rec:
            vals = {
                'opertaiontype': rec.picking_type_id,
                "date": rec.scheduled_date
            }
            tableau1.append(vals)
        i = 0
        for rec in picking_rec:
            for rec1 in picking1_rec:
                if rec1.picking_type_id == rec:
                    tableau2.append({'type': rec.code,
                                     'operationId': rec1.picking_type_id,
                                     'date': rec1.scheduled_date})

        print(" Operation Types list ---->", tableau1)
        data = {'status': 200, 'response1': tableau2, 'message': 'success'}
        return data

    @http.route('/get_detailsOperation', type='json', auth='user', cors='*')
    def get_detailsOperation(self):
        picking1_rec = request.env['stock.picking'].search([])
        picking2_rec = request.env['stock.move'].search([])

        tableau1 = []
        tableau2 = []
        i = 0
        for rec2 in picking1_rec:
            for rec in picking2_rec:
                if rec.reference == rec2.name:
                    i = i + 1
                    vals1 = {
                        'name_product': rec.product_id,
                        'quantity': rec.product_uom_qty,
                        'date_product': rec.date,
                        'nameOp': rec2.name,
                        'date_Op': rec2.scheduled_date,
                        'origin': rec2.origin,
                        'typeOp': rec2.picking_type_id,
                        'contact': rec2.partner_id,
                        'desc': rec.description_picking,
                        'note': rec2.note,
                        'priority': rec2.priority,
                        'resp': rec2.user_id,
                        'group': rec2.group_id
                    }
                    tableau1.append(vals1)

        print(" Operation Types list ---->", tableau1)
        data = {'status': 200, 'response1': tableau1, 'message': 'success'}
        return data


    @http.route('/get_nameproductonetime', type='json', auth='user', cors='*')
    def get_nameproductonetime(self):
        Tabl1 = request.env['stock.move'].search([])
        tab2 = []
        for rec in Tabl1:
            tab2.append(rec.product_id)
        i = 0
        tab3 = []
        tab3.append(tab2[0])
        for rec2 in tab2:
            for rec3 in tab3:
                if rec2 == rec3:
                    i = 1
            if i != 1:
                tab3.append(rec2)
            i = 0
        print(" product name one time ---->", tab3)
        data = {'status': 200, 'response': tab3, 'message': 'success'}
        return data

    @http.route('/Create_Product', type='json', auth='user', cors='*')
    def Create_Product(self, **rec):
        if request.jsonrequest:
            print('rec', rec)
            if rec['namepro']:
                vals = {
                    'name': rec['namepro'],
                    'default_code': rec['ir'],
                    'barcode': rec['barcode'],
                    'list_price': rec['price'],
                    'standard_price': rec['cost']
                }
                new_product = request.env['product.template'].sudo().create(vals)
                print(" new product is  ---->", new_product)
        data = {'status': 200, 'response': new_product.id, 'message': 'success'}
        return data

    @http.route('/Create_Rules', type='json', auth='user', cors='*')
    def Create_Rules(self, **rec):
        if request.jsonrequest:
            print('rec', rec)
            if rec['product']:
                vals = {
                    'product_id': rec['product'],
                    'product_min_qty': rec['min_qty'],
                    'product_max_qty': rec['max_qty']
                }
                new_Rules = request.env['stock.warehouse.orderpoint'].sudo().create(vals)
                print(" new Rules is  ---->", new_Rules)
        data = {'status': 200, 'response': new_Rules.id, 'message': 'success'}
        return data

    @http.route('/Create_category', type='json', auth='user', cors='*')
    def Create_category(self, **rec):
        if request.jsonrequest:
            print('rec', rec)
            if rec['namecat']:
                vals = {
                    'name': rec['namecat'],
                    'parent_id': rec['pid'],
                }
                new_category = request.env['product.category'].sudo().create(vals)
                print(" new category is  ---->",new_category)
        data = {'status': 200, 'response': new_category.id, 'message': 'success'}
        return data

    @http.route('/Create_Inventory', type='json', auth='user', cors='*')
    def Create_Inventory(self, **rec):
        if request.jsonrequest:
            print('rec', rec)
            if rec['nameinv']:
                vals = {
                    'name': rec['nameinv'],
                    'company_id' : rec['compid']
                }
                new_Inventory = request.env['stock.inventory'].sudo().create(vals)
                print(" new Inventory is  ---->", new_Inventory)
        data = {'status': 200, 'response': new_Inventory.id, 'message': 'success'}
        return data


